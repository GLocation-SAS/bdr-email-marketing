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
    <text x="1140" y="82" text-anchor="end" font-family="${fontFam}" font-size="19" font-weight="700" letter-spacing="1.8" fill="${textMuted}">
      HOLDING SERVINFORMACIÓN
    </text>
    
    <line x1="60" y1="149" x2="1140" y2="149" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg01)).png().toFile(path.join(blocksDir, 'saasw-fu1-01-encabezado-claro.png'));

  // ==========================================
  // BLOCK 02: Apertura (Pill + Título + Saludo) - 1200 x 480
  // ==========================================
  const svg02 = `
  <svg width="1200" height="480" viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="480" fill="${cardBg}"/>

    <!-- Eyebrow Pill -->
    <g transform="translate(60, 40)">
      <rect width="450" height="46" rx="23" ry="23" fill="#EFF6FF" stroke="${blueBorder}" stroke-width="1.5"/>
      <circle cx="28" cy="23" r="6" fill="${bluePrimary}"/>
      <text x="46" y="30" font-family="${fontFam}" font-size="18" font-weight="700" letter-spacing="1.2" fill="${bluePrimary}">
        CASO DE USO · TC-PMO · OFICINA TIC
      </text>
    </g>

    <!-- Headline -->
    <text x="60" y="160" font-family="${fontFam}" font-size="44" font-weight="800" fill="${textDark}" letter-spacing="-0.5">
      Del informe del contratista al acta,
    </text>
    <text x="60" y="218" font-family="${fontFam}" font-size="44" font-weight="800" fill="${bluePrimary}" letter-spacing="-0.5">
      lista para su firma.
    </text>

    <!-- Greeting & Intro -->
    <text x="60" y="295" font-family="${fontFam}" font-size="25" font-weight="700" fill="${textDark}">
      Estimado(a) Líder de Tecnología:
    </text>
    <text x="60" y="352" font-family="${fontFam}" font-size="23" font-weight="400" fill="${textBody}">
      La semana pasada le escribí sobre fuerza laboral cognitiva para su oficina TIC.
    </text>
    <text x="60" y="392" font-family="${fontFam}" font-size="23" font-weight="400" fill="${textBody}">
      Hoy le muestro cómo funciona en la conciliación de los entregables de los contratistas.
    </text>

    <line x1="60" y1="465" x2="1140" y2="465" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg02)).png().toFile(path.join(blocksDir, 'saasw-fu1-02-apertura-claro.png'));

  // ==========================================
  // BLOCK 03: Pasos (4 pasos visuales) - 1200 x 650
  // ==========================================
  const svg03 = `
  <svg width="1200" height="650" viewBox="0 0 1200 650" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="650" fill="${cardBg}"/>

    <text x="60" y="60" font-family="${fontFam}" font-size="28" font-weight="800" fill="${textDark}">
      Así corre un ciclo de actas con TC-PMO:
    </text>

    <!-- Step 1 -->
    <g transform="translate(60, 100)">
      <rect width="1080" height="110" rx="14" ry="14" fill="#F8FAFC" stroke="${cardBorder}" stroke-width="1.5"/>
      <circle cx="55" cy="55" r="28" fill="${bluePrimary}"/>
      <text x="55" y="65" text-anchor="middle" font-family="${fontFam}" font-size="26" font-weight="800" fill="#FFFFFF">1</text>
      <text x="110" y="46" font-family="${fontFam}" font-size="23" font-weight="700" fill="${textDark}">Llegan los informes de avance</text>
      <text x="110" y="78" font-family="${fontFam}" font-size="19" font-weight="400" fill="${textMuted}">Los contratistas entregan informes de actividades en PDF, Excel o Word.</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(60, 230)">
      <rect width="1080" height="110" rx="14" ry="14" fill="#F8FAFC" stroke="${cardBorder}" stroke-width="1.5"/>
      <circle cx="55" cy="55" r="28" fill="${bluePrimary}"/>
      <text x="55" y="65" text-anchor="middle" font-family="${fontFam}" font-size="26" font-weight="800" fill="#FFFFFF">2</text>
      <text x="110" y="46" font-family="${fontFam}" font-size="23" font-weight="700" fill="${textDark}">TC-PMO coteja cada informe contra TDR, cronograma y plan de pagos</text>
      <text x="110" y="78" font-family="${fontFam}" font-size="19" font-weight="400" fill="${textMuted}">Valida obligaciones contractuales, entregables y soportes sin errores humanos.</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(60, 360)">
      <rect width="1080" height="110" rx="14" ry="14" fill="#F8FAFC" stroke="${cardBorder}" stroke-width="1.5"/>
      <circle cx="55" cy="55" r="28" fill="${bluePrimary}"/>
      <text x="55" y="65" text-anchor="middle" font-family="${fontFam}" font-size="26" font-weight="800" fill="#FFFFFF">3</text>
      <text x="110" y="46" font-family="${fontFam}" font-size="23" font-weight="700" fill="${textDark}">TC-PMO redacta el borrador del acta</text>
      <text x="110" y="78" font-family="${fontFam}" font-size="19" font-weight="400" fill="${textMuted}">Estructura el acta de liquidación o informe mensual con faltantes y glosas resueltas.</text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(60, 490)">
      <rect width="1080" height="110" rx="14" ry="14" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
      <circle cx="55" cy="55" r="28" fill="#16A34A"/>
      <text x="55" y="65" text-anchor="middle" font-family="${fontFam}" font-size="26" font-weight="800" fill="#FFFFFF">4</text>
      <text x="110" y="46" font-family="${fontFam}" font-size="23" font-weight="700" fill="#14532D">Su supervisor revisa y firma</text>
      <text x="110" y="78" font-family="${fontFam}" font-size="19" font-weight="500" fill="#15803D">Nada sale sin su aprobación (Human on the Loop). Su equipo mantiene el control total.</text>
    </g>

    <line x1="60" y1="630" x2="1140" y2="630" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg03)).png().toFile(path.join(blocksDir, 'saasw-fu1-03-pasos-claro.png'));

  // ==========================================
  // BLOCK 04: Comparativo (Hoy vs TC-PMO + Otros trabajadores) - 1200 x 510
  // ==========================================
  const svg04 = `
  <svg width="1200" height="510" viewBox="0 0 1200 510" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="510" fill="${cardBg}"/>

    <!-- Left Box: Hoy -->
    <g transform="translate(60, 30)">
      <rect width="525" height="260" rx="16" ry="16" fill="#FEF2F2" stroke="#FECACA" stroke-width="1.5"/>
      <rect x="24" y="24" width="160" height="36" rx="8" ry="8" fill="#FEE2E2"/>
      <text x="104" y="48" text-anchor="middle" font-family="${fontFam}" font-size="16" font-weight="800" fill="#991B1B">
        ✕ HOY: MANUAL
      </text>
      <text x="24" y="105" font-family="${fontFam}" font-size="22" font-weight="700" fill="#991B1B">
        Redactar actas desde cero
      </text>
      <text x="24" y="145" font-family="${fontFam}" font-size="19" font-weight="400" fill="#7F1D1D">
        • 3 a 5 días por acta persiguiendo anexos
      </text>
      <text x="24" y="180" font-family="${fontFam}" font-size="19" font-weight="400" fill="#7F1D1D">
        • Desgaste en cotejo línea por línea
      </text>
      <text x="24" y="215" font-family="${fontFam}" font-size="19" font-weight="400" fill="#7F1D1D">
        • Riesgo constante de glosas administrativas
      </text>
    </g>

    <!-- Right Box: Con TC-PMO -->
    <g transform="translate(615, 30)">
      <rect width="525" height="260" rx="16" ry="16" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
      <rect x="24" y="24" width="200" height="36" rx="8" ry="8" fill="#DCFCE7"/>
      <text x="124" y="48" text-anchor="middle" font-family="${fontFam}" font-size="16" font-weight="800" fill="#166534">
        ✓ CON TC-PMO: COGNITIVO
      </text>
      <text x="24" y="105" font-family="${fontFam}" font-size="22" font-weight="700" fill="#166534">
        Borrador listo en 1 min 15 s
      </text>
      <text x="24" y="145" font-family="${fontFam}" font-size="19" font-weight="500" fill="#14532D">
        • Cotejo automatizado contra TDR y pagos
      </text>
      <text x="24" y="180" font-family="${fontFam}" font-size="19" font-weight="500" fill="#14532D">
        • Faltantes marcados y matriz de cumplimiento
      </text>
      <text x="24" y="215" font-family="${fontFam}" font-size="19" font-weight="500" fill="#14532D">
        • 0 glosas y control total para el supervisor
      </text>
    </g>

    <!-- Otros procesos banner -->
    <g transform="translate(60, 320)">
      <rect width="1080" height="150" rx="14" ry="14" fill="#F8FAFC" stroke="${cardBorder}" stroke-width="1.5"/>
      <text x="30" y="42" font-family="${fontFam}" font-size="18" font-weight="800" letter-spacing="1.2" fill="${textMuted}">
        OTROS PROCESOS DISPONIBLES EN SU OFICINA TIC:
      </text>
      <text x="30" y="85" font-family="${fontFam}" font-size="20" font-weight="700" fill="${bluePrimary}">
        ● TC-Workspace:
      </text>
      <text x="200" y="85" font-family="${fontFam}" font-size="20" font-weight="400" fill="${textBody}">
        Gobierna identidades corporativas, permisos de acceso mínimo y carpetas Drive (ISO 27001).
      </text>
      <text x="30" y="125" font-family="${fontFam}" font-size="20" font-weight="700" fill="#7C3AED">
        ● TC-Test (QA):
      </text>
      <text x="180" y="125" font-family="${fontFam}" font-size="20" font-weight="400" fill="${textBody}">
        Pruebas continuas multidispositivo y regresión CI/CD en 15 segundos antes de desplegar.
      </text>
    </g>

    <line x1="60" y1="495" x2="1140" y2="495" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg04)).png().toFile(path.join(blocksDir, 'saasw-fu1-04-comparativo-claro.png'));

  // ==========================================
  // BLOCK 05: CTA Diagnóstico Cognitivo - 1200 x 530
  // ==========================================
  const svg05 = `
  <svg width="1200" height="530" viewBox="0 0 1200 530" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1F6E91" />
        <stop offset="50%" stop-color="#4A64A0" />
        <stop offset="100%" stop-color="#6E5C98" />
      </linearGradient>
    </defs>
    <rect width="1200" height="530" fill="${cardBg}"/>

    <text x="600" y="65" text-anchor="middle" font-family="${fontFam}" font-size="19" font-weight="700" letter-spacing="2.2" fill="${bluePrimary}">
      DIAGNÓSTICO COGNITIVO · 30 MINUTOS
    </text>

    <text x="600" y="130" text-anchor="middle" font-family="${fontFam}" font-size="34" font-weight="800" fill="${textDark}">
      ¿Exploramos qué proceso de su oficina TIC podemos liberar
    </text>
    <text x="600" y="175" text-anchor="middle" font-family="${fontFam}" font-size="34" font-weight="800" fill="${textDark}">
      este mes?
    </text>

    <text x="600" y="240" text-anchor="middle" font-family="${fontFam}" font-size="22" font-weight="400" fill="#475569">
      Agende una sesión técnica de 30 minutos. Evaluaremos uno de sus cuellos de
    </text>
    <text x="600" y="278" text-anchor="middle" font-family="${fontFam}" font-size="22" font-weight="400" fill="#475569">
      botella operativos y le entregaremos una estimación contable de ahorro y tiempos.
    </text>

    <!-- Button -->
    <rect x="280" y="330" width="640" height="90" rx="16" ry="16" fill="url(#ctaGrad)"/>
    <text x="600" y="386" text-anchor="middle" font-family="${fontFam}" font-size="25" font-weight="700" fill="#FFFFFF">
      Agendar Diagnóstico Cognitivo (30 min) →
    </text>

    <text x="600" y="475" text-anchor="middle" font-family="${fontFam}" font-size="20" font-weight="400" fill="${textMuted}">
      Sin formularios eternos: seleccione día y hora directamente en nuestra plataforma.
    </text>

    <line x1="60" y1="515" x2="1140" y2="515" stroke="${cardBorder}" stroke-width="1.5"/>
  </svg>`;
  await sharp(Buffer.from(svg05)).png().toFile(path.join(blocksDir, 'saasw-fu1-05-cta-claro.png'));

  // ==========================================
  // BLOCK 06: Respuesta rápida - 1200 x 240
  // ==========================================
  const svg06 = `
  <svg width="1200" height="240" viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="240" fill="${cardBg}"/>

    <g transform="translate(60, 20)">
      <rect width="1080" height="200" rx="16" ry="16" fill="${blueBgSubtle}" stroke="${blueBorder}" stroke-width="1.5"/>
      <text x="540" y="55" text-anchor="middle" font-family="${fontFam}" font-size="23" font-weight="700" fill="#0369A1">
        Si prefiere no agendar todavía, responda con una palabra:
      </text>

      <!-- Pill 1: actas -->
      <g transform="translate(240, 80)">
        <rect width="160" height="52" rx="12" ry="12" fill="#FFFFFF" stroke="${blueBorder}" stroke-width="1.5"/>
        <text x="80" y="34" text-anchor="middle" font-family="${fontFam}" font-size="21" font-weight="700" fill="${bluePrimary}">actas</text>
      </g>

      <!-- Pill 2: accesos -->
      <g transform="translate(460, 80)">
        <rect width="160" height="52" rx="12" ry="12" fill="#FFFFFF" stroke="${blueBorder}" stroke-width="1.5"/>
        <text x="80" y="34" text-anchor="middle" font-family="${fontFam}" font-size="21" font-weight="700" fill="${bluePrimary}">accesos</text>
      </g>

      <!-- Pill 3: pruebas -->
      <g transform="translate(680, 80)">
        <rect width="160" height="52" rx="12" ry="12" fill="#FFFFFF" stroke="${blueBorder}" stroke-width="1.5"/>
        <text x="80" y="34" text-anchor="middle" font-family="${fontFam}" font-size="21" font-weight="700" fill="${bluePrimary}">pruebas</text>
      </g>

      <text x="540" y="172" text-anchor="middle" font-family="${fontFam}" font-size="19" font-weight="500" fill="${textMuted}">
        Y le compartimos un ejemplo real de cómo opera el trabajador en su proceso.
      </text>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg06)).png().toFile(path.join(blocksDir, 'saasw-fu1-06-respuesta-claro.png'));

  // ==========================================
  // BLOCK 07: Banda Firma (Holding) - 1200 x 66
  // ==========================================
  const svg07 = `
  <svg width="1200" height="66" viewBox="0 0 1200 66" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="66" fill="#F8FAFD"/>
    <line x1="0" y1="0" x2="1200" y2="0" stroke="${cardBorder}" stroke-width="1.5"/>
    <line x1="0" y1="65" x2="1200" y2="65" stroke="${cardBorder}" stroke-width="1.5"/>
    <text x="600" y="41" text-anchor="middle" font-family="${fontFam}" font-size="18" font-weight="700" letter-spacing="1.5" fill="${textMuted}">
      HOLDING SERVINFORMACIÓN (27 AÑOS)   •   GOOGLE CLOUD PREMIER PARTNER   •   NORMA ISO 27001
    </text>
  </svg>`;
  await sharp(Buffer.from(svg07)).png().toFile(path.join(blocksDir, 'saasw-fu1-07-firma-banda-claro.png'));

  // ==========================================
  // BLOCK 08: Firma Paula Rozo - 668 x 254 (width 334 display = 55.66%)
  // ==========================================
  const svg08 = `
  <svg width="668" height="254" viewBox="0 0 668 254" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="avatar-clip-fu1">
        <circle cx="95" cy="127" r="50"/>
      </clipPath>
    </defs>
    <rect width="668" height="254" fill="${cardBg}"/>
    <circle cx="95" cy="127" r="53" fill="#D0E7F5"/>
    <image href="${paulaB64}" x="45" y="77" width="100" height="100" clip-path="url(#avatar-clip-fu1)"/>
    <text x="175" y="92" font-family="${fontFam}" font-size="28" font-weight="800" fill="${textDark}">Paula Rozo</text>
    <text x="175" y="125" font-family="${fontFam}" font-size="19" font-weight="500" fill="${textMuted}">BDR · Business Development Representative</text>
    <text x="175" y="155" font-family="${fontFam}" font-size="19" font-weight="700" fill="#0E768C">GLocation SAS · Transformación Cognitiva</text>
    <text x="175" y="188" font-family="${fontFam}" font-size="19" font-weight="600" fill="${bluePrimary}" text-decoration="underline">✉️ paula.rozo@glocation.com.co</text>
  </svg>`;
  await sharp(Buffer.from(svg08)).png().toFile(path.join(blocksDir, 'saasw-fu1-08-firma-paula-claro.png'));

  // ==========================================
  // BLOCK 09: Botón GLocation.co - 254 x 254 (width 127 display = 21.17%)
  // ==========================================
  const svg09 = `
  <svg width="254" height="254" viewBox="0 0 254 254" xmlns="http://www.w3.org/2000/svg">
    <rect width="254" height="254" fill="${cardBg}"/>
    <g transform="translate(12, 40)">
      <rect width="230" height="174" rx="14" ry="14" fill="${blueBgSubtle}" stroke="${blueBorder}" stroke-width="2"/>
      <text x="115" y="60" font-size="34" text-anchor="middle">🌐</text>
      <text x="115" y="102" font-family="${fontFam}" font-size="22" font-weight="800" fill="${bluePrimary}" text-anchor="middle">glocation.co</text>
      <text x="115" y="134" font-family="${fontFam}" font-size="18" font-weight="600" fill="${textMuted}" text-anchor="middle">Plataforma →</text>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg09)).png().toFile(path.join(blocksDir, 'saasw-fu1-09-firma-glocation-claro.png'));

  // ==========================================
  // BLOCK 10: Botón HomoAgenticus.co - 278 x 254 (width 139 display = 23.17%)
  // ==========================================
  const svg10 = `
  <svg width="278" height="254" viewBox="0 0 278 254" xmlns="http://www.w3.org/2000/svg">
    <rect width="278" height="254" fill="${cardBg}"/>
    <g transform="translate(12, 40)">
      <rect width="254" height="174" rx="14" ry="14" fill="#F6F3FF" stroke="#D8C7FF" stroke-width="2"/>
      <text x="127" y="60" font-size="34" text-anchor="middle">📖</text>
      <text x="127" y="102" font-family="${fontFam}" font-size="21" font-weight="800" fill="#7C3AED" text-anchor="middle">homoagenticus.co</text>
      <text x="127" y="134" font-family="${fontFam}" font-size="18" font-weight="600" fill="${textMuted}" text-anchor="middle">Manifiesto →</text>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg10)).png().toFile(path.join(blocksDir, 'saasw-fu1-10-firma-homoagenticus-claro.png'));

  console.log('✓ All 10 FU1 image blocks generated successfully!');
}

buildFu1Blocks().catch(console.error);
