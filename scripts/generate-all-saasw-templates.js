const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Generador de plantillas SaaSW con espaciado amplio y elegante entre tarjetas
// Formato Jefes TIC: Cada sección es una tarjeta flotante con bordes redondeados y espacio amplio (20px)
// Cada bloque interno tiene su hipervínculo nativo (<a href="..."><img></a>)

async function buildAllTemplates() {
  const blocksDir = path.join(__dirname, '../public/email-blocks');
  const publicDir = path.join(__dirname, '../public');
  const recursosDir = path.join(__dirname, '../recursos');

  // Asegurar que las tarjetas y rodajas estén actualizadas
  require('./build-cards-and-templates.js');

  function renderTemplatesHtml(theme = 'claro', includeToolbar = true) {
    const isDark = theme === 'oscuro';
    const outerBg = isDark ? '#0B0F19' : '#F0F4F9';
    const textMuted = isDark ? '#94A3B8' : '#64748B';
    const blocksBase = 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks';

    const b1Url = `${blocksBase}/saasw-01-hero-${theme}.png`;
    const b2Url = `${blocksBase}/saasw-02-trabajadores-${theme}.png`;
    const b3Url = `${blocksBase}/saasw-03-cta-${theme}.png`;
    const b4aUrl = `${blocksBase}/saasw-04a-eco-glocation-${theme}.png`;
    const b4bUrl = `${blocksBase}/saasw-04b-eco-homoagenticus-${theme}.png`;
    const b4cUrl = `${blocksBase}/saasw-04c-eco-preagentica-${theme}.png`;
    const b5aUrl = `${blocksBase}/saasw-05a-cintillo-${theme}.png`;
    const b5bUrl = `${blocksBase}/saasw-05b-firma-paula-${theme}.png`;
    const b5cUrl = `${blocksBase}/saasw-05c-boton-glocation-${theme}.png`;
    const b5dUrl = `${blocksBase}/saasw-05d-boton-homoagenticus-${theme}.png`;

    const b1Height = isDark ? 560 : 554;
    const b2Height = 465;
    const b3Height = 315;

    const toolbarHtml = includeToolbar ? `
  <!-- BARRA DE ACCIÓN SUPERIOR PARA COPIAR CON ENLACES ACTIVOS -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;flex-wrap:wrap;">
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO CON ENLACES (Ctrl+V en Brevo / Gmail / Outlook)
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
        document.execCommand('copy');
        sel.removeAllRanges();
        mostrarMsg('✓ ¡Diseño con enlaces copiado! Pégalo con Ctrl+V en tu correo');
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
      background-color: ${outerBg};
    }
  </style>
</head>
<body style="margin:0 !important;padding:0 !important;width:100% !important;background-color:${outerBg};">
${toolbarHtml}
  <!-- CONTENEDOR RAÍZ CON TARJETAS REDONDEADAS, ESPACIO AMPLIO Y ENLACES NATIVOS -->
  <div data-saasw-root="true" style="margin:0 !important;padding:0 !important;background-color:${outerBg};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${outerBg}" style="width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;background-color:${outerBg};margin:0 !important;padding:0 !important;border:0 !important;">
      <tr>
        <td align="center" style="padding:32px 14px !important;margin:0 !important;border:0 !important;">
          <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width:660px !important;max-width:660px !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 auto !important;padding:0 !important;border:0 !important;">

            <!-- BLOQUE 1 · HERO HEADER (TARJETA REDONDEADA) -->
            <tr>
              <td align="center" style="padding:0 0 22px 0 !important;margin:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                  <img src="${b1Url}" width="660" height="${b1Height}" alt="GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador cognitivo." border="0" style="display:block !important;width:660px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                </a>
              </td>
            </tr>

            <!-- BLOQUE 2 · TRABAJADORES COGNITIVOS (TARJETA REDONDEADA) -->
            <tr>
              <td align="center" style="padding:0 0 22px 0 !important;margin:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                  <img src="${b2Url}" width="660" height="${b2Height}" alt="Trabajador PMO & Proyectos, Mesa de Ayuda TIC y Cumplimiento & Gobierno" border="0" style="display:block !important;width:660px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                </a>
              </td>
            </tr>

            <!-- BLOQUE 3 · CTA DIAGNÓSTICO COGNITIVO (TARJETA REDONDEADA) -->
            <tr>
              <td align="center" style="padding:0 0 22px 0 !important;margin:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                  <img src="${b3Url}" width="660" height="${b3Height}" alt="Agendar Diagnóstico Cognitivo (30 min) en citas.glocation.co" border="0" style="display:block !important;width:660px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                </a>
              </td>
            </tr>

            <!-- BLOQUE 4 · TARJETA ECOSISTEMA (TARJETA REDONDEADA CON SUS 3 OPCIONES Y ENLACES) -->
            <tr>
              <td align="center" style="padding:0 0 22px 0 !important;margin:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width:660px !important;max-width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 auto !important;padding:0 !important;border:0 !important;">
                  <!-- 4A: Header + glocation.co (borde superior redondeado) -->
                  <tr>
                    <td align="center" style="margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                      <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                        <img src="${b4aUrl}" width="660" height="80" alt="glocation.co · Plataforma Comercial SaaSW" border="0" style="display:block !important;width:660px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                      </a>
                    </td>
                  </tr>
                  <!-- 4B: homoagenticus.co -->
                  <tr>
                    <td align="center" style="margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                      <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                        <img src="${b4bUrl}" width="660" height="53" alt="homoagenticus.co · El Manifiesto del Homo agenticus" border="0" style="display:block !important;width:660px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                      </a>
                    </td>
                  </tr>
                  <!-- 4C: preagentica.glocation.co (borde inferior redondeado) -->
                  <tr>
                    <td align="center" style="margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                      <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                        <img src="${b4cUrl}" width="660" height="62" alt="preagentica.glocation.co · Nuestra Herencia Pre-IA" border="0" style="display:block !important;width:660px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- BLOQUE 5 · TARJETA FIRMA & BOTONES (TARJETA REDONDEADA CON CINTILLO + PAULA ROZO + 2 BOTONES) -->
            <tr>
              <td align="center" style="padding:0 0 22px 0 !important;margin:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width:660px !important;max-width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 auto !important;padding:0 !important;border:0 !important;">
                  <!-- 5A: Cintillo Holding (borde superior redondeado) -->
                  <tr>
                    <td align="center" style="margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                      <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                        <img src="${b5aUrl}" width="660" height="33" alt="HOLDING SERVINFORMACIÓN (27 AÑOS) • GOOGLE CLOUD PREMIER PARTNER • NORMA ISO 27001" border="0" style="display:block !important;width:660px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                      </a>
                    </td>
                  </tr>
                  <!-- 5 ROW: Paula Rozo + 2 Botones (borde inferior redondeado) -->
                  <tr>
                    <td align="center" style="margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                      <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width:660px !important;max-width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 auto !important;padding:0 !important;border:0 !important;">
                        <tr>
                          <td width="365" valign="top" style="width:365px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                            <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                              <img src="${b5bUrl}" width="365" height="127" alt="Paula Rozo — BDR · Business Development Representative" border="0" style="display:block !important;width:365px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                            </a>
                          </td>
                          <td width="125" valign="top" style="width:125px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                            <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                              <img src="${b5cUrl}" width="125" height="127" alt="glocation.co" border="0" style="display:block !important;width:125px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                            </a>
                          </td>
                          <td width="170" valign="top" style="width:170px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
                            <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;">
                              <img src="${b5dUrl}" width="170" height="127" alt="homoagenticus.co" border="0" style="display:block !important;width:170px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- LEGAL FOOTER -->
            <tr>
              <td align="center" style="padding:20px 10px 36px 10px !important;margin:0 !important;border:0 !important;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px !important;width:100% !important;margin:0 auto !important;border-collapse:collapse !important;border:0 !important;" role="presentation">
                  <tr>
                    <td align="center" style="font-size:11px !important;line-height:1.5 !important;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif !important;color:${textMuted} !important;border:0 !important;">
                      © 2026 GLocation SAS · Bogotá D.C., Colombia.<br />Ha recibido este mensaje porque su entidad lidera proyectos estratégicos de tecnología.
                    </td>
                  </tr>
                </table>
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

  const claroHtml = renderTemplatesHtml('claro', true);
  const oscuroHtml = renderTemplatesHtml('oscuro', true);
  const defaultHtml = claroHtml;

  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-claro.html'), claroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-oscuro.html'), oscuroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic.html'), defaultHtml, 'utf8');
  fs.writeFileSync(path.join(recursosDir, 'plantilla-saasw-lideres-tic.html'), defaultHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-claro.html'), claroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-oscuro.html'), oscuroHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques.html'), defaultHtml, 'utf8');

  console.log('✓ All templates successfully updated with 20px generous card spacing!');
}

buildAllTemplates();
