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
    preheader: 'Expedientes de subcontratistas completos y al día; Contratos y Obra deciden.',
    chip: 'CONSTRUCCIÓN E INMOBILIARIO',
    h1_a: 'El proyecto necesita contratar.',
    h1_b: 'EL EXPEDIENTE TODAVÍA NO ESTÁ COMPLETO.',
    sub_hero: 'El retraso no está en la negociación; está en reunir, validar y cruzar soportes de contratistas.',
    destinatario: 'Estimado(a) líder de Compras y Contratos:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. Para arrancar cada frente de obra, su equipo revisa pólizas, hojas de vida y cotizaciones de varios subcontratistas. La carga documental frena la adjudicación y atrasa el cronograma de obra.',
    hoy_items: [
      'Expedientes dispersos entre obra y oficina',
      'Pólizas y vigencias verificadas tarde',
      'Dudas sobre qué contratista está listo'
    ],
    tc_items: [
      'Expediente consolidado por subcontratista',
      'Pólizas y vigencias al día, por obra',
      'Contratos y Obra adjudican a tiempo'
    ],
    tc_highlight: 'Contratos y Obra adjudican a tiempo',
    case_ico: 'POL',
    case_sub: 'El caso de uso',
    case_title: 'Expediente de subcontratistas y control de pólizas',
    case_desc: 'TC-Analista reúne cotizaciones y soportes por subcontratista, verifica vigencias y coberturas frente a los requisitos de la obra y alerta sobre faltantes. Su equipo adjudica.',
    case_pill: '●  USTED ADJUDICA: CONTRATOS Y OBRA',
    trust_1: 'Se adapta al flujo de compras y contratos que ya tienen.',
    trust_2: 'La decisión contractual y técnica sigue en su equipo.',
    cta_q: '¿Revisamos qué está frenando su contratación?',
    cta_sub: 'En 30 minutos, sin venta, miramos las cotizaciones o los expedientes de un proyecto y definimos si vale la pena.',
    cta_btn: 'Agendar Diagnóstico Cognitivo (30 min) →',
    cta_support: 'Si aún no desea agendar, responda este correo y cuéntenos qué proceso le gustaría revisar:',
    cta_sec_text: 'Quiero revisar un proceso de contratación ✉',
    mailto_sub: 'Diagnóstico Cognitivo Construcción - GLocation',
    mailto_body: 'Hola, Paula: me interesa revisar un proceso de contratación. Nuestro proceso es: '
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

