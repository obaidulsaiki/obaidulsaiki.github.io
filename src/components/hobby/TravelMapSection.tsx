'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Globe2,
  Filter,
  Search,
  Plane,
  Plus,
  Minus,
  Compass,
  Hand,
  LocateFixed,
  Loader2,
} from 'lucide-react';
import { bangladeshWorldDistricts } from '@/data/bangladeshWorldDistricts';
import { worldCountries, WorldCountry } from '@/data/worldCountries';
import {
  worldMapSvgPath,
  worldBordersSvgPath,
  divisionBordersSvgPath,
  neighborCountriesSvgPaths,
  palestineSvgPath,
  divisionSummaries,
  travelStats,
} from '@/data/travelData';

// 16:9 Aspect Ratio Constants
// World View: center cx=500, cy=250, width 1000, height 562.500
const WORLD_VB: [number, number, number, number] = [0, -31.250, 1000, 562.500];

// Bangladesh Prominent View: center cx=750.945, cy=184.210, width 34.000, height 19.125
// Bangladesh takes up ~85.5% of canvas height - prominent, large, and commanding
const DEFAULT_BD_VB: [number, number, number, number] = [733.945, 174.648, 34.000, 19.125];

// Surrounding Country & Ocean Labels (Clean, subtle, pure English)
const REGIONAL_LABELS = [
  { name: 'INDIA', sub: 'WEST BENGAL', x: 740.0, y: 184.0 },
  { name: 'INDIA', sub: 'ASSAM', x: 760.5, y: 180.5 },
  { name: 'NEPAL', sub: '', x: 736.5, y: 174.0 },
  { name: 'BHUTAN', sub: '', x: 751.0, y: 173.8 },
  { name: 'MYANMAR', sub: '', x: 764.0, y: 188.5 },
  { name: 'BAY OF BENGAL', sub: '', x: 746.0, y: 193.5, isWater: true },
];

