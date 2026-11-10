import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function PyTorchIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13.2 2.5a.6.6 0 0 0-.9 0l-1.8 1.8a7.8 7.8 0 0 0-2.3 5.5c0 3.2 1.9 6 4.7 7.2l.6-1.5a6.3 6.3 0 0 1-3.8-5.7c0-2 1-3.9 2.5-5.1L12.7 4l.5.7a6.3 6.3 0 0 1 1 3.7c0 1.2-.4 2.4-1 3.4l1.3.8a7.8 7.8 0 0 0 1.3-4.2c0-2.3-.9-4.4-2.6-5.9z"
        fill="#FACC15"
      />
      <circle cx="16.5" cy="5.5" r="1.5" fill="#FACC15" />
    </svg>
  );
}

export function MambaIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="mambaGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      {/* Sleek Black Mamba Serpent Head & Recurrent State-Space Curve */}
      <path
        d="M20.5 4.5C18.5 3 15 3.5 13 5.5C10.5 8 11.5 11 9 13.5C7.2 15.3 5 15.5 3 15"
        stroke="url(#mambaGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M21 4.5L16.5 8.5C16.5 8.5 19 8.5 20.5 7L21 4.5Z"
        fill="url(#mambaGrad)"
      />
      <circle cx="17.8" cy="5.8" r="0.8" fill="#FFFFFF" />
      {/* State-Space Selective Scan Recurrence Rings */}
      <path
        d="M6 19C9 19 12 17.5 14 15C16 12.5 19 12 21 13"
        stroke="#8B5CF6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="2.5 2"
      />
      <circle cx="8" cy="18.5" r="1.5" fill="#8B5CF6" />
      <circle cx="14" cy="15" r="1.5" fill="#6366F1" />
    </svg>
  );
}

export function HuggingFaceIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#FFD21E" />
      {/* Eyes */}
      <ellipse cx="8.5" cy="9.5" rx="1.5" ry="2" fill="#1F2937" />
      <ellipse cx="15.5" cy="9.5" rx="1.5" ry="2" fill="#1F2937" />
      {/* Smile */}
      <path
        d="M8 13.5C9 15.5 11 16.5 12 16.5C13 16.5 15 15.5 16 13.5"
        stroke="#1F2937"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Hugging hands */}
      <path
        d="M3 13C3.5 11.5 5 12 5.5 13C6 14 5 15.5 4 15.5C3 15.5 2.5 14.5 3 13Z"
        fill="#FF9D00"
      />
      <path
        d="M21 13C20.5 11.5 19 12 18.5 13C18 14 19 15.5 20 15.5C21 15.5 21.5 14.5 21 13Z"
        fill="#FF9D00"
      />
    </svg>
  );
}

export function BanglaBERTIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#10B981" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="8" fill="#10B981" />
      <circle cx="10" cy="11" r="3.5" fill="#EF4444" />
      {/* Bengali 'Ka' / 'A' stylized letter stroke */}
      <path
        d="M8.5 15L11 8.5L14 15M9.5 13H13"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OpenCVIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Top Red Ring */}
      <circle cx="12" cy="7.5" r="3.5" stroke="#EA0437" strokeWidth="2" />
      <path d="M12 4V7" stroke="#EA0437" strokeWidth="2" strokeLinecap="round" />
      {/* Bottom Left Green Ring */}
      <circle cx="7.5" cy="15.5" r="3.5" stroke="#00BF00" strokeWidth="2" />
      {/* Bottom Right Blue Ring */}
      <circle cx="16.5" cy="15.5" r="3.5" stroke="#006699" strokeWidth="2" />
    </svg>
  );
}

