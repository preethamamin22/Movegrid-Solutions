import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brandDir = path.resolve('public/brand');
const files = [
  { svg: 'movegrid-symbol.svg', png: 'movegrid-symbol.png', width: 512, height: 512 },
  { svg: 'movegrid-symbol-light.svg', png: 'movegrid-symbol-light.png', width: 512, height: 512 },
  { svg: 'movegrid-logo.svg', png: 'movegrid-logo.png', width: 1040, height: 200 },
  { svg: 'movegrid-logo-light.svg', png: 'movegrid-logo-light.png', width: 1040, height: 200 },
  { svg: 'og-image.svg', png: 'og-image.png', width: 1200, height: 630 },
];

async function convert() {
  for (const { svg, png, width, height } of files) {
    const inputPath = path.join(brandDir, svg);
    const outputPath = path.join(brandDir, png);
    if (fs.existsSync(inputPath)) {
      await sharp(inputPath, { density: 300 })
        .resize(width, height)
        .png()
        .toFile(outputPath);
      console.log(`Generated: ${png} (${width}x${height})`);
    }
  }
}

convert().catch(console.error);

