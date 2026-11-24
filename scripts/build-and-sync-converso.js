const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Ensure non-squished avatar is in place
const testAvatarPath = path.join(__dirname, '..', 'test-avatar-top50.png');
if (fs.existsSync(testAvatarPath)) {
  const publicLight = path.join(__dirname, '..', 'public', 'email-icons', 'avatar-paula-light.png');
  const publicDark = path.join(__dirname, '..', 'public', 'email-icons', 'avatar-paula-dark.png');
  fs.copyFileSync(testAvatarPath, publicLight);
  fs.copyFileSync(testAvatarPath, publicDark);

  const outDir = path.join(__dirname, '..', 'out', 'email-icons');
  if (fs.existsSync(outDir)) {
    fs.copyFileSync(testAvatarPath, path.join(outDir, 'avatar-paula-light.png'));
    fs.copyFileSync(testAvatarPath, path.join(outDir, 'avatar-paula-dark.png'));
  }
  console.log('✓ Avatar files updated with 1:1 aspect ratio.');
}

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

function buildWebViewer(pureHtml, item) {
  const b64 = Buffer.from(pureHtml).toString('base64');
  const toolbar = `  <!-- BARRA DE COPIADO SUPERIOR -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;flex-wrap:wrap;">
    <button id="btnCopiarCodigo" onclick="copiarCodigoHtml()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      &lt;/&gt; COPIAR CÓDIGO HTML LIMPIO (Converso / Brevo)
    </button>
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:#1E293B;color:#38BDF8;border:1.5px solid #38BDF8;padding:10px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;">
      📋 COPIAR DISEÑO VISUAL (Ctrl+V en Gmail / Outlook)
    </button>
    <span id="copyMsg" style="color:#38BDF8;font-size:13px;font-weight:700;display:none;">
      ✓ ¡Copiado con éxito!
    </span>
  </div>
  <script>
    var pureHtml = decodeURIComponent(escape(atob('${b64}')));

    function copiarCodigoHtml() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(pureHtml).then(function() {
          mostrarMsg('✓ ¡Código HTML limpio copiado! Pégalo en modo Fuente HTML de Converso');
        });
      } else {
        copyFallback(pureHtml);
      }
    }

    function copiarCorreoVisual() {
      var root = document.getElementById('pure-email-wrapper');
      if (!root) return;
      var sel = window.getSelection();
      sel.removeAllRanges();
      var range = document.createRange();
      range.selectNode(root);
      sel.addRange(range);
      try {
        if (navigator.clipboard && window.ClipboardItem) {
          var htmlBlob = new Blob([root.innerHTML], { type: 'text/html' });
          var textBlob = new Blob([root.innerText], { type: 'text/plain' });
          navigator.clipboard.write([
            new ClipboardItem({ 'text/html': htmlBlob, 'text/plain': textBlob })
          ]).catch(function(){});
        }
        document.execCommand('copy');
        sel.removeAllRanges();
        mostrarMsg('✓ ¡Diseño copiado con enlaces! Pégalo con Ctrl+V');
      } catch (err) {
        alert('Presione Ctrl+C para copiar');
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
      msg.innerText = texto;
      msg.style.display = 'inline';
      setTimeout(function () { msg.style.display = 'none'; }, 4000);
    }
  </script>`;

  let viewer = pureHtml.replace(/<body[^>]*>/i, `$& \n${toolbar}\n<div id="pure-email-wrapper">`);
  viewer = viewer.replace(/<\/body>/i, `</div>\n</body>`);
  return viewer;
}

for (const s of sectors) {
  // Extract pristine base from commit 9a91330
  let html = execSync(`git show 9a91330:recursos/storytelling/GLocation_${s.key}_Storytelling.html`, { encoding: 'utf8' });

  // 1. Add cache-buster to avatar image URL
  html = html.replace(/avatar-paula-light\.png(?:\?[^"]*)?/g, 'avatar-paula-light.png?v=20261124b');

  // 2. Add CKEditor border suppressor in <style>
  html = html.replace(
    'img{-ms-interpolation-mode:bicubic;',
    'table.cke_show_border, table.cke_show_border td, table.cke_show_border tr, .cke_show_border, .cke_show_border td, .cke_show_border tr { border: 0 !important; outline: none !important; }\n  .cke_table-faked-selection-editor { border: 0 !important; outline: none !important; }\n  img{-ms-interpolation-mode:bicubic;'
  );

  // 3. For Tecnologia, ensure the title wrap is clean
  if (s.key === 'Tecnologia') {
    html = html.replace('¿Tiene un caso de IA que podamos explorar juntos?', '¿Tiene un caso de IA que<br>podamos explorar juntos?');
  }

  // 4. Write 100% PURE HTML (no toolbar, no scripts, no outer wrapper divs) to recursos/storytelling
  fs.writeFileSync(s.file, html, 'utf8');
  console.log(`✓ Saved pure HTML to recursos: ${s.file}`);

  // 5. Write 100% PURE HTML to Downloads
  if (s.downloadsFile) {
    fs.writeFileSync(s.downloadsFile, html, 'utf8');
    console.log(`✓ Saved pure HTML to Downloads: ${s.downloadsFile}`);
  }
  if (s.downloadsAlt && fs.existsSync(path.dirname(s.downloadsAlt))) {
    fs.writeFileSync(s.downloadsAlt, html, 'utf8');
    console.log(`✓ Saved pure HTML to Downloads Alt: ${s.downloadsAlt}`);
  }

  // 6. Write pure HTML to recursos/slug.html
  const recSlug = path.join(__dirname, '..', 'recursos', `${s.slug}.html`);
  fs.writeFileSync(recSlug, html, 'utf8');

  // 7. Write Web Viewer (with top toolbar) to public/
  const viewerHtml = buildWebViewer(html, s);
  const pubSlug = path.join(__dirname, '..', 'public', `${s.slug}.html`);
  const pubName = path.join(__dirname, '..', 'public', s.filename);
  fs.writeFileSync(pubSlug, viewerHtml, 'utf8');
  fs.writeFileSync(pubName, viewerHtml, 'utf8');
  console.log(`✓ Saved web viewer to public: ${pubSlug}`);
}

console.log('\nAll pure HTML templates and public viewers generated successfully!');
