const fs = require("fs");
const path = require("path");

function buildFollowUp1EmailHtml() {
  return `<div data-saasw-root="true" style="margin:0 !important;padding:0 !important;background-color:#EFF3F8;">
  <!-- Reset explícito para Converso (CKEditor), Brevo, Gmail y Outlook -->
  <style type="text/css">
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td, tr, th {
      border: 0 !important;
      border-style: none !important;
      border-collapse: collapse !important;
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }
    table.cke_show_border,
    table.cke_show_border td,
    table.cke_show_border tr,
    .cke_show_border,
    .cke_show_border td,
    .cke_show_border tr {
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
    }
    img {
      -ms-interpolation-mode: bicubic;
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
      text-decoration: none !important;
      display: block !important;
    }
    a {
      text-decoration: none !important;
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
    }
  </style>

  <!-- Preencabezado oculto -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:#EFF3F8;">
    Un caso concreto: de los informes de contratistas al acta lista para firma, con su equipo al mando.&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#EFF3F8" style="width:100% !important;border-collapse:collapse !important;background-color:#EFF3F8;margin:0 !important;padding:0 !important;border:0 !important;border-style:none !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
    <tr>
      <td align="center" style="padding:24px 10px !important;margin:0 !important;border:0 !important;border-style:none !important;">
        <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;"><tr><td style="border:0 !important;border-style:none !important;"><![endif]-->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="width:600px !important;max-width:600px !important;border-collapse:collapse !important;margin:0 auto !important;border:0 !important;border-style:none !important;border-radius:20px;overflow:hidden;background-color:#ffffff;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;box-shadow:0 4px 20px rgba(15,23,42,0.06);">

          <!-- Franja multicolor corporativa -->
          <tr>
            <td height="5" bgcolor="#38C6FF" style="height:5px;font-size:0;line-height:0;background-color:#38C6FF;background-image:linear-gradient(90deg,#0284c7 0%,#38C6FF 30%,#16a34a 55%,#A78BDB 80%,#3F1C81 100%);border:0 !important;border-style:none !important;">&nbsp;</td>
          </tr>

          <!-- 1 · ENCABEZADO -->
          <tr>
            <td style="padding:20px 32px;background-color:#ffffff;border:0 !important;border-style:none !important;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td valign="middle" align="left" style="border:0 !important;border-style:none !important;">
                    <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="border:0 !important;outline:none !important;">
                      <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/logo-glocation-claro.png" height="38" alt="GLocation" style="height:38px;width:auto;border:0 !important;display:block !important;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#3F1C81;" />
                    </a>
                  </td>
                  <td valign="middle" align="right" style="border:0 !important;border-style:none !important;">
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:14px;font-weight:700;color:#4A515D;letter-spacing:1.4px;text-transform:uppercase;text-align:right;">
                      Holding Servinformación<br />
                      <span style="color:#0284c7;font-weight:600;font-size:9px;letter-spacing:1px;">Google Cloud Premier Partner</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 2 · HERO / APERTURA CON CURIOSIDAD (Storytelling Paso 1 & 2) -->
          <tr>
            <td bgcolor="#040914" style="background-color:#040914;background-image:linear-gradient(160deg,#0D2140 0%,#040914 80%);padding:34px 32px 30px 32px;border:0 !important;border-style:none !important;">
              <!-- Badge de caso concreto -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td bgcolor="#3F1C81" style="background-color:#3F1C81;background-image:linear-gradient(90deg,#3F1C81 0%,#BF8BDB 100%);border-radius:40px;padding:8px 16px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;letter-spacing:1.8px;color:#ffffff;border:0 !important;border-style:none !important;text-transform:uppercase;">
                    CASO DE USO · TC-PMO · OFICINA TIC
                  </td>
                </tr>
              </table>

              <!-- Titular principal -->
              <h1 style="margin:20px 0 16px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;mso-line-height-rule:exactly;">
                <span style="display:block;font-size:20px;line-height:26px;font-weight:600;color:#B7C6D8;letter-spacing:-0.2px;">Del informe del contratista</span>
                <span style="display:block;font-size:28px;line-height:34px;font-weight:800;color:#ffffff;letter-spacing:-0.6px;margin-top:4px;">
                  AL ACTA LISTA PARA <span style="color:#38C6FF;">REVISIÓN.</span>
                </span>
              </h1>

              <!-- Saludo y enganche natural -->
              <p style="margin:0 0 10px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;font-weight:600;color:#E7EEF8;">
                Estimado(a) Líder de Tecnología:
              </p>
              <p style="margin:0 0 12px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:23px;font-weight:400;color:#B7C6D8;">
                La semana pasada le escribí sobre fuerza laboral cognitiva para su Oficina TIC.
              </p>
              <p style="margin:0 0 14px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:23px;font-weight:400;color:#B7C6D8;">
                Hoy quiero mostrarle cómo podría aplicarse a una tarea administrativa concreta: <strong style="color:#ffffff;font-weight:600;">revisar entregables de contratistas y preparar las actas correspondientes.</strong>
              </p>

              <!-- Pregunta de curiosidad / emoción -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;background-color:rgba(56,198,255,0.08);border-left:3px solid #38C6FF !important;border-radius:8px;margin-top:14px;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td style="padding:12px 14px;border:0 !important;border-style:none !important;">
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;font-weight:600;color:#38C6FF;">
                      ¿Qué sucede cuando lo reportado en el informe mensual no coincide exactamente con lo contratado en los TDR o el cronograma?
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 3 · CONFLICTO OPERATIVO (Storytelling Paso 3: Conflicto) -->
          <tr>
            <td style="padding:28px 32px 14px 32px;background-color:#ffffff;border:0 !important;border-style:none !important;">
              <p style="margin:0 0 10px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:16px;font-weight:700;color:#0284c7;letter-spacing:2px;text-transform:uppercase;">
                El desafío en la supervisión técnica
              </p>
              <p style="margin:0 0 12px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;font-weight:400;color:#334155;">
                Cada fin de mes llegan informes de avance de diferentes contratistas de software, infraestructura y soporte. Antes de redactar o firmar un acta de recibo a satisfacción, el supervisor debe contrastar cada informe contra los <strong style="color:#0F172A;font-weight:600;">TDR contractuales</strong>, el <strong style="color:#0F172A;font-weight:600;">cronograma de hitos</strong> y el <strong style="color:#0F172A;font-weight:600;">plan de pagos</strong>.
              </p>

              <!-- Tarjeta de conflicto destacada -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;background-color:#F8FAFC;border:1px solid #CBD5E1 !important;border-left:4px solid #E11D48 !important;border-radius:12px;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td style="padding:16px 18px;border:0 !important;border-style:none !important;">
                    <p style="margin:0 0 4px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;font-weight:700;color:#0F172A;">
                      El cuello de botella no es redactar el acta.
                    </p>
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;font-weight:400;color:#475569;">
                      Es verificar información dispersa entre múltiples anexos, identificar faltantes y armar reportes de estado sin retrasar los tiempos administrativos de la entidad.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 4 · SOLUCIÓN TC-PMO (Storytelling Paso 4: Aliado en 4 Pasos Visuales) -->
          <tr>
            <td style="padding:18px 32px 10px 32px;background-color:#ffffff;border:0 !important;border-style:none !important;">
              <p style="margin:0 0 14px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:16px;font-weight:700;color:#0284c7;letter-spacing:2px;text-transform:uppercase;">
                Así apoya TC-PMO a su equipo en 4 pasos
              </p>

              <!-- Paso 1 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;background-color:#ffffff;border:1px solid #E2E8F0 !important;border-left:4px solid #0284C7 !important;border-radius:12px;margin-bottom:10px;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td width="48" valign="top" style="width:48px;padding:14px 0 14px 14px;border:0 !important;border-style:none !important;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;">
                      <tr>
                        <td width="34" height="34" align="center" valign="middle" bgcolor="#0284C7" style="width:34px;height:34px;border-radius:17px;background-color:#0284C7;background-image:linear-gradient(135deg,#0284C7 0%,#38BDF8 100%);font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:34px;font-weight:700;color:#ffffff;border:0 !important;border-style:none !important;">
                          01
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="top" style="padding:14px 16px 14px 12px;border:0 !important;border-style:none !important;">
                    <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:19px;font-weight:700;color:#0F172A;">
                      Llegan los informes de avance
                    </p>
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:400;color:#475569;">
                      Entregables mensuales, bitácoras y anexos técnicos cargados por los contratistas de tecnología.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Paso 2 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;background-color:#ffffff;border:1px solid #E2E8F0 !important;border-left:4px solid #16A34A !important;border-radius:12px;margin-bottom:10px;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td width="48" valign="top" style="width:48px;padding:14px 0 14px 14px;border:0 !important;border-style:none !important;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;">
                      <tr>
                        <td width="34" height="34" align="center" valign="middle" bgcolor="#16A34A" style="width:34px;height:34px;border-radius:17px;background-color:#16A34A;background-image:linear-gradient(135deg,#16A34A 0%,#4ADE80 100%);font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:34px;font-weight:700;color:#ffffff;border:0 !important;border-style:none !important;">
                          02
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="top" style="padding:14px 16px 14px 12px;border:0 !important;border-style:none !important;">
                    <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:19px;font-weight:700;color:#0F172A;">
                      TC-PMO contrasta con TDR, cronograma y plan de pagos
                    </p>
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:400;color:#475569;">
                      Coteja de forma cruzada cada actividad reportada contra las obligaciones contractuales pactadas.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Paso 3 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;background-color:#ffffff;border:1px solid #E2E8F0 !important;border-left:4px solid #3F1C81 !important;border-radius:12px;margin-bottom:10px;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td width="48" valign="top" style="width:48px;padding:14px 0 14px 14px;border:0 !important;border-style:none !important;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;">
                      <tr>
                        <td width="34" height="34" align="center" valign="middle" bgcolor="#3F1C81" style="width:34px;height:34px;border-radius:17px;background-color:#3F1C81;background-image:linear-gradient(135deg,#3F1C81 0%,#BF8BDB 100%);font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:34px;font-weight:700;color:#ffffff;border:0 !important;border-style:none !important;">
                          03
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="top" style="padding:14px 16px 14px 12px;border:0 !important;border-style:none !important;">
                    <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:19px;font-weight:700;color:#0F172A;">
                      TC-PMO prepara borrador, alertas y dashboards
                    </p>
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:400;color:#475569;">
                      Genera el borrador del acta, resalta inconsistencias o faltantes en rojo y consolida métricas para el informe de gestión.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Paso 4 (Control Humano) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;background-color:#F0FDF4;border:1px solid #BBF7D0 !important;border-left:4px solid #16A34A !important;border-radius:12px;margin-bottom:12px;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td width="48" valign="top" style="width:48px;padding:14px 0 14px 14px;border:0 !important;border-style:none !important;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;">
                      <tr>
                        <td width="34" height="34" align="center" valign="middle" bgcolor="#16A34A" style="width:34px;height:34px;border-radius:17px;background-color:#16A34A;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:34px;font-weight:700;color:#ffffff;border:0 !important;border-style:none !important;">
                          04
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="top" style="padding:14px 16px 14px 12px;border:0 !important;border-style:none !important;">
                    <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:19px;font-weight:700;color:#166534;">
                      El supervisor revisa, aprueba y firma
                    </p>
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:500;color:#15803D;">
                      <strong style="color:#14532D;font-weight:700;">Control humano estricto:</strong> Ningún documento se aprueba ni se desembolsa sin la autorización formal de su equipo.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 5 · TRANSFORMACIÓN: COMPARATIVO HOY vs TC-PMO -->
          <tr>
            <td style="padding:12px 32px 22px 32px;background-color:#ffffff;border:0 !important;border-style:none !important;">
              <p style="margin:0 0 14px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:16px;font-weight:700;color:#0284c7;letter-spacing:2px;text-transform:uppercase;">
                Comparativa de impacto en la Oficina TIC
              </p>

              <!-- Tabla 2 columnas comparativa -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;border:0 !important;border-style:none !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <!-- Columna HOY -->
                  <td width="48%" valign="top" style="width:48%;background-color:#F8FAFC;border:1px solid #E2E8F0 !important;border-top:3px solid #94A3B8 !important;border-radius:12px;padding:16px 14px;border:0 !important;border-style:none !important;">
                    <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:700;color:#64748B;letter-spacing:1px;text-transform:uppercase;">
                      HOY
                    </p>
                    <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#334155;">
                      &#10005;&nbsp; Revisión manual de carpetas y archivos dispersos.
                    </p>
                    <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#334155;">
                      &#10005;&nbsp; Redacción de actas desde cero en procesadores de texto.
                    </p>
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#334155;">
                      &#10005;&nbsp; Faltantes no detectados hasta el momento de radicación.
                    </p>
                  </td>

                  <td width="4%" style="width:4%;border:0 !important;border-style:none !important;">&nbsp;</td>

                  <!-- Columna CON TC-PMO -->
                  <td width="48%" valign="top" style="width:48%;background-color:#F0F9FF;border:1px solid #BAE6FD !important;border-top:3px solid #0284C7 !important;border-radius:12px;padding:16px 14px;border:0 !important;border-style:none !important;">
                    <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:700;color:#0284C7;letter-spacing:1px;text-transform:uppercase;">
                      CON TC-PMO
                    </p>
                    <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#0C4A6E;">
                      &#10003;&nbsp; <strong style="color:#0369A1;">Borrador estructurado</strong> listo para revisión técnica.
                    </p>
                    <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#0C4A6E;">
                      &#10003;&nbsp; <strong style="color:#0369A1;">Faltantes y desvíos</strong> identificados antes de firmar.
                    </p>
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#0C4A6E;">
                      &#10003;&nbsp; <strong style="color:#0369A1;">Informes y dashboards</strong> consolidados al instante.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Lema central -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;background-color:#EFF6FF;border-radius:10px;margin-top:14px;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td align="center" style="padding:12px 16px;border:0 !important;border-style:none !important;">
                    <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:19px;font-weight:700;color:#1E40AF;text-align:center;">
                      "La tecnología prepara. Su equipo verifica y decide."
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Nota de otros trabajadores cognitivos secundarios -->
              <p style="margin:14px 0 0 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:17px;font-weight:400;color:#64748B;">
                <span style="color:#0284c7;font-weight:700;">Otros procesos en la Oficina TIC:</span> <strong>TC-Workspace</strong> (gobierno de identidades, permisos y carpetas compartidas) y <strong>TC-Test</strong> (ejecución de pruebas antes de cada paso a producción).
              </p>
            </td>
          </tr>

          <!-- 6 · CTA PRINCIPAL (Storytelling Paso 5: Acción) -->
          <tr>
            <td align="center" bgcolor="#040914" style="background-color:#040914;background-image:linear-gradient(160deg,#0D2140 0%,#040914 80%);padding:34px 32px;border:0 !important;border-style:none !important;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td bgcolor="#3F1C81" style="background-color:#3F1C81;background-image:linear-gradient(90deg,#3F1C81 0%,#BF8BDB 100%);border-radius:40px;padding:8px 18px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;letter-spacing:1.8px;color:#ffffff;border:0 !important;border-style:none !important;text-transform:uppercase;">
                    DIAGNÓSTICO COGNITIVO · 30 MIN
                  </td>
                </tr>
              </table>

              <p style="margin:16px 0 10px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:21px;line-height:28px;font-weight:700;color:#ffffff;text-align:center;">
                ¿Le gustaría explorar cómo funcionaría este proceso en su Oficina TIC?
              </p>
              <p style="margin:0 0 22px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:21px;font-weight:400;color:#CBD5E1;text-align:center;max-width:480px;">
                Una sesión técnica de 30 minutos: evaluamos el flujo documental de sus contratistas y definimos si un trabajador cognitivo puede aliviar la carga administrativa de sus supervisores.
              </p>

              <!-- Botón principal CTA -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td align="center" bgcolor="#0284c7" style="border-radius:40px;background-color:#0284c7;background-image:linear-gradient(90deg,#0284c7 0%,#38BDF8 100%);border:0 !important;border-style:none !important;box-shadow:0 4px 14px rgba(2,132,199,0.4);">
                    <a href="https://citas.glocation.co/?theme=light" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:15px 32px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:40px;letter-spacing:0.3px;">
                      Agendar Diagnóstico Cognitivo (30 min) &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 7 · CTA SECUNDARIO (Respuesta de una palabra) -->
          <tr>
            <td style="padding:22px 32px;background-color:#F8FAFC;border:0 !important;border-style:none !important;border-top:1px solid #E2E8F0 !important;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td align="center" style="border:0 !important;border-style:none !important;">
                    <p style="margin:0 0 6px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:17px;font-weight:700;color:#0F172A;text-align:center;">
                      ¿Prefiere no agendar todavía?
                    </p>
                    <p style="margin:0 0 12px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:400;color:#64748B;text-align:center;">
                      Responda a este correo con una palabra para enviarle el resumen técnico del caso:
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                      <tr>
                        <td align="center" style="padding:0 4px;border:0 !important;border-style:none !important;">
                          <a href="mailto:paula.rozo@glocation.com.co?subject=Consulta%20sobre%20Actas%20-%20Oficina%20TIC&body=Hola%20Paula,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20caso%20de%20ACTAS." target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:#E0F2FE;border:1px solid #BAE6FD;border-radius:20px;padding:6px 14px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:700;color:#0284C7;text-decoration:none;">
                            ACTAS &rarr;
                          </a>
                        </td>
                        <td align="center" style="padding:0 4px;border:0 !important;border-style:none !important;">
                          <a href="mailto:paula.rozo@glocation.com.co?subject=Consulta%20sobre%20Accesos%20-%20Oficina%20TIC&body=Hola%20Paula,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20ACCESOS%20y%20Workspace." target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:#F1F5F9;border:1px solid #CBD5E1;border-radius:20px;padding:6px 14px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:600;color:#475569;text-decoration:none;">
                            ACCESOS
                          </a>
                        </td>
                        <td align="center" style="padding:0 4px;border:0 !important;border-style:none !important;">
                          <a href="mailto:paula.rozo@glocation.com.co?subject=Consulta%20sobre%20Pruebas%20-%20Oficina%20TIC&body=Hola%20Paula,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20PRUEBAS%20de%20software." target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:#F1F5F9;border:1px solid #CBD5E1;border-radius:20px;padding:6px 14px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:600;color:#475569;text-decoration:none;">
                            PRUEBAS
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 8 · FIRMA INSTITUCIONAL -->
          <tr>
            <td style="padding:22px 32px;background-color:#EFF3F8;border:0 !important;border-style:none !important;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;background-color:#ffffff;border-radius:16px;border:0 !important;border-style:none !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                <tr>
                  <td valign="middle" style="padding:18px 0 18px 18px;border:0 !important;border-style:none !important;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border:0 !important;border-style:none !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                      <tr>
                        <td width="64" valign="middle" style="width:64px;padding-right:14px;border:0 !important;border-style:none !important;">
                          <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png" width="56" height="56" alt="Paula Rozo" style="width:56px;height:56px;border-radius:28px;display:block;" />
                        </td>
                        <td valign="middle" style="border:0 !important;border-style:none !important;">
                          <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:15px;line-height:20px;font-weight:700;color:#0F172A;">
                            Paula Rozo
                          </p>
                          <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:400;color:#475569;">
                            BDR &middot; Business Development Representative
                          </p>
                          <p style="margin:0 0 3px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:600;color:#0284c7;">
                            GLocation SAS &middot; Holding Servinformación
                          </p>
                          <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:400;color:#0284c7;">
                            <a href="mailto:paula.rozo@glocation.com.co?subject=Consulta%20Follow-up%20TIC%20-%20GLocation" style="color:#0284c7;text-decoration:underline;">paula.rozo@glocation.com.co</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" valign="middle" width="160" style="width:160px;padding:18px 18px 18px 10px;border:0 !important;border-style:none !important;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="150" style="width:150px;border:0 !important;border-style:none !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;">
                      <tr>
                        <td align="center" style="background-color:#E0F2FE;border-radius:10px;padding:8px 10px;border:0 !important;border-style:none !important;">
                          <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:700;color:#0284C7;white-space:nowrap;text-decoration:none;">
                            glocation.co &rarr;
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td height="6" style="height:6px;font-size:0;line-height:0;border:0 !important;border-style:none !important;">&nbsp;</td>
                      </tr>
                      <tr>
                        <td align="center" style="background-color:#F3E8FF;border-radius:10px;padding:8px 10px;border:0 !important;border-style:none !important;">
                          <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:700;color:#3F1C81;white-space:nowrap;text-decoration:none;">
                            homoagenticus.co &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 9 · PIE LEGAL -->
          <tr>
            <td align="center" bgcolor="#040914" style="background-color:#040914;padding:22px 32px 24px 32px;border:0 !important;border-style:none !important;">
              <p style="margin:0 0 6px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:600;color:#E7EEF8;text-align:center;">
                &copy; 2026 GLocation SAS &middot; Bogotá D.C., Colombia.
              </p>
              <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:16px;font-weight:400;color:#94A3B8;text-align:center;">
                Recibe este mensaje porque su entidad lidera proyectos estratégicos de tecnología. Sus datos de contacto se tratan conforme a la Ley 1581 de 2012. Si prefiere no recibir más comunicaciones sobre fuerza laboral cognitiva, responda «BAJA» a este correo.
              </p>
            </td>
          </tr>

        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</div>`;
}

