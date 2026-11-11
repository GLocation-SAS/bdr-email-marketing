export interface SaaswLideresTicEmailConfig {
  holdingBadge?: string;
  eyebrowPill?: string;
  warningBanner?: string;
  headlinePart1?: string;
  headlineHighlight?: string;
  headlinePart2?: string;
  greeting?: string;
  introParagraphHtml?: string;
  card1Title?: string;
  card1DescriptionHtml?: string;
  card1Metric?: string;
  card2Title?: string;
  card2DescriptionHtml?: string;
  card2Metric?: string;
  card3Title?: string;
  card3DescriptionHtml?: string;
  card3Metric?: string;
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonUrl?: string;
  ctaSubtext?: string;
  senderPhotoUrl?: string;
  senderName?: string;
  senderRole?: string;
  senderCompany?: string;
  senderEmail?: string;
  websiteUrl?: string;
  manifestoUrl?: string;
  preagenticaUrl?: string;
  linkedinUrl?: string;
  theme?: "light" | "dark";
}

export const defaultSaaswLideresTicConfig: Required<SaaswLideresTicEmailConfig> = {
  holdingBadge: "HOLDING SERVINFORMACIÓN",
  eyebrowPill: "● SERVICE-AS-A-SOFTWARE (SaaSW) · LÍDERES TIC",
  warningBanner: "✕ NO LE VENDEMOS SOFTWARE PARA QUE BUSQUE QUIÉN LO OPERE.",
  headlinePart1: "LE ENTREGAMOS EL",
  headlineHighlight: "TRABAJADOR COGNITIVO",
  headlinePart2: "QUE HACE EL TRABAJO.",
  greeting: "Estimado(a) Líder de Tecnología:",
  introParagraphHtml:
    "El SaaS tradicional le cobra licencias por asiento para que su equipo pase semanas llenando actas manuales, persiguiendo entregables de contratistas o atendiendo tickets repetitivos. <strong>GLocation no vende herramientas pasivas.</strong> Diseñamos, desplegamos y gobernamos <strong>fuerza laboral cognitiva dedicada</strong> sobre <strong>Google Cloud Vertex AI</strong> que ejecuta sus procesos neurálgicos de punta a punta, con supervisión humana estricta (<strong>Human on the Loop</strong>).",
  card1Title: "TC-PMO · Conciliación de Entregables WBS y Actas",
  card1DescriptionHtml:
    "Coteja automáticamente informes técnicos de contratistas contra TDRs y cronograma de pagos. Estructura actas certificadas sin glosas en <strong>1 min 15 s</strong> (vs. 3 días manuales).",
  card1Metric: "AHORRO: -65% TIEMPO · 0 GLOSAS",
  card2Title: "TC-Workspace · Administración & Seguridad Cloud",
  card2DescriptionHtml:
    "Gobierna identidades corporativas, permisos de acceso mínimo, buzones y carpetas Drive compartidas bajo lineamientos <strong>ISO 27001</strong> sin colapsar su mesa de ayuda.",
  card2Metric: "SEGURIDAD: PERÍMETRO SOBERANO CERO FUGAS",
  card3Title: "TC-Test (QA) · Pruebas Continuas & Aseguramiento",
  card3DescriptionHtml:
    "Dispara suites de pruebas automatizadas end-to-end, regresión de código y paridad visual multidispositivo en pipelines CI/CD en <strong>15 segundos</strong> antes de producción.",
  card3Metric: "CALIDAD: 100% COBERTURA SIN REGRESIONES",
  ctaEyebrow: "DIAGNÓSTICO COGNITIVO · 30 MINUTOS",
  ctaTitle: "¿Exploramos qué proceso de su oficina TIC podemos liberar este mes?",
  ctaDescription:
    "Agende una sesión técnica de 30 minutos. Evaluaremos uno de sus cuellos de botella operativos y le entregaremos una estimación contable de ahorro y tiempos.",
  ctaButtonText: "Agendar Diagnóstico Cognitivo (30 min) →",
  ctaButtonUrl: "https://citas.glocation.co/?theme=light",
  ctaSubtext:
    "Sin formularios eternos: seleccione día y hora directamente en nuestra plataforma.",
  senderPhotoUrl:
    "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png",
  senderName: "Paula Rozo",
  senderRole: "BDR · Business Development Representative",
  senderCompany: "GLocation SAS · Transformación Cognitiva",
  senderEmail: "paula.rozo@glocation.com.co",
  websiteUrl: "https://glocation.co",
  manifestoUrl: "https://homoagenticus.co",
  preagenticaUrl: "https://preagentica.glocation.co",
  linkedinUrl: "https://www.linkedin.com/company/glocation/",
  theme: "light",
};