export function PythonIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Blue Top Snake */}
      <path
        d="M11.9 2C8.5 2 6.5 3.5 6.5 5.5V7H12v.8H5c-2 0-3.5 1.5-3.5 4.2 0 2.5 1.4 4 3.5 4H6.5V14c0-2 1.6-3.8 3.8-3.8h5.2c1.7 0 3-1.3 3-3V5.5C18.5 3.5 15.3 2 11.9 2zM9.5 4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
        fill="#3776AB"
      />
      {/* Yellow Bottom Snake */}
      <path
        d="M12.1 22c3.4 0 5.4-1.5 5.4-3.5V17H12v-.8h7c2 0 3.5-1.5 3.5-4.2 0-2.5-1.4-4-3.5-4h-1.5V10c0 2-1.6 3.8-3.8 3.8H8.5c-1.7 0-3 1.3-3 3v1.7c0 2 3.2 3.5 6.6 3.5zM14.5 20a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function CppIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z"
        fill="#00599C"
      />
      {/* White 'C++' inside */}
      <path
        d="M10.5 9.5C9.8 8.8 8.7 8.5 7.6 8.8C6.3 9.2 5.3 10.5 5.3 12C5.3 13.5 6.3 14.8 7.6 15.2C8.7 15.5 9.8 15.2 10.5 14.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M13.5 12H16.5M15 10.5V13.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17.5 12H20.5M19 10.5V13.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function JavaIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Steam lines in light cyan/blue */}
      <path
        d="M10.5 3C9 5 12 6.5 10 9"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.5 2C12 4.5 15 6 13 8.5"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Coffee Cup Base in Bluish tone */}
      <path
        d="M5 12C5 16 8 18 12 18C16 18 18 16 18 12H5Z"
        fill="#007396"
      />
      <path
        d="M18 13C19.5 13 20.5 14 20.5 15C20.5 16.5 19 17 17.5 17"
        stroke="#007396"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4 20C7 21 17 21 20 20" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SpringBootIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M19.5 4.5C14.5 4.5 4 8 4 19.5C15.5 19.5 19.5 9 19.5 4.5Z"
        fill="#6DB33F"
      />
      <path
        d="M4 19.5C8 15 14 11 19.5 4.5"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="8.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function ReactIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="#61DAFB"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="#61DAFB"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

export function NextJsIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#000000" />
      <path
        d="M8.5 7.5V16.5M15.5 7.5V13M8.5 7.5L16.2 17.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M5 8.5H12M8.5 8.5V17M14 15.5C14.5 16.5 15.5 17 17 17C18.5 17 19.5 16 19.5 14.8C19.5 12.8 14.5 13.5 14.5 10.5C14.5 9.2 15.8 8.5 17 8.5C18.2 8.5 19.2 9 19.7 10"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function JavaScriptIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.5 13.5V16.5C7.5 17.5 8.5 18 9.5 18C10.5 18 11.5 17.5 11.5 16M14.5 16.5C15 17.5 16 18 17.5 18C19 18 20 17 20 15.8C20 13.8 15 14.5 15 11.5C15 10.2 16.2 9.5 17.5 9.5C18.7 9.5 19.7 10 20.2 11"
        stroke="#000000"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PostgresIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3C7.5 3 4 6.5 4 11C4 16 8 20.5 12 21C16 20.5 20 16 20 11C20 6.5 16.5 3 12 3Z"
        fill="#8B5CF6"
      />
      <circle cx="9.5" cy="10" r="1.5" fill="#FFFFFF" />
      <path
        d="M12 9C14 9 16.5 10 16.5 13C16.5 15.5 14.5 17 12 17"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DockerIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Whale body */}
      <path
        d="M2 13C2 17.5 6 19.5 10.5 19.5C15 19.5 19.5 17 20.5 13C21 11.5 22 12.5 22.5 12C20.5 10.5 18 11.5 16.5 11.5C16.5 9 14.5 8 13 8H6C4 8 2 10.5 2 13Z"
        fill="#2496ED"
      />
      {/* Containers */}
      <rect x="5" y="5.5" width="2" height="2" fill="#2496ED" rx="0.3" />
      <rect x="8" y="5.5" width="2" height="2" fill="#2496ED" rx="0.3" />
      <rect x="11" y="5.5" width="2" height="2" fill="#2496ED" rx="0.3" />
      <rect x="8" y="3" width="2" height="2" fill="#2496ED" rx="0.3" />
      <circle cx="6" cy="15" r="0.8" fill="#FFFFFF" />
    </svg>
  );
}

