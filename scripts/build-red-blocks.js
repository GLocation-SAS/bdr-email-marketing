const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const blocksDir = path.join(__dirname, '../public/email-blocks');
const iconsDir = path.join(__dirname, '../public/email-icons');

const fontFam = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const cardBg = '#FFFFFF';
const textDark = '#0F172A';
const textMuted = '#64748B';
const textBody = '#334155';
const bluePrimary = '#0284C7';
const purplePrimary = '#3F1C81';
const blueBorder = '#B8DCF0';
const purpleBorder = '#DDD0FB';
const cardBorder = '#E2EBF5';

function escapeXml(unsafe) {
  return (unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text, maxChars) {
  const clean = text.replace(/<[^>]+>/g, '');
  const words = clean.split(/\s+/);
  const lines = [];
  let currentLine = '';
  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > maxChars) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += (currentLine ? ' ' : '') + word;
    }
  }
  if (currentLine) lines.push(currentLine.trim());
  return lines;
}

const SECTORS_DATA = [
  {
    key: 'tecnologia',
    title: 'GLocation · Tecnología y Servicios Digitales',
    sectorTitle: 'Tecnología y Servicios Digitales',
    slug: 'plantilla-red-tecnologia',
    filename: 'glocation-red-tecnologia-y-servicios-digitales.html',
    storytellingFile: 'GLocation_Tecnologia_Storytelling.html',
    preheader: 'Una forma estructurada de explorar Trabajadores Cognitivos en su portafolio.',
    chip: 'TECNOLOGÍA · ALIANZAS',
    h1_a: 'Su cliente ya pidió IA.',
    h1_b: '¿LA TIENE LISTA PARA OFRECER?',
    sub_hero: 'Una oportunidad que se puede perder por falta de capacidad, no de interés.',
    destinatario: 'Estimado(a) Gerente Comercial o de Alianzas:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. Cada vez más clientes preguntan por inteligencia artificial. Construirla desde cero exige tiempo y especialistas, y mientras tanto la oportunidad queda abierta para otro proveedor.',
    hoy_items: [
      'El cliente pide IA',
      'Toca armar equipo o decir que no',
      'La propuesta se demora'
    ],
    tc_items: [
      'Su oferta incorpora un Trabajador Cognitivo',
      'Cada parte sabe qué aporta, por escrito',
      'Una persona autoriza los cambios críticos'
    ],
    tc_highlight: 'Una persona autoriza los cambios críticos',
    case_ico: 'WS',
    case_sub: 'El caso de uso',
    case_title: 'Google Workspace para sus clientes',
    case_desc: 'TC-Workspace gestiona usuarios y permisos en las cuentas de sus clientes; un administrador autoriza cada cambio crítico. Usted conserva la relación con el cliente.',
    case_pill: '●  EL CLIENTE SIGUE SIENDO SUYO',
    trust_1: 'Primero se define, por escrito, qué aporta y qué se reserva cada parte.',
    trust_2: 'El acuerdo lo revisan ambas gerencias antes de cualquier piloto.',
    cta_q: '¿Tiene un caso de IA que podamos explorar juntos?',
    cta_sub: 'Conversemos sobre cómo complementar su oferta con Trabajadores Cognitivos. Usted elige cómo empezar.',
    cta_btn: 'Agendar conversación de alianza (30 min) →',
    cta_support: 'Si aún no desea agendar, responda este correo con el caso que tiene en mente:',
    cta_sec_text: 'Tengo un caso para explorar ✉',
    mailto_sub: 'Posible alianza con GLocation',
    mailto_body: 'Hola, Paula: me interesa explorar una posible alianza. El caso que tenemos en mente es: '
  },
  {
    key: 'logistica',
    title: 'GLocation · Logística y Transporte',
    sectorTitle: 'Logística y Transporte',
    slug: 'plantilla-red-logistica',
    filename: 'glocation-red-logistica-y-transporte.html',
    storytellingFile: 'GLocation_Logistica_Storytelling.html',
    preheader: 'Ofertas y requisitos de proveedores consolidados para que Compras decida más rápido.',
    chip: 'LOGÍSTICA · COMPRAS',
    h1_a: 'La operación pide una respuesta.',
    h1_b: 'LAS OFERTAS SIGUEN SIN CONSOLIDAR.',
    sub_hero: 'Un cuello de botella que no aparece en el ERP, pero sí en los tiempos de Compras.',
    destinatario: 'Estimado(a) líder de Compras y Abastecimiento:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. Antes de recomendar un proveedor, su equipo reúne soportes, compara cotizaciones y actualiza calificaciones, casi siempre a mano. Mientras tanto, la operación espera y la decisión se aplaza.',
    hoy_items: [
      'Ofertas en correos y hojas distintas',
      'Soportes revisados uno por uno',
      'Calificaciones que se actualizan tarde'
    ],
    tc_items: [
      'Comparativo listo por invitación a cotizar',
      'Faltantes visibles en cada expediente',
      'Compras revisa y recomienda'
    ],
    tc_highlight: 'Compras revisa y recomienda',
    case_ico: 'COT',
    case_sub: 'El caso de uso',
    case_title: 'Comparativo de ofertas y evaluación de proveedores',
    case_desc: 'Para cada invitación a cotizar, TC-Analista reúne ofertas y requisitos, prepara el comparativo y el expediente de cada proveedor, y deja a la vista lo que falta.',
    case_pill: '●  USTED RECOMIENDA: COMPRAS',
    trust_1: 'Se suma al ERP o la plataforma que ya usan, sin reemplazarlos.',
    trust_2: 'No toma decisiones: prepara y propone; su equipo aprueba.',
    cta_q: '¿Revisamos dónde se demora hoy su equipo?',
    cta_sub: 'En 30 minutos, sin venta, miramos la evaluación de proveedores o los comparativos de ofertas y definimos si vale la pena.',
    cta_btn: 'Agendar Diagnóstico Cognitivo (30 min) →',
    cta_support: 'Si aún no desea agendar, responda este correo y cuéntenos qué proceso le gustaría revisar:',
    cta_sec_text: 'Quiero revisar un proceso de compras ✉',
    mailto_sub: 'Diagnóstico Cognitivo Logística - GLocation',
    mailto_body: 'Hola, Paula: me interesa revisar un proceso de compras. Nuestro proceso es: '
  },
  {
    key: 'construccion',
    title: 'GLocation · Construcción e Inmobiliario',
    sectorTitle: 'Construcción e Inmobiliario',
    slug: 'plantilla-red-construccion',
    filename: 'glocation-red-construccion-e-inmobiliario.html',
    storytellingFile: 'GLocation_Construccion_Storytelling.html',
    preheader: 'Control de contratistas, pólizas y seguridad social al día antes de ingresar a obra.',
    chip: 'CONSTRUCCIÓN · CONTRATACIÓN',
    h1_a: 'La obra avanza en terreno.',
    h1_b: 'LOS EXPEDIENTES SIGUEN EN TRÁMITE.',
    sub_hero: 'Soportes pendientes que frenan pólizas, actas y pagos a contratistas.',
    destinatario: 'Estimado(a) Director(a) de Contratación o Compras de Obra:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. La obra no da espera, pero contratar a un subcontratista o recibir un hito exige verificar aportes a seguridad social, pólizas y soportes técnicos. Cuando los papeles se represan, el frente de obra se resiente.',
    hoy_items: [
      'Soportes dispersos por frente de obra',
      'Pólizas y seguridad social al límite',
      'Contratos que arrancan sin cerrar expediente'
    ],
    tc_items: [
      'Expediente al día antes de ingresar a obra',
      'Alertas tempranas de vencimientos',
      'Contratación valida y autoriza'
    ],
    tc_highlight: 'Contratación valida y autoriza',
    case_ico: 'OBR',
    case_sub: 'El caso de uso',
    case_title: 'Habilitación de subcontratistas y control de requisitos',
    case_desc: 'Para cada subcontratista, TC-Analista coteja aportes a seguridad social, vigencia de pólizas y certificaciones de altura antes del ingreso a obra, dejando listo el visto bueno para Contratación.',
    case_pill: '●  USTED AUTORIZA: CONTRATACIÓN',
    trust_1: 'Se integra a sus carpetas de obra o ERP de gestión sin fricción.',
    trust_2: 'Control de ingreso en tiempo real sin retrasar el frente de trabajo.',
    cta_q: '¿Revisamos qué está frenando su contratación?',
    cta_sub: 'En 30 minutos, sin venta, evaluamos cómo gestionan hoy pólizas y requisitos de contratistas en obra y definimos la viabilidad.',
    cta_btn: 'Agendar Diagnóstico Cognitivo (30 min) →',
    cta_support: 'Si aún no desea agendar, responda este correo y cuéntenos qué proceso le gustaría revisar:',
    cta_sec_text: 'Quiero revisar la contratación en obra ✉',
    mailto_sub: 'Diagnóstico Cognitivo Construcción - GLocation',
    mailto_body: 'Hola, Paula: me interesa revisar la contratación en obra. Nuestro proceso es: '
  },
  {
    key: 'agroindustria',
    title: 'GLocation · Agroindustria y Alimentos',
    sectorTitle: 'Agroindustria y Alimentos',
    slug: 'plantilla-red-agroindustria',
    filename: 'glocation-red-agroindustria-y-alimentos.html',
    storytellingFile: 'GLocation_Agroindustria_Storytelling.html',
    preheader: 'Aprobación técnica de proveedores y vigencias al día; Compras y Calidad deciden.',
    chip: 'AGROINDUSTRIA · COMPRAS Y CALIDAD',
    h1_a: 'Aprobar un proveedor necesita a Compras y a Calidad.',
    h1_b: 'Y QUE CADA SOPORTE ESTÉ VIGENTE.',
    sub_hero: 'La decisión es técnica; el tiempo se va en reunir y verificar documentos.',
    destinatario: 'Estimado(a) líder de Compras, Abastecimiento o Calidad:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. Para aprobar un proveedor, su equipo pide certificados y fichas técnicas, comprueba vigencias y los cruza con los requisitos de cada categoría. Entre Compras y Calidad, ese ir y venir retrasa la decisión.',
    hoy_items: [
      'Soportes pedidos y revisados uno a uno',
      'Vigencias que se descubren tarde',
      'Criterios distintos entre áreas'
    ],
    tc_items: [
      'Expediente completo por proveedor',
      'Faltantes y vencidos señalados',
      'Calidad valida; Compras aprueba'
    ],
    tc_highlight: 'Calidad valida; Compras aprueba',
    case_ico: 'EXP',
    case_sub: 'El caso de uso',
    case_title: 'Expediente y matriz por categoría',
    case_desc: 'TC-Analista reúne los soportes de cada proveedor, señala faltantes o vencidos y arma la matriz de su categoría. No certifica cumplimiento: deja todo listo para que Calidad y Compras decidan.',
    case_pill: '●  USTED DECIDE: COMPRAS Y CALIDAD',
    trust_1: 'Se suma a la plataforma de proveedores que ya usan.',
    trust_2: 'El criterio técnico y la aprobación siguen en su equipo.',
    cta_q: '¿Revisamos cómo aprueban hoy a un proveedor?',
    cta_sub: 'En 30 minutos, sin venta, miramos la recopilación de documentos o la revisión de vigencias y definimos si vale la pena.',
    cta_btn: 'Agendar Diagnóstico Cognitivo (30 min) →',
    cta_support: 'Si aún no desea agendar, responda este correo y cuéntenos qué proceso le gustaría revisar:',
    cta_sec_text: 'Quiero revisar la evaluación de proveedores ✉',
    mailto_sub: 'Diagnóstico Cognitivo Agroindustria - GLocation',
    mailto_body: 'Hola, Paula: me interesa revisar la evaluación de proveedores. Nuestro proceso es: '
  }
];