/**
 * Genera el HTML completo y 100% compatible con clientes de correo (Gmail, Outlook, Apple Mail)
 * para la plantilla "SaaSW · Fuerza Laboral Cognitiva TIC" con la foto oficial de Paula Rozo
 * alojada en URL pública (`https://raw.githubusercontent.com/.../avatar-paula-light.png`).
 */
export function generateSaaswLideresTicHtml(
  customConfig?: SaaswLideresTicEmailConfig
): string {
  const c: Required<SaaswLideresTicEmailConfig> = {
    ...defaultSaaswLideresTicConfig,
    ...customConfig,
  };

  const isDark = c.theme === "dark";
  const outerBg = isDark ? "#0B0F19" : "rgb(240,244,249)";
  const cardBg = isDark ? "#111827" : "#FFFFFF";
  const cardBorder = isDark ? "#1E293B" : "rgb(214,227,240)";
  const dividerColor = isDark ? "#1E293B" : "rgb(237,243,250)";
  const titleColor = isDark ? "#F8FAFC" : "rgb(4,9,20)";
  const bodyColor = isDark ? "#CBD5E1" : "rgb(58,74,96)";
  const mutedColor = isDark ? "#94A3B8" : "rgb(81,100,125)";
  const subtleBg = isDark ? "#1E293B" : "rgb(248,250,253)";
  const subtleBorder = isDark ? "#334155" : "rgb(226,235,245)";
  const ctaBoxBg = isDark ? "#0F293A" : "rgb(240,247,251)";

  const logoUrl = isDark
    ? "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/logo-glocation-negativo.png"
    : "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/logo-glocation-claro.png";

  const paulaPhotoPublicUrl = c.senderPhotoUrl.startsWith("http")
    ? c.senderPhotoUrl
    : "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png";

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<title>Su oficina TIC no necesita más software. Necesita fuerza laboral que entregue proyectos terminados.</title>
<!--[if mso]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
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
  }
</style>
<!--[if mso]>
<style type="text/css">
  table, td, tr {
    border: 0 !important;
    border-style: none !important;
    border-collapse: collapse !important;
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
    mso-border-alt: none !important;
  }
  a, a:link, a:visited {
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
  }
