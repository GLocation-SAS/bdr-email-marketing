const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const blocksDir = path.join(__dirname, '../public/email-blocks');

async function buildAllCards() {
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
    // ==========================================
    // 1. CARD 1 (Hero): Ensure rounded top and bottom corners
    // ==========================================
    const heroPath = path.join(blocksDir, `saasw-01-hero-${t.id}.png`);
    if (fs.existsSync(heroPath)) {
      const heroMeta = await sharp(heroPath).metadata();
      const heroH = heroMeta.height;
      const cornerOverlay = Buffer.from(`
        <svg width="1320" height="${heroH}" xmlns="http://www.w3.org/2000/svg">
          <!-- Top corners -->
          <path d="M 60,0 L 60,24 A 24 24 0 0 1 84,0 Z" fill="${t.outerBg}" />
          <path d="M 1260,0 L 1260,24 A 24 24 0 0 0 1236,0 Z" fill="${t.outerBg}" />
          <!-- Bottom corners -->
          <path d="M 60,${heroH - 24} L 60,${heroH} L 84,${heroH} A 24 24 0 0 1 60,${heroH - 24} Z" fill="${t.outerBg}" />
          <path d="M 1260,${heroH - 24} L 1260,${heroH} L 1236,${heroH} A 24 24 0 0 0 1260,${heroH - 24} Z" fill="${t.outerBg}" />
        </svg>
      `);
      const rounded = await sharp(heroPath)
        .composite([{ input: cornerOverlay, blend: 'over' }])
        .png()
        .toBuffer();
      fs.writeFileSync(heroPath, rounded);
    }

    // ==========================================
    // 2. CARD 2 (Trabajadores): Ensure rounded top and bottom corners
    // ==========================================
    const trabPath = path.join(blocksDir, `saasw-02-trabajadores-${t.id}.png`);
    if (fs.existsSync(trabPath)) {
      const trabMeta = await sharp(trabPath).metadata();
      const trabH = trabMeta.height;
      const trabOverlay = Buffer.from(`
        <svg width="1320" height="${trabH}" xmlns="http://www.w3.org/2000/svg">
          <!-- Top corners -->
          <path d="M 60,0 L 60,24 A 24 24 0 0 1 84,0 Z" fill="${t.outerBg}" />
          <path d="M 1260,0 L 1260,24 A 24 24 0 0 0 1236,0 Z" fill="${t.outerBg}" />
          <!-- Bottom corners -->
          <path d="M 60,${trabH - 24} L 60,${trabH} L 84,${trabH} A 24 24 0 0 1 60,${trabH - 24} Z" fill="${t.outerBg}" />
          <path d="M 1260,${trabH - 24} L 1260,${trabH} L 1236,${trabH} A 24 24 0 0 0 1260,${trabH - 24} Z" fill="${t.outerBg}" />
        </svg>
      `);
      const rounded = await sharp(trabPath)
        .composite([{ input: trabOverlay, blend: 'over' }])
        .png()
        .toBuffer();
      fs.writeFileSync(trabPath, rounded);
    }

    // ==========================================
    // 3. CARD 3 (CTA): Clean, uniform card with 24px rounded corners
    // ==========================================
    const ctaPath = path.join(blocksDir, `saasw-03-cta-${t.id}.png`);
    const ctaH = 630;
    const ctaCardBg = t.id === 'claro' ? '#FFFFFF' : '#0F172A';
    const ctaCardBorder = t.id === 'claro' ? '#E2E8F0' : '#1E293B';
    const ctaEyebrowColor = t.id === 'claro' ? '#0284C7' : '#38BDF8';
    const ctaTitleColor = t.id === 'claro' ? '#0F172A' : '#F8FAFC';
    const ctaDescColor = t.id === 'claro' ? '#475569' : '#94A3B8';
    const ctaSubtextColor = t.id === 'claro' ? '#64748B' : '#64748B';

    const ctaSvg = `
      <svg width="1320" height="${ctaH}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ctaBtnGrad_${t.id}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1F6E91" />
            <stop offset="60%" stop-color="#4A64A0" />
            <stop offset="100%" stop-color="#6E5C98" />
          </linearGradient>
        </defs>
        <rect width="1320" height="${ctaH}" fill="${t.outerBg}" />
        <rect x="60" y="0" width="1200" height="${ctaH}" rx="24" ry="24" fill="${ctaCardBg}" stroke="${ctaCardBorder}" stroke-width="1.5" />
        
        <!-- Eyebrow -->
        <text x="660" y="90" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" letter-spacing="2" fill="${ctaEyebrowColor}">
          DIAGNÓSTICO COGNITIVO · 30 MINUTOS
        </text>

        <!-- Título -->
        <text x="660" y="160" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="${ctaTitleColor}">
          ¿Exploramos qué proceso de su oficina TIC podemos liberar
        </text>
        <text x="660" y="210" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="${ctaTitleColor}">
          este mes?
        </text>

        <!-- Descripción -->
        <text x="660" y="280" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="400" fill="${ctaDescColor}">
          Agende una sesión técnica de 30 minutos. Evaluaremos uno de sus cuellos de
        </text>
        <text x="660" y="320" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="400" fill="${ctaDescColor}">
          botella operativos y le entregaremos una estimación contable de ahorro y tiempos.
        </text>

        <!-- Botón CTA -->
        <rect x="340" y="380" width="640" height="96" rx="16" ry="16" fill="url(#ctaBtnGrad_${t.id})" />
        <text x="660" y="440" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="700" fill="#FFFFFF">
          Agendar Diagnóstico Cognitivo (30 min) →
        </text>

        <!-- Subtexto -->
        <text x="660" y="540" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="21" font-weight="400" fill="${ctaSubtextColor}">
          Sin formularios eternos: seleccione día y hora directamente en nuestra plataforma.
        </text>
      </svg>
    `;
    const ctaBuffer = await sharp(Buffer.from(ctaSvg)).png().toBuffer();
    fs.writeFileSync(ctaPath, ctaBuffer);

    // ==========================================
    // 4. MASTER CARD 4: ECOSISTEMA (Rounded card with top and bottom rx=24)
    // ==========================================
    const ecoSvg = `
    <svg width="1320" height="390" viewBox="0 0 1320 390" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .eco-label { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; font-weight: 700; letter-spacing: 2.2px; fill: ${t.textMuted}; text-anchor: middle; }
          .eco-title-gloc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 25px; font-weight: 700; fill: ${t.btnGlocText}; }
          .eco-title-homo { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 25px; font-weight: 700; fill: ${t.btnHomoText}; }
          .eco-title-pre  { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 25px; font-weight: 700; fill: ${t.btnPreText}; }
          .eco-desc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 21px; font-weight: 400; fill: ${t.textMuted}; }
          .pill-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 19px; font-weight: 700; fill: #FFFFFF; text-anchor: middle; }
        </style>
      </defs>
      <rect width="1320" height="390" fill="${t.outerBg}"/>
      <rect x="60" y="0" width="1200" height="382" rx="24" ry="24" fill="${t.cardBg}"/>

      <!-- 1. HEADER ECOSISTEMA -->
      <text x="660" y="44" class="eco-label">EXPLORE NUESTRO ECOSISTEMA EN VIVO:</text>

      <!-- 2. BOTÓN GLOCATION.CO (y=62, h=92) -->
      <g transform="translate(96, 62)">
        <rect width="1128" height="92" rx="16" ry="16" fill="${t.btnGlocBg}" stroke="${t.btnGlocBorder}" stroke-width="2"/>
        <circle cx="48" cy="46" r="24" fill="${t.btnGlocBorder}" opacity="0.4"/>
        <text x="48" y="55" font-size="28" text-anchor="middle">🌐</text>
        <text x="92" y="55" class="eco-title-gloc">glocation.co <tspan class="eco-desc">· Plataforma Comercial SaaSW</tspan></text>
        <rect x="960" y="22" width="144" height="48" rx="10" ry="10" fill="${t.btnGlocPill}"/>
        <text x="1032" y="53" class="pill-text">Visitar →</text>
      </g>

      <!-- 3. BOTÓN HOMOAGENTICUS.CO (y=166, h=92) -->
      <g transform="translate(96, 166)">
        <rect width="1128" height="92" rx="16" ry="16" fill="${t.btnHomoBg}" stroke="${t.btnHomoBorder}" stroke-width="2"/>
        <circle cx="48" cy="46" r="24" fill="${t.btnHomoBorder}" opacity="0.4"/>
        <text x="48" y="55" font-size="28" text-anchor="middle">📖</text>
        <text x="92" y="55" class="eco-title-homo">homoagenticus.co <tspan class="eco-desc">· El Manifiesto del Homo agenticus</tspan></text>
        <rect x="960" y="22" width="144" height="48" rx="10" ry="10" fill="${t.btnHomoPill}"/>
        <text x="1032" y="53" class="pill-text">Leer →</text>
      </g>

      <!-- 4. BOTÓN PREAGENTICA (y=270, h=92) -->
      <g transform="translate(96, 270)">
        <rect width="1128" height="92" rx="16" ry="16" fill="${t.btnPreBg}" stroke="${t.btnPreBorder}" stroke-width="2"/>
        <circle cx="48" cy="46" r="24" fill="${t.btnPreBorder}" opacity="0.4"/>
        <text x="48" y="55" font-size="28" text-anchor="middle">🏛️</text>
        <text x="92" y="55" class="eco-title-pre">preagentica.glocation.co <tspan class="eco-desc">· Nuestra Herencia Pre-IA</tspan></text>
        <rect x="960" y="22" width="144" height="48" rx="10" ry="10" fill="${t.btnPrePill}"/>
        <text x="1032" y="53" class="pill-text">Conocer →</text>
      </g>
    </svg>`;

    const ecoBuf = await sharp(Buffer.from(ecoSvg)).png().toBuffer();
    fs.writeFileSync(path.join(blocksDir, `saasw-04-ecosistema-${t.id}.png`), ecoBuf);

    // Slices de Card 4 (Ecosistema):
    await sharp(ecoBuf).extract({ left: 0, top: 0, width: 1320, height: 160 })
      .png().toFile(path.join(blocksDir, `saasw-04a-eco-glocation-${t.id}.png`));

    await sharp(ecoBuf).extract({ left: 0, top: 160, width: 1320, height: 106 })
      .png().toFile(path.join(blocksDir, `saasw-04b-eco-homoagenticus-${t.id}.png`));

    await sharp(ecoBuf).extract({ left: 0, top: 266, width: 1320, height: 124 })
      .png().toFile(path.join(blocksDir, `saasw-04c-eco-preagentica-${t.id}.png`));

    // ==========================================
    // 5. MASTER CARD 5: FIRMA & BOTONES (Rounded card with top and bottom rx=24)
    // ==========================================
    const firmaSvg = `
    <svg width="1320" height="320" viewBox="0 0 1320 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="avatar-clip-${t.id}">
          <circle cx="150" cy="188" r="50"/>
        </clipPath>
        <style>
          .cintillo { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 18px; font-weight: 700; letter-spacing: 1.5px; fill: ${t.textMuted}; text-anchor: middle; }
          .name { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 27px; font-weight: 800; fill: ${t.textMain}; }
          .role { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 19px; font-weight: 500; fill: ${t.textMuted}; }
          .company { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 18px; font-weight: 700; fill: ${t.roleColor}; }
          .mail { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 19px; font-weight: 600; fill: ${t.btnGlocText}; text-decoration: underline; }
          .btn-title-gloc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; font-weight: 800; fill: ${t.btnGlocText}; text-anchor: middle; }
          .btn-title-homo { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 19px; font-weight: 800; fill: ${t.btnHomoText}; text-anchor: middle; }
          .btn-sub { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 500; fill: ${t.textMuted}; text-anchor: middle; }
        </style>
      </defs>
      <rect width="1320" height="320" fill="${t.outerBg}"/>
      <rect x="60" y="0" width="1200" height="312" rx="24" ry="24" fill="${t.cardBg}"/>

      <!-- 1. CINTILLO HOLDING (y: 0 - 66, h=66) -->
      <path d="M 84,0 L 1236,0 A 24 24 0 0 1 1260,24 L 1260,66 L 60,66 L 60,24 A 24 24 0 0 1 84,0 Z" fill="${t.subtleBg}"/>
      <line x1="60" y1="66" x2="1260" y2="66" stroke="${t.divider}" stroke-width="2"/>
      <text x="660" y="41" class="cintillo">HOLDING SERVINFORMACIÓN (27 AÑOS)   •   GOOGLE CLOUD PREMIER PARTNER   •   NORMA ISO 27001</text>

      <!-- 2. FIRMA PAULA ROZO + AVATAR (y: 66 - 312, h=246) -->
      <circle cx="150" cy="188" r="53" fill="${t.avatarBorder}"/>
      <image href="${t.paulaAvatarB64}" x="100" y="138" width="100" height="100" clip-path="url(#avatar-clip-${t.id})"/>
      <text x="224" y="152" class="name">Paula Rozo</text>
      <text x="224" y="182" class="role">BDR · Business Development Representative</text>
      <text x="224" y="210" class="company">GLocation SAS · Transformación Cognitiva</text>
      <text x="224" y="240" class="mail">✉️ paula.rozo@glocation.com.co</text>

      <!-- 3. BOTÓN GLOCATION.CO -->
      <g transform="translate(740, 120)">
        <rect width="230" height="136" rx="14" ry="14" fill="${t.btnGlocBg}" stroke="${t.btnGlocBorder}" stroke-width="2"/>
        <text x="115" y="48" font-size="30" text-anchor="middle">🌐</text>
        <text x="115" y="82" class="btn-title-gloc">glocation.co</text>
        <text x="115" y="110" class="btn-sub">Plataforma →</text>
      </g>

      <!-- 4. BOTÓN HOMOAGENTICUS.CO -->
      <g transform="translate(994, 120)">
        <rect width="230" height="136" rx="14" ry="14" fill="${t.btnHomoBg}" stroke="${t.btnHomoBorder}" stroke-width="2"/>
        <text x="115" y="48" font-size="30" text-anchor="middle">📖</text>
        <text x="115" y="82" class="btn-title-homo">homoagenticus.co</text>
        <text x="115" y="110" class="btn-sub">Manifiesto →</text>
      </g>
    </svg>`;

    const firmaBuf = await sharp(Buffer.from(firmaSvg)).png().toBuffer();
    fs.writeFileSync(path.join(blocksDir, `saasw-05-firma-${t.id}.png`), firmaBuf);

    // Slices de Card 5 (Firma):
    await sharp(firmaBuf).extract({ left: 0, top: 0, width: 1320, height: 66 })
      .png().toFile(path.join(blocksDir, `saasw-05a-cintillo-${t.id}.png`));

    await sharp(firmaBuf).extract({ left: 0, top: 66, width: 730, height: 254 })
      .png().toFile(path.join(blocksDir, `saasw-05b-firma-paula-${t.id}.png`));

    await sharp(firmaBuf).extract({ left: 730, top: 66, width: 250, height: 254 })
      .png().toFile(path.join(blocksDir, `saasw-05c-boton-glocation-${t.id}.png`));

    await sharp(firmaBuf).extract({ left: 980, top: 66, width: 340, height: 254 })
      .png().toFile(path.join(blocksDir, `saasw-05d-boton-homoagenticus-${t.id}.png`));
  }

  console.log('✓ Cards and slices rebuilt with crisp rounded corners!');
}

buildAllCards();