function buildStandaloneHtml(emailHtml) {
  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Follow-up 1 · Del informe del contratista al acta lista para firma · GLocation SaaSW</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style type="text/css">
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td, tr {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
      border-collapse: collapse !important;
      border: 0 !important;
      border-style: none !important;
    }
    img {
      -ms-interpolation-mode: bicubic;
      border: 0 !important;
      border-style: none !important;
      outline: none !important;
      text-decoration: none !important;
      display: block !important;
    }
    body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #EFF3F8;
      font-family: 'Poppins', 'Segoe UI', Arial, Helvetica, sans-serif;
    }
  </style>
</head>
<body style="margin:0 !important;padding:0 !important;width:100% !important;background-color:#EFF3F8;">

  <!-- BARRA DE ACCIÓN SUPERIOR PARA COPIAR CON ENLACES ACTIVOS -->
  <div id="saasw-floating-toolbar"
    style="position:sticky;top:0;z-index:999999;background:#0F172A;border-bottom:2px solid #0284C7;padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.25);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;flex-wrap:wrap;">
    <button id="btnCopiarVisual" onclick="copiarCorreoVisual()"
      style="background:linear-gradient(90deg,#0284C7 0%,#2563EB 100%);color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 2px 8px rgba(2,132,199,0.5);display:inline-flex;align-items:center;gap:8px;">
      📋 COPIAR DISEÑO CON ENLACES (Ctrl+V en Converso / Brevo / Gmail / Outlook)
    </button>
    <button id="btnCopiarCodigo" onclick="copiarCodigoHtml()"
      style="background:#1E293B;color:#38BDF8;border:1.5px solid #38BDF8;padding:10px 18px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;">
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
        if (navigator.clipboard && window.ClipboardItem) {
          var htmlBlob = new Blob([root.outerHTML], { type: 'text/html' });
          var textBlob = new Blob([root.innerText], { type: 'text/plain' });
          navigator.clipboard.write([
            new ClipboardItem({ 'text/html': htmlBlob, 'text/plain': textBlob })
          ]).catch(function () { });
        }
        document.execCommand('copy');
        sel.removeAllRanges();
        mostrarMsg('✓ ¡Diseño con enlaces copiado! Pégalo con Ctrl+V en Converso / Brevo / Gmail');
      } catch (err) {
        alert('Por favor presiona Ctrl+C para copiar');
      }
    }

    function copiarCodigoHtml() {
      var root = document.querySelector('[data-saasw-root="true"]');
      if (!root) return;
      navigator.clipboard.writeText(root.outerHTML).then(function () {
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

  ${emailHtml}

</body>
</html>`;
}

const emailHtml = buildFollowUp1EmailHtml();
const standaloneHtml = buildStandaloneHtml(emailHtml);

// 1. Escribir archivos HTML standalone
const publicPathClaro = path.join(__dirname, "..", "public", "plantilla-saasw-fu1-claro.html");
const publicPathDefault = path.join(__dirname, "..", "public", "plantilla-saasw-fu1.html");
const recursosPath = path.join(__dirname, "..", "recursos", "plantilla-saasw-fu1.html");

fs.writeFileSync(publicPathClaro, standaloneHtml, "utf8");
console.log("Wrote:", publicPathClaro);
fs.writeFileSync(publicPathDefault, standaloneHtml, "utf8");
console.log("Wrote:", publicPathDefault);
fs.writeFileSync(recursosPath, standaloneHtml, "utf8");
console.log("Wrote:", recursosPath);

// 2. Escribir saasw-fu1-template.ts
const tsTemplatePath = path.join(__dirname, "..", "src", "modules", "email-marketing", "templates", "saasw-fu1-template.ts");
const tsCode = `/**
 * Plantilla de Email Marketing — Follow-up 1 SaaSW Líderes TIC (TC-PMO Actas de Contratistas)
 * GLocation SAS · Holding Servinformación
 * Versión iterada con Storytelling B2B (Curiosidad, Conflicto, Aliado, Transformación, Decisión)
 */

export interface SaaswFu1Config {
  preheader: string;
  baseUrl: string;
  citasUrl: string;
  mailtoUrl: string;
  homoagenticusUrl: string;
  paulaEmail: string;
}

export const defaultSaaswFu1Config: SaaswFu1Config = {
  preheader: "Un caso concreto: de los informes de contratistas al acta lista para firma, con su equipo al mando.",
  baseUrl: "https://glocation.co",
  citasUrl: "https://citas.glocation.co/?theme=light",
  mailtoUrl: "mailto:paula.rozo@glocation.com.co?subject=Consulta%20sobre%20Actas%20-%20Oficina%20TIC",
  homoagenticusUrl: "https://homoagenticus.co",
  paulaEmail: "paula.rozo@glocation.com.co",
};

export function generateSaaswFu1Html(): string {
  return ${JSON.stringify(emailHtml)};
}
`;

fs.writeFileSync(tsTemplatePath, tsCode, "utf8");
console.log("Wrote TS template:", tsTemplatePath);