async function generateAllBlocks() {
  console.log('Generating Red Proveedores image blocks with pure SVG <text>...');

  const logoBuf = fs.readFileSync(path.join(iconsDir, 'logo-glocation-claro.png'));
  const logoB64 = `data:image/png;base64,${logoBuf.toString('base64')}`;

  // 1. Shared BANDA HOLDING: Holding Servinformación (27 años) · Google Cloud Premier Partner · Norma ISO 27001
  const svgBanda = `
  <svg width="1200" height="76" viewBox="0 0 1200 76" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="76" fill="#F8FAFD"/>
    <line x1="0" y1="0" x2="1200" y2="0" stroke="${cardBorder}" stroke-width="1.5"/>
    <line x1="0" y1="75" x2="1200" y2="75" stroke="${cardBorder}" stroke-width="1.5"/>
    <text x="600" y="47" text-anchor="middle" font-family="${fontFam}" font-size="18" font-weight="700" letter-spacing="1.5" fill="${textMuted}">
      HOLDING SERVINFORMACIÓN (27 AÑOS)   ·   GOOGLE CLOUD PREMIER PARTNER   ·   NORMA ISO 27001
    </text>
  </svg>`;
  await sharp(Buffer.from(svgBanda)).png().toFile(path.join(blocksDir, 'red-07-firma-banda.png'));

  // 1b. Shared FIRMA PAULA ROZO: 1200 x 200 (Avatar circular + Datos completos)
  const avatarBuf = fs.readFileSync(path.join(iconsDir, 'avatar-paula-light.png'));
  const avatarB64 = `data:image/png;base64,${avatarBuf.toString('base64')}`;
  const svgPaulaFirma = `
  <svg width="1200" height="200" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="paulaCircleClip">
        <circle cx="140" cy="100" r="64"/>
      </clipPath>
    </defs>
    <rect width="1200" height="200" fill="#FFFFFF"/>
    <image x="76" y="36" width="128" height="128" clip-path="url(#paulaCircleClip)" href="${avatarB64}"/>
    <text x="240" y="65" font-family="${fontFam}" font-size="30" font-weight="700" fill="#0D2140">Paula Rozo</text>
    <text x="240" y="100" font-family="${fontFam}" font-size="22" font-weight="400" fill="#4A515D">BDR · Business Development Representative</text>
    <text x="240" y="135" font-family="${fontFam}" font-size="22" font-weight="600" fill="#22779C">GLocation SAS · Transformación Cognitiva</text>
    <text x="240" y="170" font-family="${fontFam}" font-size="22" font-weight="600" fill="#0284C7">✉ paula.rozo@glocation.com.co</text>
    <line x1="0" y1="199" x2="1200" y2="199" stroke="#E2E8F0" stroke-width="2"/>
  </svg>`;
  await sharp(Buffer.from(svgPaulaFirma)).png().toFile(path.join(blocksDir, 'red-08-firma-paula.png'));

  // 1c. Shared 4 TARJETAS HORIZONTALES (cada una 300 x 190 para 150px @2x)
  const ecosystemCards = [
    { file: 'red-card-01-glocation.png', ico: '🌐', title: 'glocation.co', color: '#0284C7', sub: 'Plataforma →' },
    { file: 'red-card-02-homoagenticus.png', ico: '📖', title: 'homoagenticus', color: '#7C3AED', sub: 'Manifiesto →' },
    { file: 'red-card-03-preagentica.png', ico: '🏛️', title: 'preagentica', color: '#334155', sub: 'Pre-IA →' },
    { file: 'red-card-04-linkedin.png', ico: '💼', title: 'LinkedIn', color: '#0A66C2', sub: 'Perfil →' }
  ];
  for (const c of ecosystemCards) {
    const svgCard = `
    <svg width="300" height="190" viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="190" fill="#F8FAFD"/>
      <rect x="8" y="10" width="284" height="170" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
      <text x="150" y="66" text-anchor="middle" font-family="${fontFam}" font-size="34">${c.ico}</text>
      <text x="150" y="112" text-anchor="middle" font-family="${fontFam}" font-size="22" font-weight="700" fill="${c.color}">${c.title}</text>
      <text x="150" y="146" text-anchor="middle" font-family="${fontFam}" font-size="17" font-weight="500" fill="#64748B">${c.sub}</text>
    </svg>`;
    await sharp(Buffer.from(svgCard)).png().toFile(path.join(blocksDir, c.file));
  }

  // 2. Loop through all 4 sectors
  for (const s of SECTORS_DATA) {
    console.log(`Processing sector: ${s.key}...`);

    // ==========================================
    // BLOCK 01: Encabezado (Logo + Holding) - 1200 x 140
    // ==========================================
    const svg01 = `
    <svg width="1200" height="140" viewBox="0 0 1200 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="30%" stop-color="#38C6FF" />
          <stop offset="55%" stop-color="#16a34a" />
          <stop offset="80%" stop-color="#A78BDB" />
          <stop offset="100%" stop-color="#3F1C81" />
        </linearGradient>
      </defs>
      <!-- Top rounded card -->
      <path d="M 0,24 Q 0,0 24,0 L 1176,0 Q 1200,0 1200,24 L 1200,140 L 0,140 Z" fill="${cardBg}"/>
      <rect x="0" y="0" width="1200" height="8" fill="url(#rainbowGrad)"/>
      
      <!-- Logo GLocation -->
      <image href="${logoB64}" x="60" y="32" width="230" height="76" preserveAspectRatio="xMinYMid meet"/>
      
      <!-- Holding Servinformación -->
      <text x="1140" y="80" text-anchor="end" font-family="${fontFam}" font-size="20" font-weight="700" letter-spacing="1.8" fill="${textMuted}">
        HOLDING SERVINFORMACIÓN
      </text>
      
      <line x1="60" y1="139" x2="1140" y2="139" stroke="${cardBorder}" stroke-width="1.5"/>
    </svg>`;
    await sharp(Buffer.from(svg01)).png().toFile(path.join(blocksDir, `red-${s.key}-01-encabezado.png`));

    // ==========================================
    // BLOCK 02: Apertura (Hero gradient + Saludo + Intro) - 1200 x 580
    // ==========================================
    const introLines = wrapText(s.intro, 78);
    const svg02 = `
    <svg width="1200" height="580" viewBox="0 0 1200 580" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroGrad-${s.key}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E6F6FE" />
          <stop offset="55%" stop-color="#EEF2FB" />
          <stop offset="100%" stop-color="#F3EEFC" />
        </linearGradient>
        <linearGradient id="chipGrad-${s.key}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3F1C81" />
          <stop offset="100%" stop-color="#BF8BDB" />
        </linearGradient>
      </defs>
      <rect width="1200" height="580" fill="${cardBg}"/>

      <!-- Hero Banner Container (width 1080) -->
      <g transform="translate(60, 20)">
        <rect width="1080" height="260" rx="16" ry="16" fill="url(#heroGrad-${s.key})"/>
        
        <!-- Chip / Eyebrow Pill -->
        <g transform="translate(36, 28)">
          <rect width="380" height="38" rx="19" ry="19" fill="url(#chipGrad-${s.key})"/>
          <text x="190" y="25" text-anchor="middle" font-family="${fontFam}" font-size="16" font-weight="700" letter-spacing="1.8" fill="#FFFFFF">
            ${escapeXml(s.chip)}
          </text>
        </g>

        <!-- Titular 2 Líneas -->
        <text x="36" y="112" font-family="${fontFam}" font-size="34" font-weight="600" fill="#0D2140" letter-spacing="-0.3">
          ${escapeXml(s.h1_a)}
        </text>
        <text x="36" y="162" font-family="${fontFam}" font-size="40" font-weight="800" fill="#040914" letter-spacing="-0.5">
          ${escapeXml(s.h1_b)}
        </text>

        <!-- Subtítulo hero -->
        <text x="36" y="214" font-family="${fontFam}" font-size="22" font-weight="400" fill="#4A515D">
          ${escapeXml(s.sub_hero)}
        </text>
      </g>

      <!-- Saludo & Intro -->
      <g transform="translate(60, 320)">
        <text x="0" y="30" font-family="${fontFam}" font-size="26" font-weight="700" fill="#0D2140">
          ${escapeXml(s.destinatario)}
        </text>
        ${introLines.map((line, idx) => `
          <text x="0" y="${80 + idx * 40}" font-family="${fontFam}" font-size="23" font-weight="400" fill="#4A515D">
            ${escapeXml(line)}
          </text>
        `).join('')}
      </g>
    </svg>`;
    await sharp(Buffer.from(svg02)).png().toFile(path.join(blocksDir, `red-${s.key}-02-apertura.png`));

    // ==========================================
    // BLOCK 03: Comparativo Hoy vs Con un TC - 1200 x 360
    // ==========================================
    const svg03 = `
    <svg width="1200" height="360" viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="360" fill="${cardBg}"/>

      <!-- Columna 1: HOY (width 520) -->
      <g transform="translate(60, 10)">
        <rect width="520" height="320" rx="16" ry="16" fill="#F4F6F9"/>
        <text x="30" y="44" font-family="${fontFam}" font-size="18" font-weight="700" letter-spacing="2" fill="#8A94A3">
          HOY
        </text>

        ${s.hoy_items.map((item, idx) => `
          <g transform="translate(30, ${90 + idx * 72})">
            <text x="0" y="20" font-family="${fontFam}" font-size="26" font-weight="700" fill="#B7C6D8">–</text>
            <text x="32" y="20" font-family="${fontFam}" font-size="22" font-weight="400" fill="#4A515D">${escapeXml(item)}</text>
          </g>
        `).join('')}
      </g>

      <!-- Columna 2: CON UN TRABAJADOR COGNITIVO (width 520) -->
      <g transform="translate(620, 10)">
        <rect width="520" height="320" rx="16" ry="16" fill="#F3EEFC" stroke="${purpleBorder}" stroke-width="1.5"/>
        <text x="30" y="44" font-family="${fontFam}" font-size="18" font-weight="700" letter-spacing="2" fill="#3F1C81">
          CON UN TRABAJADOR COGNITIVO
        </text>

        ${s.tc_items.map((item, idx) => {
          const isHigh = item === s.tc_highlight;
          return `
          <g transform="translate(30, ${90 + idx * 72})">
            <text x="0" y="20" font-family="${fontFam}" font-size="24" font-weight="700" fill="#3F1C81">✓</text>
            <text x="32" y="20" font-family="${fontFam}" font-size="22" font-weight="${isHigh ? '700' : '500'}" fill="#0D2140">${escapeXml(item)}</text>
          </g>
          `;
        }).join('')}
      </g>
    </svg>`;
    await sharp(Buffer.from(svg03)).png().toFile(path.join(blocksDir, `red-${s.key}-03-comparativo.png`));

    // ==========================================
    // BLOCK 04: Caso de Uso Protagonista + Confianza - 1200 x 500
    // ==========================================
    const caseLines = wrapText(s.case_desc, 68);
    const svg04 = `
    <svg width="1200" height="500" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="500" fill="${cardBg}"/>

      <!-- Tarjeta Caso de Uso (width 1080, height 330) -->
      <g transform="translate(60, 10)">
        <rect width="1080" height="330" rx="16" ry="16" fill="#F8FAFD" stroke="#DCE6F2" stroke-width="1.5"/>
        <!-- Left border accent -->
        <path d="M 0,16 Q 0,0 16,0 L 16,330 Q 0,330 0,314 Z" fill="#0284C7"/>

        <!-- Badge Icon -->
        <g transform="translate(36, 36)">
          <rect width="80" height="80" rx="16" ry="16" fill="#0284C7"/>
          <text x="40" y="50" text-anchor="middle" font-family="${fontFam}" font-size="26" font-weight="800" fill="#FFFFFF">
            ${escapeXml(s.case_ico)}
          </text>
        </g>

        <!-- Contenido Caso de Uso -->
        <g transform="translate(136, 40)">
          <text x="0" y="22" font-family="${fontFam}" font-size="17" font-weight="700" letter-spacing="2" fill="#22779C">
            EL CASO DE USO
          </text>
          <text x="0" y="58" font-family="${fontFam}" font-size="28" font-weight="700" fill="#0D2140">
            ${escapeXml(s.case_title)}
          </text>
          
          ${caseLines.map((line, idx) => `
            <text x="0" y="${98 + idx * 36}" font-family="${fontFam}" font-size="22" font-weight="400" fill="#4A515D">
              ${escapeXml(line)}
            </text>
          `).join('')}

          <!-- Pill Inferior dentro de tarjeta con margen -->
          <g transform="translate(0, ${100 + caseLines.length * 36 + 14})">
            <rect width="450" height="38" rx="19" ry="19" fill="#E0F2FE"/>
            <text x="22" y="25" font-family="${fontFam}" font-size="16" font-weight="700" letter-spacing="0.8" fill="#0284C7">
              ${escapeXml(s.case_pill)}
            </text>
          </g>
        </g>
      </g>

      <!-- Trust Checkmarks (width 1080) -->
      <g transform="translate(80, 370)">
        <text x="0" y="32" font-family="${fontFam}" font-size="26" font-weight="700" fill="#16A34A">✓</text>
        <text x="36" y="32" font-family="${fontFam}" font-size="22" font-weight="500" fill="#4A515D">${escapeXml(s.trust_1)}</text>

        <text x="0" y="82" font-family="${fontFam}" font-size="26" font-weight="700" fill="#16A34A">✓</text>
        <text x="36" y="82" font-family="${fontFam}" font-size="22" font-weight="500" fill="#4A515D">${escapeXml(s.trust_2)}</text>
      </g>
    </svg>`;
    await sharp(Buffer.from(svg04)).png().toFile(path.join(blocksDir, `red-${s.key}-04-caso-confianza.png`));

    // ==========================================
    // BLOCK 05: CTA Principal - 1200 x 336 (sin pie bajo el botón)
    // ==========================================
    const ctaSubLines = wrapText(s.cta_sub, 64);
    const svg05 = `
    <svg width="1200" height="336" viewBox="0 0 1200 336" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ctaBoxGrad-${s.key}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E6F6FE" />
          <stop offset="100%" stop-color="#F3EEFC" />
        </linearGradient>
        <linearGradient id="btnGrad-${s.key}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3F1C81" />
          <stop offset="100%" stop-color="#BF8BDB" />
        </linearGradient>
      </defs>
      <rect width="1200" height="336" fill="${cardBg}"/>

      <g transform="translate(60, 10)">
        <rect width="1080" height="316" rx="20" ry="20" fill="url(#ctaBoxGrad-${s.key})" stroke="#DCE6F2" stroke-width="1.5"/>

        <text x="540" y="62" text-anchor="middle" font-family="${fontFam}" font-size="30" font-weight="800" fill="#0D2140">
          ${escapeXml(s.cta_q)}
        </text>

        ${ctaSubLines.map((line, idx) => `
          <text x="540" y="${104 + idx * 28}" text-anchor="middle" font-family="${fontFam}" font-size="20" font-weight="400" fill="#4A515D">
            ${escapeXml(line)}
          </text>
        `).join('')}

        <!-- Big Primary Button - Amplio y centrado sin desbordar texto -->
        <g transform="translate(150, 178)">
          <rect width="780" height="84" rx="42" ry="42" fill="url(#btnGrad-${s.key})" filter="drop-shadow(0 4px 12px rgba(63,28,129,0.25))"/>
          <text x="390" y="52" text-anchor="middle" font-family="${fontFam}" font-size="24" font-weight="700" fill="#FFFFFF">
            ${escapeXml(s.cta_btn)}
          </text>
        </g>
      </g>
    </svg>`;
    await sharp(Buffer.from(svg05)).png().toFile(path.join(blocksDir, `red-${s.key}-05-cta-principal.png`));

    // ==========================================
    // BLOCK 06: CTA Secundario - 1200 x 160 (sin pie bajo el botón)
    // ==========================================
    const svg06 = `
    <svg width="1200" height="160" viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="160" fill="${cardBg}"/>

      <g transform="translate(60, 0)">
        <text x="540" y="42" text-anchor="middle" font-family="${fontFam}" font-size="22" font-weight="500" fill="#64748B">
          ${escapeXml(s.cta_support)}
        </text>

        <!-- Ghost / White Pill Button - Amplio y centrado -->
        <g transform="translate(170, 68)">
          <rect width="740" height="70" rx="35" ry="35" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
          <text x="370" y="44" text-anchor="middle" font-family="${fontFam}" font-size="21" font-weight="700" fill="#1E293B">
            ${escapeXml(s.cta_sec_text)}
          </text>
        </g>
      </g>
    </svg>`;
    await sharp(Buffer.from(svg06)).png().toFile(path.join(blocksDir, `red-${s.key}-06-cta-secundario.png`));
  }

  console.log('✓ All 24 sector blocks + 1 shared banda generated successfully!');
}

