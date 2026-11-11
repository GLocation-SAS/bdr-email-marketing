const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const recursosDir = path.join(__dirname, '../recursos');

function generateHybridEmailHtml(theme = 'light', includeToolbar = true) {
  const isDark = theme === 'dark';
  const suffix = isDark ? 'oscuro' : 'claro';
  const outerBg = isDark ? '#0B0F19' : '#F0F4F9';
  const cardBg = isDark ? '#111827' : '#FFFFFF';
  const cardBorder = isDark ? '#1E293B' : '#D6E3F0';
  const subtleBg = isDark ? '#1E293B' : '#F8FAFD';
  const dividerColor = isDark ? '#1E293B' : '#E2EBF5';
  const titleColor = isDark ? '#F8FAFC' : '#040914';
  const mutedColor = isDark ? '#94A3B8' : '#51647D';

  const blocksBaseUrl = 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks';
  const paulaImgUrl = isDark
    ? 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-dark.png'
    : 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png';

  const block1Url = `${blocksBaseUrl}/saasw-01-hero-${suffix}.png`;
  const block2Url = `${blocksBaseUrl}/saasw-02-trabajadores-${suffix}.png`;
  const block3Url = `${blocksBaseUrl}/saasw-03-cta-${suffix}.png`;

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
    table, td, tr, th {
      border: 0 !important;
      border: none !important;
      outline: none !important;
      border-collapse: collapse !important;
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }
    img, a img {
      -ms-interpolation-mode: bicubic;
      border: 0 !important;
      border-style: none !important;
      border-width: 0 !important;
      outline: none !important;
      text-decoration: none !important;
      display: block;
    }
    a, a:link, a:visited, a:hover, a:active, a:focus {
      text-decoration: none !important;
      border: 0 !important;
      border-style: none !important;
      border-width: 0 !important;
      outline: none !important;
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
        <td align="center" style="padding: 20px 10px; border: 0 !important;">
          <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width: 660px; max-width: 100%; border-collapse: collapse; margin: 0 auto; border: 0 !important;">

            <!-- BLOQUE 1 · HERO ORIGINAL (IMAGEN COMO ANTES) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
                <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; border: 0 !important; outline: none !important; text-decoration: none !important;">
                  <img src="${block1Url}" alt="GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador." width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0 !important; outline: none !important;" />
                </a>
              </td>
            </tr>

            <!-- BLOQUE 2 · TRABAJADORES ORIGINAL (IMAGEN COMO ANTES) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
                <img src="${block2Url}" alt="Trabajador PMO & Proyectos, Mesa de Ayuda TIC y Cumplimiento & Gobierno" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0 !important; outline: none !important;" />
              </td>
            </tr>

            <!-- BLOQUE 3 · CTA DIAGNÓSTICO ORIGINAL (IMAGEN COMO ANTES) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
                <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display: block; border: 0 !important; outline: none !important; text-decoration: none !important;">
                  <img src="${block3Url}" alt="Agendar Diagnóstico Cognitivo (30 min) en citas.glocation.co" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0 !important; outline: none !important;" />
                </a>
              </td>
            </tr>

            <!-- BLOQUE 4 · EXPLORE NUESTRO ECOSISTEMA EN VIVO (HTML DISEÑADO CON ENLACES INDIVIDUALES) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; border: 0 !important;">
                <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" bgcolor="${cardBg}" style="width: 660px; max-width: 100%; border-collapse: separate; background-color: ${cardBg}; border-radius: 14px; border: 1px solid ${cardBorder}; overflow: hidden;">
                  <tr>
                    <td style="padding: 20px 24px;">
                      <div style="text-align: center; margin-bottom: 12px;">
                        <span style="font-family: 'SF Mono', Consolas, Monaco, monospace; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${mutedColor};">
                          EXPLORE NUESTRO ECOSISTEMA EN VIVO:
                        </span>
                      </div>

                      <!-- 3 TARJETAS ECOSISTEMA -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: separate; border-spacing: 0 8px;">

                        <!-- 1. glocation.co -->
                        <tr>
                          <td style="background-color: ${subtleBg}; border: 1px solid ${isDark ? '#1E405A' : '#D0E7F5'}; border-radius: 8px; padding: 10px 14px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="26" valign="middle" style="font-size: 16px; line-height: 1;">🌐</td>
                                <td valign="middle" style="padding-left: 8px;">
                                  <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: ${isDark ? '#38BDF8' : '#0E768C'}; text-decoration: none;">
                                    glocation.co <span style="font-weight: 400; font-size: 12px; color: ${mutedColor};">· Plataforma Comercial SaaSW</span>
                                  </a>
                                </td>
                                <td align="right" valign="middle">
                                  <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 5px 14px; background-color: ${isDark ? '#0F293A' : '#F0F7FB'}; border: 1px solid ${isDark ? '#1E7094' : '#B8DCF0'}; border-radius: 6px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? '#38BDF8' : '#0E768C'}; text-decoration: none;">
                                    Visitar →
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- 2. homoagenticus.co -->
                        <tr>
                          <td style="background-color: ${subtleBg}; border: 1px solid ${isDark ? '#3B2D6B' : '#E4DAFF'}; border-radius: 8px; padding: 10px 14px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="26" valign="middle" style="font-size: 16px; line-height: 1;">📖</td>
                                <td valign="middle" style="padding-left: 8px;">
                                  <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: ${isDark ? '#A78BFA' : '#7A5CFF'}; text-decoration: none;">
                                    homoagenticus.co <span style="font-weight: 400; font-size: 12px; color: ${mutedColor};">· El Manifiesto del Homo agenticus</span>
                                  </a>
                                </td>
                                <td align="right" valign="middle">
                                  <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 5px 14px; background-color: ${isDark ? '#231B3D' : '#F6F3FF'}; border: 1px solid ${isDark ? '#5B449A' : '#D8C7FF'}; border-radius: 6px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? '#A78BFA' : '#7A5CFF'}; text-decoration: none;">
                                    Leer →
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- 3. preagentica.glocation.co -->
                        <tr>
                          <td style="background-color: ${subtleBg}; border: 1px solid ${isDark ? '#334155' : '#E2EBF5'}; border-radius: 8px; padding: 10px 14px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="26" valign="middle" style="font-size: 16px; line-height: 1;">🏛️</td>
                                <td valign="middle" style="padding-left: 8px;">
                                  <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: ${mutedColor}; text-decoration: none;">
                                    preagentica.glocation.co <span style="font-weight: 400; font-size: 12px; color: rgb(123,140,163);">· Nuestra Herencia Pre-IA</span>
                                  </a>
                                </td>
                                <td align="right" valign="middle">
                                  <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 5px 14px; background-color: ${subtleBg}; border: 1px solid ${isDark ? '#334155' : '#D6E3F0'}; border-radius: 6px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${mutedColor}; text-decoration: none;">
                                    Conocer →
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                      </table>

                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- BLOQUE 5 · CINTILLO Y FIRMA PAULA ROZO CON BOTONES (FORMATO REFERENCIA JEFES TIC) -->
            <tr>
              <td align="center" style="padding: 0 0 6px 0; border: 0 !important;">
                <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" bgcolor="${cardBg}" style="width: 660px; max-width: 100%; border-collapse: separate; background-color: ${cardBg}; border-radius: 14px; border: 1px solid ${cardBorder}; overflow: hidden;">

                  <!-- CINTILLO HOLDING -->
                  <tr>
                    <td style="padding: 10px 18px; background-color: ${subtleBg}; border-bottom: 1px solid ${dividerColor}; text-align: center; font-family: 'SF Mono', Consolas, Monaco, monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: ${mutedColor};">
                      HOLDING SERVINFORMACIÓN (27 AÑOS) &nbsp;•&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;•&nbsp; NORMA ISO 27001
                    </td>
                  </tr>

                  <!-- FIRMA PAULA + BOTONES REFERENCIA -->
                  <tr>
                    <td style="padding: 18px 24px;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <!-- Foto Paula -->
                          <td width="52" valign="top" style="width: 52px;">
                            <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="text-decoration: none; display: block;">
                              <img src="${paulaImgUrl}" alt="Paula Rozo" width="50" height="50" border="0" style="display: block; width: 50px; height: 50px; border-radius: 50%; border: 2px solid ${isDark ? '#1E7094' : '#D0E7F5'};" />
                            </a>
                          </td>
                          <!-- Datos Paula -->
                          <td valign="top" style="padding-left: 14px;">
                            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: 800; color: ${titleColor}; line-height: 1.2;">
                              Paula Rozo
                            </div>
                            <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; color: ${mutedColor}; margin-top: 2px;">
                              BDR · Business Development Representative
                            </div>
                            <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? '#38BDF8' : '#0E768C'}; margin-top: 2px;">
                              GLocation SAS · Transformación Cognitiva
                            </div>
                            <div style="margin-top: 5px;">
                              <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; font-weight: 600; color: ${isDark ? '#38BDF8' : '#0E768C'}; text-decoration: underline;">
                                ✉️ paula.rozo@glocation.com.co
                              </a>
                            </div>
                          </td>
                          <!-- 2 Botones de Acción (Formato Referencia Jefes TIC: glocation.co y homoagenticus.co) -->
                          <td width="190" valign="middle" align="right" style="width: 190px;">
                            <table border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate; border-spacing: 0 6px;">
                              <tr>
                                <td align="right">
                                  <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; width: 145px; text-align: center; padding: 8px 12px; background-color: ${isDark ? '#0F293A' : '#F0F7FB'}; border: 1px solid ${isDark ? '#1E7094' : '#B8DCF0'}; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? '#38BDF8' : '#0E768C'}; text-decoration: none; box-sizing: border-box;">
                                    🌐 glocation.co →
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td align="right">
                                  <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; width: 145px; text-align: center; padding: 8px 12px; background-color: ${isDark ? '#231B3D' : '#F6F3FF'}; border: 1px solid ${isDark ? '#5B449A' : '#D8C7FF'}; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? '#A78BFA' : '#7A5CFF'}; text-decoration: none; box-sizing: border-box;">
                                    📖 homoagenticus.co →
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- PIE DE DERECHOS RESERVADOS -->
            <tr>
              <td align="center" style="padding: 10px 10px 24px 10px; border: 0 !important;">
                <div style="font-size: 11px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: rgb(123,140,163); text-align: center;">
                  © 2026 GLocation SAS · Bogotá D.C., Colombia.<br />
                  Ha recibido este mensaje porque su entidad lidera proyectos estratégicos de tecnología.
                </div>
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

const lightWithToolbar = generateHybridEmailHtml('light', true);
const lightClean = generateHybridEmailHtml('light', false);
const darkClean = generateHybridEmailHtml('dark', false);

// 1. Escribir en recursos
fs.writeFileSync(path.join(recursosDir, 'plantilla-saasw-lideres-tic.html'), lightWithToolbar, 'utf8');

// 2. Escribir en public
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic.html'), lightWithToolbar, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-claro.html'), lightClean, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-oscuro.html'), darkClean, 'utf8');

// 3. Escribir alias
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques.html'), lightWithToolbar, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-claro.html'), lightClean, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-oscuro.html'), darkClean, 'utf8');

console.log('✅ Plantillas híbridas generadas correctamente:');
console.log(' - Bloques 1, 2 y 3: Imágenes originales intactas (Hero, Trabajadores, CTA)');
console.log(' - Bloque 4: Ecosistema interactivo con sus 3 páginas web');
console.log(' - Bloque 5: Cintillo + Firma Paula Rozo con botones estilo Jefes TIC');
