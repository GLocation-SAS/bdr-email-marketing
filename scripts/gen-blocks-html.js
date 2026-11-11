const fs = require('fs');

function getImageHtml(theme) {
  const isDark = theme === 'dark';
  const suffix = isDark ? 'oscuro' : 'claro';
  const outerBg = isDark ? '#0B0F19' : '#F0F4F9';
  const cardBg = isDark ? '#111827' : '#FFFFFF';
  const cardBorder = isDark ? '#1E293B' : '#D6E3F0';
  const subtleBg = isDark ? '#1E293B' : '#F8FAFD';
  const dividerColor = isDark ? '#1E293B' : '#E2EBF5';
  const titleColor = isDark ? '#F8FAFC' : '#040914';
  const mutedColor = isDark ? '#94A3B8' : '#51647D';
  const accentColor = isDark ? '#38BDF8' : '#0E768C';
  const manifestoColor = isDark ? '#A78BFA' : '#7A5CFF';
  const blocksBaseUrl = 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks';
  const paulaImgUrl = isDark
    ? 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-dark.png'
    : 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png';

  const ecoBg1 = isDark ? '#0F293A' : '#F0F7FB';
  const ecoBorder1 = isDark ? '#1E405A' : '#D0E7F5';
  const ecoBg2 = isDark ? '#231B3D' : '#F6F3FF';
  const ecoBorder2 = isDark ? '#3B2D6B' : '#E4DAFF';
  const ecoBg3 = isDark ? '#1E293B' : '#F8FAFD';
  const ecoBorder3 = isDark ? '#334155' : '#E2EBF5';

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
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${outerBg}" style="width: 100%; border-collapse: collapse; background-color: ${outerBg}; margin: 0; padding: 0;">
    <tr>
      <td align="center" style="padding: 20px 10px; border: 0 !important;">
        <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width: 660px; max-width: 100%; border-collapse: collapse; margin: 0 auto; border: 0 !important;">

          <!-- BLOQUE 1 · CABECERA Y HERO — SAASW LÍDERES TIC -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;">
                <img src="${blocksBaseUrl}/saasw-01-hero-${suffix}.png" alt="GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador." width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 2 · TRES TRABAJADORES COGNITIVOS TIC -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <img src="${blocksBaseUrl}/saasw-02-trabajadores-${suffix}.png" alt="Trabajador PMO & Proyectos, Mesa de Ayuda TIC y Cumplimiento & Gobierno" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;" />
            </td>
          </tr>

          <!-- BLOQUE 3 · CTA — DIAGNÓSTICO COGNITIVO 30 MINUTOS -->
          <tr>
            <td align="center" style="padding: 0 0 10px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display: block; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;">
                <img src="${blocksBaseUrl}/saasw-03-cta-${suffix}.png" alt="Diagnóstico de Viabilidad Cognitiva para su Oficina TIC (30 min) — Agendar cita" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 4 · ECOSISTEMA EN VIVO (TARJETAS INDIVIDUALES CLICKEABLES) -->
          <tr>
            <td align="center" style="padding: 0 0 10px 0; border: 0 !important; border-style: none !important;">
              <div style="background-color: ${cardBg}; border-radius: 16px; border: 1px solid ${cardBorder}; overflow: hidden; width: 100%; max-width: 660px; text-align: center; box-sizing: border-box; box-shadow: 0 4px 20px rgba(15,28,48,0.06);">
                
                <div style="padding: 24px 22px 18px 22px; text-align: center;">
                  <div style="font-family: 'SF Mono', Consolas, Monaco, monospace; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${mutedColor}; margin-bottom: 12px;">
                    EXPLORE NUESTRO ECOSISTEMA EN VIVO:
                  </div>

                  <!-- Botón Tarjeta 1: glocation.co -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 8px; border-collapse: collapse; border: 0 !important;">
                    <tr>
                      <td style="background-color: ${ecoBg1}; border: 1px solid ${ecoBorder1}; border-radius: 8px; padding: 10px 16px; text-align: left;">
                        <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0 !important;">
                          <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: ${accentColor};">🌐 glocation.co</span>
                          <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: ${mutedColor}; margin-left: 8px;">· Plataforma Comercial SaaSW &nbsp;→</span>
                        </a>
                      </td>
                    </tr>
                  </table>

                  <!-- Botón Tarjeta 2: homoagenticus.co -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 8px; border-collapse: collapse; border: 0 !important;">
                    <tr>
                      <td style="background-color: ${ecoBg2}; border: 1px solid ${ecoBorder2}; border-radius: 8px; padding: 10px 16px; text-align: left;">
                        <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0 !important;">
                          <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: ${manifestoColor};">📖 homoagenticus.co</span>
                          <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: ${mutedColor}; margin-left: 8px;">· El Manifiesto del Homo agenticus &nbsp;→</span>
                        </a>
                      </td>
                    </tr>
                  </table>

                  <!-- Botón Tarjeta 3: preagentica.glocation.co -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 0 !important;">
                    <tr>
                      <td style="background-color: ${ecoBg3}; border: 1px solid ${ecoBorder3}; border-radius: 8px; padding: 10px 16px; text-align: left;">
                        <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0 !important;">
                          <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 600; color: ${mutedColor};">🏛 preagentica.glocation.co</span>
                          <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: rgb(123,140,163); margin-left: 8px;">· Nuestra Herencia Pre-IA &nbsp;→</span>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- CINTILLO HOLDING -->
                <div style="background-color: ${subtleBg}; border-top: 1px solid ${dividerColor}; padding: 10px 16px; font-family: 'SF Mono', Consolas, Monaco, monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: ${mutedColor}; text-align: center;">
                  HOLDING SERVINFORMACIÓN (27 AÑOS) &nbsp;•&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;•&nbsp; NORMA ISO 27001
                </div>

              </div>
            </td>
          </tr>

          <!-- BLOQUE 5 · FIRMA COMERCIAL GRÁFICA EN BLOQUES (IDÉNTICA A CAMPAÑA JEFES TIC) -->
          <tr>
            <td align="center" style="padding: 0 0 10px 0; border: 0 !important; border-style: none !important;">
              <table role="presentation" width="660" cellpadding="0" cellspacing="0" border="0" style="width: 660px; max-width: 100%; border-collapse: collapse; margin: 0 auto; border: 0 !important;">
                <tr>
                  <!-- 5A · Paula Rozo (Correo directo) -->
                  <td width="415" valign="top" style="width: 62.97%; padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
                    <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="display: block; text-decoration: none; border: 0 !important; outline: none !important;">
                      <img src="${blocksBaseUrl}/05a-glocation-bloque-firma-paula-cursor-${suffix}.png" alt="Paula Rozo — BDR | Business Development Representative" width="415" style="display: block; width: 100%; max-width: 415px; height: auto; border: 0 !important; outline: none !important;" />
                    </a>
                  </td>
                  <!-- 5B · Botón Web glocation.co -->
                  <td width="111" valign="top" style="width: 16.76%; padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
                    <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0 !important; outline: none !important;">
                      <img src="${blocksBaseUrl}/05b-glocation-bloque-firma-web-${suffix}.png" alt="Sitio web oficial glocation.co" width="111" style="display: block; width: 100%; max-width: 111px; height: auto; border: 0 !important; outline: none !important;" />
                    </a>
                  </td>
                  <!-- 5C · Botón LinkedIn GLocation -->
                  <td width="134" valign="top" style="width: 20.27%; padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
                    <a href="https://www.linkedin.com/company/glocation/" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0 !important; outline: none !important;">
                      <img src="${blocksBaseUrl}/05c-glocation-bloque-firma-linkedin-${suffix}.png" alt="LinkedIn oficial de GLocation" width="134" style="display: block; width: 100%; max-width: 134px; height: auto; border: 0 !important; outline: none !important;" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ENLACES DIRECTOS Y ACCESOS RÁPIDOS -->
          <tr>
            <td align="center" style="padding: 10px 10px 18px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.8; color: ${mutedColor}; text-align: center; border: 0 !important; border-style: none !important;">
              <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="color: ${accentColor}; text-decoration: underline !important; font-weight: 700; margin: 0 6px;">📅 Agendar Diagnóstico (30 min)</a> &nbsp;·&nbsp; 
              <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="color: ${accentColor}; text-decoration: underline !important; font-weight: 600; margin: 0 6px;">🌐 glocation.co</a> &nbsp;·&nbsp; 
              <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="color: ${accentColor}; text-decoration: underline !important; font-weight: 600; margin: 0 6px;">📖 homoagenticus.co</a> &nbsp;·&nbsp; 
              <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="color: ${accentColor}; text-decoration: underline !important; font-weight: 600; margin: 0 6px;">🏛 preagentica.glocation.co</a> &nbsp;·&nbsp; 
              <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="color: ${accentColor}; text-decoration: underline !important; font-weight: 600; margin: 0 6px;">✉️ Escribir a Paula</a> &nbsp;·&nbsp; 
              <a href="https://www.linkedin.com/company/glocation/" target="_blank" rel="noopener noreferrer" style="color: ${accentColor}; text-decoration: underline !important; font-weight: 600; margin: 0 6px;">💼 LinkedIn</a>
            </td>
          </tr>

          <!-- PIE DE DERECHOS RESERVADOS -->
          <tr>
            <td align="center" style="padding: 6px 10px 24px 10px; border: 0 !important; border-style: none !important;">
              <table width="660" border="0" cellspacing="0" cellpadding="0" style="max-width: 660px; width: 100%; margin: 0 auto; border: 0 !important; border-style: none !important;" role="presentation">
                <tr>
                  <td align="center" style="font-size: 11px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: rgb(123,140,163); border: 0 !important; border-style: none !important;">
                    © 2026 GLocation SAS · Bogotá D.C., Colombia.<br />
                    Ha recibido este mensaje porque su entidad lidera proyectos estratégicos de tecnología.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

fs.writeFileSync('public/plantilla-saasw-lideres-tic-bloques-claro.html', getImageHtml('light'), 'utf8');
fs.writeFileSync('public/plantilla-saasw-lideres-tic-bloques.html', getImageHtml('light'), 'utf8');
fs.writeFileSync('public/plantilla-saasw-lideres-tic-bloques-oscuro.html', getImageHtml('dark'), 'utf8');
fs.writeFileSync('public/plantilla-saasw-lideres-tic.html', getImageHtml('light'), 'utf8');
fs.writeFileSync('public/plantilla-saasw-lideres-tic-claro.html', getImageHtml('light'), 'utf8');
fs.writeFileSync('public/plantilla-saasw-lideres-tic-oscuro.html', getImageHtml('dark'), 'utf8');
console.log('Saved all 6 HTML files with high-impact cards and active links!');



