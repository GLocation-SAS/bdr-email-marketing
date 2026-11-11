const fs = require('fs');
const path = require('path');
const {
  generateSaaswLideresTicHtml,
  generateSaaswLideresTicImageEmailHtml
} = require('../src/modules/email-marketing/templates/saasw-lideres-tic-template.ts');

const publicDir = path.join(__dirname, '../public');

// 1. Versión NATIVA HTML (Idéntica al correo de Julián en la captura, responsiva hasta 580px, sin desbordes)
const nativeLightHtml = generateSaaswLideresTicHtml({ theme: 'light' });
const nativeDarkHtml = generateSaaswLideresTicHtml({ theme: 'dark' });

fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic.html'), nativeLightHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-claro.html'), nativeLightHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-oscuro.html'), nativeDarkHtml, 'utf8');

// 2. Versión en BLOQUES DE IMAGEN (Con firma en 3 columnas y botones directos)
const blocksLightHtml = generateSaaswLideresTicImageEmailHtml({ theme: 'light' });
const blocksDarkHtml = generateSaaswLideresTicImageEmailHtml({ theme: 'dark' });

fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques.html'), blocksLightHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-claro.html'), blocksLightHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-oscuro.html'), blocksDarkHtml, 'utf8');

console.log('✅ Generadas exitosamente las 6 plantillas HTML:');
console.log(' - public/plantilla-saasw-lideres-tic.html (HTML nativo continuo estilo Julián)');
console.log(' - public/plantilla-saasw-lideres-tic-claro.html (HTML nativo claro)');
console.log(' - public/plantilla-saasw-lideres-tic-oscuro.html (HTML nativo oscuro)');
console.log(' - public/plantilla-saasw-lideres-tic-bloques.html (Bloques imagen claro)');
console.log(' - public/plantilla-saasw-lideres-tic-bloques-claro.html (Bloques imagen claro)');
console.log(' - public/plantilla-saasw-lideres-tic-bloques-oscuro.html (Bloques imagen oscuro)');
