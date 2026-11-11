const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

function buildEmailHtml(theme = 'light') {
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

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Su oficina TIC no necesita más software. Necesita fuerza laboral que entregue proyectos terminados.</title>
  <style type="text/css">
    body, table, td, p, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      box-sizing: border-box;
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
      outline: none !important;
      text-decoration: none !important;
      display: block;
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100% !important; background-color: ${outerBg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${outerBg}" style="width: 100%; background-color: ${outerBg}; margin: 0; padding: 0; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 20px 10px; border: 0 !important;">

        <!-- TARJETA PRINCIPAL CONTINUA (IMÁGENES ARRIBA + ECOSISTEMA Y FIRMA EDITADOS ABAJO) -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; background-color: ${cardBg}; border-radius: 16px; overflow: hidden; border: 1px solid ${cardBorder}; table-layout: fixed;">

          <!-- BLOQUE 1 · HERO ORIGINAL -->
          <tr>
            <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
              <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: block; border: 0 !important; outline: none !important; text-decoration: none !important;">
                <img src="${block1Url}" alt="GLocation SaaSW — Su oficina TIC no necesita más software" width="600" style="display: block; width: 100%; max-width: 600px; height: auto; border: 0 !important;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 2 · TRABAJADORES ORIGINAL -->
          <tr>
            <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
              <img src="${block2Url}" alt="Trabajador PMO & Proyectos, Mesa de Ayuda TIC y Cumplimiento & Gobierno" width="600" style="display: block; width: 100%; max-width: 600px; height: auto; border: 0 !important;" />
            </td>
          </tr>

          <!-- BLOQUE 3 · CTA DIAGNÓSTICO ORIGINAL -->
          <tr>
            <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important;">
              <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display: block; border: 0 !important; outline: none !important; text-decoration: none !important;">
                <img src="${block3Url}" alt="Agendar Diagnóstico Cognitivo (30 min) en citas.glocation.co" width="600" style="display: block; width: 100%; max-width: 600px; height: auto; border: 0 !important;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 4 · EXPLORE NUESTRO ECOSISTEMA EN VIVO (TARJETAS VISUALES CON ENLACES) -->
          <tr>
            <td style="padding: 22px 28px 18px; background-color: ${subtleBg}; border-top: 1px solid ${dividerColor};">
              <div style="text-align: center; margin-bottom: 12px;">
                <span style="font-family: 'SF Mono', Consolas, Monaco, monospace; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: ${mutedColor};">
                  EXPLORE NUESTRO ECOSISTEMA EN VIVO
                </span>
              </div>

              <!-- 3 TARJETAS ECOSISTEMA CON BORDES, FONDOS Y ENLACES ACTIVOS -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: separate; border-spacing: 0 8px;">
                
                <!-- 1. glocation.co -->
                <tr>
                  <td style="background-color: ${cardBg}; border: 1px solid ${isDark ? "#1E405A" : "#D0E7F5"}; border-radius: 10px; padding: 10px 14px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; border: none;">
                      <tr>
                        <td width="28" valign="middle" style="font-size: 16px; line-height: 1; border: none;">🌐</td>
                        <td valign="middle" style="padding-left: 8px; border: none;">
                          <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: ${isDark ? "#38BDF8" : "#0E768C"}; text-decoration: none;">
                            glocation.co <span style="font-weight: 400; font-size: 12px; color: ${mutedColor};">· Plataforma Comercial SaaSW</span>
                          </a>
                        </td>
                        <td align="right" valign="middle" style="border: none;">
                          <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 4px 12px; background-color: ${isDark ? "#0F293A" : "#F0F7FB"}; border: 1px solid ${isDark ? "#1E7094" : "#B8DCF0"}; border-radius: 6px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? "#38BDF8" : "#0E768C"}; text-decoration: none;">
                            Visitar →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- 2. homoagenticus.co -->
                <tr>
                  <td style="background-color: ${cardBg}; border: 1px solid ${isDark ? "#3B2D6B" : "#E4DAFF"}; border-radius: 10px; padding: 10px 14px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; border: none;">
                      <tr>
                        <td width="28" valign="middle" style="font-size: 16px; line-height: 1; border: none;">📖</td>
                        <td valign="middle" style="padding-left: 8px; border: none;">
                          <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: ${isDark ? "#A78BFA" : "#7A5CFF"}; text-decoration: none;">
                            homoagenticus.co <span style="font-weight: 400; font-size: 12px; color: ${mutedColor};">· El Manifiesto del Homo agenticus</span>
                          </a>
                        </td>
                        <td align="right" valign="middle" style="border: none;">
                          <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 4px 12px; background-color: ${isDark ? "#231B3D" : "#F6F3FF"}; border: 1px solid ${isDark ? "#5B449A" : "#D8C7FF"}; border-radius: 6px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? "#A78BFA" : "#7A5CFF"}; text-decoration: none;">
                            Leer →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- 3. preagentica.glocation.co -->
                <tr>
                  <td style="background-color: ${cardBg}; border: 1px solid ${isDark ? "#334155" : "#E2EBF5"}; border-radius: 10px; padding: 10px 14px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; border: none;">
                      <tr>
                        <td width="28" valign="middle" style="font-size: 16px; line-height: 1; border: none;">🏛️</td>
                        <td valign="middle" style="padding-left: 8px; border: none;">
                          <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: ${mutedColor}; text-decoration: none;">
                            preagentica.glocation.co <span style="font-weight: 400; font-size: 12px; color: rgb(123,140,163);">· Nuestra Herencia Pre-IA</span>
                          </a>
                        </td>
                        <td align="right" valign="middle" style="border: none;">
                          <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 4px 12px; background-color: ${subtleBg}; border: 1px solid ${isDark ? "#334155" : "#D6E3F0"}; border-radius: 6px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${mutedColor}; text-decoration: none;">
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

          <!-- CINTILLO HOLDING -->
          <tr>
            <td style="background-color: ${subtleBg}; border-top: 1px solid ${dividerColor}; padding: 10px 16px; font-family: 'SF Mono', Consolas, Monaco, monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: ${mutedColor}; text-align: center;">
              HOLDING SERVINFORMACIÓN (27 AÑOS) &nbsp;•&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;•&nbsp; NORMA ISO 27001
            </td>
          </tr>

          <!-- BLOQUE 5 · FIRMA PAULA ROZO + FOTO + BOTONES GLOCATION.CO Y HOMOAGENTICUS.CO -->
          <tr>
            <td style="padding: 22px 28px 24px; background-color: ${cardBg}; border-top: 1px solid ${dividerColor};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; border: none;">
                <tr>
                  <!-- Foto oficial de Paula -->
                  <td width="52" valign="top" style="width: 52px; border: none;">
                    <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="text-decoration: none; display: block; border: none; outline: none;">
                      <img src="${paulaImgUrl}" alt="Paula Rozo" width="50" height="50" border="0" style="display: block; width: 50px; height: 50px; border-radius: 50%; border: 2px solid ${isDark ? "#1E7094" : "#D0E7F5"}; outline: none;" />
                    </a>
                  </td>
                  <!-- Datos de Paula -->
                  <td valign="top" style="padding-left: 14px; border: none;">
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: 800; color: ${titleColor}; line-height: 1.2;">
                      Paula Rozo
                    </div>
                    <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; color: ${mutedColor}; margin-top: 2px;">
                      BDR · Business Development Representative
                    </div>
                    <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? "#38BDF8" : "#0E768C"}; margin-top: 2px;">
                      GLocation SAS · Transformación Cognitiva
                    </div>
                    <div style="margin-top: 6px;">
                      <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; font-weight: 600; color: ${isDark ? "#38BDF8" : "#0E768C"}; text-decoration: underline;">
                        ✉️ paula.rozo@glocation.com.co
                      </a>
                    </div>
                    
                    <!-- BOTONES FORMATO REFERENCIA: GLOCATION.CO Y HOMOAGENTICUS.CO -->
                    <table border="0" cellspacing="0" cellpadding="0" style="margin-top: 12px; border-collapse: separate; border-spacing: 8px 0; border: none;">
                      <tr>
                        <!-- Botón 1: glocation.co -->
                        <td style="background-color: ${isDark ? "#0F293A" : "#F0F7FB"}; border: 1px solid ${isDark ? "#1E7094" : "#B8DCF0"}; border-radius: 8px; padding: 6px 14px;">
                          <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? "#38BDF8" : "#0E768C"}; text-decoration: none; display: inline-block;">
                            🌐 glocation.co →
                          </a>
                        </td>
                        <!-- Botón 2: homoagenticus.co -->
                        <td style="background-color: ${isDark ? "#231B3D" : "#F6F3FF"}; border: 1px solid ${isDark ? "#5B449A" : "#D8C7FF"}; border-radius: 8px; padding: 6px 14px;">
                          <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; font-weight: 700; color: ${isDark ? "#A78BFA" : "#7A5CFF"}; text-decoration: none; display: inline-block;">
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

        <!-- PIE DE DERECHOS RESERVADOS -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; margin: 16px auto 0 auto; border: none;">
          <tr>
            <td align="center" style="font-size: 11px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: rgb(123,140,163); text-align: center; border: none;">
              © 2026 GLocation SAS · Bogotá D.C., Colombia.<br />
              Ha recibido este mensaje porque su entidad lidera proyectos estratégicos de tecnología.
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

const lightHtml = buildEmailHtml('light');
const darkHtml = buildEmailHtml('dark');

fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic.html'), lightHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-claro.html'), lightHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-oscuro.html'), darkHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques.html'), lightHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-claro.html'), lightHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-oscuro.html'), darkHtml, 'utf8');

console.log('✅ Archivos generados conservando el diseño original superior de imágenes + ecosistema y firma Paula ajustados');
