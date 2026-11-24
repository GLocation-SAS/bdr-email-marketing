const fs = require('fs');
const path = require('path');

const SECTORS = [
  {
    key: 'tecnologia',
    title: 'Tecnología y Servicios Digitales',
    sectorTitle: 'Tecnología y Servicios Digitales',
    filenameDownload: 'GLocation_Tecnologia_Storytelling.html',
    preheader: 'Una conversación entre posibles aliados: qué podría sumar a su oferta un Trabajador Cognitivo de GLocation.',
    ctaMainUrl: 'https://citas.glocation.co/?theme=light',
    ctaMainAlt: '¿Tiene un caso de IA que podamos explorar juntos? Conversemos sobre cómo complementar su oferta con Trabajadores Cognitivos. Agendar conversación de alianza (30 min) en citas.glocation.co',
    ctaSecUrl: 'mailto:paula.rozo@glocation.com.co?subject=Posible%20alianza%20con%20GLocation&body=Hola%2C%20Paula%3A%20me%20interesa%20explorar%20una%20posible%20alianza.%20El%20caso%20que%20tenemos%20en%20mente%20es%3A',
    ctaSecAlt: 'Si aún no desea agendar, responda este correo con el caso que tiene en mente: Tengo un caso para explorar a paula.rozo@glocation.com.co',
    paulaSubject: 'Posible%20alianza%20con%20GLocation',
    alt01: 'GLocation · Holding Servinformación · Google Cloud Premier Partner',
    alt02: 'Tecnología y Servicios Digitales: Su cliente ya pidió IA. ¿La tiene lista para ofrecer? Una oportunidad que se puede perder por falta de capacidad, no de interés.',
    alt03: 'Hoy: El cliente pide IA, toca armar equipo o decir que no, la propuesta se demora; Con un Trabajador Cognitivo: su oferta lo incorpora, cada parte sabe qué aporta y una persona autoriza cambios.',
    alt04: 'El caso de uso: Google Workspace para sus clientes. TC-Workspace gestiona usuarios y permisos. Primero se define por escrito y el acuerdo lo revisan ambas gerencias.'
  },
  {
    key: 'logistica',
    title: 'Logística y Transporte',
    sectorTitle: 'Logística y Transporte',
    filenameDownload: 'GLocation_Logistica_Storytelling.html',
    preheader: 'Un Trabajador Cognitivo prepara evaluaciones y comparativos; Compras revisa y decide.',
    ctaMainUrl: 'https://citas.glocation.co/?theme=light',
    ctaMainAlt: '¿Revisamos dónde se demora hoy su equipo? En 30 minutos, sin venta, miramos la evaluación de proveedores o los comparativos de ofertas y definimos si vale la pena. Agendar Diagnóstico Cognitivo (30 min) en citas.glocation.co',
    ctaSecUrl: 'mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Log%C3%ADstica%20-%20GLocation&body=Hola%2C%20Paula%3A%20me%20interesa%20revisar%20un%20proceso%20de%20compras.%20Nuestro%20proceso%20es%3A',
    ctaSecAlt: 'Si aún no desea agendar, responda este correo y cuéntenos qué proceso le gustaría revisar: Quiero revisar un proceso de compras a paula.rozo@glocation.com.co',
    paulaSubject: 'Diagn%C3%B3stico%20Cognitivo%20Log%C3%ADstica%20-%20GLocation',
    alt01: 'GLocation · Holding Servinformación · Google Cloud Premier Partner',
    alt02: 'Logística y Transporte: La operación pide una respuesta. Las ofertas siguen sin consolidar. Un cuello de botella que no aparece en el ERP, pero sí en los tiempos de Compras.',
    alt03: 'Hoy: Ofertas en correos y hojas distintas, soportes revisados uno por uno, calificaciones que se actualizan tarde; Con un Trabajador Cognitivo: comparativo listo por invitación a cotizar, faltantes visibles, Compras revisa y recomienda.',
    alt04: 'El caso de uso: Comparativo de ofertas y evaluación de proveedores. TC-Analista reúne ofertas y requisitos, prepara comparativo y expediente. Se suma al ERP sin reemplazarlo.'
  },
  {
    key: 'construccion',
    title: 'Construcción e Inmobiliario',
    sectorTitle: 'Construcción e Inmobiliario',
    filenameDownload: 'GLocation_Construccion_Storytelling.html',
    preheader: 'Un Trabajador Cognitivo consolida expedientes y pólizas; Compras y Residencia aprueban y contratan.',
    ctaMainUrl: 'https://citas.glocation.co/?theme=light',
    ctaMainAlt: '¿Revisamos qué está frenando su contratación? En 30 minutos, sin venta, miramos las cotizaciones o los expedientes de un proyecto y definimos si vale la pena. Agendar Diagnóstico Cognitivo (30 min) en citas.glocation.co',
    ctaSecUrl: 'mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Construcci%C3%B3n%20-%20GLocation&body=Hola%2C%20Paula%3A%20me%20interesa%20revisar%20un%20proceso%20de%20contrataci%C3%B3n.%20Nuestro%20proceso%20es%3A',
    ctaSecAlt: 'Si aún no desea agendar, responda este correo y cuéntenos qué proceso le gustaría revisar: Quiero revisar un proceso de contratación a paula.rozo@glocation.com.co',
    paulaSubject: 'Diagn%C3%B3stico%20Cognitivo%20Construcci%C3%B3n%20-%20GLocation',
    alt01: 'GLocation · Holding Servinformación · Google Cloud Premier Partner',
    alt02: 'Construcción e Inmobiliario: La obra avanza en terreno. Los expedientes siguen en trámite. Un retraso administrativo que frena cuadrillas y aplaza compras críticas.',
    alt03: 'Hoy: Pólizas que se vencen sin aviso, expedientes incompletos que detienen pagos, cotizaciones dispersas por proyecto; Con un Trabajador Cognitivo: cuadro comparativo por ítem de obra, vigencias de pólizas al día, Compras y Residencia aprueban.',
    alt04: 'El caso de uso: Cuadro comparativo y verificación de subcontratistas. TC-Analista consolida cotizaciones, valida pólizas y antecedentes. Se adapta a los formatos de su empresa.'
  },
  {
    key: 'agroindustria',
    title: 'Agroindustria y Alimentos',
    sectorTitle: 'Agroindustria y Alimentos',
    filenameDownload: 'GLocation_Agroindustria_Storytelling.html',
    preheader: 'Un Trabajador Cognitivo organiza expedientes y vigencias; Calidad valida y Compras aprueba.',
    ctaMainUrl: 'https://citas.glocation.co/?theme=light',
    ctaMainAlt: '¿Revisamos cómo aprueban hoy a un proveedor? En 30 minutos, sin venta, miramos la recopilación de documentos o la revisión de vigencias y definimos si vale la pena. Agendar Diagnóstico Cognitivo (30 min) en citas.glocation.co',
    ctaSecUrl: 'mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Agroindustria%20-%20GLocation&body=Hola%2C%20Paula%3A%20me%20interesa%20revisar%20la%20evaluaci%C3%B3n%20de%20proveedores.%20Nuestro%20proceso%20es%3A',
    ctaSecAlt: 'Si aún no desea agendar, responda este correo y cuéntenos qué proceso le gustaría revisar: Quiero revisar la evaluación de proveedores a paula.rozo@glocation.com.co',
    paulaSubject: 'Diagn%C3%B3stico%20Cognitivo%20Agroindustria%20-%20GLocation',
    alt01: 'GLocation · Holding Servinformación · Google Cloud Premier Partner',
    alt02: 'Agroindustria y Alimentos: La planta necesita insumos ya. Los certificados siguen pendientes. La tensión diaria entre urgencia operativa y cumplimiento de calidad.',
    alt03: 'Hoy: Fichas técnicas sin versión vigente, certificados de calidad dispersos en correos, Compras y Calidad revisando por separado; Con un Trabajador Cognitivo: expediente y matriz por categoría, faltantes y vencidos señalados, Calidad valida y Compras aprueba.',
    alt04: 'El caso de uso: Expediente y matriz por categoría de insumo. TC-Analista reúne soportes, señala faltantes o vencidos y arma la matriz de su categoría. Se adapta a los requisitos de su sistema de calidad.'
  }
];

