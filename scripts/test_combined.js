const fs = require('fs');

const worldPath = fs.readFileSync('C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/clean_world_path.txt', 'utf8');
const fileContent = fs.readFileSync('D:/Projects/obaidulsaiki.github.io/src/data/bangladeshDistricts.ts', 'utf8');
const jsonMatch = fileContent.match(/export const bangladeshDistricts: DistrictInfo\[\] = (\[[\s\S]*?\]);/);
const bangladeshDistricts = eval(jsonMatch[1]);

// Find bounds of bangladeshDistricts
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
bangladeshDistricts.forEach(d => {
  const nums = d.path.match(/[0-9.-]+/g) || [];
  for (let i = 0; i < nums.length; i += 2) {
    const x = parseFloat(nums[i]), y = parseFloat(nums[i+1]);
    if (!isNaN(x) && !isNaN(y)) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
});

console.log('Local BD bounds:', { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY });

const targetMinX = 744.47;
const targetMinY = 176.03;
const targetW = 12.95;
const targetH = 16.36;

const scaleX = targetW / (maxX - minX);
const scaleY = targetH / (maxY - minY);

const transformedDistricts = bangladeshDistricts.map(d => {
  const newPath = d.path.replace(/([0-9.-]+),([0-9.-]+)/g, (_, x, y) => {
    const nx = (targetMinX + (parseFloat(x) - minX) * scaleX).toFixed(3);
    const ny = (targetMinY + (parseFloat(y) - minY) * scaleY).toFixed(3);
    return `${nx},${ny}`;
  });
  const ncx = +(targetMinX + (d.centroid.x - minX) * scaleX).toFixed(3);
  const ncy = +(targetMinY + (d.centroid.y - minY) * scaleY).toFixed(3);
  return { ...d, path: newPath, centroid: { x: ncx, y: ncy } };
});

// Render World view test
const districtPaths = transformedDistricts.map(d => {
  const fill = d.isVisited ? '#006A4E' : '#ECE5D8';
  return `<path d="${d.path}" fill="${fill}" stroke="#FFFFFF" stroke-width="0.04" />`;
}).join('\n');

const htmlWorld = `<!DOCTYPE html>
<html>
<body style="margin:0;background:#FAF8F5;">
  <svg viewBox="0 -125 1000 750" style="width:100vw;height:100vh;">
    <path d="${worldPath}" fill="#D4C9B7" stroke="#A89B85" stroke-width="0.75" />
    <g id="bangladesh">${districtPaths}</g>
  </svg>
</body>
</html>`;

// Render Zoomed Bangladesh view test
// Bangladesh bounds: minX 744.47, maxX 757.42, minY 176.03, maxY 192.39
// Center: cx = 750.945, cy = 184.21
// 4:3 Aspect ratio viewBox: height = 20.0, width = 26.667
// minX = 750.945 - 13.333 = 737.612, minY = 184.21 - 10.0 = 174.21
const htmlZoomed = `<!DOCTYPE html>
<html>
<body style="margin:0;background:#FAF8F5;">
  <svg viewBox="737.612 174.21 26.667 20.0" style="width:100vw;height:100vh;">
    <path d="${worldPath}" fill="#D4C9B7" stroke="#A89B85" stroke-width="0.05" />
    <g id="bangladesh">${districtPaths}</g>
  </svg>
</body>
</html>`;

fs.writeFileSync('C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/combined_world.html', htmlWorld);
fs.writeFileSync('C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/combined_zoomed.html', htmlZoomed);

// Also save transformedDistricts to bangladeshWorldDistricts format
fs.writeFileSync(
  'C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/new_bd_districts.json',
  JSON.stringify(transformedDistricts, null, 2)
);

console.log('Successfully generated test HTMLs and transformed districts!');
