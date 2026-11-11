const fs = require('fs');

function getImageHtml(theme) {
  const isDark = theme === 'dark';
  const suffix = isDark ? 'oscuro' : 'claro';
  const outerBg = isDark ? '#0B0F19' : '#F0F4F9';
  const mutedColor = isDark ? '#94A3B8' : '#51647D';
  const accentColor = isDark ? '#38BDF8' : '#0E768C';
  const blocksBaseUrl = 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks';

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
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display: block; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;">
                <img src="${blocksBaseUrl}/saasw-03-cta-${suffix}.png" alt="Diagnóstico de Viabilidad Cognitiva para su Oficina TIC (30 min) — Agendar cita" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 4 · ECOSISTEMA EN VIVO Y FIRMA COMERCIAL PAULA ROZO -->
          <tr>
            <td align="center" style="padding: 0 0 10px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation&body=Hola%20Paula%2C%20me%20gustar%C3%ADa%20coordinar%20una%20sesi%C3%B3n%20de%2030%20minutos%20sobre%20Trabajadores%20Cognitivos." style="display: block; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;">
                <img src="${blocksBaseUrl}/saasw-04-ecosistema-firma-${suffix}.png" alt="Ecosistema GLocation y Firma Comercial Paula Rozo — BDR" width="660" border="0" style="display: block; width: 660px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; outline: none !important; text-decoration: none !important;" />
              </a>
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
console.log('Saved 3 block HTML files!');