export default function TravelMapSection() {
  const [selectedDivision, setSelectedDivision] = useState<string>('All');
  const [hoveredDistrict, setHoveredDistrict] = useState<typeof bangladeshWorldDistricts[0] | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<WorldCountry | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCloseUp, setIsCloseUp] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [userLocation, setUserLocation] = useState<{ x: number; y: number; lat: number; lon: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationMessage, setLocationMessage] = useState<string | null>(null);

  // High-performance direct DOM references for 60fps smooth pan & zoom
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const beaconRef = useRef<SVGGElement | null>(null);
  const territoryGlowRef = useRef<SVGRectElement | null>(null);
  const currentVbRef = useRef<[number, number, number, number]>([...WORLD_VB]);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);
  const zoomTimerRef = useRef<NodeJS.Timeout | null>(null);
  const locationMsgTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasTriggeredRef = useRef(false);

  // Directly update SVG viewBox attribute on the DOM node (bypasses React re-renders for buttery 60fps)
  const applyViewBox = useCallback((vb: [number, number, number, number]) => {
    currentVbRef.current = vb;
    if (svgRef.current) {
      svgRef.current.setAttribute(
        'viewBox',
        `${vb[0].toFixed(3)} ${vb[1].toFixed(3)} ${vb[2].toFixed(3)} ${vb[3].toFixed(3)}`
      );
    }

    // Dynamic shrink to Dhaka during camera zoom:
    // curW goes from 1000 (World) down to 34 (Bangladesh)
    const curW = vb[2];
    const clampedW = Math.max(34, Math.min(1000, curW));
    const s = Math.log(1000 / clampedW) / Math.log(1000 / 34);

    // Shrinks monotonically and smoothly on screen down to 0 at Dhaka (750.571, 183.925)
    const initialScreenRadius = 24.0;
    const screenRadius = initialScreenRadius * Math.pow(1 - s, 1.2);
    const svgScale = (screenRadius * (curW / 1000)) / initialScreenRadius;
    const opacity = Math.pow(1 - s, 1.1);

    if (beaconRef.current) {
      if (s >= 0.99) {
        beaconRef.current.style.display = 'none';
      } else {
        beaconRef.current.style.display = '';
        beaconRef.current.setAttribute(
          'transform',
          `translate(750.571, 183.925) scale(${svgScale.toFixed(5)})`
        );
        beaconRef.current.style.opacity = opacity.toFixed(4);
      }
    }

    if (territoryGlowRef.current) {
      if (s >= 0.99) {
        territoryGlowRef.current.style.display = 'none';
      } else {
        territoryGlowRef.current.style.display = '';
        territoryGlowRef.current.style.opacity = (opacity * 0.55).toFixed(4);
      }
    }
  }, []);

  // Strict canvas boundary clamping:
  // Map dimensions: width 1000.0000, height 500.0000, 16:9 canvas visible height 562.5000 (y from -31.2500 to 531.2500).
  // When in full World View (w >= 995.0000), viewport is hard-locked to WORLD_VB.
  // When zoomed in, panning is clamped so the view never drifts into empty void.
  const clampViewBox = useCallback((x: number, y: number, w: number, h: number): [number, number, number, number] => {
    const clampedW = Math.max(10.0000, Math.min(1000.0000, w));
    const clampedH = clampedW * (9 / 16);
    if (clampedW >= 995.0000) {
      return [0.0000, -31.2500, 1000.0000, 562.5000];
    }
    const minX = 0.0000;
    const maxX = Math.max(0.0000, 1000.0000 - clampedW);
    const minY = -31.2500;
    const maxY = Math.max(-31.2500, 531.2500 - clampedH);
    const clampedX = Math.max(minX, Math.min(maxX, x));
    const clampedY = Math.max(minY, Math.min(maxY, y));
    return [clampedX, clampedY, clampedW, clampedH];
  }, []);

  // Smooth Van Wijk logarithmic camera flight (60fps native GPU composite, 0 React re-renders during flight)
  const animateCamera = useCallback(
    (from: [number, number, number, number], to: [number, number, number, number], duration = 2400, onDone?: () => void) => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }

      const startTime = performance.now();
      const [fromX, fromY, fromW, fromH] = from;
      const [toX, toY, toW, toH] = to;

      const fromCx = fromX + fromW / 2;
      const fromCy = fromY + fromH / 2;
      const toCx = toX + toW / 2;
      const toCy = toY + toH / 2;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);

        // Smooth cubic bezier easing
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        // Exponential scale interpolation ensures constant optical zoom speed
        const curW = fromW * Math.pow(toW / fromW, ease);
        const curH = fromH * Math.pow(toH / fromH, ease);

        // Screen-space camera center interpolation ensures Bangladesh stays smoothly centered and NEVER leaves the screen
        let curCx: number;
        let curCy: number;
        if (toW < fromW) {
          // Zoom in: keep destination Bangladesh smoothly gliding to screen center
          curCx = toCx - ((toCx - fromCx) / fromW) * (1 - ease) * curW;
          curCy = toCy - ((toCy - fromCy) / fromH) * (1 - ease) * curH;
        } else {
          // Zoom out: keep origin Bangladesh smoothly expanding from screen center
          curCx = fromCx + ((toCx - fromCx) / toW) * ease * curW;
          curCy = fromCy + ((toCy - fromCy) / toH) * ease * curH;
        }

        const curX = curCx - curW / 2;
        const curY = curCy - curH / 2;

        applyViewBox([curX, curY, curW, curH]);

        if (t < 1) {
          animFrameRef.current = requestAnimationFrame(tick);
        } else {
          applyViewBox(to);
          setIsCloseUp(toW < 100);
          if (onDone) onDone();
        }
      };

      animFrameRef.current = requestAnimationFrame(tick);
    },
    [applyViewBox]
  );

  // Automatic guided zoom on page mount
  useEffect(() => {
    // Initial mount: set initial world view on the SVG directly
    applyViewBox(WORLD_VB);

    if (!hasTriggeredRef.current) {
      zoomTimerRef.current = setTimeout(() => {
        hasTriggeredRef.current = true;
        animateCamera(WORLD_VB, DEFAULT_BD_VB, 2400);
      }, 850);
    }

    return () => {
      if (zoomTimerRef.current) clearTimeout(zoomTimerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (locationMsgTimerRef.current) clearTimeout(locationMsgTimerRef.current);
    };
  }, [animateCamera, applyViewBox]);

  const showLocationMsg = (msg: string) => {
    setLocationMessage(msg);
    if (locationMsgTimerRef.current) clearTimeout(locationMsgTimerRef.current);
    locationMsgTimerRef.current = setTimeout(() => setLocationMessage(null), 3500);
  };

  // Move to Location: Geolocation API with graceful fallback to Dhaka, Bangladesh
  const moveToLocation = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      showLocationMsg('Geolocation not supported by browser');
      return;
    }

    setIsLocating(true);
    showLocationMsg('Detecting location...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const targetX = 500 + (longitude * 1000) / 360;
        const targetY = 250 - (latitude * 1000) / 360;

        setUserLocation({ x: targetX, y: targetY, lat: latitude, lon: longitude });
        setIsLocating(false);

        // Smoothly zoom in to the detected location
        const isNearBangladesh = targetX >= 740 && targetX <= 760 && targetY >= 170 && targetY <= 195;
        const targetW = isNearBangladesh ? 16.0000 : 34.0000;
        const targetH = targetW * (9 / 16);
        const nextX = targetX - targetW / 2;
        const nextY = targetY - targetH / 2;

        const targetVb = clampViewBox(nextX, nextY, targetW, targetH);
        animateCamera(currentVbRef.current, targetVb, 1200);
        setIsCloseUp(targetVb[2] < 995.0000);
        showLocationMsg(`Moved to ${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°`);
      },
      (error) => {
        setIsLocating(false);
        // Fallback gracefully: if location denied or failed, center on Dhaka
        const dhakaX = 750.571;
        const dhakaY = 183.925;
        setUserLocation({ x: dhakaX, y: dhakaY, lat: 23.8103, lon: 90.4125 });
        const targetW = 24.0000;
        const targetH = targetW * (9 / 16);
        const nextX = dhakaX - targetW / 2;
        const nextY = dhakaY - targetH / 2;
        const targetVb = clampViewBox(nextX, nextY, targetW, targetH);
        animateCamera(currentVbRef.current, targetVb, 1200);
        setIsCloseUp(true);

        if (error.code === error.PERMISSION_DENIED) {
          showLocationMsg('Permission denied. Centered on Dhaka, Bangladesh');
        } else {
          showLocationMsg('Location unavailable. Centered on Dhaka, Bangladesh');
        }
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    );
  };

  const resetView = () => {
    animateCamera(currentVbRef.current, DEFAULT_BD_VB, 800);
  };

  // High-performance pointer drag handler (zero React state updates during drag for 60fps)
  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    // Hard Lock in World View: do not allow dragging the map out of the canvas/frame
    if (currentVbRef.current[2] >= 995.0000) return;
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    dragStartRef.current = { x: e.clientX, y: e.clientY };

    const svgRect = svgRef.current?.getBoundingClientRect();
    if (!svgRect) return;

    const [vx, vy, vw, vh] = currentVbRef.current;
    const svgDx = -(dx / svgRect.width) * vw;
    const svgDy = -(dy / svgRect.height) * vh;

    applyViewBox(clampViewBox(vx + svgDx, vy + svgDy, vw, vh));
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Interactive Zoom buttons
  const stepZoom = (factor: number) => {
    const [vx, vy, vw, vh] = currentVbRef.current;
    const nextW = Math.max(10.0000, Math.min(1000.0000, vw * factor));
    const nextH = nextW * (9 / 16);
    const nextX = vx + (vw - nextW) / 2;
    const nextY = vy + (vh - nextH) / 2;
    const targetVb = clampViewBox(nextX, nextY, nextW, nextH);
    animateCamera(currentVbRef.current, targetVb, 350);
  };

  // Option 1: Direct Cursor-Anchored Wheel Zoom with native non-passive listener
  // Using native { passive: false } listener completely blocks Chrome's native browser zoom & page scroll
  useEffect(() => {
    const container = mapContainerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault();

      const [vx, vy, vw, vh] = currentVbRef.current;
      const zoomFactor = e.deltaY < 0 ? 0.8800 : 1.1400;
      const nextW = Math.max(10.0000, Math.min(1000.0000, vw * zoomFactor));
      const nextH = nextW * (9 / 16);

      // Cursor-anchored zooming (zooms toward mouse pointer location)
      let svgX = vx + vw / 2;
      let svgY = vy + vh / 2;

      try {
        const ctm = svg.getScreenCTM();
        if (ctm) {
          const pt = svg.createSVGPoint();
          pt.x = e.clientX;
          pt.y = e.clientY;
          const transformed = pt.matrixTransform(ctm.inverse());
          if (Number.isFinite(transformed.x) && Number.isFinite(transformed.y)) {
            svgX = transformed.x;
            svgY = transformed.y;
          }
        }
      } catch {
        // Fallback to center
      }

      const ratioX = (svgX - vx) / vw;
      const ratioY = (svgY - vy) / vh;

      const nextX = svgX - ratioX * nextW;
      const nextY = svgY - ratioY * nextH;

      const targetVb = clampViewBox(nextX, nextY, nextW, nextH);
      applyViewBox(targetVb);
      setIsCloseUp(targetVb[2] < 995.0000);
    };

    container.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleNativeWheel);
    };
  }, [applyViewBox, clampViewBox]);

  // Filter districts based on selected division and search query
  const filteredDistricts = bangladeshWorldDistricts.filter((d) => {
    const matchesDivision =
      selectedDivision === 'All' || d.division.toLowerCase() === selectedDivision.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === '' ||
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.nameBn.includes(searchQuery);
    return matchesDivision && matchesSearch;
  });

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* 1. Main Travel Map Card (Pure English with GoZayaan Layout Parity) */}
      <section className="p-5 sm:p-7 rounded-[2rem] bg-[#F8F6F0] border border-[#E8E2D5] shadow-soft-lg space-y-4 overflow-hidden relative transition-colors">
        {/* Top Header: Title & Total Explored Score (34 / 64) */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-xs sm:text-sm font-semibold text-stone-500 tracking-wider uppercase">
              Bangladesh Travel Map
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
              I Travelled
            </h2>
          </div>

          {/* Large Highlighted Score: 34 / 64 */}
          <div className="text-right shrink-0">
            <span className="text-3xl sm:text-5xl font-black text-[#006A4E] tracking-tight">
              34
            </span>
            <span className="text-base sm:text-xl font-bold text-stone-400 ml-1">
              / 64
            </span>
          </div>
        </div>

        {/* 2. Unified High-Performance Map Canvas (Direct DOM 60fps Pan & Zoom) */}
        <div
          ref={mapContainerRef}
          className="relative w-full aspect-[16/9] max-h-[460px] rounded-2xl bg-[#E8EFF5] overflow-hidden flex items-center justify-center select-none shadow-inner border border-[#D5E0E8]"
        >
          <svg
            ref={svgRef}
            viewBox="0 -31.250 1000 562.500"
            preserveAspectRatio="xMidYMid meet"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={() => {
              setHoveredCountry(null);
              setHoveredDistrict(null);
            }}
            className={`w-full h-full drop-shadow-sm touch-none will-change-transform ${
              isDragging ? 'cursor-grabbing' : (isCloseUp ? 'cursor-grab' : 'cursor-default')
            }`}
          >
            <defs>
              {/* International boundary clip path: strictly restricts glow to within Bangladesh borders */}
              <clipPath id="bangladesh-clip">
                {bangladeshWorldDistricts.map((d) => (
                  <path key={`clip-${d.id}`} d={d.path} />
                ))}
              </clipPath>

              {/* Radiant emerald glow radiating outwards from Dhaka across Bangladesh */}
              <radialGradient id="dhaka-glow-gradient" cx="750.571" cy="183.925" r="9.0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34D399" stopOpacity="1.0" />
                <stop offset="35%" stopColor="#10B981" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#059669" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0.2" />
              </radialGradient>
            </defs>

            {/* Layer 0: Oceanic Water Background (Bay of Bengal & Global Oceans) */}
            <rect
              x="-500"
              y="-500"
              width="2000"
              height="1500"
              fill="#E8EFF5"
              onPointerEnter={() => {
                setHoveredCountry(null);
                setHoveredDistrict(null);
              }}
              onPointerOver={() => {
                setHoveredCountry(null);
                setHoveredDistrict(null);
              }}
              onMouseEnter={() => {
                setHoveredCountry(null);
                setHoveredDistrict(null);
              }}
              onMouseOver={() => {
                setHoveredCountry(null);
                setHoveredDistrict(null);
              }}
            />

            {/* Layer 1: All 240+ Individual World Countries (Interactive Hover & Subtle Accent Highlight) */}
            <g id="world-countries-layer">
              {worldCountries.map((country) => {
                const isHovered = hoveredCountry?.id === country.id;
                const handleEnter = () => {
                  if (country.id !== '050') {
                    setHoveredCountry(country);
                  }
                };
                return (
                  <path
                    key={country.id}
                    data-country-id={country.id}
                    data-country-name={country.name}
                    d={country.path}
                    fill={isHovered ? '#D5C8B4' : '#E2DACB'}
                    stroke="none"
                    onPointerEnter={handleEnter}
                    onPointerOver={handleEnter}
                    onMouseEnter={handleEnter}
                    onMouseOver={handleEnter}
                    onPointerLeave={() => setHoveredCountry((prev) => (prev?.id === country.id ? null : prev))}
                    onMouseLeave={() => setHoveredCountry((prev) => (prev?.id === country.id ? null : prev))}
                    className="transition-colors duration-150 cursor-pointer"
                  />
                );
              })}
            </g>

            {/* Layer 2: Global Country Borders Mesh (Crisp solid international borders for all 200+ nations) */}
            <path
              d={worldBordersSvgPath}
              fill="none"
              stroke="#8A7B68"
              strokeWidth="0.08"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              pointerEvents="none"
              className="transition-colors"
            />

            {/* Layer 4: Surrounding Country & Ocean Text Labels (Subtle, clean, non-intrusive) */}
            <g
              id="regional-labels"
              className="select-none pointer-events-none"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {REGIONAL_LABELS.map((item, idx) => (
                <g key={idx} textAnchor="middle">
                  <text
                    x={item.x}
                    y={item.y}
                    fontSize={item.isWater ? '0.75px' : '0.55px'}
                    fontWeight="700"
                    fontStyle={item.isWater ? 'italic' : 'normal'}
                    letterSpacing={item.isWater ? '0.12px' : '0.08px'}
                    fill={item.isWater ? '#5B7E93' : '#756754'}
                    opacity={item.isWater ? 0.9 : 0.85}
                  >
                    {item.name}
                  </text>
                  {item.sub && (
                    <text
                      x={item.x}
                      y={item.y + 0.6}
                      fontSize="0.34px"
                      fontWeight="600"
                      fill="#8C7D68"
                      opacity={0.8}
                    >
                      {item.sub}
                    </text>
                  )}
                </g>
              ))}
            </g>

            {/* Layer 5: All 64 Districts of Bangladesh */}
            <g id="bangladesh-districts-world">
              {bangladeshWorldDistricts.map((district) => {
                const isMatch = filteredDistricts.some((d) => d.id === district.id);
                const isHovered = hoveredDistrict?.id === district.id;

                // Visited districts are forest green (#006A4E), unvisited are warm beige (#ECE5D8)
                let fillColor = district.isVisited ? '#006A4E' : '#ECE5D8';
                let strokeColor = '#FFFFFF';
                let strokeWidth = '0.035';

                if (isHovered) {
                  fillColor = district.isVisited ? '#047857' : '#DED5C4';
                  strokeColor = '#F59E0B';
                  strokeWidth = '0.07';
                } else if (!isMatch) {
                  fillColor = '#F3EEE5';
                  strokeColor = '#E2D9CC';
                }

                return (
                  <path
                    key={district.id}
                    d={district.path}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    vectorEffect="non-scaling-stroke"
                    strokeLinejoin="round"
                    onPointerEnter={() => {
                      setHoveredDistrict(district);
                      setHoveredCountry(null);
                    }}
                    onPointerOver={() => {
                      setHoveredDistrict(district);
                      setHoveredCountry(null);
                    }}
                    onMouseEnter={() => {
                      setHoveredDistrict(district);
                      setHoveredCountry(null);
                    }}
                    onMouseOver={() => {
                      setHoveredDistrict(district);
                      setHoveredCountry(null);
                    }}
                    onPointerLeave={() => setHoveredDistrict((prev) => (prev?.id === district.id ? null : prev))}
                    onMouseLeave={() => setHoveredDistrict((prev) => (prev?.id === district.id ? null : prev))}
                    className="transition-colors duration-150 cursor-pointer"
                  />
                );
              })}
            </g>

            {/* Layer 6: Clean White Division Boundaries (Clearly separating the 8 divisions without text clutter) */}
            <path
              d={divisionBordersSvgPath}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.09"
              strokeLinecap="round"
              strokeLinejoin="round"
              pointerEvents="none"
              className="drop-shadow-sm opacity-95"
            />

            {/* Layer 7: World-View Bangladesh Glow & Shrink-to-Dhaka Beacon (100% boundary-contained) */}
            <g id="bangladesh-glow-layer" pointerEvents="none">
              {/* 7A: Territory radiant glow strictly clipped to Bangladesh - illuminates Bangladesh in World View */}
              <g clipPath="url(#bangladesh-clip)">
                <rect
                  ref={territoryGlowRef}
                  x="740"
                  y="170"
                  width="25"
                  height="30"
                  fill="url(#dhaka-glow-gradient)"
                  opacity="0.55"
                />
              </g>

              {/* 7B: Pulsing Target Beacon anchored at Dhaka (750.571, 183.925), clipped to Bangladesh */}
              <g clipPath="url(#bangladesh-clip)">
                <g
                  ref={beaconRef}
                  transform="translate(750.571, 183.925) scale(1)"
                  className="will-change-transform"
                >
                  {/* Outer radiant glow ring (covers Bangladesh in World View, shrinks to Dhaka) */}
                  <circle r="12.0" fill="url(#dhaka-glow-gradient)" opacity="0.65" />
                  <circle r="7.5" fill="#34D399" opacity="0.5" className="animate-pulse" />
                  {/* Mid radiant ring */}
                  <circle r="4.2" fill="#10B981" opacity="0.75" />
                  {/* Inner radiant halo */}
                  <circle r="2.2" fill="#059669" opacity="0.9" />
                  {/* Dhaka bright core */}
                  <circle r="1.1" fill="#FFFFFF" opacity="0.95" />
                  <circle r="0.6" fill="#EF4444" />
                </g>
              </g>
            </g>

            {/* Layer 8: Visited District Red Location Pins (With White Border) */}
            <g id="visited-district-pins" pointerEvents="none">
              {bangladeshWorldDistricts
                .filter((d) => d.isVisited && filteredDistricts.some((fd) => fd.id === d.id))
                .map((district) => {
                  const isHovered = hoveredDistrict?.id === district.id;
                  const { x, y } = district.centroid;

                  return (
                    <g key={`pin-${district.id}`} transform={`translate(${x}, ${y})`}>
                      <circle
                        r={isHovered ? 0.22 : 0.13}
                        fill="#EF4444"
                        stroke="#FFFFFF"
                        strokeWidth="0.03"
                        className="drop-shadow-sm transition-all"
                      />
                    </g>
                  );
                })}
            </g>

            {/* Layer 9: Live User Location Pin & Pulsing Radar Wave */}
            {userLocation && (
              <g id="user-location-marker" transform={`translate(${userLocation.x}, ${userLocation.y})`}>
                <circle r="1.4" fill="#3B82F6" opacity="0.35" className="animate-ping" />
                <circle r="0.7" fill="#3B82F6" opacity="0.45" />
                <circle
                  r="0.3"
                  fill="#2563EB"
                  stroke="#FFFFFF"
                  strokeWidth="0.08"
                  className="drop-shadow-md"
                />
              </g>
            )}
          </svg>

          {/* Floating On-Map Zoom & Pan Toolbar */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
            <button
              type="button"
              onClick={() => stepZoom(0.75)}
              title="Zoom In (or Scroll to Zoom)"
              className="w-8 h-8 rounded-xl bg-white/90 hover:bg-white text-stone-700 shadow-md border border-[#E8E2D5] flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => stepZoom(1.33)}
              title="Zoom Out (or Scroll to Zoom)"
              className="w-8 h-8 rounded-xl bg-white/90 hover:bg-white text-stone-700 shadow-md border border-[#E8E2D5] flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={resetView}
              title="Reset to Bangladesh"
              className="w-8 h-8 rounded-xl bg-white/90 hover:bg-white text-stone-700 shadow-md border border-[#E8E2D5] flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
            >
              <Compass className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Drag Hint Pill */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-stone-900/70 text-white/90 text-[10px] font-medium backdrop-blur-sm pointer-events-none flex items-center gap-1.5 shadow-sm">
            <Hand className="w-3 h-3 text-emerald-400" />
            <span>{isCloseUp ? 'Drag to Pan • Scroll to Zoom' : 'World Locked • Scroll to Zoom'}</span>
          </div>

          {/* Location Status Notification Toast */}
          <AnimatePresence>
            {locationMessage && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-stone-900/85 backdrop-blur-md text-white text-xs font-semibold shadow-lg pointer-events-none z-30 flex items-center gap-2"
              >
                <LocateFixed className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{locationMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Hover Tooltip (100% Pure English) */}
          <AnimatePresence>
            {hoveredDistrict ? (
              <motion.div
                key="active-tooltip-district"
                initial={{ opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute top-3 right-3 min-w-[180px] max-w-xs p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D5] shadow-soft-lg space-y-1 z-20 pointer-events-none"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#006A4E]" />
                    <span>{hoveredDistrict.name}</span>
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      hoveredDistrict.isVisited
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {hoveredDistrict.isVisited ? 'Visited' : 'Unvisited'}
                  </span>
                </div>

                <div className="text-[11px] text-stone-600">
                  <span className="font-semibold text-stone-700">{hoveredDistrict.division}</span> Division
                </div>

                <div className="text-[10px] text-stone-400 pt-0.5 flex items-center justify-between">
                  <span>Coord: {hoveredDistrict.centroid.x.toFixed(2)}, {hoveredDistrict.centroid.y.toFixed(2)}</span>
                  <span>{hoveredDistrict.isVisited ? 'Explored' : 'Yet to visit'}</span>
                </div>
              </motion.div>
            ) : hoveredCountry && hoveredCountry.id !== '050' ? (
              <motion.div
                key="active-tooltip-country"
                initial={{ opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute top-3 right-3 min-w-[180px] max-w-xs p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D5] shadow-soft-lg space-y-1 z-20 pointer-events-none"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-[#006A4E]" />
                    <span>{hoveredCountry.name}</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-stone-100 text-stone-600">
                    Country
                  </span>
                </div>

                <div className="text-[11px] text-stone-500 flex items-center justify-between pt-0.5">
                  <span>{hoveredCountry.name === 'Palestine' ? 'Historic Palestine' : 'International Territory'}</span>
                  <span className="text-[10px] text-stone-400 font-mono">50m HD</span>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* 3. Bottom Progress Bar & Travel Status (100% Pure English) */}
        <div className="space-y-2 pt-1 border-t border-[#E8E2D5]/70">
          {/* Green Progress Bar */}
          <div className="w-full h-2 rounded-full bg-[#ECE5D8] overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${travelStats.percentage}%` }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
              className="h-full rounded-full bg-[#006A4E]"
            />
          </div>

          {/* Row 1: 53% of Bangladesh Explored • 34 Districts • 7 of 8 Divisions */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-stone-900">
            <span>53% of Bangladesh Explored</span>
            <span className="text-stone-500 font-medium text-xs">
              34 Districts • 7 of 8 Divisions
            </span>
          </div>

          {/* Row 2: Map Exploration • An Explorer's Travelogue across 34 Districts */}
          <div className="flex items-center justify-between pt-0.5">
            <div className="text-left">
              <div className="text-[11px] text-stone-400 font-medium">
                Map Exploration
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#006A4E]">
                An Explorer&apos;s Travelogue across 34 Districts
              </div>
            </div>

            {/* Travel Emblem */}
            <div className="w-7 h-7 rounded-full bg-[#006A4E] flex items-center justify-center text-white shadow-sm">
              <Plane className="w-3.5 h-3.5 -rotate-45" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Controls Bar: Replay Flight, World/Zoom View & Division Filter Pills (Pure English) */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-surface-border shadow-soft-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search district (e.g. Cox's Bazar, Sylhet)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-stone-50 border border-surface-border text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#006A4E] transition-all"
            />
          </div>

          {/* Move to Location Action */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={moveToLocation}
              disabled={isLocating}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#006A4E] text-white hover:bg-[#005A42] active:scale-[0.98] text-xs font-semibold transition-all shadow-soft-sm cursor-pointer disabled:opacity-75 disabled:cursor-wait"
            >
              {isLocating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Locating...</span>
                </>
              ) : (
                <>
                  <LocateFixed className="w-3.5 h-3.5" />
                  <span>Move to Location</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Division Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-stone-400 shrink-0 flex items-center gap-1 text-[11px] font-bold uppercase mr-1">
            <Filter className="w-3 h-3" />
            <span>Division:</span>
          </span>
          <button
            type="button"
            onClick={() => setSelectedDivision('All')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 cursor-pointer text-xs ${
              selectedDivision === 'All'
                ? 'bg-[#006A4E] text-white shadow-soft-xs font-bold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            All (34)
          </button>
          {divisionSummaries.map((div) => {
            const isSelected = selectedDivision.toLowerCase() === div.name.toLowerCase();
            return (
              <button
                key={div.name}
                type="button"
                onClick={() => setSelectedDivision(isSelected ? 'All' : div.name)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 cursor-pointer text-xs flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#006A4E] text-white shadow-soft-xs font-bold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <span>{div.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
                  }`}
                >
                  {div.visitedDistricts}/{div.totalDistricts}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
