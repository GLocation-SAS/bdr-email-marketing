const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Generador de plantilla SaaSW en 1 SOLA PIEZA CONTINUA (Cero cortes, cero bloques, cero espacios)
// Con Image Map interactivo (<map><area>) y visor de zonas de clic (links & CTA) para verificar distribución exacta.

async function buildUnifiedTemplates() {
  const blocksDir = path.join(__dirname, '../public/email-blocks');

  // Asegurar que las imágenes maestras continuas existen
  const claroBuf = await sharp({
    create: {
      width: 1320,
      height: 3365,
      channels: 4,
      background: { r: 240, g: 244, b: 249, alpha: 1 }
    }
  })
  .composite([
    { input: path.join(blocksDir, 'saasw-01-hero-claro.png'), top: 0, left: 0 },
    { input: path.join(blocksDir, 'saasw-02-trabajadores-claro.png'), top: 1107, left: 0 },
    { input: path.join(blocksDir, 'saasw-03-cta-claro.png'), top: 2036, left: 0 },
    { input: path.join(blocksDir, 'saasw-04-ecosistema-firma-claro.png'), top: 2665, left: 0 }
  ])
  .png({ quality: 100 })
  .toBuffer();

  fs.writeFileSync(path.join(blocksDir, 'saasw-email-completo-claro.png'), claroBuf);

  const oscuroBuf = await sharp({
    create: {
      width: 1320,
      height: 3549,
      channels: 4,
      background: { r: 11, g: 15, b: 25, alpha: 1 }
    }
  })
  .composite([
    { input: path.join(blocksDir, 'saasw-01-hero-oscuro.png'), top: 0, left: 0 },
    { input: path.join(blocksDir, 'saasw-02-trabajadores-oscuro.png'), top: 1120, left: 0 },
    { input: path.join(blocksDir, 'saasw-03-cta-oscuro.png'), top: 2049, left: 0 },
    { input: path.join(blocksDir, 'saasw-04-ecosistema-firma-oscuro.png'), top: 2849, left: 0 }
  ])
  .png({ quality: 100 })
  .toBuffer();

  fs.writeFileSync(path.join(blocksDir, 'saasw-email-completo-oscuro.png'), oscuroBuf);
  console.log('Master images updated: saasw-email-completo-claro.png & oscuro.png');

  function renderUnifiedHtml(theme = 'claro', includeToolbar = true) {
    const isDark = theme === 'oscuro';
    const outerBg = isDark ? '#0B0F19' : '#F0F4F9';
    const imgName = `saasw-email-completo-${theme}.png`;
    const imgUrl = `https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/${imgName}`;
    const mapName = `saasw-map-${theme}`;

    // Dimensiones exactas al 50% (display width 660px):
    const displayWidth = 660;
    const displayHeight = isDark ? 1775 : 1683;

    // Coordenadas calculadas al milímetro para ancho 660px:
    // CLARO (alto total 1683):
    // Hero logo: x: 48..612, y: 0..100
    // CTA botón y caja:
    //   Caja completa CTA: x: 67..593, y: 1019..1297
    //   Botón "Agendar Diagnóstico Cognitivo (30 min)": x: 198..389, y: 1197..1243
    // Ecosistema (base y = 1332.5):
    //   glocation.co: x: 48..612, y: 1364..1410 (h=46)
    //   homoagenticus.co: x: 48..612, y: 1416..1462 (h=46)
    //   preagentica.glocation.co: x: 48..612, y: 1468..1514 (h=46)
    // Firma Paula Rozo:
    //   Paula avatar y correo: x: 48..360, y: 1554..1668 (h=114)
    //   Botón glocation.co: x: 370..485, y: 1575..1643 (w=115, h=68)
    //   Botón homoagenticus.co: x: 497..612, y: 1575..1643 (w=115, h=68)

    // OSCURO (alto total 1775):
    // Hero logo: x: 48..612, y: 0..100
    // CTA botón y caja:
    //   Caja y botón CTA: x: 67..593, y: 1040..1380
    //   Botón "Agendar Diagnóstico": x: 198..420, y: 1210..1285
    // Ecosistema (base y = 1424.5):
    //   glocation.co: x: 48..612, y: 1456..1502
    //   homoagenticus.co: x: 48..612, y: 1508..1554
    //   preagentica.glocation.co: x: 48..612, y: 1560..1606
    // Firma Paula Rozo:
    //   Paula avatar y correo: x: 48..360, y: 1646..1760
    //   Botón glocation.co: x: 370..485, y: 1667..1735
    //   Botón homoagenticus.co: x: 497..612, y: 1667..1735

    const ctaY1 = isDark ? 1040 : 1019;
    const ctaY2 = isDark ? 1380 : 1297;
    const ecoOffset = isDark ? 1425 : 1333;

    // Regiones estructuradas para el visualizador interactivo
    const regions = [
      {
        id: 'hero-header',
        label: '🌐 GLocation · Cabecera',
        url: 'https://glocation.co',
        x: 48, y: 0, w: 564, h: 100,
        color: '#0284C7',
        bg: 'rgba(2, 132, 199, 0.15)',
        radius: '16px'
      },
      {
        id: 'cta-diagnostico',
        label: '📅 Agendar Diagnóstico Cognitivo (30 min)',
        url: 'https://citas.glocation.co/?theme=light',
        x: 67, y: ctaY1, w: 526, h: (ctaY2 - ctaY1),
        color: '#2563EB',
        bg: 'rgba(37, 99, 235, 0.20)',
        radius: '18px'
      },
      {
        id: 'eco-glocation',
        label: '🌐 glocation.co · Plataforma SaaSW',
        url: 'https://glocation.co',
        x: 48, y: ecoOffset + 31, w: 564, h: 46,
        color: '#0284C7',
        bg: 'rgba(2, 132, 199, 0.20)',
        radius: '8px'
      },
      {
        id: 'eco-homoagenticus',
        label: '📖 homoagenticus.co · Manifiesto',
        url: 'https://homoagenticus.co',
        x: 48, y: ecoOffset + 83, w: 564, h: 46,
        color: '#7C3AED',
        bg: 'rgba(124, 58, 237, 0.20)',
        radius: '8px'
      },
      {
        id: 'eco-preagentica',
        label: '🏛️ preagentica.glocation.co · Herencia Pre-IA',
        url: 'https://preagentica.glocation.co',
        x: 48, y: ecoOffset + 135, w: 564, h: 46,
        color: '#475569',
        bg: 'rgba(71, 85, 105, 0.20)',
        radius: '8px'
      },
      {
        id: 'firma-paula',
        label: '✉️ Paula Rozo · Correo Directo',
        url: 'mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation',
        x: 48, y: ecoOffset + 221, w: 312, h: 116,
        color: '#0E768C',
        bg: 'rgba(14, 118, 140, 0.20)',
        radius: '14px'
      },
      {
        id: 'firma-btn-gloc',
        label: '🌐 glocation.co',
        url: 'https://glocation.co',
        x: 370, y: ecoOffset + 242, w: 115, h: 68,
        color: '#0284C7',
        bg: 'rgba(2, 132, 199, 0.25)',
        radius: '10px'
      },
      {
        id: 'firma-btn-homo',
        label: '📖 homoagenticus.co',
        url: 'https://homoagenticus.co',
        x: 497, y: ecoOffset + 242, w: 115, h: 68,
        color: '#7C3AED',
        bg: 'rgba(124, 58, 237, 0.25)',
        radius: '10px'
      }
    ];

    const areasHtml = regions.map(r => 
      `              <!-- ${r.label} -->\n              <area shape="rect" coords="${r.x},${r.y},${r.x + r.w},${r.y + r.h}" href="${r.url}" target="_blank" rel="noopener noreferrer" alt="${r.label}">`
    ).join('\n');

    const overlayDivsHtml = regions.map(r => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="saasw-link-overlay" data-region="${r.id}" style="position:absolute;left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px;border-radius:${r.radius};display:flex;align-items:center;justify-content:center;text-decoration:none;box-sizing:border-box;transition:all 0.2s ease;z-index:10;">
          <span class="saasw-zone-badge" style="display:none;background:${r.color};color:#ffffff;font-size:11px;font-weight:700;padding:4px 8px;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,0.3);pointer-events:none;white-space:nowrap;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">${r.label}</span>
        </a>`
    ).join('\n');

    const toolbarHtml = includeToolbar ? `
  <!-- BARRA DE ACCIÓN SUPERIOR PARA COPIAR Y VERIFICAR ZONAS INTERACTIVAS -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;flex-wrap:wrap;">
    <button id="btnToggleZonas" onclick="toggleZonasClic()" style="background:#1E293B;color:#38BDF8;border:1.5px solid #38BDF8;padding:10px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;display:inline-flex;align-items:center;gap:8px;">
      👁️ <span id="txtBtnZonas">VER ZONAS DE CLIC (LINKS & CTA)</span>
    </button>
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO COMPLETO (Ctrl+V en Brevo / Gmail / Outlook)
    </button>
    <button id="btnCopiarCodigo" onclick="copiarCodigoHtml()" style="background:#1E293B;color:#F8FAFC;border:1px solid #475569;padding:10px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;">
      &lt;/&gt; COPIAR CÓDIGO HTML
    </button>
    <a href="${imgUrl}" download="${imgName}" target="_blank" style="background:#1E293B;color:#94A3B8;border:1px solid #334155;padding:10px 14px;border-radius:8px;font-weight:600;font-size:12px;cursor:pointer;text-decoration:none;">
      ⬇ DESCARGAR PNG
    </a>
    <span id="copyMsg" style="color:#38BDF8;font-size:13px;font-weight:700;display:none;">
      ✓ ¡Copiado con éxito!
    </span>
  </div>
  <script>
    var zonasVisibles = false;
    function toggleZonasClic() {
      zonasVisibles = !zonasVisibles;
      var overlays = document.querySelectorAll('.saasw-link-overlay');
      var badges = document.querySelectorAll('.saasw-zone-badge');
      var txtBtn = document.getElementById('txtBtnZonas');
      var btn = document.getElementById('btnToggleZonas');

      overlays.forEach(function(ov) {
        if (zonasVisibles) {
          ov.style.border = '2px dashed #0284C7';
          ov.style.backgroundColor = 'rgba(2, 132, 199, 0.18)';
        } else {
          ov.style.border = 'none';
          ov.style.backgroundColor = 'transparent';
        }
      });

      badges.forEach(function(b) {
        b.style.display = zonasVisibles ? 'inline-block' : 'none';
      });

      if (zonasVisibles) {
        txtBtn.innerText = 'OCULTAR ZONAS DE CLIC';
        btn.style.background = '#0284C7';
        btn.style.color = '#FFFFFF';
      } else {
        txtBtn.innerText = 'VER ZONAS DE CLIC (LINKS & CTA)';
        btn.style.background = '#1E293B';
        btn.style.color = '#38BDF8';
      }
    }

    function copiarCorreoVisual() {
      // Ocultar temporalmente overlays para copiar únicamente el diseño limpio
      var eraVisible = zonasVisibles;
      if (eraVisible) toggleZonasClic();

      var root = document.querySelector('[data-saasw-root="true"]');
      if (!root) return;
      var sel = window.getSelection();
      sel.removeAllRanges();
      var range = document.createRange();
      range.selectNode(root);
      sel.addRange(range);
      try {
        document.execCommand('copy');
        sel.removeAllRanges();
        mostrarMsg('✓ ¡Diseño completo copiado! Pégalo ahora con Ctrl+V');
      } catch (err) {
        alert('Por favor presiona Ctrl+C para copiar');
      }
      if (eraVisible) toggleZonasClic();
    }

    function copiarCodigoHtml() {
      var root = document.querySelector('[data-saasw-root="true"]');
      if (!root) return;
      // Clonar nodo y limpiar elementos interactivos de inspección para exportar HTML 100% puro para Brevo/Gmail
      var clone = root.cloneNode(true);
      var overlays = clone.querySelectorAll('.saasw-link-overlay');
      overlays.forEach(function(el) { el.remove(); });

      navigator.clipboard.writeText(clone.outerHTML).then(function() {
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
` : '';

    return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Su oficina TIC no necesita más software. Necesita fuerza laboral que entregue proyectos terminados.</title>
  <style type="text/css">
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td, tr {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse !important;
      border-spacing: 0 !important;
      border: 0 !important;
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
      background-color: ${outerBg};
    }
    area {
      outline: none;
      border: none;
      cursor: pointer;
    }
    .saasw-link-overlay:hover {
      box-shadow: 0 0 0 2px #0284C7 inset;
      background-color: rgba(2, 132, 199, 0.12) !important;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100% !important; background-color: ${outerBg};">
${toolbarHtml}
  <!-- CONTENEDOR RAÍZ CONTINUO EN 1 SOLA PIEZA (CERO CORTES, CERO ESPACIOS, CERO BORDES) -->
  <div data-saasw-root="true" style="margin: 0; padding: 0; background-color: ${outerBg};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${outerBg}" style="width: 100%; border-collapse: collapse; border-spacing: 0; background-color: ${outerBg}; margin: 0; padding: 0; border: 0;">
      <tr>
        <td align="center" style="padding: 20px 10px; border: 0;">
          <table role="presentation" width="${displayWidth}" cellpadding="0" cellspacing="0" border="0" style="width: ${displayWidth}px; max-width: 100%; border-collapse: collapse; border-spacing: 0; margin: 0 auto; border: 0;">
            <tr>
              <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0; position: relative;">
                
                <!-- CONTENEDOR RELATIVO PARA ENLACES DIRECTOS Y COMPATIBILIDAD CON MAPA -->
                <div style="position: relative; width: ${displayWidth}px; max-width: 100%; margin: 0 auto; line-height: 0; font-size: 0;">
                  
                  <!-- IMAGEN ÚNICA CONTINUA HD EN 1 SOLA PIEZA -->
                  <img 
                    src="${imgUrl}" 
                    alt="GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador cognitivo que hace el trabajo." 
                    width="${displayWidth}" 
                    height="${displayHeight}" 
                    usemap="#${mapName}" 
                    border="0" 
                    style="display: block; width: ${displayWidth}px; max-width: 100%; height: auto; border: 0; outline: none; text-decoration: none; margin: 0; padding: 0;" 
                  />

                  <!-- CAPA INTERACTIVA DE ENLACES PARA NAVEGADOR Y PREVISUALIZACIÓN -->
${overlayDivsHtml}

                </div>

                <!-- MAPA DE ENLACES ESTÁNDAR PARA CLIENTES DE CORREO QUE SOPORTAN MAP -->
                <map name="${mapName}">
${areasHtml}
                </map>

              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
  }

  // Generar todos los archivos estáticos
  const htmlClaro = renderUnifiedHtml('claro', true);
  const htmlOscuro = renderUnifiedHtml('oscuro', true);

  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-claro.html'), htmlClaro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-oscuro.html'), htmlOscuro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic.html'), htmlClaro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../recursos/plantilla-saasw-lideres-tic.html'), htmlClaro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-bloques-claro.html'), htmlClaro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-bloques-oscuro.html'), htmlOscuro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-bloques.html'), htmlClaro, 'utf8');

  console.log('Successfully generated all single-piece continuous HTML templates with Interactive Inspector!');
}

buildUnifiedTemplates().catch(console.error);
