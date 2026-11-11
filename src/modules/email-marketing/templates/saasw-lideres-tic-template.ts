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
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Su oficina TIC no necesita más software. Necesita fuerza laboral que entregue proyectos terminados.</title>
</head>
<body style="margin:0;padding:0;background-color:${outerBg}">
<div style="margin:0px;padding:30px 10px;background-color:${outerBg};font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,sans-serif">

  <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
    <tbody><tr>
      <td align="center">

        <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="${cardBg}" style="max-width:600px;width:100%;background-color:${cardBg};border-radius:16px;border:1px solid ${cardBorder};overflow:hidden">

          <!-- CABECERA · LOGO GLOCATION + HOLDING -->
          <tbody><tr>
            <td style="padding:28px 36px 20px;border-bottom:1px solid ${dividerColor};background-color:${cardBg}">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tbody><tr>
                  <td align="left" valign="middle">
                    <a href="${c.websiteUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0">
                      <img src="${logoUrl}" alt="GLocation" height="36" style="display:block;height:36px;width:auto;border:0">
                    </a>
                  </td>
                  <td align="right" valign="middle">
                    <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${mutedColor}">
                      ${c.holdingBadge}
                    </span>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- HERO · TITULAR Y CONTEXTO -->
          <tr>
            <td style="padding:36px 36px 20px;background-color:${cardBg}">

              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom:16px" role="presentation">
                <tbody><tr>
                  <td style="border:1px solid ${isDark ? "#1E4E6B" : "rgb(184,220,240)"};border-radius:999px;padding:4px 14px;background-color:${isDark ? "#0F293A" : "rgb(230,243,250)"}">
                    <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:11px;font-weight:700;letter-spacing:0.08em;color:${isDark ? "rgb(56,189,248)" : "rgb(30,112,148)"}">
                      ${c.eyebrowPill}
                    </span>
                  </td>
                </tr>
              </tbody></table>

              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom:16px" role="presentation">
                <tbody><tr>
                  <td style="border:1px solid ${isDark ? "#784E0B" : "rgb(252,211,77)"};border-radius:8px;padding:6px 12px;background-color:${isDark ? "#2E2008" : "rgb(254,243,199)"}">
                    <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:11px;font-weight:700;letter-spacing:0.05em;color:${isDark ? "rgb(251,191,36)" : "rgb(146,64,14)"}">
                      ${c.warningBanner}
                    </span>
                  </td>
                </tr>
              </tbody></table>

              <h1 style="margin:0px 0px 18px;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,sans-serif;font-size:24px;font-weight:800;line-height:1.25;letter-spacing:-0.02em;color:${titleColor}">
                ${c.headlinePart1} <span style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,sans-serif;color:rgb(34,119,156)">${c.headlineHighlight}</span> ${c.headlinePart2}
              </h1>

              <p style="margin:0px 0px 20px;font-size:14px;line-height:1.6;color:${bodyColor}">
                ${c.greeting}
              </p>
              <p style="margin:0px 0px 24px;font-size:14px;line-height:1.6;color:${bodyColor}">
                ${c.introParagraphHtml}
              </p>

            </td>
          </tr>

          <!-- 3 TARJETAS DE TRABAJADORES COGNITIVOS -->
          <tr>
            <td style="padding:0px 36px 28px;background-color:${cardBg}">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">

                <tbody><tr>
                  <td style="padding:16px;border:1px solid ${subtleBorder};border-radius:12px;margin-bottom:12px;background-color:${subtleBg}">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tbody><tr>
                        <td width="36" valign="top">
                          <div style="width:30px;height:30px;border-radius:8px;text-align:center;line-height:30px;font-size:15px;background-color:rgb(224,242,254)">📋</div>
                        </td>
                        <td style="padding-left:12px">
                          <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor}">${c.card1Title}</b>
                          <p style="margin:4px 0px 6px;font-size:12px;line-height:1.45;color:${mutedColor}">
                            ${c.card1DescriptionHtml}
                          </p>
                          <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(2,132,199)">
                            ${c.card1Metric}
                          </span>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                <tr><td height="12"></td></tr>

                <tr>
                  <td style="padding:16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg}">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tbody><tr>
                        <td width="36" valign="top">
                          <div style="width:30px;height:30px;border-radius:8px;text-align:center;line-height:30px;font-size:15px;background-color:rgb(220,252,231)">🛡️</div>
                        </td>
                        <td style="padding-left:12px">
                          <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor}">${c.card2Title}</b>
                          <p style="margin:4px 0px 6px;font-size:12px;line-height:1.45;color:${mutedColor}">
                            ${c.card2DescriptionHtml}
                          </p>
                          <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(22,163,74)">
                            ${c.card2Metric}
                          </span>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                <tr><td height="12"></td></tr>

                <tr>
                  <td style="padding:16px;border:1px solid ${subtleBorder};border-radius:12px;background-color:${subtleBg}">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tbody><tr>
                        <td width="36" valign="top">
                          <div style="width:30px;height:30px;border-radius:8px;text-align:center;line-height:30px;font-size:15px;background-color:rgb(243,232,255)">⚡</div>
                        </td>
                        <td style="padding-left:12px">
                          <b style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${titleColor}">${c.card3Title}</b>
                          <p style="margin:4px 0px 6px;font-size:12px;line-height:1.45;color:${mutedColor}">
                            ${c.card3DescriptionHtml}
                          </p>
                          <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:10px;font-weight:600;color:rgb(147,51,234)">
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
            <td style="padding:0px 36px 36px;background-color:${cardBg}">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${ctaBoxBg}" style="border:1.5px solid rgb(34,119,156);border-radius:14px;background-color:${ctaBoxBg}" role="presentation">
                <tbody><tr>
                  <td align="center" style="padding:24px">
                    <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${isDark ? "rgb(56,189,248)" : "rgb(34,119,156)"}">
                      ${c.ctaEyebrow}
                    </span>
                    <h3 style="margin:8px 0px 12px;font-size:17px;font-weight:700;color:${titleColor}">
                      ${c.ctaTitle}
                    </h3>
                    <p style="margin:0px 0px 20px;font-size:13px;line-height:1.5;max-width:480px;color:${mutedColor}">
                      ${c.ctaDescription}
                    </p>

                    <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tbody><tr>
                        <td align="center" bgcolor="#1F6E91" style="background:linear-gradient(90deg,rgb(31,110,145) 0%,rgb(74,100,160) 60%,rgb(110,92,152) 100%);background-color:rgb(31,110,145);border-radius:8px">
                          <a href="${c.ctaButtonUrl}" rel="noopener noreferrer" style="display:inline-block;padding:13px 28px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:0.03em;color:rgb(255,255,255)" target="_blank">
                            ${c.ctaButtonText}
                          </a>
                        </td>
                      </tr>
                    </tbody></table>

                    <p style="margin:14px 0px 0px;font-size:11px;color:rgb(123,140,163)">
                      ${c.ctaSubtext}
                    </p>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- ECOSISTEMA EN VIVO -->
          <tr>
            <td style="padding:20px 36px;border-top:1px solid ${dividerColor};border-bottom:1px solid ${dividerColor};background-color:${subtleBg}">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tbody><tr>
                  <td align="center">
                    <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${mutedColor}">
                      EXPLORE NUESTRO ECOSISTEMA EN VIVO:
                    </span>
                    <div style="margin-top:8px;font-size:12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6">
                      <a href="${c.websiteUrl}" style="font-weight:700;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(34,119,156)" target="_blank">glocation.co</a> <span style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163)">(Plataforma Comercial SaaSW)</span><br>
                      <a href="${c.manifestoUrl}" style="font-weight:700;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(122,92,255)" target="_blank">homoagenticus.co</a> <span style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163)">(El Manifiesto del Homo agenticus)</span><br>
                      <a href="${c.preagenticaUrl}" style="font-weight:600;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:${mutedColor}" target="_blank">preagentica.glocation.co</a> <span style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163)">(Nuestra Herencia Pre-IA)</span>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- CINTILLO HOLDING / PARTNER / ISO -->
          <tr>
            <td style="padding:18px 36px;border-top:1px solid ${dividerColor};border-bottom:1px solid ${dividerColor};background-color:${subtleBg}">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tbody><tr>
                  <td align="center">
                    <span style="font-family:&quot;SF Mono&quot;,Consolas,Monaco,monospace;font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${mutedColor}">
                      HOLDING SERVINFORMACIÓN (27 AÑOS) &nbsp;•&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;•&nbsp; NORMA ISO 27001
                    </span>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- FIRMA COMERCIAL · PAULA ROZO CON FOTO OFICIAL -->
          <tr>
            <td style="padding:28px 36px 36px;background-color:${cardBg}">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tbody><tr>
                  <td width="56" valign="top">
                    <a href="mailto:${c.senderEmail}" style="text-decoration:none;border:0;display:inline-block">
                      <img src="${paulaPhotoPublicUrl}" alt="${c.senderName}" width="52" height="52" style="display:block;width:52px;height:52px;border:0;border-radius:50%;object-fit:cover">
                    </a>
                  </td>
                  <td style="padding-left:14px" valign="top">
                    <b style="font-size:14px;color:${titleColor}">${c.senderName}</b><br>
                    <span style="font-size:12px;color:${mutedColor}">${c.senderRole}</span><br>
                    <span style="font-size:11px;font-weight:600;color:rgb(34,119,156)">${c.senderCompany}</span><br>
                    <span style="font-size:11px;color:rgb(123,140,163)">
                      <a href="mailto:${c.senderEmail}" style="color:rgb(34,119,156);text-decoration:none;font-weight:600" target="_blank">${c.senderEmail}</a> &nbsp;|&nbsp;
                      <a href="${c.websiteUrl}" style="text-decoration:none;font-weight:600;color:rgb(34,119,156)" target="_blank">glocation.co</a> &nbsp;|&nbsp;
                      <a href="${c.manifestoUrl}" style="text-decoration:none;font-weight:600;color:rgb(122,92,255)" target="_blank">homoagenticus.co</a>
                    </span>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

        </tbody></table>

        <!-- PIE DE DERECHOS RESERVADOS -->
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;margin-top:18px" role="presentation">
          <tbody><tr>
            <td align="center" style="font-size:11px;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:rgb(123,140,163)">
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

