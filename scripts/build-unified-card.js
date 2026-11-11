const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const blocksDir = path.join(__dirname, '../public/email-blocks');

async function buildUnifiedCard() {
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

  // Master Dimensions:
  // Total image: 1320 x 700
  // Card: x=60 to 1260 (width 1200, rx=24 ry=24), y=0 to 670 (height 670)
  // Outer margin: 60px left/right, 30px bottom
  for (const t of themes) {
    const masterSvg = `
    <svg width="1320" height="700" viewBox="0 0 1320 700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="avatar-clip-${t.id}">
          <circle cx="150" cy="552" r="50"/>
        </clipPath>
        <style>
          .eco-label { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; font-weight: 700; letter-spacing: 2.2px; fill: ${t.textMuted}; text-anchor: middle; }
          .eco-title-gloc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 25px; font-weight: 700; fill: ${t.btnGlocText}; }
          .eco-title-homo { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 25px; font-weight: 700; fill: ${t.btnHomoText}; }
          .eco-title-pre  { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 25px; font-weight: 700; fill: ${t.btnPreText}; }
          .eco-desc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 21px; font-weight: 400; fill: ${t.textMuted}; }
          .pill-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 19px; font-weight: 700; fill: #FFFFFF; text-anchor: middle; }
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

      <!-- Fondo exterior continuo -->
      <rect width="1320" height="700" fill="${t.outerBg}"/>

      <!-- TARJETA BLANCA ÚNICA CONTINUA (width=1200, height=670, rx=24 ry=24) -->
      <rect x="60" y="0" width="1200" height="670" rx="24" ry="24" fill="${t.cardBg}"/>

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

      <!-- 5. CINTILLO HOLDING (y: 382 - 442, h=60) -->
      <rect x="60" y="382" width="1200" height="60" fill="${t.subtleBg}"/>
      <line x1="60" y1="382" x2="1260" y2="382" stroke="${t.divider}" stroke-width="2"/>
      <line x1="60" y1="442" x2="1260" y2="442" stroke="${t.divider}" stroke-width="2"/>
      <text x="660" y="419" class="cintillo">HOLDING SERVINFORMACIÓN (27 AÑOS)   •   GOOGLE CLOUD PREMIER PARTNER   •   NORMA ISO 27001</text>

      <!-- 6. SECCIÓN FIRMA Y REDES (y: 442 - 670, h=228) -->
      <!-- Paula Rozo Avatar & Info -->
      <circle cx="150" cy="552" r="53" fill="${t.avatarBorder}"/>
      <image href="${t.paulaAvatarB64}" x="100" y="502" width="100" height="100" clip-path="url(#avatar-clip-${t.id})"/>
      <text x="224" y="516" class="name">Paula Rozo</text>
      <text x="224" y="546" class="role">BDR · Business Development Representative</text>
      <text x="224" y="574" class="company">GLocation SAS · Transformación Cognitiva</text>
      <text x="224" y="604" class="mail">✉️ paula.rozo@glocation.com.co</text>

      <!-- Botón glocation.co -->
      <g transform="translate(740, 484)">
        <rect width="230" height="136" rx="14" ry="14" fill="${t.btnGlocBg}" stroke="${t.btnGlocBorder}" stroke-width="2"/>
        <text x="115" y="48" font-size="30" text-anchor="middle">🌐</text>
        <text x="115" y="82" class="btn-title-gloc">glocation.co</text>
        <text x="115" y="110" class="btn-sub">Plataforma →</text>
      </g>

      <!-- Botón homoagenticus.co -->
      <g transform="translate(994, 484)">
        <rect width="230" height="136" rx="14" ry="14" fill="${t.btnHomoBg}" stroke="${t.btnHomoBorder}" stroke-width="2"/>
        <text x="115" y="48" font-size="30" text-anchor="middle">📖</text>
        <text x="115" y="82" class="btn-title-homo">homoagenticus.co</text>
        <text x="115" y="110" class="btn-sub">Manifiesto →</text>
      </g>
    </svg>`;

    // Step 1: Generate Master Unified PNG (saasw-04-ecosistema-firma-*.png)
    const masterBuf = await sharp(Buffer.from(masterSvg))
      .png({ quality: 100 })
      .toBuffer();

    const masterName = `saasw-04-ecosistema-firma-${t.id}.png`;
    fs.writeFileSync(path.join(blocksDir, masterName), masterBuf);
    console.log(`Generated master image: ${masterName} (1320 x 700)`);

    // Step 2: Slice the exact master image into seamless horizontal/vertical pieces
    // Cut boundaries:
    // Slice 1: y=0 to 160 (Height 160) -> Header + Button glocation.co
    // Slice 2: y=160 to 264 (Height 104) -> Button homoagenticus.co
    // Slice 3: y=264 to 376 (Height 112) -> Button preagentica.glocation.co
    // Slice 4: y=376 to 442 (Height 66)  -> Cintillo Holding
    // Row 5: y=442 to 700 (Height 258) -> Sliced vertically into 3 columns:
    //   5a: x=0 to 720 (width 720) -> Paula Avatar + Texts
    //   5b: x=720 to 982 (width 262) -> Button glocation.co
    //   5c: x=982 to 1320 (width 338) -> Button homoagenticus.co

    // 4A: Header + glocation.co
    await sharp(masterBuf)
      .extract({ left: 0, top: 0, width: 1320, height: 160 })
      .png({ quality: 100 })
      .toFile(path.join(blocksDir, `saasw-04a-eco-glocation-${t.id}.png`));

    // 4B: homoagenticus.co
    await sharp(masterBuf)
      .extract({ left: 0, top: 160, width: 1320, height: 104 })
      .png({ quality: 100 })
      .toFile(path.join(blocksDir, `saasw-04b-eco-homoagenticus-${t.id}.png`));

    // 4C: preagentica.glocation.co
    await sharp(masterBuf)
      .extract({ left: 0, top: 264, width: 1320, height: 112 })
      .png({ quality: 100 })
      .toFile(path.join(blocksDir, `saasw-04c-eco-preagentica-${t.id}.png`));

    // 5A: Cintillo Holding
    await sharp(masterBuf)
      .extract({ left: 0, top: 376, width: 1320, height: 66 })
      .png({ quality: 100 })
      .toFile(path.join(blocksDir, `saasw-05a-cintillo-${t.id}.png`));

    // 5B: Paula Rozo
    await sharp(masterBuf)
      .extract({ left: 0, top: 442, width: 720, height: 258 })
      .png({ quality: 100 })
      .toFile(path.join(blocksDir, `saasw-05b-firma-paula-${t.id}.png`));

    // 5C: Botón glocation.co
    await sharp(masterBuf)
      .extract({ left: 720, top: 442, width: 262, height: 258 })
      .png({ quality: 100 })
      .toFile(path.join(blocksDir, `saasw-05c-boton-glocation-${t.id}.png`));

    // 5D: Botón homoagenticus.co
    await sharp(masterBuf)
      .extract({ left: 982, top: 442, width: 338, height: 258 })
      .png({ quality: 100 })
      .toFile(path.join(blocksDir, `saasw-05d-boton-homoagenticus-${t.id}.png`));

    console.log(`Generated seamless slices for ${t.id}`);
  }
}

buildUnifiedCard().catch(console.error);
