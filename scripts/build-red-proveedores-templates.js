const fs = require('fs');
const path = require('path');

const inputFiles = [
  {
    key: 'tecnologia',
    title: 'GLocation · Tecnología y Servicios Digitales',
    sector: 'Tecnología y Servicios Digitales',
    badge: 'EM-08',
    file: 'C:/Users/Paula/.gemini/antigravity/brain/76107d8b-3c93-4070-bf7a-b3a458efa390/.user_uploaded/media_1795102933089_43d46d4f.html',
    slug: 'plantilla-red-tecnologia',
    filename: 'glocation-red-tecnologia-y-servicios-digitales.html',
    hero: 'Un agente es tecnología. UN TRABAJADOR COGNITIVO ES ORGANIZACIÓN.',
    target: 'Gerente Comercial o de Alianzas'
  },
  {
    key: 'logistica',
    title: 'GLocation · Logística y Transporte',
    sector: 'Logística y Transporte',
    badge: 'EM-09',
    file: 'C:/Users/Paula/.gemini/antigravity/brain/76107d8b-3c93-4070-bf7a-b3a458efa390/.user_uploaded/media_1795102933108_a62c57f6.html',
    slug: 'plantilla-red-logistica',
    filename: 'glocation-red-logistica-y-transporte.html',
    hero: 'Cientos de proveedores, ofertas y servicios, CON SU EQUIPO AL MANDO.',
    target: 'Líder de Compras y Abastecimiento'
  },
  {
    key: 'construccion',
    title: 'GLocation · Construcción e Inmobiliario',
    sector: 'Construcción e Inmobiliario',
    badge: 'EM-10',
    file: 'C:/Users/Paula/.gemini/antigravity/brain/76107d8b-3c93-4070-bf7a-b3a458efa390/.user_uploaded/media_1795102933108_5f98cc3a.html',
    slug: 'plantilla-red-construccion',
    filename: 'glocation-red-construccion-e-inmobiliario.html',
    hero: 'Pliegos, contratos y actas de varios proyectos, CON SU EQUIPO AL MANDO.',
    target: 'Líder de Compras y Contratos'
  },
  {
    key: 'agroindustria',
    title: 'GLocation · Agroindustria y Alimentos',
    sector: 'Agroindustria y Alimentos',
    badge: 'EM-11',
    file: 'C:/Users/Paula/.gemini/antigravity/brain/76107d8b-3c93-4070-bf7a-b3a458efa390/.user_uploaded/media_1795102933108_728b2d52.html',
    slug: 'plantilla-red-agroindustria',
    filename: 'glocation-red-agroindustria-y-alimentos.html',
    hero: 'Evaluar proveedores de muchas categorías, SIN PERDER EL CONTROL.',
    target: 'Líder de Compras y Abastecimiento'
  }
];

const embeddedResetStyle = `  <!-- Reset explícito para evitar cuadrículas/bordes de tablas en Converso (CKEditor), Brevo y clientes de correo -->
  <style type="text/css">
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td, tr, th {
      border: 0 !important;
      border-style: none !important;
      border-collapse: collapse !important;
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }
    table.cke_show_border,
    table.cke_show_border td,
    table.cke_show_border tr,
    .cke_show_border,
    .cke_show_border td,
    .cke_show_border tr {
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
    }
    .cke_table-faked-selection-editor {
      border: 0 !important;
      outline: none !important;
    }
    img {
      -ms-interpolation-mode: bicubic;
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
      text-decoration: none !important;
      display: block !important;
    }
    a {
      text-decoration: none !important;
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
    }
  </style>`;

const toolbarHtml = `  <!-- BARRA DE ACCIÓN SUPERIOR PARA COPIAR CON ENLACES ACTIVOS -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;flex-wrap:wrap;">
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO CON ENLACES (Ctrl+V en Converso / Brevo / Gmail / Outlook)
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
  </script>`;