</style>
<![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${outerBg};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
<div data-saasw-root="true" style="margin:0px;padding:30px 10px;background-color:${outerBg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">

  <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="${outerBg}" style="background-color:${outerBg};border:none;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
    <tbody><tr>
      <td align="center" style="border:none;mso-border-alt:none;padding:0;">

        <!-- UN SOLO BLOQUE PRINCIPAL CONTINUO DE 600PX -->
        <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="${cardBg}" style="max-width:600px;width:100%;border-radius:16px;border:1px solid ${cardBorder};overflow:hidden;background-color:${cardBg};border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">

          <!-- CABECERA · LOGO GLOCATION + HOLDING -->
          <tbody><tr>
            <td style="padding:28px 36px 20px;border:none;mso-border-alt:none;background-color:${cardBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:none;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                <tbody><tr>
                  <td align="left" valign="middle" style="border:none;mso-border-alt:none;">
                    <a href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:none;outline:none;display:inline-block;">
                      <img src="${logoUrl}" alt="GLocation" height="34" border="0" style="display:block;height:34px;width:auto;border:0;outline:none;text-decoration:none;">
                    </a>
                  </td>
                  <td align="right" valign="middle" style="border:none;mso-border-alt:none;">
                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${mutedColor};">
                      ${c.holdingBadge}
                    </span>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- HERO · TITULAR Y CONTEXTO -->
          <tr>
            <td style="padding:36px 36px 20px;border:none;mso-border-alt:none;background-color:${cardBg};">

              <!-- BADGE SAASW -->
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom:16px;border:none;border-collapse:collapse;">
                <tbody><tr>
                  <td style="border:1px solid ${isDark ? "#1E7094" : "rgb(184,220,240)"};border-radius:999px;padding:4px 14px;background-color:${isDark ? "#0F293A" : "rgb(230,243,250)"};">
                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:11px;font-weight:700;letter-spacing:0.08em;color:${isDark ? "#38BDF8" : "rgb(30,112,148)"};">
                      ${c.eyebrowPill}
                    </span>
                  </td>
                </tr>
              </tbody></table>

              <!-- BANNER AVISO -->
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom:16px;border:none;border-collapse:collapse;">
                <tbody><tr>
                  <td style="border:1px solid ${isDark ? "#B45309" : "rgb(252,211,77)"};border-radius:8px;padding:6px 12px;background-color:${isDark ? "#2E2008" : "rgb(254,243,199)"};">
                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:11px;font-weight:700;letter-spacing:0.05em;color:${isDark ? "#FBBF24" : "rgb(146,64,14)"};">
                      ${c.warningBanner}
                    </span>
                  </td>
                </tr>
              </tbody></table>

              <h1 style="margin:0px 0px 18px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:24px;font-weight:800;line-height:1.25;letter-spacing:-0.02em;color:${titleColor};">
                ${c.headlinePart1} <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:rgb(34,119,156);">${c.headlineHighlight}</span> ${c.headlinePart2}
              </h1>

              <p style="margin:0px 0px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;line-height:1.6;color:${bodyColor};">
                ${c.greeting}
              </p>
              <p style="margin:0px 0px 24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;line-height:1.6;color:${bodyColor};">
                ${c.introParagraphHtml}
              </p>

            </td>
          </tr>

          <!-- 3 TARJETAS DE TRABAJADORES COGNITIVOS -->
          <tr>
            <td style="padding:0px 36px 28px;border:none;mso-border-alt:none;background-color:${cardBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:none;border-collapse:collapse;">

                <!-- TARJETA 1 -->
                <tbody><tr>
                  <td style="padding:16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:none;border-collapse:collapse;">
                      <tbody><tr>
                        <td width="36" valign="top" style="border:none;">
                          <table border="0" cellspacing="0" cellpadding="0" width="30" style="border:none;border-collapse:collapse;">
                            <tbody><tr>
                              <td width="30" height="30" align="center" valign="middle" bgcolor="#E0F2FE" style="width:30px;height:30px;border-radius:8px;background-color:#E0F2FE;font-size:15px;line-height:30px;text-align:center;border:none;">
                                📋
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                        <td style="padding-left:12px;border:none;" valign="top">
                          <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor};">${c.card1Title}</b>
                          <p style="margin:4px 0px 6px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:12px;line-height:1.45;color:${mutedColor};">
                            ${c.card1DescriptionHtml}
                          </p>
                          <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(2,132,199);">
                            ${c.card1Metric}
                          </span>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                <tr><td height="12" style="border:none;font-size:0;line-height:0;"></td></tr>

                <!-- TARJETA 2 -->
                <tr>
                  <td style="padding:16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:none;border-collapse:collapse;">
                      <tbody><tr>
                        <td width="36" valign="top" style="border:none;">
                          <table border="0" cellspacing="0" cellpadding="0" width="30" style="border:none;border-collapse:collapse;">
                            <tbody><tr>
                              <td width="30" height="30" align="center" valign="middle" bgcolor="#DCFCE7" style="width:30px;height:30px;border-radius:8px;background-color:#DCFCE7;font-size:15px;line-height:30px;text-align:center;border:none;">
                                🛡️
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                        <td style="padding-left:12px;border:none;" valign="top">
                          <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor};">${c.card2Title}</b>
                          <p style="margin:4px 0px 6px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:12px;line-height:1.45;color:${mutedColor};">
                            ${c.card2DescriptionHtml}
                          </p>
                          <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(22,163,74);">
                            ${c.card2Metric}
                          </span>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                <tr><td height="12" style="border:none;font-size:0;line-height:0;"></td></tr>

                <!-- TARJETA 3 -->
                <tr>
                  <td style="padding:16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:none;border-collapse:collapse;">
                      <tbody><tr>
                        <td width="36" valign="top" style="border:none;">
                          <table border="0" cellspacing="0" cellpadding="0" width="30" style="border:none;border-collapse:collapse;">
                            <tbody><tr>
                              <td width="30" height="30" align="center" valign="middle" bgcolor="#F3E8FF" style="width:30px;height:30px;border-radius:8px;background-color:#F3E8FF;font-size:15px;line-height:30px;text-align:center;border:none;">
                                ⚡
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                        <td style="padding-left:12px;border:none;" valign="top">
                          <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor};">${c.card3Title}</b>
                          <p style="margin:4px 0px 6px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:12px;line-height:1.45;color:${mutedColor};">
                            ${c.card3DescriptionHtml}
                          </p>
                          <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(147,51,234);">
                            ${c.card3Metric}
                          </span>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>

              </tbody></table>
            </td>
          </tr>

          <!-- BLOQUE CTA · DIAGNÓSTICO COGNITIVO 30 MINUTOS (MISMO BORDE SUTIL QUE TARJETAS SUPERIORES, SIN BORDE AZUL) -->
          <tr>
            <td style="padding:0px 36px 32px;border:none;mso-border-alt:none;background-color:${cardBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${ctaBoxBg}" style="border:1px solid ${subtleBorder};mso-border-alt:1px solid ${subtleBorder};border-radius:14px;background-color:${ctaBoxBg};border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                <tbody><tr>
                  <td align="center" style="padding:24px 20px;border:none;mso-border-alt:none;">
                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${isDark ? "#38BDF8" : "rgb(34,119,156)"};">
                      ${c.ctaEyebrow}
                    </span>
                    <h3 style="margin:8px 0px 12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:17px;font-weight:700;color:${titleColor};">
                      ${c.ctaTitle}
                    </h3>
                    <p style="margin:0px 0px 20px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;line-height:1.5;max-width:480px;color:${mutedColor};">
                      ${c.ctaDescription}
                    </p>

                    <!-- BOTÓN DE CITA DIRECTO -->
                    <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto;border:none;border-collapse:collapse;mso-border-alt:none;">
                      <tbody><tr>
                        <td align="center" bgcolor="#1F6E91" style="background-color:#1F6E91;background-image:linear-gradient(90deg,#1F6E91 0%,#4A64A0 60%,#6E5C98 100%);border-radius:8px;border:none;mso-border-alt:none;padding:0;">
                          <a href="${c.ctaButtonUrl}" rel="noopener noreferrer" target="_blank" style="display:inline-block;padding:13px 28px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:0.03em;color:#FFFFFF;border:none;outline:none;">
                            <span style="color:#FFFFFF;text-decoration:none;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">${c.ctaButtonText}</span>
                          </a>
                        </td>
                      </tr>
                    </tbody></table>

                    <p style="margin:14px 0px 0px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;color:rgb(123,140,163);">
                      ${c.ctaSubtext}
                    </p>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- ECOSISTEMA EN VIVO (UN SOLO BLOQUE CONTINUO SIN BORDES) -->
          <tr>
            <td style="padding:20px 36px;border:none;mso-border-alt:none;background-color:${subtleBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:none;border-collapse:collapse;mso-border-alt:none;">
                <tbody><tr>
                  <td align="center" style="border:none;mso-border-alt:none;">
                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${mutedColor};">
                      EXPLORE NUESTRO ECOSISTEMA EN VIVO:
                    </span>
                    <div style="margin-top:8px;font-size:12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6;">
                      <a href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" style="font-weight:700;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(34,119,156);border:none;outline:none;">
                        <span style="color:rgb(34,119,156);text-decoration:none;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">glocation.co</span>
                      </a>
                      <span style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163);"> (Plataforma Comercial SaaSW)</span><br>
                      <a href="${c.manifestoUrl}" target="_blank" rel="noopener noreferrer" style="font-weight:700;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(122,92,255);border:none;outline:none;">
                        <span style="color:rgb(122,92,255);text-decoration:none;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">homoagenticus.co</span>
                      </a>
                      <span style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163);"> (El Manifiesto del Homo agenticus)</span><br>
                      <a href="${c.preagenticaUrl}" target="_blank" rel="noopener noreferrer" style="font-weight:600;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${mutedColor};border:none;outline:none;">
                        <span style="color:${mutedColor};text-decoration:none;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">preagentica.glocation.co</span>
                      </a>
                      <span style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163);"> (Nuestra Herencia Pre-IA)</span>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- CINTILLO HOLDING / PARTNER / ISO (SIN BORDES) -->
          <tr>
            <td style="padding:14px 36px 18px;border:none;mso-border-alt:none;background-color:${subtleBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:none;border-collapse:collapse;mso-border-alt:none;">
                <tbody><tr>
                  <td align="center" style="border:none;mso-border-alt:none;">
                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${mutedColor};">
                      HOLDING SERVINFORMACIÓN (27 AÑOS) &nbsp;•&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;•&nbsp; NORMA ISO 27001
                    </span>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- FIRMA COMERCIAL · PAULA ROZO CON FOTO OFICIAL (SIN BORDES) -->
          <tr>
            <td style="padding:28px 36px 36px;border:none;mso-border-alt:none;background-color:${cardBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:none;border-collapse:collapse;mso-border-alt:none;">
                <tbody><tr>
                  <td width="48" valign="top" style="border:none;mso-border-alt:none;">
                    <a href="mailto:${c.senderEmail}" style="text-decoration:none;border:none;outline:none;display:inline-block;">
                      <img src="${paulaPhotoPublicUrl}" alt="${c.senderName}" width="44" height="44" border="0" style="display:block;width:44px;height:44px;border:none;border-radius:50%;outline:none;text-decoration:none;">
                    </a>
                  </td>
                  <td style="padding-left:14px;border:none;mso-border-alt:none;" valign="top">
                    <b style="font-size:14px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${titleColor};">${c.senderName}</b><br>
                    <span style="font-size:12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${mutedColor};">${c.senderRole}</span><br>
                    <span style="font-size:11px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(34,119,156);">${c.senderCompany}</span><br>
                    <span style="font-size:11px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163);">
                      <a href="mailto:${c.senderEmail}" style="text-decoration:none;color:rgb(34,119,156);font-weight:600;border:none;outline:none;" target="_blank">
                        <span style="color:rgb(34,119,156);text-decoration:none;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">${c.senderEmail}</span>
                      </a>
                      &nbsp;|&nbsp;
                      <a href="${c.websiteUrl}" style="text-decoration:none;color:rgb(34,119,156);font-weight:600;border:none;outline:none;" target="_blank">
                        <span style="color:rgb(34,119,156);text-decoration:none;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">glocation.co</span>
                      </a>
                      &nbsp;|&nbsp;
                      <a href="${c.manifestoUrl}" style="text-decoration:none;color:rgb(122,92,255);font-weight:600;border:none;outline:none;" target="_blank">
                        <span style="color:rgb(122,92,255);text-decoration:none;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">homoagenticus.co</span>
                      </a>
                    </span>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

        </tbody></table>

        <!-- PIE DE DERECHOS RESERVADOS -->
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;margin-top:18px;border:none;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
          <tbody><tr>
            <td align="center" style="font-size:11px;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163);border:none;mso-border-alt:none;">
              © 2026 GLocation SAS · Bogotá D.C., Colombia.<br>
              Ha recibido este mensaje porque su entidad lidera proyectos estratégicos de tecnología.
            </td>
          </tr>
        </tbody></table>

      </td>
    </tr>
  </tbody></table>

