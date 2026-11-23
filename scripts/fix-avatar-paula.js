const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateAvatar(topCrop, outFile) {
  const size = 234;
  const radius = size / 2;
  const borderWidth = 5;

  // 1. Crop 1:1 square from original without stretching
  const square = await sharp('public/paula_natalia_rozo (4).png')
    .extract({ left: 0, top: topCrop, width: 1086, height: 1086 })
    .resize(size, size)
    .toBuffer();

  // 2. Circular mask
  const maskSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius - 1}" fill="white"/></svg>`
  );

  // 3. Border ring SVG
  const borderSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius - borderWidth / 2}" fill="none" stroke="#A855F7" stroke-width="${borderWidth}"/></svg>`
  );

  const circularPhoto = await sharp(square)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .toBuffer();

  await sharp(circularPhoto)
    .composite([{ input: borderSvg, top: 0, left: 0 }])
    .png()
    .toFile(outFile);

  console.log('Generated:', outFile);
}

async function run() {
  await generateAvatar(0, 'test-avatar-top0.png');
  await generateAvatar(50, 'test-avatar-top50.png');
  await generateAvatar(80, 'test-avatar-top80.png');
}

run();