function buildHtml(s, fullDoc = true) {
  const cdnBase = 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks';
  const v = '20261124';

  const inner = `<!-- Preencabezado (oculto) -->
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
            <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="${cdnBase}/red-${s.key}-01-encabezado.png?v=${v}" width="600" alt="${s.alt01}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 2. Apertura (sin enlace) -->
            <img src="${cdnBase}/red-${s.key}-02-apertura.png?v=${v}" width="600" alt="${s.alt02}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 3. Comparativo (sin enlace) -->
            <img src="${cdnBase}/red-${s.key}-03-comparativo.png?v=${v}" width="600" alt="${s.alt03}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 4. Caso de uso y confianza (sin enlace) -->
            <img src="${cdnBase}/red-${s.key}-04-caso-confianza.png?v=${v}" width="600" alt="${s.alt04}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 5. CTA Principal → citas.glocation.co -->
            <a href="${s.ctaMainUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="${cdnBase}/red-${s.key}-05-cta-principal.png?v=${v}" width="600" alt="${s.ctaMainAlt}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 6. CTA Secundario → mailto -->
            <a href="${s.ctaSecUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="${cdnBase}/red-${s.key}-06-cta-secundario.png?v=${v}" width="600" alt="${s.ctaSecAlt}" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 7. Cintillo Holding -->
            <img src="${cdnBase}/saasw-fu1-07-firma-banda-claro.png?v=20261120P" width="600" alt="Holding Servinformación · Google Cloud Premier Partner · Norma ISO 27001" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 8. Firma: Paula (3 columnas fijas de imagen) -->
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px !important;max-width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 !important;padding:0 !important;border:0 !important;table-layout:fixed !important;">
              <tr>
                <td width="340" valign="top" style="width:340px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="mailto:paula.rozo@glocation.com.co?subject=${s.paulaSubject}" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="${cdnBase}/saasw-fu1-08-firma-paula-claro.png?v=20261120P" width="340" alt="Paula Rozo · BDR · paula.rozo@glocation.com.co" border="0" style="display:block !important;width:340px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
                <td width="130" valign="top" style="width:130px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="${cdnBase}/saasw-fu1-09-firma-glocation-claro.png?v=20261120P" width="130" alt="glocation.co · Plataforma" border="0" style="display:block !important;width:130px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
                <td width="130" valign="top" style="width:130px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="${cdnBase}/saasw-fu1-10-firma-homoagenticus-claro.png?v=20261120P" width="130" alt="homoagenticus.co · Manifiesto" border="0" style="display:block !important;width:130px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- 9. Pie (texto legal) -->
        <tr>
          <td align="center" style="border-width:0px;padding:18px 20px 24px 20px;font-family:'Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#94A3B8;text-align:center;">
            &copy; 2026 GLocation SAS &middot; Holding Servinformación &middot; Bogotá D.C., Colombia.<br />
            Recibe este mensaje porque su empresa participó en el programa Proveedores en Red.<br />
            Si prefiere no recibir más mensajes, responda &laquo;BAJA&raquo; a este correo.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

  if (!fullDoc) return inner;

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>GLocation — ${s.title}</title>
  <style type="text/css">
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    img {
      -ms-interpolation-mode: bicubic;
      border: 0;
      outline: none;
      text-decoration: none;
      display: block;
    }
    body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #EFF3F8;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100% !important; background-color: #EFF3F8;">
${inner}
</body>
</html>`;
}

