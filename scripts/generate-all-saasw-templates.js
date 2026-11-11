const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Generador de plantilla SaaSW en 1 SOLA PIEZA CONTINUA (Cero cortes, cero bloques, cero espacios)
// Con Image Map interactivo (<map><area>) que conserva todas las rutas activas.

async function buildUnifiedTemplates() {
  const blocksDir = path.join(__dirname, '../public/email-blocks');

  // Asegurar que las imágenes completas existen
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
  console.log('Master unified continuous images verified: saasw-email-completo-claro.png & oscuro.png');

  function renderUnifiedHtml(theme = 'claro', includeToolbar = true) {
    const isDark = theme === 'oscuro';
    const outerBg = isDark ? '#0B0F19' : '#F0F4F9';
    const imgName = `saasw-email-completo-${theme}.png`;
    const imgUrl = `https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/${imgName}`;
    const mapName = `saasw-map-${theme}`;

    // Dimensiones en display (ancho 660px, escala 0.5 respecto al master 1320px)
    const displayWidth = 660;
    const displayHeight = isDark ? 1775 : 1683;

    // Coordenadas calculadas a 660px de ancho:
    // Claro:
    // Hero: y=0 a 554
    // Trabajadores: y=554 a 1018
    // CTA: y=1018 a 1333 (botón citas: x=48..612, y=1180..1300)
    // Ecosistema + Firma: y=1333 a 1683
    //   glocation.co eco: x=48..612, y=1364..1410
    //   homoagenticus.co eco: x=48..612, y=1416..1462
    //   preagentica.glocation.co eco: x=48..612, y=1468..1514
    //   Paula Rozo avatar & contacto: x=48..365, y=1554..1670
    //   Botón glocation.co firma: x=370..485, y=1575..1643
    //   Botón homoagenticus.co firma: x=497..612, y=1575..1643

    const ctaY1 = isDark ? 1220 : 1180;
    const ctaY2 = isDark ? 1390 : 1300;
    const ecoOffset = isDark ? 1425 : 1333;

    const areasClaro = `
              <!-- 1. HERO HEADER: GLocation -->
              <area shape="rect" coords="48,0,612,554" href="https://glocation.co" target="_blank" rel="noopener noreferrer" alt="GLocation — Plataforma Comercial SaaSW">
              <!-- 2. CTA: Agendar Diagnóstico Cognitivo (30 min) -->
              <area shape="rect" coords="48,${ctaY1},612,${ctaY2}" href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" alt="Agendar Diagnóstico Cognitivo (30 min)">
              <!-- 3. ECOSISTEMA: glocation.co -->
              <area shape="rect" coords="48,${ecoOffset + 31},612,${ecoOffset + 77}" href="https://glocation.co" target="_blank" rel="noopener noreferrer" alt="glocation.co — Plataforma Comercial SaaSW">
              <!-- 4. ECOSISTEMA: homoagenticus.co -->
              <area shape="rect" coords="48,${ecoOffset + 83},612,${ecoOffset + 129}" href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" alt="homoagenticus.co — El Manifiesto del Homo agenticus">
              <!-- 5. ECOSISTEMA: preagentica.glocation.co -->
              <area shape="rect" coords="48,${ecoOffset + 135},612,${ecoOffset + 181}" href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" alt="preagentica.glocation.co — Nuestra Herencia Pre-IA">
              <!-- 6. FIRMA PAULA ROZO (AVATAR + DATOS + CORREO DIRECTO) -->
              <area shape="rect" coords="48,${ecoOffset + 221},365,${ecoOffset + 338}" href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" target="_blank" alt="Paula Rozo — BDR GLocation">
              <!-- 7. BOTÓN GLOCATION.CO EN FIRMA -->
              <area shape="rect" coords="370,${ecoOffset + 242},485,${ecoOffset + 310}" href="https://glocation.co" target="_blank" rel="noopener noreferrer" alt="glocation.co">
              <!-- 8. BOTÓN HOMOAGENTICUS.CO EN FIRMA -->
              <area shape="rect" coords="497,${ecoOffset + 242},612,${ecoOffset + 310}" href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" alt="homoagenticus.co">
    `;

    const toolbarHtml = includeToolbar ? `
  <!-- BARRA DE ACCIÓN SUPERIOR PARA COPIAR CON DISEÑO COMPLETO EN 1 CLIC -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:14px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;flex-wrap:wrap;">
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO COMPLETO (Ctrl+V en Brevo / Gmail / Outlook)
    </button>
    <button id="btnCopiarCodigo" onclick="copiarCodigoHtml()" style="background:#1E293B;color:#38BDF8;border:1px solid #38BDF8;padding:10px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;">
      &lt;/&gt; COPIAR CÓDIGO HTML (Pegar en "Fuente HTML")
    </button>
    <a href="${imgUrl}" download="${imgName}" target="_blank" style="background:#1E293B;color:#F8FAFC;border:1px solid #475569;padding:10px 16px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;text-decoration:none;">
      ⬇ DESCARGAR IMAGEN HD
    </a>
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
        document.execCommand('copy');
        sel.removeAllRanges();
        mostrarMsg('✓ ¡Diseño completo copiado! Pégalo ahora con Ctrl+V');
      } catch (err) {
        alert('Por favor presiona Ctrl+C para copiar');
      }
    }
    function copiarCodigoHtml() {
      var root = document.querySelector('[data-saasw-root="true"]');
      if (!root) return;
      navigator.clipboard.writeText(root.outerHTML).then(function() {
        mostrarMsg('✓ ¡Código HTML copiado! Pégalo en tu editor en modo "Fuente HTML"');
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
              <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0;">
                
                <!-- IMAGEN ÚNICA CONTINUA HD CON IMAGE MAP INTERACTIVO -->
                <img 
                  src="${imgUrl}" 
                  alt="GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador cognitivo que hace el trabajo." 
                  width="${displayWidth}" 
                  height="${displayHeight}" 
                  usemap="#${mapName}" 
                  border="0" 
                  style="display: block; width: ${displayWidth}px; max-width: 100%; height: auto; border: 0; outline: none; text-decoration: none; margin: 0; padding: 0;" 
                />

                <map name="${mapName}">
${areasClaro}
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
  const htmlClaroSinToolbar = renderUnifiedHtml('claro', false);

  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-claro.html'), htmlClaro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-oscuro.html'), htmlOscuro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic.html'), htmlClaro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../recursos/plantilla-saasw-lideres-tic.html'), htmlClaro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-bloques-claro.html'), htmlClaro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-bloques-oscuro.html'), htmlOscuro, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/plantilla-saasw-lideres-tic-bloques.html'), htmlClaro, 'utf8');

  console.log('Successfully generated all single-piece continuous HTML templates!');
}

buildUnifiedTemplates().catch(console.error);
