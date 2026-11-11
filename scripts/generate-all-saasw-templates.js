const fs = require('fs');
const path = require('path');

function createSaaswTemplateHtml(theme = 'light', includeToolbar = true) {
  const isDark = theme === 'dark';
  const outerBg = isDark ? '#0B0F19' : 'rgb(240,244,249)';
  const cardBg = isDark ? '#111827' : '#FFFFFF';
  const cardBorder = isDark ? '#1E293B' : 'rgb(214,227,240)';
  const dividerColor = isDark ? '#1E293B' : 'rgb(237,243,250)';
  const titleColor = isDark ? '#F8FAFC' : 'rgb(4,9,20)';
  const bodyColor = isDark ? '#CBD5E1' : 'rgb(58,74,96)';
  const mutedColor = isDark ? '#94A3B8' : 'rgb(81,100,125)';
  const subtleBg = isDark ? '#1E293B' : 'rgb(248,250,253)';
  const subtleBorder = isDark ? '#334155' : 'rgb(226,235,245)';
  const ctaBoxBg = isDark ? '#0F293A' : 'rgb(240,247,251)';

  const logoUrl = isDark
    ? 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/logo-glocation-negativo.png'
    : 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/logo-glocation-claro.png';

  const paulaPhotoUrl = isDark
    ? 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-dark.png'
    : 'https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png';

  const toolbarHtml = includeToolbar ? `
  <!-- BARRA SUPERIOR PARA COPIAR CON DISEÑO COMPLETO EN 1 CLIC -->
  <div id="saasw-floating-toolbar" style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:16px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()" style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO VISUAL COMPLETO (Ctrl+V en Brevo / Gmail / Outlook)
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
        mostrarMsg('✓ ¡Diseño visual copiado! Pégalo con Ctrl+V');
      } catch (err) {
        alert('Por favor presiona Ctrl+A y Ctrl+C');
      }
    }
    function copiarCodigoHtml() {
      var root = document.querySelector('[data-saasw-root="true"]');
      if (!root) return;
      navigator.clipboard.writeText(root.outerHTML).then(function() {
        mostrarMsg('✓ ¡Código HTML copiado! Pégalo dentro del botón "Fuente HTML"');
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
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Su oficina TIC no necesita más software. Necesita fuerza laboral que entregue proyectos terminados.</title>
  <style type="text/css">
    body, table, td, p, a, li {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      box-sizing: border-box;
    }
    table, td, tr, th {
      border-collapse: collapse !important;
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }
    a, a:link, a:visited, a:hover, a:active {
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
      text-decoration: none !important;
    }
    img, a img {
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
      text-decoration: none !important;
      display: block;
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body style="margin:0;padding:0;width:100% !important;background-color:${outerBg};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
${toolbarHtml}
  <div data-saasw-root="true" style="margin:0 auto;padding:24px 8px;max-width:600px;background-color:${outerBg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="${outerBg}" style="width:100%;max-width:600px;margin:0 auto;background-color:${outerBg};border:none;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
      <tbody>
        <tr>
          <td align="center" style="border:none;padding:0;">

            <!-- TARJETA PRINCIPAL CONTINUA (MISMO FORMATO JULIAN · 580PX RESPONSIVA) -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${cardBg}" style="max-width:580px;width:100%;margin:0 auto;border-radius:16px;border:1px solid ${cardBorder};overflow:hidden;background-color:${cardBg};border-collapse:separate;table-layout:fixed;mso-table-lspace:0pt;mso-table-rspace:0pt;">
              <tbody>

                <!-- CABECERA · LOGO GLOCATION + HOLDING -->
                <tr>
                  <td style="padding:26px 30px 18px;border:none;background-color:${cardBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                      <tbody>
                        <tr>
                          <td align="left" valign="middle" style="border:none;">
                            <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:none;outline:none;display:inline-block;">
                              <img src="${logoUrl}" alt="GLocation" height="34" border="0" style="display:block;height:34px;width:auto;border:0;outline:none;text-decoration:none;">
                            </a>
                          </td>
                          <td align="right" valign="middle" style="border:none;">
                            <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${mutedColor};">
                              HOLDING SERVINFORMACIÓN
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- HERO · TITULAR Y CONTEXTO -->
                <tr>
                  <td style="padding:16px 30px 20px;border:none;background-color:${cardBg};">

                    <!-- BADGE SAASW -->
                    <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom:14px;border:none;border-collapse:collapse;">
                      <tbody>
                        <tr>
                          <td style="border:1px solid ${isDark ? '#1E7094' : 'rgb(184,220,240)'};border-radius:999px;padding:4px 14px;background-color:${isDark ? '#0F293A' : 'rgb(230,243,250)'};">
                            <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:11px;font-weight:700;letter-spacing:0.08em;color:${isDark ? '#38BDF8' : 'rgb(30,112,148)'};">
                              ● SERVICE-AS-A-SOFTWARE (SaaSW) · LÍDERES TIC
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- BANNER AVISO -->
                    <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom:16px;border:none;border-collapse:collapse;">
                      <tbody>
                        <tr>
                          <td style="border:1px solid ${isDark ? '#B45309' : 'rgb(252,211,77)'};border-radius:8px;padding:6px 12px;background-color:${isDark ? '#2E2008' : 'rgb(254,243,199)'};">
                            <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:11px;font-weight:700;letter-spacing:0.05em;color:${isDark ? '#FBBF24' : 'rgb(146,64,14)'};">
                              ✕ NO LE VENDEMOS SOFTWARE PARA QUE BUSQUE QUIÉN LO OPERE.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <h1 style="margin:0px 0px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:22px;font-weight:800;line-height:1.25;letter-spacing:-0.02em;color:${titleColor};">
                      LE ENTREGAMOS EL <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:rgb(34,119,156);">TRABAJADOR COGNITIVO</span> QUE HACE EL TRABAJO.
                    </h1>

                    <p style="margin:0px 0px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;line-height:1.6;color:${bodyColor};">
                      Estimado(a) Líder de Tecnología:
                    </p>
                    <p style="margin:0px 0px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;line-height:1.6;color:${bodyColor};">
                      El SaaS tradicional le cobra licencias por asiento para que su equipo pase semanas llenando actas manuales, persiguiendo entregables de contratistas o atendiendo tickets repetitivos. <strong>GLocation no vende herramientas pasivas.</strong> Diseñamos, desplegamos y gobernamos <strong>fuerza laboral cognitiva dedicada</strong> sobre <strong>Google Cloud Vertex AI</strong> que ejecuta sus procesos neurálgicos de punta a punta, con supervisión humana estricta (<strong>Human on the Loop</strong>).
                    </p>

                  </td>
                </tr>

                <!-- 3 TARJETAS DE TRABAJADORES COGNITIVOS -->
                <tr>
                  <td style="padding:0px 30px 24px;border:none;background-color:${cardBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                      <tbody>

                        <!-- TARJETA 1 · TC-PMO -->
                        <tr>
                          <td style="padding:14px 16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                              <tbody>
                                <tr>
                                  <td width="36" valign="top" style="width:36px;border:none;">
                                    <table border="0" cellspacing="0" cellpadding="0" width="30" style="width:30px;border:none;border-collapse:collapse;">
                                      <tbody>
                                        <tr>
                                          <td width="30" height="30" align="center" valign="middle" bgcolor="#E0F2FE" style="width:30px;height:30px;border-radius:8px;background-color:#E0F2FE;font-size:15px;line-height:30px;text-align:center;border:none;">
                                            📋
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style="padding-left:12px;border:none;" valign="top">
                                    <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor};">TC-PMO · Conciliación de Entregables WBS y Actas</b>
                                    <p style="margin:4px 0px 6px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:12px;line-height:1.45;color:${mutedColor};">
                                      Coteja automáticamente informes técnicos de contratistas contra TDRs y cronograma de pagos. Estructura actas certificadas sin glosas en <strong>1 min 15 s</strong> (vs. 3 días manuales).
                                    </p>
                                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(2,132,199);">
                                      AHORRO: -65% TIEMPO · 0 GLOSAS
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr><td height="10" style="border:none;font-size:0;line-height:0;"></td></tr>

                        <!-- TARJETA 2 · TC-Workspace -->
                        <tr>
                          <td style="padding:14px 16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                              <tbody>
                                <tr>
                                  <td width="36" valign="top" style="width:36px;border:none;">
                                    <table border="0" cellspacing="0" cellpadding="0" width="30" style="width:30px;border:none;border-collapse:collapse;">
                                      <tbody>
                                        <tr>
                                          <td width="30" height="30" align="center" valign="middle" bgcolor="#DCFCE7" style="width:30px;height:30px;border-radius:8px;background-color:#DCFCE7;font-size:15px;line-height:30px;text-align:center;border:none;">
                                            🛡️
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style="padding-left:12px;border:none;" valign="top">
                                    <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor};">TC-Workspace · Administración & Seguridad Cloud</b>
                                    <p style="margin:4px 0px 6px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:12px;line-height:1.45;color:${mutedColor};">
                                      Gobierna identidades corporativas, permisos de acceso mínimo, buzones y carpetas Drive compartidas bajo lineamientos <strong>ISO 27001</strong> sin colapsar su mesa de ayuda.
                                    </p>
                                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(22,163,74);">
                                      SEGURIDAD: PERÍMETRO SOBERANO CERO FUGAS
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr><td height="10" style="border:none;font-size:0;line-height:0;"></td></tr>

                        <!-- TARJETA 3 · TC-Test -->
                        <tr>
                          <td style="padding:14px 16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                              <tbody>
                                <tr>
                                  <td width="36" valign="top" style="width:36px;border:none;">
                                    <table border="0" cellspacing="0" cellpadding="0" width="30" style="width:30px;border:none;border-collapse:collapse;">
                                      <tbody>
                                        <tr>
                                          <td width="30" height="30" align="center" valign="middle" bgcolor="#F3E8FF" style="width:30px;height:30px;border-radius:8px;background-color:#F3E8FF;font-size:15px;line-height:30px;text-align:center;border:none;">
                                            ⚡
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style="padding-left:12px;border:none;" valign="top">
                                    <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor};">TC-Test (QA) · Pruebas Continuas & Aseguramiento</b>
                                    <p style="margin:4px 0px 6px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:12px;line-height:1.45;color:${mutedColor};">
                                      Dispara suites de pruebas automatizadas end-to-end, regresión de código y paridad visual multidispositivo en pipelines CI/CD en <strong>15 segundos</strong> antes de producción.
                                    </p>
                                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(147,51,234);">
                                      CALIDAD: 100% COBERTURA SIN REGRESIONES
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- BLOQUE CTA · DIAGNÓSTICO COGNITIVO 30 MINUTOS -->
                <tr>
                  <td style="padding:0px 30px 26px;border:none;background-color:${cardBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${ctaBoxBg}" style="width:100%;border:1px solid ${subtleBorder};border-radius:14px;background-color:${ctaBoxBg};border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                      <tbody>
                        <tr>
                          <td align="center" style="padding:22px 18px;border:none;">
                            <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${isDark ? '#38BDF8' : 'rgb(34,119,156)'};">
                              DIAGNÓSTICO COGNITIVO · 30 MINUTOS
                            </span>
                            <h3 style="margin:8px 0px 10px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:16px;font-weight:700;color:${titleColor};">
                              ¿Exploramos qué proceso de su oficina TIC podemos liberar este mes?
                            </h3>
                            <p style="margin:0px 0px 18px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;line-height:1.5;max-width:460px;color:${mutedColor};">
                              Agende una sesión técnica de 30 minutos. Evaluaremos uno de sus cuellos de botella operativos y le entregaremos una estimación contable de ahorro y tiempos.
                            </p>

                            <!-- BOTÓN DE CITA DIRECTO -->
                            <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto;border:none;border-collapse:collapse;">
                              <tbody>
                                <tr>
                                  <td align="center" bgcolor="#1F6E91" style="background-color:#1F6E91;background-image:linear-gradient(90deg,#1F6E91 0%,#4A64A0 60%,#6E5C98 100%);border-radius:8px;border:none;padding:0;">
                                    <a href="https://citas.glocation.co/?theme=light" rel="noopener noreferrer" target="_blank" style="display:inline-block;padding:12px 26px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:0.03em;color:#FFFFFF;border:none;outline:none;">
                                      <span style="color:#FFFFFF;text-decoration:none;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">Agendar Diagnóstico Cognitivo (30 min) →</span>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <p style="margin:12px 0px 0px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;color:rgb(123,140,163);">
                              Sin formularios eternos: seleccione día y hora directamente en nuestra plataforma.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- BLOQUE 4 · EXPLORE NUESTRO ECOSISTEMA EN VIVO (3 TARJETAS VISUALES CON ENLACES, SIN BORDES FEOS DE TABLA) -->
                <tr>
                  <td style="padding:18px 30px 20px;border-top:1px solid ${dividerColor};background-color:${subtleBg};border-left:none;border-right:none;border-bottom:none;">
                    <div style="text-align:center;margin-bottom:12px;">
                      <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${mutedColor};">
                        EXPLORE NUESTRO ECOSISTEMA EN VIVO:
                      </span>
                    </div>

                    <!-- 3 TARJETAS VISUALES CON ENLACES ACTIVOS -->
                    <div style="margin-top:4px;">
                      <!-- 1. glocation.co -->
                      <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:block;margin-bottom:8px;padding:10px 14px;background-color:${cardBg};border:1px solid ${isDark ? '#1E405A' : '#D0E7F5'};border-radius:10px;text-decoration:none;outline:none;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;margin:0;padding:0;border:0 !important;border-collapse:collapse !important;border-spacing:0 !important;">
                          <tr style="border:0 !important;">
                            <td width="26" valign="middle" style="width:26px;border:0 !important;padding:0;font-size:15px;line-height:1;">🌐</td>
                            <td valign="middle" style="border:0 !important;padding:0 0 0 10px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:700;color:${isDark ? '#38BDF8' : '#0E768C'};line-height:1.3;">
                              glocation.co <span style="font-weight:400;font-size:11px;color:${mutedColor};">· Plataforma Comercial SaaSW</span>
                            </td>
                            <td width="24" align="right" valign="middle" style="width:24px;border:0 !important;padding:0;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;color:${isDark ? '#38BDF8' : '#0E768C'};line-height:1;">→</td>
                          </tr>
                        </table>
                      </a>

                      <!-- 2. homoagenticus.co -->
                      <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display:block;margin-bottom:8px;padding:10px 14px;background-color:${cardBg};border:1px solid ${isDark ? '#3B2D6B' : '#E4DAFF'};border-radius:10px;text-decoration:none;outline:none;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;margin:0;padding:0;border:0 !important;border-collapse:collapse !important;border-spacing:0 !important;">
                          <tr style="border:0 !important;">
                            <td width="26" valign="middle" style="width:26px;border:0 !important;padding:0;font-size:15px;line-height:1;">📖</td>
                            <td valign="middle" style="border:0 !important;padding:0 0 0 10px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:700;color:${isDark ? '#A78BFA' : '#7A5CFF'};line-height:1.3;">
                              homoagenticus.co <span style="font-weight:400;font-size:11px;color:${mutedColor};">· El Manifiesto del Homo agenticus</span>
                            </td>
                            <td width="24" align="right" valign="middle" style="width:24px;border:0 !important;padding:0;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;color:${isDark ? '#A78BFA' : '#7A5CFF'};line-height:1;">→</td>
                          </tr>
                        </table>
                      </a>

                      <!-- 3. preagentica.glocation.co -->
                      <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="display:block;margin-bottom:0;padding:10px 14px;background-color:${cardBg};border:1px solid ${subtleBorder};border-radius:10px;text-decoration:none;outline:none;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;margin:0;padding:0;border:0 !important;border-collapse:collapse !important;border-spacing:0 !important;">
                          <tr style="border:0 !important;">
                            <td width="26" valign="middle" style="width:26px;border:0 !important;padding:0;font-size:15px;line-height:1;">🏛️</td>
                            <td valign="middle" style="border:0 !important;padding:0 0 0 10px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:700;color:${mutedColor};line-height:1.3;">
                              preagentica.glocation.co <span style="font-weight:400;font-size:11px;color:rgb(123,140,163);">· Nuestra Herencia Pre-IA</span>
                            </td>
                            <td width="24" align="right" valign="middle" style="width:24px;border:0 !important;padding:0;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;color:${mutedColor};line-height:1;">→</td>
                          </tr>
                        </table>
                      </a>
                    </div>
                  </td>
                </tr>

                <!-- CINTILLO HOLDING / PARTNER / ISO -->
                <tr>
                  <td style="padding:12px 30px 14px;border-top:1px solid ${dividerColor};background-color:${subtleBg};border-left:none;border-right:none;border-bottom:none;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:0 !important;border-collapse:collapse !important;">
                      <tbody>
                        <tr>
                          <td align="center" style="border:0 !important;">
                            <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${mutedColor};">
                              HOLDING SERVINFORMACIÓN (27 AÑOS) &nbsp;•&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;•&nbsp; NORMA ISO 27001
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- BLOQUE 5 · FIRMA PAULA ROZO + FOTO + BOTONES GLOCATION.CO Y HOMOAGENTICUS.CO -->
                <tr>
                  <td style="padding:22px 30px 24px;border-top:1px solid ${dividerColor};background-color:${cardBg};border-left:none;border-right:none;border-bottom:none;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:0 !important;border-collapse:collapse !important;">
                      <tbody>
                        <tr>
                          <!-- Foto Paula -->
                          <td width="52" valign="top" style="width:52px;border:0 !important;">
                            <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="text-decoration:none;border:0 !important;outline:none;display:inline-block;">
                              <img src="${paulaPhotoUrl}" alt="Paula Rozo" width="48" height="48" border="0" style="display:block;width:48px;height:48px;border:2px solid ${isDark ? '#1E7094' : '#D0E7F5'};border-radius:50%;outline:none;text-decoration:none;">
                            </a>
                          </td>
                          <!-- Datos Paula -->
                          <td style="padding-left:14px;border:0 !important;" valign="top">
                            <b style="font-size:15px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${titleColor};line-height:1.2;">Paula Rozo</b><br>
                            <span style="font-size:12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${mutedColor};">BDR · Business Development Representative</span><br>
                            <span style="font-size:11px;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${isDark ? '#38BDF8' : '#0E768C'};">GLocation SAS · Transformación Cognitiva</span><br>
                            
                            <div style="margin-top:6px;">
                              <a href="mailto:paula.rozo@glocation.com.co?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="text-decoration:none;color:${isDark ? '#38BDF8' : '#0E768C'};font-size:12px;font-weight:600;border:none;outline:none;" target="_blank">
                                ✉️ paula.rozo@glocation.com.co
                              </a>
                            </div>

                            <!-- BOTONES DE ACCIÓN FORMATO REFERENCIA JEFES TIC: GLOCATION.CO Y HOMOAGENTICUS.CO (SIN TABLAS QUE GENEREN BORDES FEOS) -->
                            <div style="margin-top:12px;line-height:1;">
                              <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-right:8px;margin-bottom:6px;background-color:${isDark ? '#0F293A' : '#F0F7FB'};border:1px solid ${isDark ? '#1E7094' : '#B8DCF0'};border-radius:8px;padding:7px 14px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;font-weight:700;color:${isDark ? '#38BDF8' : '#0E768C'};text-decoration:none;outline:none;vertical-align:middle;">
                                🌐 glocation.co →
                              </a>
                              <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-bottom:6px;background-color:${isDark ? '#231B3D' : '#F6F3FF'};border:1px solid ${isDark ? '#5B449A' : '#D8C7FF'};border-radius:8px;padding:7px 14px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;font-weight:700;color:${isDark ? '#A78BFA' : '#7A5CFF'};text-decoration:none;outline:none;vertical-align:middle;">
                                📖 homoagenticus.co →
                              </a>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- PIE DE DERECHOS RESERVADOS DENTRO DE LA MISMA ESTRUCTURA PARA CERO BORDES ROJOS -->
                <tr>
                  <td align="center" style="padding:16px 20px 20px;border-top:1px solid ${dividerColor};background-color:${subtleBg};font-size:11px;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163);border-left:none;border-right:none;border-bottom:none;">
                    © 2026 GLocation SAS · Bogotá D.C., Colombia.<br>
                    Ha recibido este mensaje porque su entidad lidera proyectos estratégicos de tecnología.
                  </td>
                </tr>

              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>

  </div>
</body>
</html>`;
}

const lightWithToolbar = createSaaswTemplateHtml('light', true);
const lightClean = createSaaswTemplateHtml('light', false);
const darkClean = createSaaswTemplateHtml('dark', false);

const publicDir = path.join(__dirname, '../public');
const recursosDir = path.join(__dirname, '../recursos');

// Escribir en recursos
fs.writeFileSync(path.join(recursosDir, 'plantilla-saasw-lideres-tic.html'), lightWithToolbar, 'utf8');

// Escribir en public
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic.html'), lightWithToolbar, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-claro.html'), lightClean, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-oscuro.html'), darkClean, 'utf8');

// También los alias
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques.html'), lightWithToolbar, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-claro.html'), lightClean, 'utf8');
fs.writeFileSync(path.join(publicDir, 'plantilla-saasw-lideres-tic-bloques-oscuro.html'), darkClean, 'utf8');

console.log('✅ Archivos generados con éxito:');
console.log(' - recursos/plantilla-saasw-lideres-tic.html (con barra flotante de 1 clic)');
console.log(' - public/plantilla-saasw-lideres-tic.html');
console.log(' - public/plantilla-saasw-lideres-tic-claro.html');
console.log(' - public/plantilla-saasw-lideres-tic-oscuro.html');