function escapeXml(unsafe) {
  return (unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function buildAllRedBlocks() {
  console.log('Generating Red Proveedores image blocks with Sharp...');

  const logoBuf = fs.readFileSync(path.join(iconsDir, 'logo-glocation-claro.png'));
  const logoB64 = `data:image/png;base64,${logoBuf.toString('base64')}`;

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
    // BLOCK 02: Apertura (Hero gradient + Saludo + Conflicto) - 1200 x 620
    // ==========================================
    const svg02 = `
    <svg width="1200" height="620" viewBox="0 0 1200 620" xmlns="http://www.w3.org/2000/svg">
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
      <rect width="1200" height="620" fill="${cardBg}"/>

      <!-- Hero Banner Container (width 1080) -->
      <g transform="translate(60, 20)">
        <rect width="1080" height="260" rx="16" ry="16" fill="url(#heroGrad-${s.key})"/>
        
        <!-- Chip / Eyebrow Pill -->
        <g transform="translate(36, 28)">
          <rect width="380" height="38" rx="19" ry="19" fill="url(#chipGrad-${s.key})"/>
          <text x="190" y="24" text-anchor="middle" font-family="${fontFam}" font-size="16" font-weight="700" letter-spacing="1.8" fill="#FFFFFF">
            ${escapeXml(s.chip)}
          </text>
        </g>

        <!-- Titular 2 Líneas -->
        <text x="36" y="112" font-family="${fontFam}" font-size="36" font-weight="600" fill="#0D2140" letter-spacing="-0.3">
          ${escapeXml(s.h1_a)}
        </text>
        <text x="36" y="162" font-family="${fontFam}" font-size="42" font-weight="800" fill="#040914" letter-spacing="-0.5">
          ${escapeXml(s.h1_b)}
        </text>

        <!-- Subtítulo hero -->
        <text x="36" y="214" font-family="${fontFam}" font-size="22" font-weight="400" fill="#4A515D">
          ${escapeXml(s.sub_hero)}
        </text>
      </g>

      <!-- Saludo & Intro -->
      <g transform="translate(60, 320)">
        <text x="0" y="32" font-family="${fontFam}" font-size="25" font-weight="700" fill="#0D2140">
          ${escapeXml(s.destinatario)}
        </text>
        <foreignObject x="0" y="52" width="1080" height="220">
          <p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font-family:${fontFam};font-size:22px;line-height:36px;color:#4A515D;">
            ${escapeXml(s.intro)}
          </p>
        </foreignObject>
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
    // BLOCK 04: Caso de Uso Protagonista + Confianza - 1200 x 480
    // ==========================================
    const svg04 = `
    <svg width="1200" height="480" viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="480" fill="${cardBg}"/>

      <!-- Tarjeta Caso de Uso (width 1080, height 300) -->
      <g transform="translate(60, 10)">
        <rect width="1080" height="290" rx="16" ry="16" fill="#F8FAFD" stroke="#DCE6F2" stroke-width="1.5"/>
        <!-- Left border accent -->
        <path d="M 0,16 Q 0,0 16,0 L 16,290 Q 0,290 0,274 Z" fill="#0284C7"/>

        <!-- Badge Icon -->
        <g transform="translate(36, 36)">
          <rect width="80" height="80" rx="16" ry="16" fill="#0284C7"/>
          <text x="40" y="49" text-anchor="middle" font-family="${fontFam}" font-size="24" font-weight="800" fill="#FFFFFF">
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
          
          <foreignObject x="0" y="74" width="900" height="110">
            <p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font-family:${fontFam};font-size:22px;line-height:34px;color:#4A515D;">
              ${s.case_desc.replace(/<strong[^>]*>/g, '<b style="color:#0D2140;">').replace(/<\/strong>/g, '</b>')}
            </p>
          </foreignObject>

          <!-- Pill Inferior -->
          <g transform="translate(0, 190)">
            <rect width="400" height="38" rx="19" ry="19" fill="#E0F2FE"/>
            <text x="20" y="25" font-family="${fontFam}" font-size="16" font-weight="700" letter-spacing="0.8" fill="#0284C7">
              ${escapeXml(s.case_pill.replace(/&#9679;&nbsp;\s*/g, '●  '))}
            </text>
          </g>
        </g>
      </g>

      <!-- Bloque de Confianza (Checks Verdes) -->
      <g transform="translate(80, 340)">
        <g transform="translate(0, 20)">
          <text x="0" y="24" font-family="${fontFam}" font-size="26" font-weight="700" fill="#16A34A">✓</text>
          <text x="36" y="24" font-family="${fontFam}" font-size="22" font-weight="400" fill="#4A515D">
            ${escapeXml(s.trust_1)}
          </text>
        </g>
        <g transform="translate(0, 70)">
          <text x="0" y="24" font-family="${fontFam}" font-size="26" font-weight="700" fill="#16A34A">✓</text>
          <text x="36" y="24" font-family="${fontFam}" font-size="22" font-weight="400" fill="#4A515D">
            ${escapeXml(s.trust_2)}
          </text>
        </g>
      </g>
    </svg>`;
    await sharp(Buffer.from(svg04)).png().toFile(path.join(blocksDir, `red-${s.key}-04-caso-confianza.png`));

    // ==========================================
    // BLOCK 05: CTA Principal (Pregunta + Texto + Botón Agendar) - 1200 x 360
    // ==========================================
    const svg05 = `
    <svg width="1200" height="360" viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ctaBgGrad-${s.key}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E6F6FE" />
          <stop offset="100%" stop-color="#F3EEFC" />
        </linearGradient>
      </defs>
      <rect width="1200" height="360" fill="${cardBg}"/>

      <!-- Contenedor CTA Box (width 1080, height 330) -->
      <g transform="translate(60, 10)">
        <rect width="1080" height="330" rx="20" ry="20" fill="url(#ctaBgGrad-${s.key})" stroke="#DCE6F2" stroke-width="1.5"/>

        <!-- Pregunta -->
        <text x="540" y="64" text-anchor="middle" font-family="${fontFam}" font-size="34" font-weight="700" fill="#0D2140">
          ${escapeXml(s.cta_q)}
        </text>

        <!-- Texto Breve -->
        <text x="540" y="118" text-anchor="middle" font-family="${fontFam}" font-size="22" font-weight="400" fill="#4A515D">
          ${escapeXml(s.cta_sub)}
        </text>

        <!-- Botón Principal (Agendar 30 min) -->
        <g transform="translate(240, 170)">
          <rect width="600" height="84" rx="42" ry="42" fill="#3F1C81"/>
          <text x="300" y="52" text-anchor="middle" font-family="${fontFam}" font-size="24" font-weight="700" fill="#FFFFFF">
            ${escapeXml(s.cta_btn)}
          </text>
        </g>

        <!-- Indicador de Enlace citas.glocation.co -->
        <text x="540" y="295" text-anchor="middle" font-family="${fontFam}" font-size="17" font-weight="500" fill="#64748B">
          citas.glocation.co · Sesión individual de 30 minutos sin compromiso
        </text>
      </g>
    </svg>`;
    await sharp(Buffer.from(svg05)).png().toFile(path.join(blocksDir, `red-${s.key}-05-cta-principal.png`));

    // ==========================================
    // BLOCK 06: CTA Secundario (Línea de apoyo + Botón Mailto) - 1200 x 220
    // ==========================================
    const svg06 = `
    <svg width="1200" height="220" viewBox="0 0 1200 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="220" fill="${cardBg}"/>

      <!-- Línea de apoyo -->
      <text x="600" y="44" text-anchor="middle" font-family="${fontFam}" font-size="21" font-weight="500" fill="#64748B">
        ${escapeXml(s.cta_support)}
      </text>

      <!-- Botón Secundario Blanco con borde -->
      <g transform="translate(260, 76)">
        <rect width="680" height="74" rx="37" ry="37" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
        <text x="340" y="46" text-anchor="middle" font-family="${fontFam}" font-size="23" font-weight="700" fill="#1E293B">
          ${escapeXml(s.cta_sec_text)}
        </text>
      </g>

      <text x="600" y="190" text-anchor="middle" font-family="${fontFam}" font-size="16" font-weight="500" fill="#94A3B8">
        Abre correo directo a paula.rozo@glocation.com.co
      </text>
    </svg>`;
    await sharp(Buffer.from(svg06)).png().toFile(path.join(blocksDir, `red-${s.key}-06-cta-secundario.png`));
  }

  console.log('✓ All sector image blocks generated successfully!');
}

buildAllRedBlocks().catch(console.error);
