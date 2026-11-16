const https = require('https');
const fs = require('fs');
const topojson = require('topojson-client');
const d3 = require('d3-geo');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading TopoJSON & TSV...');
  const [topoRaw, tsvRaw] = await Promise.all([
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'),
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@1/world/50m.tsv')
  ]);

  const topo = JSON.parse(topoRaw);
  const lines = tsvRaw.trim().split('\n');
  const header = lines[0].split('\t');
  const isoIndex = header.indexOf('iso_n3');
  const nameIndex = header.indexOf('name');

  const nameMap = {};
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split('\t');
    const iso = parts[isoIndex];
    const name = parts[nameIndex];
    if (iso && name) {
      nameMap[String(Number(iso))] = name;
      nameMap[iso.padStart(3, '0')] = name;
    }
  }

  // Explicit override: 376 (Israel) -> null, 275 (Palestine) -> Palestine
  delete nameMap['376'];
  nameMap['275'] = 'Palestine';

  const projection = d3.geoEquirectangular()
    .scale(1000 / (2 * Math.PI))
    .translate([500, 250]);
  const pathGen = d3.geoPath(projection);

  const geoms = topo.objects.countries.geometries;
  console.log('Total geometries in 50m:', geoms.length);

  // Group geometries: combine 376 and 275 into Palestine
  const palestineGeoms = geoms.filter(g => String(g.id) === '376' || String(g.id) === '275');
  const mergedPalestine = topojson.merge(topo, palestineGeoms);

  const otherGeoms = geoms.filter(g => String(g.id) !== '376' && String(g.id) !== '275');

  const countries = [];

  // Add unified Palestine first
  const palestinePath = pathGen(mergedPalestine).replace(/(\d+\.\d{2,})/g, m => parseFloat(m).toFixed(1));
  countries.push({
    id: '275',
    name: 'Palestine',
    path: palestinePath
  });

  // Add all other countries
  for (const g of otherGeoms) {
    const feature = topojson.feature(topo, g);
    const idStr = String(g.id);
    const name = nameMap[idStr] || nameMap[idStr.padStart(3, '0')] || `Country ${idStr}`;
    const p = pathGen(feature);
    if (!p) continue;
    const rounded = p.replace(/(\d+\.\d{2,})/g, m => parseFloat(m).toFixed(1));
    countries.push({
      id: idStr,
      name,
      path: rounded
    });
  }

  console.log('Total exported countries:', countries.length);
  const israelCheck = countries.filter(c => c.name.toLowerCase().includes('israel') || c.id === '376');
  console.log('Israel count in output:', israelCheck.length);
  const palestineCheck = countries.filter(c => c.name.toLowerCase().includes('palestine') || c.id === '275');
  console.log('Palestine count in output:', palestineCheck.length, 'Name:', palestineCheck[0]?.name);

  // Write to src/data/worldCountries.ts
  const tsContent = `// 240+ Individual World Countries with Unified Palestine
// Generated from Natural Earth 50m data for interactive hover & highlight

export interface WorldCountry {
  id: string;
  name: string;
  path: string;
}

export const worldCountries: WorldCountry[] = ${JSON.stringify(countries, null, 2)};
`;

  fs.writeFileSync('src/data/worldCountries.ts', tsContent, 'utf8');
  console.log('Written src/data/worldCountries.ts, file size:', (tsContent.length / 1024).toFixed(1), 'KB');
}

main().catch(console.error);
