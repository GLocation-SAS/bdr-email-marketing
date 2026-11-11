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
 * Genera el HTML nativo continuo (formato tarjeta limpia como el de Julian)
 * 100% compatible con Brevo, CKEditor, Gmail, Outlook y Apple Mail.
 * Ancho máximo 580px responsivo para garantizar cero desbordes y cero cortes.
 */
export function generateSaaswLideresTicHtml(
  customConfig?: SaaswLideresTicEmailConfig
): string {
  const c: Required<SaaswLideresTicEmailConfig> = {
    ...defaultSaaswLideresTicConfig,
    ...customConfig,
  };

  const isDark = c.theme === "dark";
  const outerBg = isDark ? "#0B0F19" : "#F0F4F9";
  const cardBg = isDark ? "#111827" : "#FFFFFF";
  const cardBorder = isDark ? "#1E293B" : "#D6E3F0";
  const dividerColor = isDark ? "#1E293B" : "#EDF3FA";
  const titleColor = isDark ? "#F8FAFC" : "#040914";
  const bodyColor = isDark ? "#CBD5E1" : "#3A4A60";
  const mutedColor = isDark ? "#94A3B8" : "#51647D";
  const subtleBg = isDark ? "#1E293B" : "#F8FAFD";
  const subtleBorder = isDark ? "#334155" : "#E2EBF5";
  const ctaBoxBg = isDark ? "#0F293A" : "#F0F7FB";

  const logoUrl = isDark
    ? "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/logo-glocation-negativo.png"
    : "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/logo-glocation-claro.png";

  const paulaPhotoPublicUrl = c.senderPhotoUrl.startsWith("http")
    ? c.senderPhotoUrl
    : (isDark
        ? "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-dark.png"
        : "https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png");

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
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
  table.cke_show_border, table.cke_show_border td, table.cke_show_border tr {
    border: 0 !important;
    outline: none !important;
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
<div data-saasw-root="true" style="margin:0 auto;padding:24px 8px;max-width:600px;background-color:${outerBg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="${outerBg}" style="width:100%;max-width:600px;margin:0 auto;background-color:${outerBg};border:none;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
    <tbody><tr>
      <td align="center" style="border:none;mso-border-alt:none;padding:0;">

        <!-- TARJETA PRINCIPAL CONTINUA (HASTA 580PX, RESPONSIVA, NUNCA SE CORTA) -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${cardBg}" style="max-width:580px;width:100%;margin:0 auto;border-radius:16px;border:1px solid ${cardBorder};overflow:hidden;background-color:${cardBg};border-collapse:separate;table-layout:fixed;mso-table-lspace:0pt;mso-table-rspace:0pt;">

          <!-- CABECERA · LOGO GLOCATION + HOLDING -->
          <tbody><tr>
            <td style="padding:24px 26px 18px;border:none;background-color:${cardBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                <tbody><tr>
                  <td align="left" valign="middle" style="border:none;">
                    <a href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:none;outline:none;display:inline-block;">
                      <img src="${logoUrl}" alt="GLocation" height="34" border="0" style="display:block;height:34px;width:auto;border:0;outline:none;text-decoration:none;">
                    </a>
                  </td>
                  <td align="right" valign="middle" style="border:none;">
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
            <td style="padding:16px 26px 20px;border:none;background-color:${cardBg};">

              <!-- BADGE SAASW -->
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom:14px;border:none;border-collapse:collapse;">
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

              <h1 style="margin:0px 0px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:22px;font-weight:800;line-height:1.25;letter-spacing:-0.02em;color:${titleColor};">
                ${c.headlinePart1} <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:rgb(34,119,156);">${c.headlineHighlight}</span> ${c.headlinePart2}
              </h1>

              <p style="margin:0px 0px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;line-height:1.6;color:${bodyColor};">
                ${c.greeting}
              </p>
              <p style="margin:0px 0px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;line-height:1.6;color:${bodyColor};">
                ${c.introParagraphHtml}
              </p>

            </td>
          </tr>

          <!-- 3 TARJETAS DE TRABAJADORES COGNITIVOS -->
          <tr>
            <td style="padding:0px 26px 24px;border:none;background-color:${cardBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">

                <!-- TARJETA 1 -->
                <tbody><tr>
                  <td style="padding:14px 16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                      <tbody><tr>
                        <td width="36" valign="top" style="width:36px;border:none;">
                          <table border="0" cellspacing="0" cellpadding="0" width="30" style="width:30px;border:none;border-collapse:collapse;">
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
                <tr><td height="10" style="border:none;font-size:0;line-height:0;"></td></tr>

                <!-- TARJETA 2 -->
                <tr>
                  <td style="padding:14px 16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                      <tbody><tr>
                        <td width="36" valign="top" style="width:36px;border:none;">
                          <table border="0" cellspacing="0" cellpadding="0" width="30" style="width:30px;border:none;border-collapse:collapse;">
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
                <tr><td height="10" style="border:none;font-size:0;line-height:0;"></td></tr>

                <!-- TARJETA 3 -->
                <tr>
                  <td style="padding:14px 16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg};">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:none;border-collapse:collapse;">
                      <tbody><tr>
                        <td width="36" valign="top" style="width:36px;border:none;">
                          <table border="0" cellspacing="0" cellpadding="0" width="30" style="width:30px;border:none;border-collapse:collapse;">
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

          <!-- BLOQUE CTA · DIAGNÓSTICO COGNITIVO 30 MINUTOS -->
          <tr>
            <td style="padding:0px 26px 26px;border:none;background-color:${cardBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${ctaBoxBg}" style="width:100%;border:1px solid ${subtleBorder};border-radius:14px;background-color:${ctaBoxBg};border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                <tbody><tr>
                  <td align="center" style="padding:22px 18px;border:none;">
                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${isDark ? "#38BDF8" : "rgb(34,119,156)"};">
                      ${c.ctaEyebrow}
                    </span>
                    <h3 style="margin:8px 0px 10px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:16px;font-weight:700;color:${titleColor};">
                      ${c.ctaTitle}
                    </h3>
                    <p style="margin:0px 0px 18px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;line-height:1.5;max-width:460px;color:${mutedColor};">
                      ${c.ctaDescription}
                    </p>

                    <!-- BOTÓN DE CITA DIRECTO -->
                    <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto;border:none;border-collapse:collapse;">
                      <tbody><tr>
                        <td align="center" bgcolor="#1F6E91" style="background-color:#1F6E91;background-image:linear-gradient(90deg,#1F6E91 0%,#4A64A0 60%,#6E5C98 100%);border-radius:8px;border:none;padding:0;">
                          <a href="${c.ctaButtonUrl}" rel="noopener noreferrer" target="_blank" style="display:inline-block;padding:12px 26px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:0.03em;color:#FFFFFF;border:none;outline:none;">
                            <span style="color:#FFFFFF;text-decoration:none;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">${c.ctaButtonText}</span>
                          </a>
                        </td>
                      </tr>
                    </tbody></table>

                    <p style="margin:12px 0px 0px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;color:rgb(123,140,163);">
                      ${c.ctaSubtext}
                    </p>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- ECOSISTEMA EN VIVO · 3 TARJETAS VISUALES CON SUS LINKS ACTIVOS (FORMATO SIN BORDES DE TABLA) -->
          <tr>
            <td style="padding:18px 26px 20px;border-top:1px solid ${dividerColor};border-left:none;border-right:none;border-bottom:none;background-color:${subtleBg};">
              <div style="text-align:center;margin-bottom:12px;">
                <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${mutedColor};">
                  EXPLORE NUESTRO ECOSISTEMA EN VIVO:
                </span>
              </div>
              <div style="margin-top:4px;">
                <!-- 1. glocation.co -->
                <a href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" style="display:block;margin-bottom:8px;padding:10px 14px;background-color:${cardBg};border:1px solid ${isDark ? "#1E405A" : "#D0E7F5"};border-radius:10px;text-decoration:none;outline:none;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;margin:0;padding:0;border:0 !important;border-collapse:collapse !important;border-spacing:0 !important;">
                    <tr style="border:0 !important;">
                      <td width="26" valign="middle" style="width:26px;border:0 !important;padding:0;font-size:15px;line-height:1;">🌐</td>
                      <td valign="middle" style="border:0 !important;padding:0 0 0 10px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:700;color:${isDark ? "#38BDF8" : "#0E768C"};line-height:1.3;">
                        glocation.co <span style="font-weight:400;font-size:11px;color:${mutedColor};">· Plataforma Comercial SaaSW</span>
                      </td>
                      <td width="24" align="right" valign="middle" style="width:24px;border:0 !important;padding:0;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;color:${isDark ? "#38BDF8" : "#0E768C"};line-height:1;">→</td>
                    </tr>
                  </table>
                </a>

                <!-- 2. homoagenticus.co -->
                <a href="${c.manifestoUrl}" target="_blank" rel="noopener noreferrer" style="display:block;margin-bottom:8px;padding:10px 14px;background-color:${cardBg};border:1px solid ${isDark ? "#3B2D6B" : "#E4DAFF"};border-radius:10px;text-decoration:none;outline:none;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;margin:0;padding:0;border:0 !important;border-collapse:collapse !important;border-spacing:0 !important;">
                    <tr style="border:0 !important;">
                      <td width="26" valign="middle" style="width:26px;border:0 !important;padding:0;font-size:15px;line-height:1;">📖</td>
                      <td valign="middle" style="border:0 !important;padding:0 0 0 10px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:700;color:${isDark ? "#A78BFA" : "#7A5CFF"};line-height:1.3;">
                        homoagenticus.co <span style="font-weight:400;font-size:11px;color:${mutedColor};">· El Manifiesto del Homo agenticus</span>
                      </td>
                      <td width="24" align="right" valign="middle" style="width:24px;border:0 !important;padding:0;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;color:${isDark ? "#A78BFA" : "#7A5CFF"};line-height:1;">→</td>
                    </tr>
                  </table>
                </a>

                <!-- 3. preagentica.glocation.co -->
                <a href="${c.preagenticaUrl}" target="_blank" rel="noopener noreferrer" style="display:block;margin-bottom:0;padding:10px 14px;background-color:${cardBg};border:1px solid ${subtleBorder};border-radius:10px;text-decoration:none;outline:none;">
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
            <td style="padding:12px 26px 14px;border-top:1px solid ${dividerColor};border-left:none;border-right:none;border-bottom:none;background-color:${subtleBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:0 !important;border-collapse:collapse !important;">
                <tbody><tr>
                  <td align="center" style="border:0 !important;">
                    <span style="font-family:'SF Mono',Consolas,Monaco,monospace;font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${mutedColor};">
                      HOLDING SERVINFORMACIÓN (27 AÑOS) &nbsp;•&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;•&nbsp; NORMA ISO 27001
                    </span>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- FIRMA COMERCIAL · PAULA ROZO CON SUS BOTONES DIRECTOS GLOCATION.CO Y HOMOAGENTICUS.CO -->
          <tr>
            <td style="padding:22px 26px 24px;border-top:1px solid ${dividerColor};border-left:none;border-right:none;border-bottom:none;background-color:${cardBg};">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;border:0 !important;border-collapse:collapse !important;">
                <tbody><tr>
                  <td width="48" valign="top" style="width:48px;border:0 !important;">
                    <a href="mailto:${c.senderEmail}?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="text-decoration:none;border:0 !important;outline:none;display:inline-block;">
                      <img src="${paulaPhotoPublicUrl}" alt="${c.senderName}" width="46" height="46" border="0" style="display:block;width:46px;height:46px;border:2px solid ${isDark ? "#1E7094" : "#D0E7F5"};border-radius:50%;outline:none;text-decoration:none;">
                    </a>
                  </td>
                  <td style="padding-left:14px;border:0 !important;" valign="top">
                    <b style="font-size:14px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${titleColor};">${c.senderName}</b><br>
                    <span style="font-size:12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${mutedColor};">${c.senderRole}</span><br>
                    <span style="font-size:11px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(34,119,156);">${c.senderCompany}</span><br>
                    
                    <div style="margin-top:6px;">
                      <a href="mailto:${c.senderEmail}?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" style="text-decoration:none;color:${isDark ? "#38BDF8" : "rgb(34,119,156)"};font-size:11px;font-weight:600;border:none;outline:none;" target="_blank">
                        ✉️ ${c.senderEmail}
                      </a>
                    </div>

                    <!-- LOS 2 BOTONES DE ACCIÓN (ESTILO REFERENCIA, SIN TABLAS ANIDADAS QUE GENEREN BORDES FEOS): GLOCATION.CO Y HOMOAGENTICUS.CO -->
                    <div style="margin-top:12px;line-height:1;">
                      <a href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-right:8px;margin-bottom:6px;background-color:${isDark ? "#0F293A" : "#F0F7FB"};border:1px solid ${isDark ? "#1E7094" : "#B8DCF0"};border-radius:8px;padding:7px 14px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;font-weight:700;color:${isDark ? "#38BDF8" : "#0E768C"};text-decoration:none;outline:none;vertical-align:middle;">
                        🌐 glocation.co →
                      </a>
                      <a href="${c.manifestoUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-bottom:6px;background-color:${isDark ? "#231B3D" : "#F6F3FF"};border:1px solid ${isDark ? "#5B449A" : "#D8C7FF"};border-radius:8px;padding:7px 14px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;font-weight:700;color:${isDark ? "#A78BFA" : "#7A5CFF"};text-decoration:none;outline:none;vertical-align:middle;">
                        📖 homoagenticus.co →
                      </a>
                    </div>

                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

        </tbody></table>

        <!-- PIE DE DERECHOS RESERVADOS -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px;width:100%;margin-top:16px;border:none;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
          <tbody><tr>
            <td align="center" style="font-size:11px;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163);border:none;padding:0 10px;">
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
  const imgName = `saasw-email-completo-${suffix}.png`;
  const imgUrl = `${blocksBaseUrl}/${imgName}`;
  const mapName = `saasw-map-${suffix}`;

  const displayWidth = 660;
  const displayHeight = isDark ? 1775 : 1683;
  const ctaY1 = isDark ? 1220 : 1180;
  const ctaY2 = isDark ? 1390 : 1300;
  const ecoOffset = isDark ? 1425 : 1333;

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
  <div data-saasw-root="true" style="margin: 0; padding: 0; background-color: ${outerBg};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${outerBg}" style="width: 100%; border-collapse: collapse; border-spacing: 0; background-color: ${outerBg}; margin: 0; padding: 0; border: 0;">
      <tr>
        <td align="center" style="padding: 20px 10px; border: 0;">
          <table role="presentation" width="${displayWidth}" cellpadding="0" cellspacing="0" border="0" style="width: ${displayWidth}px; max-width: 100%; border-collapse: collapse; border-spacing: 0; margin: 0 auto; border: 0;">
            <tr>
              <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0; border: 0;">
                
                <!-- IMAGEN ÚNICA CONTINUA HD EN 1 SOLA PIEZA (CERO ESPACIOS, CERO BORDES) -->
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
                  <!-- 1. HERO HEADER: GLocation -->
                  <area shape="rect" coords="48,0,612,554" href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" alt="GLocation — Plataforma Comercial SaaSW">
                  <!-- 2. CTA: Agendar Diagnóstico Cognitivo (30 min) -->
                  <area shape="rect" coords="48,${ctaY1},612,${ctaY2}" href="${c.ctaButtonUrl}" target="_blank" rel="noopener noreferrer" alt="Agendar Diagnóstico Cognitivo (30 min)">
                  <!-- 3. ECOSISTEMA: glocation.co -->
                  <area shape="rect" coords="48,${ecoOffset + 31},612,${ecoOffset + 77}" href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" alt="glocation.co — Plataforma Comercial SaaSW">
                  <!-- 4. ECOSISTEMA: homoagenticus.co -->
                  <area shape="rect" coords="48,${ecoOffset + 83},612,${ecoOffset + 129}" href="${c.manifestoUrl}" target="_blank" rel="noopener noreferrer" alt="homoagenticus.co — El Manifiesto del Homo agenticus">
                  <!-- 5. ECOSISTEMA: preagentica.glocation.co -->
                  <area shape="rect" coords="48,${ecoOffset + 135},612,${ecoOffset + 181}" href="${c.preagenticaUrl}" target="_blank" rel="noopener noreferrer" alt="preagentica.glocation.co — Nuestra Herencia Pre-IA">
                  <!-- 6. FIRMA PAULA ROZO (AVATAR + DATOS + CORREO DIRECTO) -->
                  <area shape="rect" coords="48,${ecoOffset + 221},365,${ecoOffset + 338}" href="mailto:${c.senderEmail}?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" target="_blank" alt="Paula Rozo — BDR GLocation">
                  <!-- 7. BOTÓN GLOCATION.CO EN FIRMA -->
                  <area shape="rect" coords="370,${ecoOffset + 242},485,${ecoOffset + 310}" href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" alt="glocation.co">
                  <!-- 8. BOTÓN HOMOAGENTICUS.CO EN FIRMA -->
                  <area shape="rect" coords="497,${ecoOffset + 242},612,${ecoOffset + 310}" href="${c.manifestoUrl}" target="_blank" rel="noopener noreferrer" alt="homoagenticus.co">
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