export function GitIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21.5 10.5L13.5 2.5C12.8 1.8 11.7 1.8 11 2.5L2.5 11C1.8 11.7 1.8 12.8 2.5 13.5L10.5 21.5C11.2 22.2 12.3 22.2 13 21.5L21.5 13C22.2 12.3 22.2 11.2 21.5 10.5Z"
        fill="#F05032"
      />
      <circle cx="8" cy="12" r="1.8" fill="#FFFFFF" />
      <circle cx="16" cy="8" r="1.8" fill="#FFFFFF" />
      <circle cx="16" cy="16" r="1.8" fill="#FFFFFF" />
      <path d="M8 12L16 8M8 12L16 16" stroke="#FFFFFF" strokeWidth="1.8" />
    </svg>
  );
}

export function TailwindIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 9C7.5 6 9.5 5 12 6C15 7.2 15.5 9 17 9.5C18.5 10 20 9 21.5 7C20 10 18 11 15.5 10C12.5 8.8 12 7 10.5 6.5C9 6 7.5 7 6 9Z"
        fill="#06B6D4"
      />
      <path
        d="M2.5 15C4 12 6 11 8.5 12C11.5 13.2 12 15 13.5 15.5C15 16 16.5 15 18 13C16.5 16 14.5 17 12 16C9 14.8 8.5 13 7 12.5C5.5 12 4 13 2.5 15Z"
        fill="#06B6D4"
      />
    </svg>
  );
}

export function TensorFlowIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L3 7.5V11L12 5.5L21 11V7.5L12 2Z" fill="#FF6F00" />
      <path d="M12 6V22L7.5 19.5V9.5L12 6Z" fill="#FFA000" />
      <path d="M12 6V22L16.5 19.5V9.5L12 6Z" fill="#FF8F00" />
    </svg>
  );
}

export function ScikitLearnIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="8" cy="12" r="5" fill="#F7931E" />
      <circle cx="16" cy="12" r="5" fill="#3499CD" />
      <path d="M12 7C13.5 8.5 13.5 15.5 12 17C10.5 15.5 10.5 8.5 12 7Z" fill="#2E3192" />
    </svg>
  );
}

export function LinuxIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#1E293B" />
      <path
        d="M6 7L11 12L6 17M12 17H18"
        stroke="#FCD34D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SciPyIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Bio-Signal DSP Waveform */}
      <rect width="24" height="24" rx="5" fill="#E11D48" fillOpacity="0.12" />
      <path
        d="M3 13H6L8 7L11 17L13 11L15 14L17 13H21"
        stroke="#E11D48"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GradCAMIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#8B5CF6" fillOpacity="0.12" />
      {/* Saliency Heatmap Concentric Circles */}
      <circle cx="12" cy="12" r="8" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="12" cy="12" r="5" fill="#A855F7" fillOpacity="0.3" stroke="#A855F7" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" fill="#EC4899" />
    </svg>
  );
}

export function LangChainIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#0D9488" fillOpacity="0.12" />
      <circle cx="8" cy="8" r="2.5" fill="#0D9488" />
      <circle cx="16" cy="16" r="2.5" fill="#0D9488" />
      <path
        d="M9.8 9.8L14.2 14.2"
        stroke="#0D9488"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8" r="2" stroke="#0D9488" strokeWidth="1.5" />
      <circle cx="8" cy="16" r="2" stroke="#0D9488" strokeWidth="1.5" />
    </svg>
  );
}

