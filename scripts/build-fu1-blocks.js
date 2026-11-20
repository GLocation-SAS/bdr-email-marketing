const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const blocksDir = path.join(__dirname, '../public/email-blocks');
const iconsDir = path.join(__dirname, '../public/email-icons');

async function buildFu1Blocks() {
  console.log('Generating FU1 blocks...');

  // 1. Assets
  const logoBuf = fs.readFileSync(path.join(iconsDir, 'logo-glocation-claro.png'));
  const logoB64 = `data:image/png;base64,${logoBuf.toString('base64')}`;

  const paulaBuf = fs.readFileSync(path.join(iconsDir, 'avatar-paula-light.png'));
  const paulaB64 = `data:image/png;base64,${paulaBuf.toString('base64')}`;

  const fontFam = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  // Palette
  const cardBg = '#FFFFFF';
  const textDark = '#0F172A';
  const textMuted = '#64748B';
  const textBody = '#334155';
  const bluePrimary = '#0284C7';
  const blueBorder = '#B8DCF0';
  const blueBgSubtle = '#F0F7FB';
  const cardBorder = '#E2EBF5';

  // ==========================================
  // BLOCK 01: Encabezado (Logo + Holding) - 1200 x 150
  // ==========================================
  const svg01 = `
  <svg width="1200" height="150" viewBox="0 0 1200 150" xmlns="http://www.w3.org/2000/svg">
    <!-- Top rounded corners -->
    <path d="M 0,24 Q 0,0 24,0 L 1176,0 Q 1200,0 1200,24 L 1200,150 L 0,150 Z" fill="${cardBg}"/>
    
    <!-- Logo GLocation -->
    <image href="${logoB64}" x="60" y="46" width="220" height="58" preserveAspectRatio="xMidYMid meet"/>
    
    <!-- Holding Servinformación -->
    <text x="1140" y="74" text-anchor="end" font-family="${fontFam}" font-size="19" font-weight="700" letter-spacing="1.8" fill="${textMuted}">
      HOLDING SERVINFORMACIÓN
    </text>
    <text x="1140" y="98" text-anchor="end" font-family="${fontFam}" font-size="14" font-weight="600" letter-spacing="1" fill="${bluePrimary}">
      GOOGLE CLOUD PREMIER PARTNER
    </text>
    
    <line x1="60" y1="149" x2="1140" y2="149" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg01)).png().toFile(path.join(blocksDir, 'saasw-fu1-01-encabezado-claro.png'));

  // ==========================================
  // BLOCK 02: Apertura (Pill + Título + Saludo + Pregunta) - 1200 x 580
  // ==========================================
  const svg02 = `
  <svg width="1200" height="580" viewBox="0 0 1200 580" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="580" fill="${cardBg}"/>

    <!-- Eyebrow Pill -->
    <g transform="translate(60, 36)">
      <rect width="460" height="48" rx="24" ry="24" fill="#EFF6FF" stroke="${blueBorder}" stroke-width="1.5"/>
      <circle cx="28" cy="24" r="6" fill="${bluePrimary}"/>
      <text x="46" y="31" font-family="${fontFam}" font-size="19" font-weight="700" letter-spacing="1.2" fill="${bluePrimary}">
        CASO DE USO · TC-PMO · OFICINA TIC
      </text>
    </g>

    <!-- Headline -->
    <text x="60" y="150" font-family="${fontFam}" font-size="46" font-weight="800" fill="${textDark}" letter-spacing="-0.5">
      Del informe del contratista al acta,
    </text>
    <text x="60" y="206" font-family="${fontFam}" font-size="46" font-weight="800" fill="${bluePrimary}" letter-spacing="-0.5">
      lista para revisión.
    </text>

    <!-- Greeting & Intro (Bigger readable text with comfortable margins) -->
    <text x="60" y="272" font-family="${fontFam}" font-size="26" font-weight="700" fill="${textDark}">
      Estimado(a) Líder de Tecnología:
    </text>
    <text x="60" y="318" font-family="${fontFam}" font-size="24" font-weight="400" fill="${textBody}">
      La semana pasada le escribí sobre fuerza laboral cognitiva para su Oficina TIC.
    </text>
    <text x="60" y="358" font-family="${fontFam}" font-size="24" font-weight="400" fill="${textBody}">
      Hoy quiero mostrarle cómo podría aplicarse a una tarea administrativa concreta:
    </text>
    <text x="60" y="398" font-family="${fontFam}" font-size="24" font-weight="700" fill="${textDark}">
      revisar entregables de contratistas y preparar las actas correspondientes.
    </text>

    <!-- Question Box (Storytelling Curiosidad) -->
    <g transform="translate(60, 440)">
      <rect width="1080" height="100" rx="14" ry="14" fill="#F0F7FB" stroke="${blueBorder}" stroke-width="1.5"/>
      <text x="36" y="44" font-family="${fontFam}" font-size="24" font-weight="700" fill="${bluePrimary}">
        ¿Qué sucede cuando lo reportado no coincide con lo contratado?
      </text>
      <text x="36" y="76" font-family="${fontFam}" font-size="20" font-weight="400" fill="${textMuted}">
        El supervisor debe contrastar informes contra TDR, cronograma y plan de pagos antes de firmar.
      </text>
    </g>

    <line x1="60" y1="568" x2="1140" y2="568" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg02)).png().toFile(path.join(blocksDir, 'saasw-fu1-02-apertura-claro.png'));

  // ==========================================
  // BLOCK 03: Pasos (4 pasos visuales con alertas/dashboards/control humano) - 1200 x 690
  // ==========================================
  const svg03 = `
  <svg width="1200" height="690" viewBox="0 0 1200 690" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="690" fill="${cardBg}"/>

    <text x="60" y="56" font-family="${fontFam}" font-size="30" font-weight="800" fill="${textDark}">
      Así apoya TC-PMO a su Oficina TIC en 4 pasos:
    </text>

    <!-- Step 1 -->
    <g transform="translate(60, 95)">
      <rect width="1080" height="120" rx="14" ry="14" fill="#F8FAFC" stroke="${cardBorder}" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="28" fill="${bluePrimary}"/>
      <text x="55" y="70" text-anchor="middle" font-family="${fontFam}" font-size="28" font-weight="800" fill="#FFFFFF">1</text>
      <text x="110" y="48" font-family="${fontFam}" font-size="25" font-weight="700" fill="${textDark}">Llegan los informes de avance</text>
      <text x="110" y="85" font-family="${fontFam}" font-size="21" font-weight="400" fill="${textMuted}">Entregables mensuales, bitácoras y anexos técnicos radicados por contratistas.</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(60, 235)">
      <rect width="1080" height="120" rx="14" ry="14" fill="#F8FAFC" stroke="${cardBorder}" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="28" fill="${bluePrimary}"/>
      <text x="55" y="70" text-anchor="middle" font-family="${fontFam}" font-size="28" font-weight="800" fill="#FFFFFF">2</text>
      <text x="110" y="48" font-family="${fontFam}" font-size="25" font-weight="700" fill="${textDark}">TC-PMO los contrasta con TDR, cronograma y plan de pagos</text>
      <text x="110" y="85" font-family="${fontFam}" font-size="21" font-weight="400" fill="${textMuted}">Coteja de forma cruzada cada actividad contra obligaciones contractuales pactadas.</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(60, 375)">
      <rect width="1080" height="120" rx="14" ry="14" fill="#F8FAFC" stroke="${cardBorder}" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="28" fill="${bluePrimary}"/>
      <text x="55" y="70" text-anchor="middle" font-family="${fontFam}" font-size="28" font-weight="800" fill="#FFFFFF">3</text>
      <text x="110" y="48" font-family="${fontFam}" font-size="25" font-weight="700" fill="${textDark}">TC-PMO prepara un borrador e identifica faltantes</text>
      <text x="110" y="85" font-family="${fontFam}" font-size="20" font-weight="400" fill="${textMuted}">Genera acta preliminar, resalta desvíos, dispara alertas y consolida dashboards.</text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(60, 515)">
      <rect width="1080" height="120" rx="14" ry="14" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="28" fill="#16A34A"/>
      <text x="55" y="70" text-anchor="middle" font-family="${fontFam}" font-size="28" font-weight="800" fill="#FFFFFF">4</text>
      <text x="110" y="48" font-family="${fontFam}" font-size="25" font-weight="700" fill="#14532D">El supervisor revisa, aprueba y firma</text>
      <text x="110" y="85" font-family="${fontFam}" font-size="21" font-weight="500" fill="#15803D">Control humano estricto: la tecnología prepara, su equipo verifica y decide.</text>
    </g>

    <line x1="60" y1="668" x2="1140" y2="668" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg03)).png().toFile(path.join(blocksDir, 'saasw-fu1-03-pasos-claro.png'));

  // ==========================================
  // BLOCK 04: Comparativo (Hoy vs TC-PMO + Otros trabajadores) - 1200 x 535
  // ==========================================
  const svg04 = `
  <svg width="1200" height="535" viewBox="0 0 1200 535" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="535" fill="${cardBg}"/>

    <!-- Left Box: Hoy -->
    <g transform="translate(60, 30)">
      <rect width="525" height="280" rx="16" ry="16" fill="#FEF2F2" stroke="#FECACA" stroke-width="1.5"/>
      <rect x="24" y="24" width="170" height="38" rx="8" ry="8" fill="#FEE2E2"/>
      <text x="109" y="49" text-anchor="middle" font-family="${fontFam}" font-size="18" font-weight="800" fill="#991B1B">
        ✕ HOY: MANUAL
      </text>
      <text x="24" y="108" font-family="${fontFam}" font-size="25" font-weight="700" fill="#991B1B">
        Redactar actas desde cero
      </text>
      <text x="24" y="152" font-family="${fontFam}" font-size="21" font-weight="400" fill="#7F1D1D">
        • El equipo revisa información dispersa
      </text>
      <text x="24" y="190" font-family="${fontFam}" font-size="21" font-weight="400" fill="#7F1D1D">
        • Desgaste en cotejo manual línea a línea
      </text>
      <text x="24" y="228" font-family="${fontFam}" font-size="21" font-weight="400" fill="#7F1D1D">
        • Faltantes no detectados hasta la radicación
      </text>
    </g>

    <!-- Right Box: Con TC-PMO -->
    <g transform="translate(615, 30)">
      <rect width="525" height="280" rx="16" ry="16" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
      <rect x="24" y="24" width="235" height="38" rx="8" ry="8" fill="#DCFCE7"/>
      <text x="141" y="49" text-anchor="middle" font-family="${fontFam}" font-size="18" font-weight="800" fill="#166534">
        ✓ CON TC-PMO: COGNITIVO
      </text>
      <text x="24" y="108" font-family="${fontFam}" font-size="25" font-weight="700" fill="#166534">
        Borrador preparado para revisión
      </text>
      <text x="24" y="152" font-family="${fontFam}" font-size="21" font-weight="500" fill="#14532D">
        • Borrador con faltantes identificados
      </text>
      <text x="24" y="190" font-family="${fontFam}" font-size="21" font-weight="500" fill="#14532D">
        • Dashboards y alertas consolidadas
      </text>
      <text x="24" y="228" font-family="${fontFam}" font-size="21" font-weight="500" fill="#14532D">
        • La tecnología prepara. Su equipo decide.
      </text>
    </g>

    <!-- Otros procesos banner -->
    <g transform="translate(60, 335)">
      <rect width="1080" height="155" rx="14" ry="14" fill="#F8FAFC" stroke="${cardBorder}" stroke-width="1.5"/>
      <text x="30" y="42" font-family="${fontFam}" font-size="20" font-weight="800" letter-spacing="1.2" fill="${textMuted}">
        OTROS PROCESOS DISPONIBLES EN SU OFICINA TIC:
      </text>
      <text x="30" y="86" font-family="${fontFam}" font-size="21" font-weight="700" fill="${bluePrimary}">
        ● TC-Workspace:
      </text>
      <text x="200" y="86" font-family="${fontFam}" font-size="20" font-weight="400" fill="${textBody}">
        Gobierna identidades corporativas, permisos de acceso mínimo y Drive (ISO 27001).
      </text>
      <text x="30" y="128" font-family="${fontFam}" font-size="21" font-weight="700" fill="#7C3AED">
        ● TC-Test (QA):
      </text>
      <text x="185" y="128" font-family="${fontFam}" font-size="20" font-weight="400" fill="${textBody}">
        Pruebas continuas multidispositivo y regresión CI/CD en 15 segundos antes de desplegar.
      </text>
    </g>

    <line x1="60" y1="518" x2="1140" y2="518" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg04)).png().toFile(path.join(blocksDir, 'saasw-fu1-04-comparativo-claro.png'));

  // ==========================================
  // BLOCK 05: CTA Diagnóstico Cognitivo - 1200 x 540
  // ==========================================
  const svg05 = `
  <svg width="1200" height="540" viewBox="0 0 1200 540" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1F6E91" />
        <stop offset="50%" stop-color="#4A64A0" />
        <stop offset="100%" stop-color="#6E5C98" />
      </linearGradient>
    </defs>
    <rect width="1200" height="540" fill="${cardBg}"/>

    <text x="600" y="65" text-anchor="middle" font-family="${fontFam}" font-size="21" font-weight="700" letter-spacing="2.2" fill="${bluePrimary}">
      DIAGNÓSTICO COGNITIVO · 30 MINUTOS
    </text>

    <text x="600" y="132" text-anchor="middle" font-family="${fontFam}" font-size="36" font-weight="800" fill="${textDark}">
      ¿Le gustaría explorar cómo funcionaría este proceso
    </text>
    <text x="600" y="178" text-anchor="middle" font-family="${fontFam}" font-size="36" font-weight="800" fill="${textDark}">
      en su Oficina TIC?
    </text>

    <text x="600" y="244" text-anchor="middle" font-family="${fontFam}" font-size="24" font-weight="400" fill="#475569">
      Agende una sesión técnica de 30 minutos. Evaluaremos uno de sus procesos
    </text>
    <text x="600" y="284" text-anchor="middle" font-family="${fontFam}" font-size="24" font-weight="400" fill="#475569">
      operativos y le mostraremos cómo liberar tiempo técnico sin perder el control.
    </text>

    <!-- Button -->
    <rect x="270" y="336" width="660" height="92" rx="16" ry="16" fill="url(#ctaGrad)"/>
    <text x="600" y="394" text-anchor="middle" font-family="${fontFam}" font-size="27" font-weight="700" fill="#FFFFFF">
      Agendar Diagnóstico Cognitivo (30 min) →
    </text>

    <text x="600" y="482" text-anchor="middle" font-family="${fontFam}" font-size="22" font-weight="400" fill="${textMuted}">
      Sin formularios extensos: seleccione fecha y hora en citas.glocation.co
    </text>

    <line x1="60" y1="524" x2="1140" y2="524" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg05)).png().toFile(path.join(blocksDir, 'saasw-fu1-05-cta-claro.png'));

  // ==========================================
  // BLOCK 06: Respuesta rápida - 1200 x 250
  // ==========================================
  const svg06 = `
  <svg width="1200" height="250" viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="250" fill="${cardBg}"/>

    <g transform="translate(60, 20)">
      <rect width="1080" height="210" rx="16" ry="16" fill="${blueBgSubtle}" stroke="${blueBorder}" stroke-width="1.5"/>
      <text x="540" y="56" text-anchor="middle" font-family="${fontFam}" font-size="25" font-weight="700" fill="#0369A1">
        Si prefiere no agendar todavía, responda con una sola palabra:
      </text>

      <!-- Pill 1: ACTAS (Destacada) -->
      <g transform="translate(195, 84)">
        <rect width="210" height="56" rx="12" ry="12" fill="#0284C7"/>
        <text x="105" y="36" text-anchor="middle" font-family="${fontFam}" font-size="23" font-weight="800" fill="#FFFFFF">ACTAS ★</text>
      </g>

      <!-- Pill 2: ACCESOS -->
      <g transform="translate(445, 84)">
        <rect width="200" height="56" rx="12" ry="12" fill="#FFFFFF" stroke="${blueBorder}" stroke-width="1.5"/>
        <text x="100" y="36" text-anchor="middle" font-family="${fontFam}" font-size="22" font-weight="700" fill="${bluePrimary}">ACCESOS</text>
      </g>

      <!-- Pill 3: PRUEBAS -->
      <g transform="translate(685, 84)">
        <rect width="200" height="56" rx="12" ry="12" fill="#FFFFFF" stroke="${blueBorder}" stroke-width="1.5"/>
        <text x="100" y="36" text-anchor="middle" font-family="${fontFam}" font-size="22" font-weight="700" fill="${bluePrimary}">PRUEBAS</text>
      </g>

      <text x="540" y="182" text-anchor="middle" font-family="${fontFam}" font-size="21" font-weight="500" fill="${textMuted}">
        Y le compartimos un ejemplo real de cómo opera el trabajador en su proceso.
      </text>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg06)).png().toFile(path.join(blocksDir, 'saasw-fu1-06-respuesta-claro.png'));

  // ==========================================
  // BLOCK 07: Banda Firma (Holding) - 1200 x 68
  // ==========================================
  const svg07 = `
  <svg width="1200" height="68" viewBox="0 0 1200 68" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="68" fill="#F8FAFD"/>
    <line x1="0" y1="0" x2="1200" y2="0" stroke="${cardBorder}" stroke-width="1.5"/>
    <line x1="0" y1="67" x2="1200" y2="67" stroke="${cardBorder}" stroke-width="1.5"/>
    <text x="600" y="42" text-anchor="middle" font-family="${fontFam}" font-size="20" font-weight="700" letter-spacing="1.5" fill="${textMuted}">
      HOLDING SERVINFORMACIÓN (27 AÑOS)   •   GOOGLE CLOUD PREMIER PARTNER   •   NORMA ISO 27001
    </text>
  </svg>`;
  await sharp(Buffer.from(svg07)).png().toFile(path.join(blocksDir, 'saasw-fu1-07-firma-banda-claro.png'));

  // ==========================================
  // BLOCK 08: Firma Paula Rozo - 680 x 270 (width 340 display) - con margen y esquina redondeada
  // ==========================================
  const svg08 = `
  <svg width="680" height="270" viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="avatar-clip-fu1">
        <circle cx="125" cy="135" r="50"/>
      </clipPath>
    </defs>
    <!-- Fondo exterior -->
    <rect width="680" height="270" fill="#EFF3F8"/>
    <!-- Tarjeta blanca con esquina inferior izquierda redondeada -->
    <path d="M 0,0 L 680,0 L 680,270 L 24,270 Q 0,270 0,246 Z" fill="${cardBg}"/>

    <circle cx="125" cy="135" r="53" fill="#D0E7F5"/>
    <image href="${paulaB64}" x="75" y="85" width="100" height="100" clip-path="url(#avatar-clip-fu1)"/>

    <text x="195" y="96" font-family="${fontFam}" font-size="28" font-weight="800" fill="${textDark}">Paula Rozo</text>
    <text x="195" y="130" font-family="${fontFam}" font-size="19" font-weight="500" fill="${textMuted}">BDR · Business Development Representative</text>
    <text x="195" y="162" font-family="${fontFam}" font-size="19" font-weight="700" fill="#0E768C">GLocation SAS · Transformación Cognitiva</text>
    <text x="195" y="194" font-family="${fontFam}" font-size="19" font-weight="600" fill="${bluePrimary}" text-decoration="underline">✉️ paula.rozo@glocation.com.co</text>
  </svg>`;
  await sharp(Buffer.from(svg08)).png().toFile(path.join(blocksDir, 'saasw-fu1-08-firma-paula-claro.png'));

  // ==========================================
  // BLOCK 09: Botón GLocation.co - 260 x 270 (width 130 display)
  // ==========================================
  const svg09 = `
  <svg width="260" height="270" viewBox="0 0 260 270" xmlns="http://www.w3.org/2000/svg">
    <rect width="260" height="270" fill="${cardBg}"/>
    <g transform="translate(35, 50)">
      <rect width="190" height="170" rx="14" ry="14" fill="${blueBgSubtle}" stroke="${blueBorder}" stroke-width="2"/>
      <text x="95" y="55" font-size="34" text-anchor="middle">🌐</text>
      <text x="95" y="96" font-family="${fontFam}" font-size="22" font-weight="800" fill="${bluePrimary}" text-anchor="middle">glocation.co</text>
      <text x="95" y="128" font-family="${fontFam}" font-size="17" font-weight="600" fill="${textMuted}" text-anchor="middle">Plataforma →</text>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg09)).png().toFile(path.join(blocksDir, 'saasw-fu1-09-firma-glocation-claro.png'));

  // ==========================================
  // BLOCK 10: Botón HomoAgenticus.co - 260 x 270 (width 130 display) - con margen y esquina redondeada
  // ==========================================
  const svg10 = `
  <svg width="260" height="270" viewBox="0 0 260 270" xmlns="http://www.w3.org/2000/svg">
    <!-- Fondo exterior -->
    <rect width="260" height="270" fill="#EFF3F8"/>
    <!-- Tarjeta blanca con esquina inferior derecha redondeada -->
    <path d="M 0,0 L 260,0 L 260,246 Q 260,270 236,270 L 0,270 Z" fill="${cardBg}"/>

    <g transform="translate(25, 50)">
      <rect width="190" height="170" rx="14" ry="14" fill="#F6F3FF" stroke="#D8C7FF" stroke-width="2"/>
      <text x="95" y="55" font-size="34" text-anchor="middle">📖</text>
      <text x="95" y="96" font-family="${fontFam}" font-size="21" font-weight="800" fill="#7C3AED" text-anchor="middle">homoagenticus.co</text>
      <text x="95" y="128" font-family="${fontFam}" font-size="17" font-weight="600" fill="${textMuted}" text-anchor="middle">Manifiesto →</text>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg10)).png().toFile(path.join(blocksDir, 'saasw-fu1-10-firma-homoagenticus-claro.png'));

  console.log('✓ All 10 FU1 image blocks generated successfully!');
}

buildFu1Blocks().catch(console.error);
