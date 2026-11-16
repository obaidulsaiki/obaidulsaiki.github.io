const https = require('https');
const fs = require('fs');
const d3 = require('d3-geo');
const topojson = require('topojson-client');

https.get('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const topo = JSON.parse(data);
    const land = topojson.feature(topo, topo.objects.land);

    // Exact Plate Carrée projection for Sphere [-180..180, -90..90] onto [0..1000, 0..500]
    const projection = d3.geoEquirectangular()
      .scale(1000 / (2 * Math.PI))
      .translate([500, 250]);

    const pathGen = d3.geoPath(projection);
    const svgPath = pathGen(land);

    console.log('Generated clean Natural Earth SVG path length:', svgPath.length);

    // Test Dhaka projection: [90.4125, 23.8103]
    const [dhakaX, dhakaY] = projection([90.4125, 23.8103]);
    console.log('Dhaka projected:', { dhakaX, dhakaY });

    const html = `<!DOCTYPE html>
<html>
<body style="margin:0;background:#FAF8F5;">
  <svg viewBox="0 -125 1000 750" style="width:100vw;height:100vh;">
    <path d="${svgPath}" fill="#D4C9B7" stroke="#A89B85" stroke-width="0.75" />
    <circle cx="${dhakaX}" cy="${dhakaY}" r="4" fill="#EF4444" stroke="#FFFFFF" stroke-width="1" />
  </svg>
</body>
</html>`;

    fs.writeFileSync('C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/clean_world_test.html', html);
    fs.writeFileSync('C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/clean_world_path.txt', svgPath);
    console.log('Saved to clean_world_path.txt');
  });
});