export function NumPyPandasIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* NumPy Blue Isometric Cube + Pandas Color Bars */}
      <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" fill="#4DABCF" fillOpacity="0.2" stroke="#013243" strokeWidth="1.2" />
      <path d="M12 2V20M4 6.5L20 15.5M20 6.5L4 15.5" stroke="#013243" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Pandas Bars */}
      <rect x="8" y="9" width="1.8" height="6" rx="0.5" fill="#130754" />
      <rect x="11.1" y="7.5" width="1.8" height="7.5" rx="0.5" fill="#FF4336" />
      <rect x="14.2" y="10.5" width="1.8" height="4.5" rx="0.5" fill="#E70488" />
    </svg>
  );
}

export function MySQLIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* MySQL Dolphin Blue Emblem */}
      <path
        d="M3 13.5C3.5 10 6 7 10 6.5C12 6.2 14 6.8 15.5 8C17 9.2 18.5 9.5 20.5 8.5C19.5 11 17.5 12.5 15 13C13 13.4 11 14.5 10 16.5C9 18.5 7.5 19.5 5 19C5.8 17.5 5.5 15.5 3 13.5Z"
        fill="#00758F"
      />
      <circle cx="8" cy="10" r="1" fill="#FFFFFF" />
      <path d="M17 14C19 14.5 21 16 22 17.5C20.5 17.5 19 17 18 16" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CLangIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5L20.5 7.5V17L12 22L3.5 17V7.5L12 2.5Z"
        fill="#659AD2"
      />
      <path
        d="M14 9C13.2 8.3 12.2 8 11.2 8C9.2 8 7.5 9.7 7.5 12C7.5 14.3 9.2 16 11.2 16C12.2 16 13.2 15.7 14 15"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TorchvisionIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#06B6D4" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="12" cy="12" r="4" fill="#06B6D4" fillOpacity="0.25" stroke="#06B6D4" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="#06B6D4" />
    </svg>
  );
}

export function KerasIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#D00000" />
      <path
        d="M7 6V18M7 12L15 6M9.5 10.5L16.5 18"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OllamaIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#14B8A6" fillOpacity="0.15" />
      <path
        d="M9 5V10C9 11.5 10 12.5 11.5 13V18H15V11L16 8L15 5H13V7H11V5H9Z"
        fill="#14B8A6"
      />
      <circle cx="13" cy="8" r="0.8" fill="#FFFFFF" />
    </svg>
  );
}

export function NumPyIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" fill="#4DABCF" fillOpacity="0.25" stroke="#013243" strokeWidth="1.5" />
      <path d="M12 2V20M4 6.5L20 15.5M20 6.5L4 15.5" stroke="#013243" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}

export function PandasIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#130754" fillOpacity="0.1" />
      <rect x="5.5" y="8" width="2.5" height="10" rx="0.8" fill="#130754" />
      <rect x="9.5" y="5" width="2.5" height="13" rx="0.8" fill="#FF4336" />
      <rect x="13.5" y="10" width="2.5" height="8" rx="0.8" fill="#E70488" />
      <rect x="17.5" y="7" width="2.5" height="11" rx="0.8" fill="#00A3E0" />
    </svg>
  );
}

export function GitHubIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.41 6.01 9.52 6.65 8.82C6.55 8.57 6.21 7.55 6.75 6.19C6.75 6.19 7.59 5.92 9.5 7.21C10.3 6.99 11.15 6.88 12 6.88C12.85 6.88 13.7 6.99 14.5 7.21C16.41 5.92 17.25 6.19 17.25 6.19C17.79 7.55 17.45 8.57 17.35 8.82C17.99 9.52 18.38 10.41 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.28 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.523 2 12 2Z"
        fill="#24292F"
      />
    </svg>
  );
}

export function SSMIcon({ className = 'w-6 h-6', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="ssmGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="#6366F1" fillOpacity="0.12" />
      <path
        d="M4 16C7 16 8 8 12 8C16 8 17 16 20 16"
        stroke="url(#ssmGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="7" cy="13" r="1.5" fill="#6366F1" />
      <circle cx="12" cy="8" r="1.5" fill="#8B5CF6" />
      <circle cx="17" cy="13" r="1.5" fill="#6366F1" />
    </svg>
  );
}

