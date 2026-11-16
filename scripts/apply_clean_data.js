const fs = require('fs');

// 1. Read clean world path
const cleanWorldPath = fs.readFileSync('C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/clean_world_path.txt', 'utf8');

// 2. Read new bd districts
const newDistricts = JSON.parse(fs.readFileSync('C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/new_bd_districts.json', 'utf8'));

// 3. Update src/data/travelData.ts
const travelDataContent = `// Bangladesh Travel Map Data & World Map Vectors

export interface DivisionSummary {
  name: string;
  nameBn: string;
  totalDistricts: number;
  visitedDistricts: number;
  color: string;
}

export const divisionSummaries: DivisionSummary[] = [
  { name: 'Dhaka', nameBn: 'ঢাকা', totalDistricts: 13, visitedDistricts: 8, color: '#0F766E' },
  { name: 'Chattogram', nameBn: 'চট্টগ্রাম', totalDistricts: 11, visitedDistricts: 8, color: '#047857' },
  { name: 'Rajshahi', nameBn: 'রাজশাহী', totalDistricts: 8, visitedDistricts: 6, color: '#0D9488' },
  { name: 'Khulna', nameBn: 'খুলনা', totalDistricts: 10, visitedDistricts: 5, color: '#059669' },
  { name: 'Sylhet', nameBn: 'সিলেট', totalDistricts: 4, visitedDistricts: 4, color: '#10B981' },
  { name: 'Mymensingh', nameBn: 'ময়মনসিংহ', totalDistricts: 4, visitedDistricts: 2, color: '#14B8A6' },
  { name: 'Barishal', nameBn: 'বরিশাল', totalDistricts: 6, visitedDistricts: 1, color: '#2DD4BF' },
  { name: 'Rangpur', nameBn: 'রংপুর', totalDistricts: 8, visitedDistricts: 0, color: '#A1A1AA' },
];

export const travelStats = {
  totalDistricts: 64,
  visitedDistricts: 34,
  percentage: 53.1250,
  totalDivisions: 8,
  visitedDivisions: 7,
};

export const worldMapSvgPath = '${cleanWorldPath}';
`;

fs.writeFileSync('D:/Projects/obaidulsaiki.github.io/src/data/travelData.ts', travelDataContent);
console.log('Updated src/data/travelData.ts');

// 4. Update src/data/bangladeshWorldDistricts.ts
const bdWorldContent = `// Projected directly into 1000x500 world coordinates with Natural Earth alignment
export const BD_WORLD_BBOX = { minX: 744.470, maxX: 757.420, minY: 176.030, maxY: 192.390, cx: 750.945, cy: 184.210 };
export const BD_ZOOMED_VIEWBOX = '737.612 174.210 26.667 20.000';
export const WORLD_VIEWBOX = '0 -125 1000 750';
export const bangladeshWorldDistricts = ${JSON.stringify(newDistricts, null, 2)};
`;

fs.writeFileSync('D:/Projects/obaidulsaiki.github.io/src/data/bangladeshWorldDistricts.ts', bdWorldContent);
console.log('Updated src/data/bangladeshWorldDistricts.ts');
