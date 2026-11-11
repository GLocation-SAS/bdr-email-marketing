const sharp = require('sharp');
const fs = require('fs');

async function testCtaDesigns() {
  const width = 1320;
  const height = 629;
  const outerBg = '#F0F4F9';

  // Opción 1: Tarjeta Blanca pura con esquinas redondeadas 24px (consistente con Hero y Trabajadores)
  const svgOpcion1 = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1F6E91" />
          <stop offset="60%" stop-color="#4A64A0" />
          <stop offset="100%" stop-color="#6E5C98" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="${outerBg}" />
      <rect x="60" y="0" width="1200" height="${height}" rx="24" ry="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
      
      <!-- Eyebrow -->
      <text x="660" y="90" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" letter-spacing="2" fill="#0284C7">
        DIAGNÓSTICO COGNITIVO · 30 MINUTOS
      </text>

      <!-- Título -->
      <text x="660" y="160" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="#0F172A">
        ¿Exploramos qué proceso de su oficina TIC podemos liberar
      </text>
      <text x="660" y="210" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="#0F172A">
        este mes?
      </text>

      <!-- Descripción -->
      <text x="660" y="280" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="400" fill="#475569">
        Agende una sesión técnica de 30 minutos. Evaluaremos uno de sus cuellos de
      </text>
      <text x="660" y="320" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="400" fill="#475569">
        botella operativos y le entregaremos una estimación contable de ahorro y tiempos.
      </text>

      <!-- Botón CTA -->
      <rect x="340" y="380" width="640" height="96" rx="16" ry="16" fill="url(#btnGrad)" />
      <text x="660" y="440" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="700" fill="#FFFFFF">
        Agendar Diagnóstico Cognitivo (30 min) →
      </text>

      <!-- Subtexto -->
      <text x="660" y="540" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="21" font-weight="400" fill="#64748B">
        Sin formularios eternos: seleccione día y hora directamente en nuestra plataforma.
      </text>
    </svg>
  `);

  // Opción 2: Tarjeta completa con degradado suave azul tecnológico (SaaSW Highlight)
  const svgOpcion2 = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F0F9FF" />
          <stop offset="100%" stop-color="#E0F2FE" />
        </linearGradient>
        <linearGradient id="btnGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1F6E91" />
          <stop offset="60%" stop-color="#4A64A0" />
          <stop offset="100%" stop-color="#6E5C98" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="${outerBg}" />
      <rect x="60" y="0" width="1200" height="${height}" rx="24" ry="24" fill="url(#cardGrad)" stroke="#BAE6FD" stroke-width="1.5" />
      
      <!-- Eyebrow -->
      <text x="660" y="90" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" letter-spacing="2" fill="#0369A1">
        DIAGNÓSTICO COGNITIVO · 30 MINUTOS
      </text>

      <!-- Título -->
      <text x="660" y="160" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="#0F172A">
        ¿Exploramos qué proceso de su oficina TIC podemos liberar
      </text>
      <text x="660" y="210" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="#0F172A">
        este mes?
      </text>

      <!-- Descripción -->
      <text x="660" y="280" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="400" fill="#334155">
        Agende una sesión técnica de 30 minutos. Evaluaremos uno de sus cuellos de
      </text>
      <text x="660" y="320" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="400" fill="#334155">
        botella operativos y le entregaremos una estimación contable de ahorro y tiempos.
      </text>

      <!-- Botón CTA -->
      <rect x="340" y="380" width="640" height="96" rx="16" ry="16" fill="url(#btnGrad2)" />
      <text x="660" y="440" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="700" fill="#FFFFFF">
        Agendar Diagnóstico Cognitivo (30 min) →
      </text>

      <!-- Subtexto -->
      <text x="660" y="540" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="21" font-weight="500" fill="#0369A1">
        Sin formularios eternos: seleccione día y hora directamente en nuestra plataforma.
      </text>
    </svg>
  `);

  await sharp(svgOpcion1).png().toFile('C:/Users/Paula/.gemini/antigravity/brain/f34fd3dc-879c-4c6d-820f-fabd3772c93b/cta-opcion-blanca.png');
  await sharp(svgOpcion2).png().toFile('C:/Users/Paula/.gemini/antigravity/brain/f34fd3dc-879c-4c6d-820f-fabd3772c93b/cta-opcion-celeste.png');
  console.log('Saved both CTA options');
}

testCtaDesigns().catch(console.error);

