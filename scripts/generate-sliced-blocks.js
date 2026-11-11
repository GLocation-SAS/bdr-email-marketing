const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const blocksDir = path.join(__dirname, '../public/email-blocks');

async function createSlicedBlocks() {
  const paulaLightBuf = fs.readFileSync(path.join(__dirname, '../public/email-icons/avatar-paula-light.png'));
  const paulaDarkBuf = fs.readFileSync(path.join(__dirname, '../public/email-icons/avatar-paula-dark.png'));
  const paulaLightB64 = `data:image/png;base64,${paulaLightBuf.toString('base64')}`;
  const paulaDarkB64 = `data:image/png;base64,${paulaDarkBuf.toString('base64')}`;

  const themes = [
    {
      id: 'claro',
      outerBg: '#F0F4F9',
      cardBg: '#FFFFFF',
      subtleBg: '#F8FAFD',
      divider: '#E2EBF5',
      textMain: '#0F172A',
      textMuted: '#64748B',
      btnGlocBg: '#F0F7FB',
      btnGlocBorder: '#B8DCF0',
      btnGlocText: '#0284C7',
      btnGlocPill: '#0284C7',
      btnHomoBg: '#F6F3FF',
      btnHomoBorder: '#D8C7FF',
      btnHomoText: '#7C3AED',
      btnHomoPill: '#7C3AED',
      btnPreBg: '#F8FAFC',
      btnPreBorder: '#CBD5E1',
      btnPreText: '#334155',
      btnPrePill: '#475569',
      paulaAvatarB64: paulaLightB64,
      avatarBorder: '#D0E7F5',
      roleColor: '#0E768C'
    },
    {
      id: 'oscuro',
      outerBg: '#0B0F19',
      cardBg: '#111827',
      subtleBg: '#1E293B',
      divider: '#1E293B',
      textMain: '#F8FAFC',
      textMuted: '#94A3B8',
      btnGlocBg: '#0F293A',
      btnGlocBorder: '#1E7094',
      btnGlocText: '#38BDF8',
      btnGlocPill: '#0284C7',
      btnHomoBg: '#231B3D',
      btnHomoBorder: '#5B449A',
      btnHomoText: '#C084FC',
      btnHomoPill: '#7C3AED',
      btnPreBg: '#1E293B',
      btnPreBorder: '#334155',
      btnPreText: '#94A3B8',
      btnPrePill: '#475569',
      paulaAvatarB64: paulaDarkB64,
      avatarBorder: '#1E7094',
      roleColor: '#38BDF8'
    }
  ];

  for (const t of themes) {
    // -------------------------------------------------------------
    // BLOQUE 4A: Header Ecosistema + Botón glocation.co (1320 x 180)
    // -------------------------------------------------------------
    const svg4a = `
    <svg width="1320" height="180" viewBox="0 0 1320 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .label { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 21px; font-weight: 700; letter-spacing: 2px; fill: ${t.textMuted}; text-anchor: middle; }
          .title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 26px; font-weight: 700; fill: ${t.btnGlocText}; }
          .desc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 22px; font-weight: 400; fill: ${t.textMuted}; }
          .pill-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 700; fill: #FFFFFF; text-anchor: middle; }
        </style>
      </defs>
      <!-- Fondo exterior -->
      <rect width="1320" height="180" fill="${t.outerBg}"/>
      <!-- Tarjeta blanca con esquinas superiores redondeadas -->
      <path d="M 40 180 L 40 32 A 24 24 0 0 1 64 8 L 1256 8 A 24 24 0 0 1 1280 32 L 1280 180 Z" fill="${t.cardBg}"/>
      
      <!-- Encabezado Ecosistema -->
      <text x="660" y="44" class="label">EXPLORE NUESTRO ECOSISTEMA EN VIVO:</text>

      <!-- Botón glocation.co -->
      <g transform="translate(80, 68)">
        <rect width="1160" height="96" rx="16" ry="16" fill="${t.btnGlocBg}" stroke="${t.btnGlocBorder}" stroke-width="2"/>
        <!-- Icono Globo -->
        <circle cx="50" cy="48" r="24" fill="${t.btnGlocBorder}" opacity="0.4"/>
        <text x="50" y="56" font-size="28" text-anchor="middle">🌐</text>
        <!-- Textos -->
        <text x="96" y="57" class="title">glocation.co <tspan class="desc">· Plataforma Comercial SaaSW</tspan></text>
        <!-- Pill Visitar -->
        <rect x="980" y="24" width="144" height="48" rx="10" ry="10" fill="${t.btnGlocPill}"/>
        <text x="1052" y="56" class="pill-text">Visitar →</text>
      </g>
    </svg>`;

    // -------------------------------------------------------------
    // BLOQUE 4B: Botón homoagenticus.co (1320 x 116)
    // -------------------------------------------------------------
    const svg4b = `
    <svg width="1320" height="116" viewBox="0 0 1320 116" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 26px; font-weight: 700; fill: ${t.btnHomoText}; }
          .desc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 22px; font-weight: 400; fill: ${t.textMuted}; }
          .pill-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 700; fill: #FFFFFF; text-anchor: middle; }
        </style>
      </defs>
      <!-- Fondo exterior -->
      <rect width="1320" height="116" fill="${t.outerBg}"/>
      <!-- Tarjeta blanca contigua -->
      <rect x="40" y="0" width="1240" height="116" fill="${t.cardBg}"/>

      <!-- Botón homoagenticus.co -->
      <g transform="translate(80, 10)">
        <rect width="1160" height="96" rx="16" ry="16" fill="${t.btnHomoBg}" stroke="${t.btnHomoBorder}" stroke-width="2"/>
        <!-- Icono Libro -->
        <circle cx="50" cy="48" r="24" fill="${t.btnHomoBorder}" opacity="0.4"/>
        <text x="50" y="56" font-size="28" text-anchor="middle">📖</text>
        <!-- Textos -->
        <text x="96" y="57" class="title">homoagenticus.co <tspan class="desc">· El Manifiesto del Homo agenticus</tspan></text>
        <!-- Pill Leer -->
        <rect x="980" y="24" width="144" height="48" rx="10" ry="10" fill="${t.btnHomoPill}"/>
        <text x="1052" y="56" class="pill-text">Leer →</text>
      </g>
    </svg>`;

    // -------------------------------------------------------------
    // BLOQUE 4C: Botón preagentica.glocation.co (1320 x 140)
    // -------------------------------------------------------------
    const svg4c = `
    <svg width="1320" height="140" viewBox="0 0 1320 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 26px; font-weight: 700; fill: ${t.btnPreText}; }
          .desc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 22px; font-weight: 400; fill: ${t.textMuted}; }
          .pill-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 700; fill: #FFFFFF; text-anchor: middle; }
        </style>
      </defs>
      <!-- Fondo exterior -->
      <rect width="1320" height="140" fill="${t.outerBg}"/>
      <!-- Tarjeta blanca con esquinas inferiores redondeadas -->
      <path d="M 40 0 L 1280 0 L 1280 96 A 24 24 0 0 1 1256 120 L 64 120 A 24 24 0 0 1 40 96 Z" fill="${t.cardBg}"/>

      <!-- Botón preagentica -->
      <g transform="translate(80, 10)">
        <rect width="1160" height="96" rx="16" ry="16" fill="${t.btnPreBg}" stroke="${t.btnPreBorder}" stroke-width="2"/>
        <!-- Icono Templo -->
        <circle cx="50" cy="48" r="24" fill="${t.btnPreBorder}" opacity="0.4"/>
        <text x="50" y="56" font-size="28" text-anchor="middle">🏛️</text>
        <!-- Textos -->
        <text x="96" y="57" class="title">preagentica.glocation.co <tspan class="desc">· Nuestra Herencia Pre-IA</tspan></text>
        <!-- Pill Conocer -->
        <rect x="980" y="24" width="144" height="48" rx="10" ry="10" fill="${t.btnPrePill}"/>
        <text x="1052" y="56" class="pill-text">Conocer →</text>
      </g>
    </svg>`;

    // -------------------------------------------------------------
    // BLOQUE 5A: Cintillo Holding (1320 x 80)
    // -------------------------------------------------------------
    const svg5a = `
    <svg width="1320" height="80" viewBox="0 0 1320 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .cintillo { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 19px; font-weight: 700; letter-spacing: 1.5px; fill: ${t.textMuted}; text-anchor: middle; }
        </style>
      </defs>
      <!-- Fondo exterior -->
      <rect width="1320" height="80" fill="${t.outerBg}"/>
      <!-- Cintillo superior con esquinas superiores redondeadas -->
      <path d="M 40 80 L 40 28 A 20 20 0 0 1 60 8 L 1260 8 A 20 20 0 0 1 1280 28 L 1280 80 Z" fill="${t.subtleBg}"/>
      <line x1="40" y1="79" x2="1280" y2="79" stroke="${t.divider}" stroke-width="2"/>
      <text x="660" y="50" class="cintillo">HOLDING SERVINFORMACIÓN (27 AÑOS)   •   GOOGLE CLOUD PREMIER PARTNER   •   NORMA ISO 27001</text>
    </svg>`;

    // -------------------------------------------------------------
    // BLOQUE 5B: Paula Rozo Foto + Info (800 x 200)
    // -------------------------------------------------------------
    const svg5b = `
    <svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="avatar-clip-${t.id}">
          <circle cx="130" cy="95" r="54"/>
        </clipPath>
        <style>
          .name { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 30px; font-weight: 800; fill: ${t.textMain}; }
          .role { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 21px; font-weight: 500; fill: ${t.textMuted}; }
          .company { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 700; fill: ${t.roleColor}; }
          .mail { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 600; fill: ${t.btnGlocText}; text-decoration: underline; }
        </style>
      </defs>
      <!-- Fondo exterior -->
      <rect width="800" height="200" fill="${t.outerBg}"/>
      <!-- Tarjeta inferior izquierda -->
      <path d="M 40 0 L 800 0 L 800 180 L 60 180 A 20 20 0 0 1 40 160 Z" fill="${t.cardBg}"/>
      
      <!-- Borde circular de foto -->
      <circle cx="130" cy="95" r="57" fill="${t.avatarBorder}"/>
      <!-- Foto de Paula -->
      <image href="${t.paulaAvatarB64}" x="76" y="41" width="108" height="108" clip-path="url(#avatar-clip-${t.id})"/>

      <!-- Textos -->
      <text x="210" y="60" class="name">Paula Rozo</text>
      <text x="210" y="92" class="role">BDR · Business Development Representative</text>
      <text x="210" y="122" class="company">GLocation SAS · Transformación Cognitiva</text>
      <text x="210" y="154" class="mail">✉️ paula.rozo@glocation.com.co</text>
    </svg>`;

    // -------------------------------------------------------------
    // BLOQUE 5C: Botón glocation.co (260 x 200)
    // -------------------------------------------------------------
    const svg5c = `
    <svg width="260" height="200" viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .btn-title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 800; fill: ${t.btnGlocText}; text-anchor: middle; }
          .btn-sub { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 17px; font-weight: 500; fill: ${t.textMuted}; text-anchor: middle; }
        </style>
      </defs>
      <!-- Fondo exterior -->
      <rect width="260" height="200" fill="${t.outerBg}"/>
      <!-- Tarjeta central -->
      <rect x="0" y="0" width="260" height="180" fill="${t.cardBg}"/>
      
      <!-- Botón Tarjeta glocation.co -->
      <g transform="translate(10, 24)">
        <rect width="240" height="132" rx="14" ry="14" fill="${t.btnGlocBg}" stroke="${t.btnGlocBorder}" stroke-width="2"/>
        <text x="120" y="52" font-size="32" text-anchor="middle">🌐</text>
        <text x="120" y="86" class="btn-title">glocation.co</text>
        <text x="120" y="112" class="btn-sub">Plataforma →</text>
      </g>
    </svg>`;

    // -------------------------------------------------------------
    // BLOQUE 5D: Botón homoagenticus.co (260 x 200)
    // -------------------------------------------------------------
    const svg5d = `
    <svg width="260" height="200" viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .btn-title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 19px; font-weight: 800; fill: ${t.btnHomoText}; text-anchor: middle; }
          .btn-sub { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 17px; font-weight: 500; fill: ${t.textMuted}; text-anchor: middle; }
        </style>
      </defs>
      <!-- Fondo exterior -->
      <rect width="260" height="200" fill="${t.outerBg}"/>
      <!-- Tarjeta inferior derecha -->
      <path d="M 0 0 L 220 0 A 20 20 0 0 1 240 20 L 240 160 A 20 20 0 0 1 220 180 L 0 180 Z" fill="${t.cardBg}"/>
      
      <!-- Botón Tarjeta homoagenticus.co -->
      <g transform="translate(10, 24)">
        <rect width="210" height="132" rx="14" ry="14" fill="${t.btnHomoBg}" stroke="${t.btnHomoBorder}" stroke-width="2"/>
        <text x="105" y="52" font-size="32" text-anchor="middle">📖</text>
        <text x="105" y="86" class="btn-title">homoagenticus.co</text>
        <text x="105" y="112" class="btn-sub">Manifiesto →</text>
      </g>
    </svg>`;

    // -------------------------------------------------------------
    // BLOQUE 06: Footer Legal (1320 x 80)
    // -------------------------------------------------------------
    const svg06 = `
    <svg width="1320" height="80" viewBox="0 0 1320 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .legal-title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 500; fill: ${t.textMuted}; text-anchor: middle; }
          .legal-desc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; fill: ${t.textMuted}; opacity: 0.85; text-anchor: middle; }
        </style>
      </defs>
      <rect width="1320" height="80" fill="${t.outerBg}"/>
      <text x="660" y="32" class="legal-title">© 2026 GLocation SAS · Bogotá D.C., Colombia.</text>
      <text x="660" y="60" class="legal-desc">Ha recibido este mensaje porque su entidad lidera proyectos estratégicos de tecnología.</text>
    </svg>`;

    // Convert to PNG with Sharp
    const renderList = [
      { name: `saasw-04a-eco-glocation-${t.id}.png`, svg: svg4a },
      { name: `saasw-04b-eco-homoagenticus-${t.id}.png`, svg: svg4b },
      { name: `saasw-04c-eco-preagentica-${t.id}.png`, svg: svg4c },
      { name: `saasw-05a-cintillo-${t.id}.png`, svg: svg5a },
      { name: `saasw-05b-firma-paula-${t.id}.png`, svg: svg5b },
      { name: `saasw-05c-boton-glocation-${t.id}.png`, svg: svg5c },
      { name: `saasw-05d-boton-homoagenticus-${t.id}.png`, svg: svg5d },
      { name: `saasw-06-legal-${t.id}.png`, svg: svg06 },
    ];

    for (const item of renderList) {
      const outPath = path.join(blocksDir, item.name);
      await sharp(Buffer.from(item.svg))
        .png({ quality: 100 })
        .toFile(outPath);
      console.log(`Generated: ${item.name}`);
    }
  }
}

createSlicedBlocks().catch(console.error);