function transformHtmlForConverso(raw) {
  // Extract body inner content
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1].trim() : raw.trim();

  // 1. Force outer wrapper table to match Jefes TI structure:
  body = body.replace(
    /<table\s+role="presentation"\s+width="100%"\s+cellpadding="0"\s+cellspacing="0"\s+border="0"\s+style="background-color:#E7EEF8;">/i,
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#E7EEF8" style="width:100% !important;border-collapse:collapse !important;background-color:#E7EEF8;margin:0 !important;padding:0 !important;border:0 !important;border-style:none !important;">'
  );

  // 2. Ensure the centering td matches Jefes TI
  body = body.replace(
    /<tr><td\s+align="center"\s+style="padding:24px 10px;">/i,
    '<tr><td align="center" style="padding:24px 10px !important;margin:0 !important;border:0 !important;border-style:none !important;">'
  );

  // 3. Force inner card table to fixed width 640px matching Jefes TI structure (so Converso does not stretch it to 100%):
  body = body.replace(
    /<table\s+role="presentation"\s+width="100%"\s+cellpadding="0"\s+cellspacing="0"\s+border="0"\s+style="max-width:640px;border-radius:20px;overflow:hidden;background-color:#ffffff;">/i,
    '<table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="width:640px !important;max-width:640px !important;border-collapse:collapse !important;margin:0 auto !important;border:0 !important;border-style:none !important;border-radius:20px;overflow:hidden;background-color:#ffffff;">'
  );

  // 4. Transform all table tags:
  // - Replace border-collapse:separate with border-collapse:collapse !important;
  // - Ensure border:0 !important; border-style:none !important; mso-table-lspace:0pt !important; mso-table-rspace:0pt !important;
  body = body.replace(/<table\b([^>]*)>/gi, (fullMatch, attrs) => {
    let cleanAttrs = attrs;

    // Eliminate border-collapse: separate
    cleanAttrs = cleanAttrs.replace(/border-collapse:\s*separate;?/gi, 'border-collapse:collapse !important;');

    // Inspect style attribute
    const styleMatch = cleanAttrs.match(/style="([^"]*)"/i);
    if (styleMatch) {
      let styleVal = styleMatch[1];
      if (!/border\s*:\s*0/i.test(styleVal) && !/border\s*:\s*none/i.test(styleVal) && !/border\s*:\s*1px/i.test(styleVal)) {
        styleVal += ';border:0 !important;border-style:none !important;';
      }
      if (!/border-collapse/i.test(styleVal)) {
        styleVal += ';border-collapse:collapse !important;';
      }
      if (!/mso-table-lspace/i.test(styleVal)) {
        styleVal += ';mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;';
      }
      styleVal = styleVal.replace(/;;+/g, ';');
      cleanAttrs = cleanAttrs.replace(/style="[^"]*"/i, `style="${styleVal}"`);
    } else {
      cleanAttrs += ' style="border:0 !important;border-style:none !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;"';
    }

    // Ensure border="0" cellpadding="0" cellspacing="0"
    if (!/border="/i.test(cleanAttrs)) cleanAttrs += ' border="0"';
    if (!/cellpadding="/i.test(cleanAttrs)) cleanAttrs += ' cellpadding="0"';
    if (!/cellspacing="/i.test(cleanAttrs)) cleanAttrs += ' cellspacing="0"';

    return `<table${cleanAttrs}>`;
  });

  // 5. Transform all td tags:
  // - If it has card border (1px solid #B7C6D8), make sure it has !important
  // - If it has no border, add border:0 !important; border-style:none !important;
  body = body.replace(/<td\b([^>]*)>/gi, (fullMatch, attrs) => {
    let cleanAttrs = attrs;

    const styleMatch = cleanAttrs.match(/style="([^"]*)"/i);
    let styleVal = styleMatch ? styleMatch[1] : '';

    // If card with border
    if (/border:\s*1px\s*solid\s*#B7C6D8/i.test(styleVal)) {
      styleVal = styleVal.replace(/border:\s*1px\s*solid\s*#B7C6D8;?/gi, 'border:1px solid #B7C6D8 !important;');
      styleVal = styleVal.replace(/border-left:\s*4px\s*solid\s*([^;]+);?/gi, 'border-left:4px solid $1 !important;');
    } else if (!/border\s*:/i.test(styleVal)) {
      styleVal += ';border:0 !important;border-style:none !important;';
    }

    styleVal = styleVal.replace(/;;+/g, ';');

    if (styleMatch) {
      cleanAttrs = cleanAttrs.replace(/style="[^"]*"/i, `style="${styleVal}"`);
    } else {
      cleanAttrs += ` style="${styleVal}"`;
    }

    return `<td${cleanAttrs}>`;
  });

  // 6. Prepend embeddedResetStyle inside data-saasw-root
  const finalRoot = `<div data-saasw-root="true" style="margin:0 !important;padding:0 !important;background-color:#E7EEF8;">\n${embeddedResetStyle}\n${body}\n</div>`;

  return {
    rawBody: body,
    wrappedRoot: finalRoot
  };
}

const processed = [];

for (const item of inputFiles) {
  const raw = fs.readFileSync(item.file, 'utf8');

  // Extract head
  const headMatch = raw.match(/<head>([\s\S]*?)<\/head>/i);
  const headContent = headMatch ? headMatch[1] : '';

  const { rawBody, wrappedRoot } = transformHtmlForConverso(raw);

  const standaloneHtml = `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
${headContent}
</head>
<body style="margin:0 !important;padding:0 !important;width:100% !important;background-color:#E7EEF8;">

${toolbarHtml}

${wrappedRoot}

</body>
</html>`;

  // Write to public/
  const publicPath = path.join(__dirname, '..', 'public', `${item.slug}.html`);
  fs.writeFileSync(publicPath, standaloneHtml, 'utf8');
  console.log(`Wrote: ${publicPath}`);

  // Write to recursos/
  const recursosPath = path.join(__dirname, '..', 'recursos', `${item.slug}.html`);
  fs.writeFileSync(recursosPath, standaloneHtml, 'utf8');
  console.log(`Wrote: ${recursosPath}`);

  processed.push({
    ...item,
    rawBody,
    wrappedRoot
  });
}

// Generate TS template file
const tsPath = path.join(__dirname, '..', 'src', 'modules', 'email-marketing', 'templates', 'proveedores-red-templates.ts');

let tsContent = `"use client";

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

`;

for (const p of processed) {
  const fnName = `generateRed${p.key.charAt(0).toUpperCase() + p.key.slice(1)}Html`;
  tsContent += `export function ${fnName}(): string {\n  return ${JSON.stringify(p.wrappedRoot)};\n}\n\n`;
}

tsContent += `export const PROVEEDORES_RED_CAMPAIGNS: ProveedorRedCampaign[] = [\n`;
for (const p of processed) {
  const fnName = `generateRed${p.key.charAt(0).toUpperCase() + p.key.slice(1)}Html`;
  tsContent += `  {
    key: "${p.key}",
    id: "${p.badge}",
    title: "${p.title}",
    sector: "${p.sector}",
    description: "Campaña B2B dirigida a ${p.target.toLowerCase()} en el sector ${p.sector.toLowerCase()}, derivada del programa Proveedores en Red. Estructura optimizada para Converso.",
    target: "${p.target}",
    hero: "${p.hero}",
    slug: "${p.slug}",
    href: "/email-marketing/${p.slug}",
    htmlAsset: "/${p.slug}.html",
    htmlFilename: "${p.filename}",
    rawHtml: ${fnName}(),
  },\n`;
}
tsContent += `];\n`;

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log(`Wrote TS templates to: ${tsPath}`);
