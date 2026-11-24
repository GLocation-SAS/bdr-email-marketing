const fs = require('fs');
const path = require('path');

const sectors = [
  {
    key: 'Tecnologia',
    file: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Tecnologia_Storytelling.html'),
    downloadsFile: 'C:/Users/Paula/Downloads/GLocation_Tecnologia_Storytelling.html',
    downloadsAlt: 'C:/Users/Paula/Downloads/GLocation_Tecnologia-y-Servicios-Digitales.html',
    slug: 'plantilla-red-tecnologia',
    filename: 'glocation-red-tecnologia-y-servicios-digitales.html',
  },
  {
    key: 'Logistica',
    file: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Logistica_Storytelling.html'),
    downloadsFile: 'C:/Users/Paula/Downloads/GLocation_Logistica_Storytelling.html',
    downloadsAlt: 'C:/Users/Paula/Downloads/GLocation_Logistica-y-Transporte.html',
    slug: 'plantilla-red-logistica',
    filename: 'glocation-red-logistica-y-transporte.html',
  },
  {
    key: 'Construccion',
    file: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Construccion_Storytelling.html'),
    downloadsFile: 'C:/Users/Paula/Downloads/GLocation_Construccion_Storytelling.html',
    downloadsAlt: 'C:/Users/Paula/Downloads/GLocation_Construccion-e-Inmobiliario.html',
    slug: 'plantilla-red-construccion',
    filename: 'glocation-red-construccion-e-inmobiliario.html',
  },
  {
    key: 'Agroindustria',
    file: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Agroindustria_Storytelling.html'),
    downloadsFile: 'C:/Users/Paula/Downloads/GLocation_Agroindustria_Storytelling.html',
    downloadsAlt: 'C:/Users/Paula/Downloads/GLocation_Agroindustria-y-Alimentos.html',
    slug: 'plantilla-red-agroindustria',
    filename: 'glocation-red-agroindustria-y-alimentos.html',
  }
];