// Generate files
const baseDir = path.resolve(__dirname, '..');
const publicDir = path.join(baseDir, 'public');
const recursosDir = path.join(baseDir, 'recursos', 'storytelling');
const userDownloadsDir = 'C:\\Users\\Paula\\Downloads';

SECTORS.forEach(s => {
  const fullHtml = buildHtml(s, true);

  // 1. public/plantilla-red-{sector}.html
  fs.writeFileSync(path.join(publicDir, `plantilla-red-${s.key}.html`), fullHtml, 'utf8');
  // 2. public/glocation-red-{sector}.html
  fs.writeFileSync(path.join(publicDir, `glocation-red-${s.key}.html`), fullHtml, 'utf8');
  // 3. recursos/storytelling/GLocation_{Sector}_Storytelling.html
  fs.writeFileSync(path.join(recursosDir, s.filenameDownload), fullHtml, 'utf8');
  // 4. C:\Users\Paula\Downloads\GLocation_{Sector}_Storytelling.html
  try {
    fs.writeFileSync(path.join(userDownloadsDir, s.filenameDownload), fullHtml, 'utf8');
  } catch (e) {
    console.warn(`Could not write to downloads: ${e.message}`);
  }
  console.log(`✓ Synchronized HTML for sector: ${s.key}`);
});

// Now update proveedores-red-templates.ts
const tsContent = `"use client";

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

${SECTORS.map(s => {
  const funcName = `generateRed${s.key.charAt(0).toUpperCase() + s.key.slice(1)}Html`;
  const code = buildHtml(s, false);
  return `export function ${funcName}(): string {\n  return ${JSON.stringify(code)};\n}`;
}).join('\n\n')}

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

const tsFilePath = path.join(baseDir, 'src', 'modules', 'email-marketing', 'templates', 'proveedores-red-templates.ts');
fs.writeFileSync(tsFilePath, tsContent, 'utf8');
console.log('✓ Updated proveedores-red-templates.ts successfully!');