</div>
</body>
</html>`;
}

export function generateSaaswLideresTicImageEmailHtml(
  customConfig?: SaaswLideresTicEmailConfig,
  blocksBaseUrl = "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks"
): string {
  const c: Required<SaaswLideresTicEmailConfig> = {
    ...defaultSaaswLideresTicConfig,
    ...customConfig,
  };
  const isDark = c.theme === "dark";
  const suffix = isDark ? "oscuro" : "claro";
  const outerBg = isDark ? "#0B0F19" : "#F0F4F9";

  const block1HeroUrl = `${blocksBaseUrl}/saasw-01-hero-${suffix}.png`;
  const block2WorkersUrl = `${blocksBaseUrl}/saasw-02-trabajadores-${suffix}.png`;
  const block3CtaUrl = `${blocksBaseUrl}/saasw-03-cta-${suffix}.png`;
  const block4EcosystemFirmaUrl = `${blocksBaseUrl}/saasw-04-ecosistema-firma-${suffix}.png`;

  const mailtoLink = `mailto:${c.senderEmail}?subject=${encodeURIComponent(
    "Diagnóstico Cognitivo Oficina TIC - GLocation"
  )}&body=${encodeURIComponent(
    "Hola Paula, me gustaría coordinar una sesión de 30 minutos sobre Trabajadores Cognitivos para nuestra oficina TIC."
  )}`;

  const ctaUrl = (c.ctaButtonUrl || "https://citas.glocation.co/?theme=light").trim();
  const websiteUrl = (c.websiteUrl || "https://glocation.co").trim();
  const manifestoUrl = (c.manifestoUrl || "https://homoagenticus.co").trim();
  const preagenticaUrl = (c.preagenticaUrl || "https://preagentica.glocation.co").trim();
  const linkedinUrl = (c.linkedinUrl || "https://www.linkedin.com/company/glocation/").trim();

  const cardBg = isDark ? "#111827" : "#FFFFFF";
  const cardBorder = isDark ? "#1E293B" : "rgb(214,227,240)";
  const dividerColor = isDark ? "#1E293B" : "rgb(237,243,250)";
  const mutedColor = isDark ? "#94A3B8" : "rgb(81,100,125)";
  const subtleBg = isDark ? "#1E293B" : "rgb(248,250,253)";
  const titleColor = isDark ? "#F8FAFC" : "rgb(15,28,48)";

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
      color: inherit !important;
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
      <td align="center" style="padding: 20px 10px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 100%; border-collapse: collapse; margin: 0 auto;">

          <!-- BLOQUE 1 · CABECERA Y HERO — SAASW LÍDERES TIC -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <img src="${block1HeroUrl}" alt="GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador." width="600" border="0" style="display: block; width: 600px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; border-width: 0 !important; outline: none !important; text-decoration: none !important;" />
            </td>
          </tr>

          <!-- BLOQUE 2 · TRES TRABAJADORES COGNITIVOS TIC -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <img src="${block2WorkersUrl}" alt="Trabajador PMO & Proyectos, Mesa de Ayuda TIC y Cumplimiento & Gobierno" width="600" border="0" style="display: block; width: 600px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; border-width: 0 !important; outline: none !important; text-decoration: none !important;" />
            </td>
          </tr>

          <!-- BLOQUE 3 · CTA — DIAGNÓSTICO COGNITIVO 30 MINUTOS -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <img src="${block3CtaUrl}" alt="Diagnóstico de Viabilidad Cognitiva para su Oficina TIC (30 min) — Agendar cita" width="600" border="0" style="display: block; width: 600px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; border-width: 0 !important; outline: none !important; text-decoration: none !important;" />
            </td>
          </tr>

          <!-- BLOQUE 4 · ECOSISTEMA EN VIVO Y FIRMA COMERCIAL PAULA ROZO (UN SOLO BLOQUE CONTINUO) -->
          <tr>
            <td align="center" style="padding: 0 0 12px 0; margin: 0; font-size: 0; line-height: 0; border: 0 !important; border-style: none !important;">
              <img src="${block4EcosystemFirmaUrl}" alt="Ecosistema GLocation y Firma Comercial Paula Rozo — BDR" width="600" border="0" style="display: block; width: 600px; max-width: 100%; height: auto; border: 0 !important; border-style: none !important; border-width: 0 !important; outline: none !important; text-decoration: none !important;" />
            </td>
          </tr>

          <!-- ENLACES DIRECTOS Y ACCESOS RÁPIDOS (100% FUNCIONALES SIN BORDES) -->
          <tr>
            <td align="center" style="padding: 6px 16px 18px; border: 0 !important; border-style: none !important;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 580px; width: 100%; border-collapse: collapse; border: 0 !important; border: none !important;" role="presentation">
                <tr>
                  <td align="center" style="padding: 10px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; line-height: 1.8; color: ${mutedColor}; border: 0 !important; border: none !important;">
                    <a href="${ctaUrl}" target="_blank" rel="noopener noreferrer" style="color: ${isDark ? "#38BDF8" : "#1E7094"}; text-decoration: underline; font-weight: 700; margin: 0 6px;">📅 Agendar Diagnóstico (30 min)</a> &nbsp;·&nbsp; 
                    <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" style="color: ${isDark ? "#38BDF8" : "#1E7094"}; text-decoration: underline; font-weight: 600; margin: 0 6px;">🌐 glocation.co</a> &nbsp;·&nbsp; 
                    <a href="${manifestoUrl}" target="_blank" rel="noopener noreferrer" style="color: ${isDark ? "#38BDF8" : "#1E7094"}; text-decoration: underline; font-weight: 600; margin: 0 6px;">📖 homoagenticus.co</a> &nbsp;·&nbsp; 
                    <a href="${preagenticaUrl}" target="_blank" rel="noopener noreferrer" style="color: ${isDark ? "#38BDF8" : "#1E7094"}; text-decoration: underline; font-weight: 600; margin: 0 6px;">🏛 preagentica.glocation.co</a> &nbsp;·&nbsp; 
                    <a href="${mailtoLink}" style="color: ${isDark ? "#38BDF8" : "#1E7094"}; text-decoration: underline; font-weight: 600; margin: 0 6px;">✉️ Escribir a Paula</a> &nbsp;·&nbsp; 
                    <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" style="color: ${isDark ? "#38BDF8" : "#1E7094"}; text-decoration: underline; font-weight: 600; margin: 0 6px;">💼 LinkedIn</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- PIE DE DERECHOS RESERVADOS -->
          <tr>
            <td align="center" style="padding: 6px 10px 24px 10px;">
              <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; margin: 0 auto;" role="presentation">
                <tr>
                  <td align="center" style="font-size: 11px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: rgb(123,140,163);">
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

