const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const blocksDir = path.join(__dirname, '../public/email-blocks');
const publicDir = path.join(__dirname, '../public');
const recursosDir = path.join(__dirname, '../recursos');

async function buildAll() {
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
    // 1. ROUND CARD 1 (Hero): Round the bottom corners
    // ==========================================
    const heroPath = path.join(blocksDir, `saasw-01-hero-${t.id}.png`);
    if (fs.existsSync(heroPath)) {
      const heroMeta = await sharp(heroPath).metadata();
      // Mask: top is already rounded, round the bottom corners at y = height - 24
      const heroH = heroMeta.height;
      const cornerOverlay = Buffer.from(`
        <svg width="1320" height="${heroH}" xmlns="http://www.w3.org/2000/svg">
          <!-- Cut bottom corners with outerBg -->
          <path d="M 60,${heroH - 24} L 60,${heroH} L 84,${heroH} A 24 24 0 0 1 60,${heroH - 24} Z" fill="${t.outerBg}" />
          <path d="M 1260,${heroH - 24} L 1260,${heroH} L 1236,${heroH} A 24 24 0 0 0 1260,${heroH - 24} Z" fill="${t.outerBg}" />
          <!-- Small bottom margin of outerBg (bottom 10px) -->
          <rect x="0" y="${heroH - 8}" width="1320" height="8" fill="${t.outerBg}" />
        </svg>
      `);
      await sharp(heroPath)
        .composite([{ input: cornerOverlay, blend: 'over' }])
        .png()
        .toFile(path.join(blocksDir, `saasw-01-hero-${t.id}-rounded.png`));
      // Overwrite the original
      fs.copyFileSync(
        path.join(blocksDir, `saasw-01-hero-${t.id}-rounded.png`),
        path.join(blocksDir, `saasw-01-hero-${t.id}.png`)
      );
      fs.unlinkSync(path.join(blocksDir, `saasw-01-hero-${t.id}-rounded.png`));
    }

    // ==========================================
    // 2. ROUND CARD 2 (Trabajadores): Round top & bottom corners
    // ==========================================
    const trabPath = path.join(blocksDir, `saasw-02-trabajadores-${t.id}.png`);
    if (fs.existsSync(trabPath)) {
      const trabMeta = await sharp(trabPath).metadata();
      const trabH = trabMeta.height;
      const trabOverlay = Buffer.from(`
        <svg width="1320" height="${trabH}" xmlns="http://www.w3.org/2000/svg">
          <!-- Top outerBg padding 8px -->
          <rect x="0" y="0" width="1320" height="8" fill="${t.outerBg}" />
          <!-- Top corners -->
          <path d="M 60,8 L 60,32 A 24 24 0 0 1 84,8 Z" fill="${t.outerBg}" />
          <path d="M 1260,8 L 1260,32 A 24 24 0 0 0 1236,8 Z" fill="${t.outerBg}" />
          <!-- Bottom corners -->
          <path d="M 60,${trabH - 32} L 60,${trabH - 8} L 84,${trabH - 8} A 24 24 0 0 1 60,${trabH - 32} Z" fill="${t.outerBg}" />
          <path d="M 1260,${trabH - 32} L 1260,${trabH - 8} L 1236,${trabH - 8} A 24 24 0 0 0 1260,${trabH - 32} Z" fill="${t.outerBg}" />
          <!-- Bottom outerBg padding 8px -->
          <rect x="0" y="${trabH - 8}" width="1320" height="8" fill="${t.outerBg}" />
        </svg>
      `);
      await sharp(trabPath)
        .composite([{ input: trabOverlay, blend: 'over' }])
        .png()
        .toFile(path.join(blocksDir, `saasw-02-trabajadores-${t.id}-rounded.png`));
      fs.copyFileSync(
        path.join(blocksDir, `saasw-02-trabajadores-${t.id}-rounded.png`),
        path.join(blocksDir, `saasw-02-trabajadores-${t.id}.png`)
      );
      fs.unlinkSync(path.join(blocksDir, `saasw-02-trabajadores-${t.id}-rounded.png`));
    }

    // ==========================================
    // 3. ROUND CARD 3 (CTA): Round top & bottom corners
    // ==========================================
    const ctaPath = path.join(blocksDir, `saasw-03-cta-${t.id}.png`);
    if (fs.existsSync(ctaPath)) {
      const ctaMeta = await sharp(ctaPath).metadata();
      const ctaH = ctaMeta.height;
      const ctaOverlay = Buffer.from(`
        <svg width="1320" height="${ctaH}" xmlns="http://www.w3.org/2000/svg">
          <!-- Top outerBg padding 8px -->
          <rect x="0" y="0" width="1320" height="8" fill="${t.outerBg}" />
          <!-- Top corners -->
          <path d="M 60,8 L 60,32 A 24 24 0 0 1 84,8 Z" fill="${t.outerBg}" />
          <path d="M 1260,8 L 1260,32 A 24 24 0 0 0 1236,8 Z" fill="${t.outerBg}" />
          <!-- Bottom corners -->
          <path d="M 60,${ctaH - 32} L 60,${ctaH - 8} L 84,${ctaH - 8} A 24 24 0 0 1 60,${ctaH - 32} Z" fill="${t.outerBg}" />
          <path d="M 1260,${ctaH - 32} L 1260,${ctaH - 8} L 1236,${ctaH - 8} A 24 24 0 0 0 1260,${ctaH - 32} Z" fill="${t.outerBg}" />
          <!-- Bottom outerBg padding 8px -->
          <rect x="0" y="${ctaH - 8}" width="1320" height="8" fill="${t.outerBg}" />
        </svg>
      `);
      await sharp(ctaPath)
        .composite([{ input: ctaOverlay, blend: 'over' }])
        .png()
        .toFile(path.join(blocksDir, `saasw-03-cta-${t.id}-rounded.png`));
      fs.copyFileSync(
        path.join(blocksDir, `saasw-03-cta-${t.id}-rounded.png`),
        path.join(blocksDir, `saasw-03-cta-${t.id}.png`)
      );
      fs.unlinkSync(path.join(blocksDir, `saasw-03-cta-${t.id}-rounded.png`));
    }

    // ==========================================
    // 4. MASTER CARD 4: ECOSISTEMA (Rounded card with top and bottom rx=24)
    // Total height: 390px. Card: x=60, y=0, width=1200, height=382, rx=24 ry=24
    // Slices:
    //   4A: y=0, h=160 (Header + glocation.co) -> Top is rounded
    //   4B: y=160, h=106 (homoagenticus.co) -> Middle straight
    //   4C: y=266, h=124 (preagentica.co) -> Bottom is rounded (ends at 390)
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
    // 4A: y=0, h=160
    await sharp(ecoBuf).extract({ left: 0, top: 0, width: 1320, height: 160 })
      .png().toFile(path.join(blocksDir, `saasw-04a-eco-glocation-${t.id}.png`));

    // 4B: y=160, h=106
    await sharp(ecoBuf).extract({ left: 0, top: 160, width: 1320, height: 106 })
      .png().toFile(path.join(blocksDir, `saasw-04b-eco-homoagenticus-${t.id}.png`));

    // 4C: y=266, h=124
    await sharp(ecoBuf).extract({ left: 0, top: 266, width: 1320, height: 124 })
      .png().toFile(path.join(blocksDir, `saasw-04c-eco-preagentica-${t.id}.png`));

    // ==========================================
    // 5. MASTER CARD 5: FIRMA & BOTONES (Rounded card with top and bottom rx=24)
    // Total height: 320px. Card: x=60, y=0, width=1200, height=312, rx=24 ry=24
    // Slices:
    //   5A: y=0, h=66 (Cintillo Holding) -> Top is rounded rx=24
    //   5 Row: y=66, h=254 (Paula + 2 Buttons) -> Bottom is rounded rx=24
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

      <!-- 1. CINTILLO HOLDING CON BORDES SUPERIORES REDONDEADOS (y: 0 - 66, h=66) -->
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
    // 5A: Cintillo (y=0, h=66) -> Rounded top corners
    await sharp(firmaBuf).extract({ left: 0, top: 0, width: 1320, height: 66 })
      .png().toFile(path.join(blocksDir, `saasw-05a-cintillo-${t.id}.png`));

    // 5B: Paula Rozo (left: 0, top: 66, width: 730, height: 254) -> Rounded bottom-left
    await sharp(firmaBuf).extract({ left: 0, top: 66, width: 730, height: 254 })
      .png().toFile(path.join(blocksDir, `saasw-05b-firma-paula-${t.id}.png`));

    // 5C: Botón glocation.co (left: 730, top: 66, width: 250, height: 254)
    await sharp(firmaBuf).extract({ left: 730, top: 66, width: 250, height: 254 })
      .png().toFile(path.join(blocksDir, `saasw-05c-boton-glocation-${t.id}.png`));

    // 5D: Botón homoagenticus.co (left: 980, top: 66, width: 340, height: 254) -> Rounded bottom-right
    await sharp(firmaBuf).extract({ left: 980, top: 66, width: 340, height: 254 })
      .png().toFile(path.join(blocksDir, `saasw-05d-boton-homoagenticus-${t.id}.png`));
  }

  console.log('✓ All 5 master cards and their internal slices generated with perfect rounded corners!');
}

buildAll();