function buildSectorHtml(s) {
  const mailtoUrl = `mailto:paula.rozo@glocation.com.co?subject=${encodeURIComponent(s.mailto_sub)}&body=${encodeURIComponent(s.mailto_body)}`;
  const v = '?v=20261124g';
  const cdn = 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks';

  return `<!-- Preencabezado (oculto) -->
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:#EFF3F8;">
  ${s.preheader}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#EFF3F8" style="width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;background-color:#EFF3F8;margin:0 !important;padding:0 !important;border:0 !important;">
  <tr>
    <td align="center" style="padding:28px 12px 36px 12px !important;margin:0 !important;border:0 !important;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px !important;max-width:600px !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 auto !important;padding:0 !important;border:0 !important;">
        <tr>
          <td align="center" style="padding:0 !important;margin:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
            <!-- 1. Encabezado → glocation.co -->
            <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="${cdn}/red-${s.key}-01-encabezado.png${v}" width="600" alt="GLocation · Holding Servinformación" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 2. Apertura (sin enlace) -->
            <img src="${cdn}/red-${s.key}-02-apertura.png${v}" width="600" alt="${escapeXml(s.sectorTitle)}: ${escapeXml(s.h1_a)} ${escapeXml(s.h1_b)}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 3. Comparativo (sin enlace) -->
            <img src="${cdn}/red-${s.key}-03-comparativo.png${v}" width="600" alt="Hoy vs Con un Trabajador Cognitivo" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 4. Caso de uso y confianza (sin enlace) -->
            <img src="${cdn}/red-${s.key}-04-caso-confianza.png${v}" width="600" alt="El caso de uso: ${escapeXml(s.case_title)}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 5. CTA Principal → citas.glocation.co -->
            <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="${cdn}/red-${s.key}-05-cta-principal.png${v}" width="600" alt="${escapeXml(s.cta_btn)}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 6. CTA Secundario → mailto -->
            <a href="${mailtoUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="${cdn}/red-${s.key}-06-cta-secundario.png${v}" width="600" alt="${escapeXml(s.cta_sec_text)}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 7. Cintillo Holding (Google Cloud Premier Partner · Norma ISO 27001) -->
            <img src="${cdn}/red-07-firma-banda.png${v}" width="600" alt="Holding Servinformación (27 años) · Google Cloud Premier Partner · Norma ISO 27001" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 8. Firma: Paula Rozo (Avatar circular + Datos completos) -->
            <a href="${mailtoUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="${cdn}/red-08-firma-paula.png${v}" width="600" alt="Paula Rozo · BDR · paula.rozo@glocation.com.co" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 9. 4 Tarjetas horizontales fijas (150px cada una) -->
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px !important;max-width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 !important;padding:0 !important;border:0 !important;table-layout:fixed !important;">
              <tr>
                <td width="150" valign="top" style="width:150px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="${cdn}/red-card-01-glocation.png${v}" width="150" alt="glocation.co · Plataforma" border="0" style="display:block !important;width:150px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
                <td width="150" valign="top" style="width:150px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="${cdn}/red-card-02-homoagenticus.png${v}" width="150" alt="homoagenticus.co · Manifiesto" border="0" style="display:block !important;width:150px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
                <td width="150" valign="top" style="width:150px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="${cdn}/red-card-03-preagentica.png${v}" width="150" alt="preagentica · Pre-IA" border="0" style="display:block !important;width:150px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
                <td width="150" valign="top" style="width:150px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="https://www.linkedin.com/company/glocation/" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="${cdn}/red-card-04-linkedin.png${v}" width="150" alt="LinkedIn · Perfil" border="0" style="display:block !important;width:150px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- 10. Pie (texto legal) -->
        <tr>
          <td align="center" style="border-width:0px;padding:18px 20px 24px 20px;font-family:'Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#94A3B8;text-align:center;">
            &copy; 2026 GLocation SAS &middot; Holding Servinformaci&oacute;n &middot; Bogot&aacute; D.C., Colombia.<br />
            Recibe este mensaje porque su empresa particip&oacute; en el programa Proveedores en Red. Sus datos de contacto se usan para agendar reuniones comerciales en Colombia y para la recolecci&oacute;n de datos asociada, conforme a la Ley 1581 de 2012.<br />
            Si prefiere no recibir m&aacute;s mensajes, responda &laquo;BAJA&raquo; a este correo.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function wrapStandaloneDoc(rawHtml, title) {
  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${title}</title>
  <style type="text/css">
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td, tr {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
      border-collapse: collapse !important;
      border-spacing: 0 !important;
      border: 0 !important;
    }
    img {
      -ms-interpolation-mode: bicubic;
      border: 0 !important;
      outline: none !important;
      text-decoration: none !important;
      display: block !important;
    }
    body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #EFF3F8;
    }
  </style>
</head>
<body style="margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #EFF3F8;">

  <!-- BARRA DE ACCIÓN SUPERIOR PARA COPIAR CON ENLACES ACTIVOS -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;flex-wrap:wrap;">
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO CON ENLACES (Ctrl+V en Converso / Brevo / Gmail)
    </button>
    <button id="btnCopiarCodigo" onclick="copiarCodigoHtml()" style="background:#1E293B;color:#38BDF8;border:1.5px solid #38BDF8;padding:10px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;">
      &lt;/&gt; COPIAR CÓDIGO HTML
    </button>
    <span id="copyMsg" style="color:#38BDF8;font-size:13px;font-weight:700;display:none;">
      ✓ ¡Copiado con éxito!
    </span>
  </div>
  <script>
    function copiarCorreoVisual() {
      var root = document.querySelector('[data-saasw-root="true"]');
      if (!root) return;
      var sel = window.getSelection();
      sel.removeAllRanges();
      var range = document.createRange();
      range.selectNode(root);
      sel.addRange(range);
      try {
        if (navigator.clipboard && window.ClipboardItem) {
          var htmlBlob = new Blob([root.outerHTML], { type: 'text/html' });
          var textBlob = new Blob([root.innerText], { type: 'text/plain' });
          navigator.clipboard.write([
            new ClipboardItem({ 'text/html': htmlBlob, 'text/plain': textBlob })
          ]).catch(function(){});
        }
        document.execCommand('copy');
        sel.removeAllRanges();
        mostrarMsg('✓ ¡Diseño con enlaces copiado! Pégalo con Ctrl+V en Converso / Brevo');
      } catch (err) {
        alert('Por favor presiona Ctrl+C para copiar');
      }
    }

    function copiarCodigoHtml() {
      var root = document.querySelector('[data-saasw-root="true"]');
      if (!root) return;
      navigator.clipboard.writeText(root.outerHTML).then(function() {
        mostrarMsg('✓ ¡Código HTML limpio copiado! Pégalo en tu editor en modo "Fuente HTML"');
      });
    }

    function mostrarMsg(texto) {
      var msg = document.getElementById('copyMsg');
      if (!msg) return;
      msg.innerText = texto;
      msg.style.display = 'inline';
      setTimeout(function () { msg.style.display = 'none'; }, 4000);
    }
  </script>

  <!-- CONTENEDOR RAÍZ CONTINUO (1 SOLA TARJETA CONTINUA SIN ESPACIOS, CON HIPERVÍNCULOS NATIVOS) -->
  <div data-saasw-root="true" style="margin:0 !important;padding:0 !important;background-color:#EFF3F8;">
${rawHtml}
  </div>
</body>
</html>`;
}

