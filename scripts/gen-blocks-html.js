const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const recursosDir = path.join(__dirname, '../recursos');

function generateHybridEmailHtml(theme = 'light', includeToolbar = true) {
  const isDark = theme === 'dark';
  const suffix = isDark ? 'oscuro' : 'claro';
  const outerBg = isDark ? '#0B0F19' : '#F0F4F9';

  const blocksBaseUrl = 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks';

  const block1Url = `${blocksBaseUrl}/saasw-01-hero-${suffix}.png`;
  const block2Url = `${blocksBaseUrl}/saasw-02-trabajadores-${suffix}.png`;
  const block3Url = `${blocksBaseUrl}/saasw-03-cta-${suffix}.png`;
  
  // Bloque 4 Ecosistema en rodajas gráficas clickeables individuales (como jefes TIC)
  const block4aUrl = `${blocksBaseUrl}/saasw-04a-eco-glocation-${suffix}.png`;
  const block4bUrl = `${blocksBaseUrl}/saasw-04b-eco-homoagenticus-${suffix}.png`;
  const block4cUrl = `${blocksBaseUrl}/saasw-04c-eco-preagentica-${suffix}.png`;

  // Bloque 5 Firma Paula + Redes en rodajas gráficas clickeables individuales (como jefes TIC)
  const block5aUrl = `${blocksBaseUrl}/saasw-05a-cintillo-${suffix}.png`;
  const block5bUrl = `${blocksBaseUrl}/saasw-05b-firma-paula-${suffix}.png`;
  const block5cUrl = `${blocksBaseUrl}/saasw-05c-boton-glocation-${suffix}.png`;
  const block5dUrl = `${blocksBaseUrl}/saasw-05d-boton-homoagenticus-${suffix}.png`;

  // Bloque 6 Legal
  const block6Url = `${blocksBaseUrl}/saasw-06-legal-${suffix}.png`;

  const toolbarHtml = includeToolbar ? `
  <!-- BARRA DE ACCIÓN SUPERIOR PARA COPIAR CON DISEÑO COMPLETO EN 1 CLIC -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:16px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO COMPLETO (Ctrl+V en Brevo / Gmail / Outlook)
    </button>
    <button id="btnCopiarCodigo" onclick="copiarCodigoHtml()" style="background:#1E293B;color:#38BDF8;border:1px solid #38BDF8;padding:10px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;">
      &lt;/&gt; COPIAR CÓDIGO HTML (Pegar en "Fuente HTML")
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
        document.execCommand('copy');
        sel.removeAllRanges();
        mostrarMsg('✓ ¡Diseño completo copiado! Pégalo ahora con Ctrl+V');
      } catch (err) {
        alert('Por favor selecciona el contenido y presiona Ctrl+C');
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
      msg.innerText = texto;
      msg.style.display = 'inline';
      setTimeout(function () { msg.style.display = 'none'; }, 4000);
    }
  </script>` : '';

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
      background-color: ${outerBg};
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100% !important; background-color: ${outerBg};">
${toolbarHtml}
  <div data-saasw-root="true" style="margin: 0; padding: 0; background-color: ${outerBg};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${outerBg}" style="width: 100%; border-collapse: collapse; background-color: ${outerBg}; margin: 0; padding: 0;">
      <tr>
        <td align="center" style="padding: 20px 10px;">
          <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width: 660px; max-width: 100%; border-collapse: collapse; margin: 0 auto;">

            <!-- BLOQUE 1 · HERO ORIGINAL (IMAGEN COMO ANTES) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
                <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                  <img src="${block1Url}" alt="GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador." width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0;" />
                </a>
              </td>
            </tr>

            <!-- BLOQUE 2 · TRABAJADORES ORIGINAL (IMAGEN COMO ANTES) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
                <img src="${block2Url}" alt="Trabajador PMO & Proyectos, Mesa de Ayuda TIC y Cumplimiento & Gobierno" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0;" />
              </td>
            </tr>

            <!-- BLOQUE 3 · CTA DIAGNÓSTICO ORIGINAL (IMAGEN COMO ANTES) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
                <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                  <img src="${block3Url}" alt="Agendar Diagnóstico Cognitivo (30 min) en citas.glocation.co" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0;" />
                </a>
              </td>
            </tr>

            <!-- BLOQUE 4 · EXPLORE NUESTRO ECOSISTEMA EN VIVO (RODAJAS GRÁFICAS CON ENLACES INDIVIDUALES) -->
            <!-- 4A: Header Ecosistema + glocation.co -->
            <tr>
              <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0;">
                <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                  <img src="${block4aUrl}" alt="glocation.co — Plataforma Comercial SaaSW" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0;" />
                </a>
              </td>
            </tr>
            <!-- 4B: homoagenticus.co -->
            <tr>
              <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0;">
                <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                  <img src="${block4bUrl}" alt="homoagenticus.co — El Manifiesto del Homo agenticus" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0;" />
                </a>
              </td>
            </tr>
            <!-- 4C: preagentica.glocation.co -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
                <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                  <img src="${block4cUrl}" alt="preagentica.glocation.co — Nuestra Herencia Pre-IA" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0;" />
                </a>
              </td>
            </tr>

            <!-- BLOQUE 5 · CINTILLO Y FIRMA PAULA ROZO CON BOTONES (FORMATO REFERENCIA JEFES TIC) -->
            <!-- 5A: Cintillo Holding -->
            <tr>
              <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0;">
                <img src="${block5aUrl}" alt="HOLDING SERVINFORMACIÓN (27 AÑOS) • GOOGLE CLOUD PREMIER PARTNER • NORMA ISO 27001" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0;" />
              </td>
            </tr>
            <!-- 5B, 5C, 5D: Fila con 3 columnas contiguas sin bordes (Paula Rozo + glocation.co + homoagenticus.co) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
                <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width: 660px; max-width: 100%; border-collapse: collapse; margin: 0 auto;">
                  <tr>
                    <!-- 5B · Paula Rozo (Correo directo) -->
                    <td width="400" valign="top" style="width: 60.6%; padding: 0; margin: 0; font-size: 0; line-height: 0;">
                      <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="display: block; text-decoration: none; border: 0;">
                        <img src="${block5bUrl}" alt="Paula Rozo — BDR | Business Development Representative" width="400" border="0" style="display: block; width: 100%; max-width: 400px; height: auto; border: 0;" />
                      </a>
                    </td>
                    <!-- 5C · Botón Web glocation.co -->
                    <td width="130" valign="top" style="width: 19.7%; padding: 0; margin: 0; font-size: 0; line-height: 0;">
                      <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                        <img src="${block5cUrl}" alt="Sitio web oficial glocation.co" width="130" border="0" style="display: block; width: 100%; max-width: 130px; height: auto; border: 0;" />
                      </a>
                    </td>
                    <!-- 5D · Botón Web homoagenticus.co -->
                    <td width="130" valign="top" style="width: 19.7%; padding: 0; margin: 0; font-size: 0; line-height: 0;">
                      <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                        <img src="${block5dUrl}" alt="homoagenticus.co" width="130" border="0" style="display: block; width: 100%; max-width: 130px; height: auto; border: 0;" />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- BLOQUE 6 · LEGAL DISCLAIMER -->
            <tr>
              <td align="center" style="padding: 0 0 10px 0; margin: 0; font-size: 0; line-height: 0;">
                <img src="${block6Url}" alt="© 2026 GLocation SAS · Bogotá D.C., Colombia." width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0;" />
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

function buildAll() {
  const claroHtml = generateHybridEmailHtml('light', true);
  const oscuroHtml = generateHybridEmailHtml('dark', true);

  // Guardar en public
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-claro.html'), claroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-oscuro.html'), oscuroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic.html'), claroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-claro.html'), claroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-oscuro.html'), oscuroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques.html'), claroHtml, 'utf8');

  // Guardar en recursos
  fs.writeFileSync(path.join(recursosDir, 'plantilla-saasw-lideres-tic.html'), claroHtml, 'utf8');

  console.log('✓ Todas las plantillas HTML han sido generadas y sincronizadas con el formato gráfico sin bordes de Jefes TIC.');
}

buildAll();