/**
 * Genera el documento HTML para clientes de correo basado en 5 bloques de imagen PNG
 * idéntico a la campaña de Jefes TIC (public/campana-jefes-ti-claro.html),
 * garantizando que al descargarse o enviarse conserve el 100% de la estructura visual
 * con el bloque CTA interactivo enlazado a https://citas.glocation.co/?theme=light
 */
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
  const block4EcosystemUrl = `${blocksBaseUrl}/saasw-04-ecosistema-${suffix}.png`;
  const block5aPaulaUrl = `${blocksBaseUrl}/05a-glocation-bloque-firma-paula-cursor-${suffix}.png`;
  const block5bWebUrl = `${blocksBaseUrl}/05b-glocation-bloque-firma-web-${suffix}.png`;
  const block5cLinkedinUrl = `${blocksBaseUrl}/05c-glocation-bloque-firma-linkedin-${suffix}.png`;

  const mailtoLink = `mailto:${c.senderEmail}?subject=${encodeURIComponent(
    "Diagnóstico Cognitivo Oficina TIC - GLocation"
  )}&body=${encodeURIComponent(
    "Hola Paula, me gustaría coordinar una sesión de 30 minutos sobre Trabajadores Cognitivos para nuestra oficina TIC."
  )}`;

  const ctaUrl = (c.ctaButtonUrl || "https://citas.glocation.co/?theme=light").trim();
  const websiteUrl = (c.websiteUrl || "https://glocation.co").trim();
  const linkedinUrl = (c.linkedinUrl || "https://www.linkedin.com/company/glocation/").trim();

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
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${outerBg}" style="width: 100%; border-collapse: collapse; background-color: ${outerBg}; margin: 0; padding: 0;">
    <tr>
      <td align="center" style="padding: 20px 10px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 100%; border-collapse: collapse; margin: 0 auto;">

          <!-- BLOQUE 1 · CABECERA Y HERO — SAASW LÍDERES TIC -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
              <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                <img src="${block1HeroUrl}" alt="GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador." width="600" style="display: block; width: 600px; max-width: 100%; height: auto; border: 0;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 2 · TRES TRABAJADORES COGNITIVOS TIC -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
              <a href="${ctaUrl}" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                <img src="${block2WorkersUrl}" alt="Trabajador PMO & Proyectos, Mesa de Ayuda TIC y Cumplimiento & Gobierno" width="600" style="display: block; width: 600px; max-width: 100%; height: auto; border: 0;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 3 · CTA — DIAGNÓSTICO COGNITIVO 30 MINUTOS -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
              <a href="${ctaUrl}" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                <img src="${block3CtaUrl}" alt="Diagnóstico de Viabilidad Cognitiva para su Oficina TIC (30 min) — Agendar cita" width="600" style="display: block; width: 600px; max-width: 100%; height: auto; border: 0;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 4 · ECOSISTEMA EN VIVO Y CERTIFICACIONES -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0; margin: 0; font-size: 0; line-height: 0;">
              <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; border: 0;">
                <img src="${block4EcosystemUrl}" alt="Ecosistema cognitivo GLocation — Modelos empresariales, infraestructura soberana y certificaciones" width="600" style="display: block; width: 600px; max-width: 100%; height: auto; border: 0;" />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 5 · FIRMA COMERCIAL Y REDES (PAULA ROZO + WEB GLOCATION.CO + LINKEDIN GLOCATION) -->
          <tr>
            <td align="center" style="padding: 0; margin: 0; font-size: 0; line-height: 0;">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 100%; border-collapse: collapse; margin: 0 auto;">
                <tr>
                  <!-- 5A · Paula Rozo (Correo directo) -->
                  <td width="378" valign="top" style="width: 62.97%; padding: 0; margin: 0; font-size: 0; line-height: 0;">
                    <a
                      href="${mailtoLink}"
                      style="display: block; text-decoration: none; border: 0;"
                    >
                      <img
                        src="${block5aPaulaUrl}"
                        alt="Paula Rozo — BDR | Business Development Representative"
                        width="378"
                        style="display: block; width: 100%; max-width: 378px; height: auto; border: 0;"
                      />
                    </a>
                  </td>
                  <!-- 5B · Botón Web glocation.co -->
                  <td width="100" valign="top" style="width: 16.76%; padding: 0; margin: 0; font-size: 0; line-height: 0;">
                    <a
                      href="${websiteUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      style="display: block; text-decoration: none; border: 0;"
                    >
                      <img
                        src="${block5bWebUrl}"
                        alt="Sitio web oficial glocation.co"
                        width="100"
                        style="display: block; width: 100%; max-width: 100px; height: auto; border: 0;"
                      />
                    </a>
                  </td>
                  <!-- 5C · Botón LinkedIn GLocation -->
                  <td width="122" valign="top" style="width: 20.27%; padding: 0; margin: 0; font-size: 0; line-height: 0;">
                    <a
                      href="${linkedinUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      style="display: block; text-decoration: none; border: 0;"
                    >
                      <img
                        src="${block5cLinkedinUrl}"
                        alt="LinkedIn oficial de GLocation"
                        width="122"
                        style="display: block; width: 100%; max-width: 122px; height: auto; border: 0;"
                      />
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
</body>
</html>`;
}