async function updateAllFiles() {
  await generateAllBlocks();

  console.log('Updating HTML files across all locations...');

  const downloadsDir = 'C:\\Users\\Paula\\Downloads';

  for (const s of SECTORS_DATA) {
    const rawHtml = buildSectorHtml(s);
    const standaloneHtml = wrapStandaloneDoc(rawHtml, s.title);

    // 1. public/
    fs.writeFileSync(path.join(__dirname, `../public/${s.slug}.html`), standaloneHtml, 'utf8');
    fs.writeFileSync(path.join(__dirname, `../public/${s.filename}`), standaloneHtml, 'utf8');
    fs.writeFileSync(path.join(__dirname, `../public/glocation-red-${s.key}.html`), standaloneHtml, 'utf8');

    // 2. recursos/
    fs.writeFileSync(path.join(__dirname, `../recursos/plantilla-red-${s.key}.html`), standaloneHtml, 'utf8');
    const storytellingPath = path.join(__dirname, `../recursos/storytelling/${s.storytellingFile}`);
    fs.writeFileSync(storytellingPath, standaloneHtml, 'utf8');

    // 3. Downloads directory
    if (fs.existsSync(downloadsDir)) {
      const destFile = path.join(downloadsDir, s.storytellingFile);
      fs.writeFileSync(destFile, standaloneHtml, 'utf8');
      console.log(`Updated in Downloads: ${destFile}`);

      // Also update any legacy GLocation_Sector.html in Downloads
      const legacyNames = [
        `GLocation_${s.title.replace('GLocation · ', '').replace(/ /g, '-')}.html`,
        `GLocation_${s.title.replace('GLocation · ', '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')}.html`,
        `GLocation_${s.title.replace('GLocation · ', '').replace(/ /g, '_')}.html`,
      ];
      for (const leg of legacyNames) {
        const legacyDlPath = path.join(downloadsDir, leg);
        if (fs.existsSync(legacyDlPath)) {
          fs.writeFileSync(legacyDlPath, standaloneHtml, 'utf8');
          console.log(`Updated legacy in Downloads: ${legacyDlPath}`);
        }
      }
    }
  }

  // 4. Update src/modules/email-marketing/templates/proveedores-red-templates.ts
  console.log('Updating proveedores-red-templates.ts...');
  const tsContent = `/**
 * Plantillas de Email Marketing — Campañas Proveedores en Red (4 Sectores)
 * GLocation SAS · Holding Servinformación
 * Estructura de bloques PNG retina con enlaces activos 100% compatible con Converso (CKEditor) y Brevo.
 */

export interface ProveedorRedCampaign {
  key: "tecnologia" | "logistica" | "construccion" | "agroindustria";
  id: string;
  title: string;
  sector: string;
  description: string;
  target: string;
  hero: string;
  slug: string;
  href: string;
  htmlAsset: string;
  htmlFilename: string;
  rawHtml: string;
}

export function generateRedTecnologiaHtml(): string {
  return ${JSON.stringify(buildSectorHtml(SECTORS_DATA[0]))};
}

export function generateRedLogisticaHtml(): string {
  return ${JSON.stringify(buildSectorHtml(SECTORS_DATA[1]))};
}

export function generateRedConstruccionHtml(): string {
  return ${JSON.stringify(buildSectorHtml(SECTORS_DATA[2]))};
}

export function generateRedAgroindustriaHtml(): string {
  return ${JSON.stringify(buildSectorHtml(SECTORS_DATA[3]))};
}

export const PROVEEDORES_RED_CAMPAIGNS: ProveedorRedCampaign[] = [
  {
    key: "tecnologia",
    id: "red-tecnologia",
    title: "Tecnología y Servicios Digitales",
    sector: "Tecnología",
    description: "Para empresas que atienden cuentas corporativas y reciben solicitudes de IA de sus clientes.",
    target: "Gerentes Comerciales, Directores de Alianzas y Líderes de Soluciones Digitales",
    hero: "Su cliente ya pidió IA. ¿La tiene lista para ofrecer?",
    slug: "tecnologia",
    href: "/campanas/proveedores-red/tecnologia",
    htmlAsset: "/plantilla-red-tecnologia.html",
    htmlFilename: "GLocation_Tecnologia_Storytelling.html",
    rawHtml: generateRedTecnologiaHtml(),
  },
  {
    key: "logistica",
    id: "red-logistica",
    title: "Logística y Transporte",
    sector: "Logística",
    description: "Para empresas con alta dispersión de fletes, transportadores y proveedores de insumos operativos.",
    target: "Líderes de Compras, Abastecimiento y Operaciones Logísticas",
    hero: "La operación pide una respuesta. Las ofertas siguen sin consolidar.",
    slug: "logistica",
    href: "/campanas/proveedores-red/logistica",
    htmlAsset: "/plantilla-red-logistica.html",
    htmlFilename: "GLocation_Logistica_Storytelling.html",
    rawHtml: generateRedLogisticaHtml(),
  },
  {
    key: "construccion",
    id: "red-construccion",
    title: "Construcción e Inmobiliario",
    sector: "Construcción",
    description: "Para constructoras y empresas de ingeniería con múltiples frentes de obra y subcontratistas.",
    target: "Directores de Contratación, Compras de Obra y Gerentes de Proyectos",
    hero: "La obra avanza en terreno. Los expedientes siguen en trámite.",
    slug: "construccion",
    href: "/campanas/proveedores-red/construccion",
    htmlAsset: "/plantilla-red-construccion.html",
    htmlFilename: "GLocation_Construccion_Storytelling.html",
    rawHtml: generateRedConstruccionHtml(),
  },
  {
    key: "agroindustria",
    id: "red-agroindustria",
    title: "Agroindustria y Alimentos",
    sector: "Agroindustria",
    description: "Para procesadoras, empacadoras y comercializadoras con cadena de abastecimiento sensible a calidad.",
    target: "Líderes de Compras de Materias Primas, Abastecimiento y Calidad",
    hero: "La planta necesita insumos ya. Los certificados siguen pendientes.",
    slug: "agroindustria",
    href: "/campanas/proveedores-red/agroindustria",
    htmlAsset: "/plantilla-red-agroindustria.html",
    htmlFilename: "GLocation_Agroindustria_Storytelling.html",
    rawHtml: generateRedAgroindustriaHtml(),
  },
];
`;

  fs.writeFileSync(
    path.join(__dirname, '../src/modules/email-marketing/templates/proveedores-red-templates.ts'),
    tsContent,
    'utf8'
  );

  console.log('✓ All files and templates successfully updated!');
}

updateAllFiles().catch(console.error);