for (const s of sectors) {
  let html = fs.readFileSync(s.file, 'utf8');

  // 1. Ensure table container has fixed width="600" instead of width="100%"
  // Replace outer table and inner table structure
  // Old pattern:
  // <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#E7EEF8;">
  // <tr><td align="center" style="padding:20px 10px;">
  // <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
  // <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;border-radius:18px;overflow:hidden;background-color:#ffffff;">

  html = html.replace(
    /<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#E7EEF8;">[\s\S]*?<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;border-radius:18px;overflow:hidden;background-color:#ffffff;">/i,
    `<div data-converso-root="true" style="margin:0 !important;padding:0 !important;background-color:#E7EEF8;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#E7EEF8" style="width:100% !important;border-collapse:collapse !important;background-color:#E7EEF8;margin:0 !important;padding:0 !important;border:0 !important;">
<tr><td align="center" style="padding:24px 10px 30px 10px !important;margin:0 !important;border:0 !important;">
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="width:600px !important;max-width:600px !important;margin:0 auto !important;border-collapse:collapse !important;background-color:#ffffff;border-radius:18px;overflow:hidden;border:0 !important;box-shadow:0 8px 30px rgba(15,23,42,0.08);">`
  );

  // Remove trailing MSO closing comment and wrap root div at the end
  html = html.replace(
    /<\/table>[\s\n]*<!--\[if mso\]><\/td><\/tr><\/table><!\[endif\]-->[\s\n]*<\/td><\/tr>[\s\n]*<\/table>/i,
    `</table>\n</td></tr>\n</table>\n</div>`
  );

  // 2. Fix the 2 columns in "Hoy" / "Con un Trabajador Cognitivo"
  // Make sure they have fixed pixel widths (256px + 20px gap + 256px = 532px)
  html = html.replace(
    /<td class="col" width="48%" valign="top" style="width:48%;background-color:#f4f6f9;border-radius:14px;padding:16px 16px 8px 16px;">/g,
    '<td class="col" width="256" valign="top" bgcolor="#F4F6F9" style="width:256px !important;max-width:256px;background-color:#F4F6F9;border-radius:14px;padding:16px 16px 8px 16px;">'
  );
  html = html.replace(
    /<td class="gap" width="4%" style="width:4%;font-size:0;line-height:0;">&nbsp;<\/td>/g,
    '<td class="gap" width="20" style="width:20px !important;font-size:0;line-height:0;">&nbsp;</td>'
  );
  html = html.replace(
    /<td class="col" width="48%" valign="top" bgcolor="#F3EEFC" style="width:48%;background-color:#F3EEFC;border:1px solid #DDD0FB;border-radius:14px;padding:16px 16px 8px 16px;">/g,
    '<td class="col" width="256" valign="top" bgcolor="#F3EEFC" style="width:256px !important;max-width:256px;background-color:#F3EEFC;border:1px solid #DDD0FB;border-radius:14px;padding:16px 16px 8px 16px;">'
  );

  // 3. Fix "El caso de uso" box: ensure explicit background color and borders
  html = html.replace(
    /<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;border:1px solid #B7C6D8;border-left:4px solid #0284c7;border-radius:14px;"><tr>\s*<td width="62" valign="top" style="width:46px;padding:18px 0 16px 16px;">/g,
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F8FAFD" style="width:100% !important;border-collapse:separate !important;background-color:#F8FAFD;border:1px solid #DCE6F2;border-left:4px solid #0284c7;border-radius:14px;"><tr>\n    <td width="70" valign="top" style="width:70px !important;padding:18px 0 16px 16px;">'
  );

  // 4. Fix 4 ecosystem cards at the bottom:
  // Give each column width="130" with pixel width
  html = html.replace(
    /<td width="25%" valign="top" style="width:25%;padding:0 4px 0 0;">/g,
    '<td width="132" valign="top" style="width:132px !important;padding:0 4px 0 0;">'
  );
  html = html.replace(
    /<td width="25%" valign="top" style="width:25%;padding:0 3px 0 3px;">/g,
    '<td width="132" valign="top" style="width:132px !important;padding:0 3px 0 3px;">'
  );
  html = html.replace(
    /<td width="25%" valign="top" style="width:25%;padding:0 0 0 4px;">/g,
    '<td width="132" valign="top" style="width:132px !important;padding:0 0 0 4px;">'
  );

  // Ensure card tables have bgcolor="#FFFFFF"
  html = html.replace(
    /<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba\(0,0,0,0.02\);">/g,
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">'
  );

  // 5. Update avatar image with cache buster and explicit dimensions
  html = html.replace(/avatar-paula-light\.png(?:\?[^"]*)?/g, 'avatar-paula-light.png?v=20261124b');

  // 6. Save pure HTML to recursos/storytelling
  fs.writeFileSync(s.file, html, 'utf8');
  console.log(`✓ Saved pure HTML to recursos: ${s.file}`);

  // 7. Save pure HTML to Downloads
  if (s.downloadsFile) {
    fs.writeFileSync(s.downloadsFile, html, 'utf8');
    console.log(`✓ Saved pure HTML to Downloads: ${s.downloadsFile}`);
  }
  if (s.downloadsAlt && fs.existsSync(path.dirname(s.downloadsAlt))) {
    fs.writeFileSync(s.downloadsAlt, html, 'utf8');
    console.log(`✓ Saved pure HTML to Downloads Alt: ${s.downloadsAlt}`);
  }

  // 8. Save pure HTML to recursos/slug.html
  const recSlug = path.join(__dirname, '..', 'recursos', `${s.slug}.html`);
  fs.writeFileSync(recSlug, html, 'utf8');

  // 9. Build Web Viewer for public/
  const b64 = Buffer.from(html).toString('base64');
  const toolbar = `  <!-- BARRA DE COPIADO SUPERIOR -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;flex-wrap:wrap;">
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO VISUAL (Ctrl+V directo en Converso / Gmail / Outlook)
    </button>
    <button id="btnCopiarCodigo" onclick="copiarCodigoHtml()" style="background:#1E293B;color:#38BDF8;border:1.5px solid #38BDF8;padding:10px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;">
      &lt;/&gt; COPIAR CÓDIGO HTML (para botón &ldquo;Fuente HTML&rdquo; de Converso)
    </button>
    <span id="copyMsg" style="color:#38BDF8;font-size:13px;font-weight:700;display:none;">
      ✓ ¡Copiado con éxito!
    </span>
  </div>
  <script>
    var pureHtml = decodeURIComponent(escape(atob('${b64}')));

    function copiarCorreoVisual() {
      var root = document.querySelector('[data-converso-root="true"]') || document.getElementById('pure-email-wrapper');
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
        mostrarMsg('✓ ¡Diseño copiado con enlaces y formato exacto! Pégalo con Ctrl+V en Converso');
      } catch (err) {
        alert('Presione Ctrl+C para copiar');
      }
    }

    function copiarCodigoHtml() {
      var root = document.querySelector('[data-converso-root="true"]');
      var codeToCopy = root ? root.outerHTML : pureHtml;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeToCopy).then(function() {
          mostrarMsg('✓ ¡Código HTML limpio copiado! Pégalo en el botón &ldquo;Fuente HTML&rdquo; de Converso');
        });
      } else {
        copyFallback(codeToCopy);
      }
    }

    function copyFallback(text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      mostrarMsg('✓ ¡Código copiado!');
    }

    function mostrarMsg(texto) {
      var msg = document.getElementById('copyMsg');
      if (!msg) return;
      msg.innerHTML = texto;
      msg.style.display = 'inline';
      setTimeout(function () { msg.style.display = 'none'; }, 4000);
    }
  </script>`;

  let viewer = html.replace(/<body[^>]*>/i, `$& \n${toolbar}\n<div id="pure-email-wrapper">`);
  viewer = viewer.replace(/<\/body>/i, `</div>\n</body>`);

  const pubSlug = path.join(__dirname, '..', 'public', `${s.slug}.html`);
  const pubName = path.join(__dirname, '..', 'public', s.filename);
  fs.writeFileSync(pubSlug, viewer, 'utf8');
  fs.writeFileSync(pubName, viewer, 'utf8');
  console.log(`✓ Saved web viewer to public: ${pubSlug}`);
}

console.log('\nAll 4 email templates updated with 100% Converso fidelity!');
