const fs = require('fs');

const borders = fs.readFileSync('C:/Users/DFIT/.gemini/antigravity/brain/30a934e1-35fb-4f8f-ae1a-13c9dc1a9815/scratch/all_countries_borders_50m.txt', 'utf8');

const filePath = './src/data/travelData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace export const worldBordersSvgPath = "..." with the new 50m borders
const regex = /export const worldBordersSvgPath = "[^"]*";/;
if (regex.test(content)) {
  content = content.replace(regex, `export const worldBordersSvgPath = "${borders}";`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated worldBordersSvgPath in travelData.ts!');
} else {
  console.log('Regex did not match worldBordersSvgPath in travelData.ts!');
}
