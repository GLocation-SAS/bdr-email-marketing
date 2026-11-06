export interface JefesTiEmailConfig {
  recipientEmail?: string;
  emailSubject?: string;
  emailBody?: string;
  senderPhotoUrl?: string;
  senderEyebrow?: string;
  senderName?: string;
  senderRole?: string;
  senderMessage?: string;
  senderNameAndRole?: string;
  companyTagline?: string;
  senderPhone?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  unsubscribeUrl?: string;
  logoHeroUrl?: string;
  logoFooterUrl?: string;
  heroAgentImageUrl?: string;
  processImageUrl?: string;
  teamImageUrl?: string;
  ctaImageUrl?: string;
  publicBaseUrl?: string;
  theme?: "light" | "dark";
}

export const PUBLIC_GITHUB_PAGES_BASE_URL =
  "https://glocation-sas.github.io/bdr-email-marketing";

/**
 * Convierte cualquier ruta local `/archivo.png` en una URL pública absoluta
 * servida desde GitHub Pages con codificación válida.
 */
export function toPublicAssetUrl(
  pathOrUrl: string,
  baseUrl: string = PUBLIC_GITHUB_PAGES_BASE_URL
): string {
  if (!pathOrUrl) return "";
  if (
    pathOrUrl.startsWith("http://") ||
    pathOrUrl.startsWith("https://") ||
    pathOrUrl.startsWith("data:")
  ) {
    return pathOrUrl;
  }
  const cleanBase = baseUrl.replace(/\/$/, "");
  const normalizedPath = pathOrUrl.startsWith("/")
    ? pathOrUrl
    : `/${pathOrUrl}`;
  const decodedOnce = (() => {
    try {
      return decodeURI(normalizedPath);
    } catch {
      return normalizedPath;
    }
  })();
  return `${cleanBase}${encodeURI(decodedOnce)}`;
}

export const defaultJefesTiEmailConfig: Required<JefesTiEmailConfig> = {
  recipientEmail: "contacto@glocation.com",
  emailSubject:
    "Explorar una oportunidad en mi oficina TIC - Reunión 20 min Glocation",
  emailBody:
    "Hola Paula, me gustaría recibir dos opciones de horario para la reunión virtual de 20 minutos sobre Trabajadores Cognitivos.\n\nSaludos cordiales,",
  senderPhotoUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-icons/avatar-paula-light.png`,
  senderEyebrow: "HABLEMOS",
  senderName: "Paula Rozo",
  senderRole: "BDR | Business Development Representative",
  senderMessage:
    "Estaré pendiente de su respuesta para coordinar una reunión con nuestro equipo.",
  senderNameAndRole:
    "Paula Rozo — BDR | Business Development Representative · Glocation",
  companyTagline: "Construimos capacidad cognitiva",
  senderPhone: "+57 300 000 0000",
  websiteUrl: "https://glocation.co",
  linkedinUrl: "https://www.linkedin.com/company/glocation/",
  unsubscribeUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-marketing/baja`,
  logoHeroUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-icons/logo-glocation-negativo.png`,
  logoFooterUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-icons/logo-glocation-claro.png`,
  heroAgentImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-icons/hero-right-illustration.png`,
  processImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-icons/avatar-bot-purple.png`,
  teamImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-icons/avatar-team-light.png`,
  ctaImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-icons/avatar-bot-blue.png`,
  publicBaseUrl: PUBLIC_GITHUB_PAGES_BASE_URL,
  theme: "light",
};

/**
 * Genera el HTML 100% compatible con clientes de correo, CRMs y navegadores:
 * - Maquetación por tablas (`<table role="presentation">`) con `style="..."` inline en cada `<td>`
 *   y columnas fijas lado a lado (no las apila ni las separa en editores de correo).
 * - En el Hero (Bloque 1), el texto va en la celda izquierda (`<td>`) y la ilustración difuminada en la
 *   celda derecha (`<td><img width="350" height="340" /></td>`), evitando que ningún cliente coloque
 *   la imagen por separado arriba o abajo del texto.
 * - Todas las imágenes e íconos son PNGs reales con `width` y `height` explícitos en atributos HTML
 *   y URLs públicas ASCII limpias en GitHub Pages (`https://glocation-sas.github.io/bdr-email-marketing/email-icons/...`).
 */
export function generateJefesTiEmailHtml(
  customConfig?: JefesTiEmailConfig
): string {
  const baseUrl = (
    customConfig?.publicBaseUrl || PUBLIC_GITHUB_PAGES_BASE_URL
  ).replace(/\/$/, "");
  const isDark = customConfig?.theme === "dark";

  const config: Required<JefesTiEmailConfig> = {
    ...defaultJefesTiEmailConfig,
    ...customConfig,
  };

  const iconsBase = `${baseUrl}/email-icons`;

  // URLs públicas 100% ASCII limpias (sin espacios, tildes ni paréntesis)
  const heroRightImgUrl = `${iconsBase}/hero-right-illustration.png`;
  const heroLogoUrl = `${iconsBase}/logo-glocation-negativo.png`;
  const footerLogoUrl = isDark
    ? `${iconsBase}/logo-glocation-negativo.png`
    : `${iconsBase}/logo-glocation-claro.png`;

  const toolChatgptUrl = `${iconsBase}/tool-chatgpt.png`;
  const toolGeminiUrl = `${iconsBase}/tool-gemini.png`;
  const toolExcelUrl = `${iconsBase}/tool-excel.png`;
  const arrowDownSlateUrl = `${iconsBase}/arrow-down-slate.png`;
  const userBadgeUrl = isDark
    ? `${iconsBase}/user-badge-dark.png`
    : `${iconsBase}/user-badge-light.png`;
  const evolutionArrowUrl = `${iconsBase}/evolution-arrow-purple.png`;
  const workflowBadgeUrl = isDark
    ? `${iconsBase}/workflow-badge-dark.png`
    : `${iconsBase}/workflow-badge-light.png`;
  const arrowRightPurpleUrl = isDark
    ? `${iconsBase}/arrow-right-purple-dark.png`
    : `${iconsBase}/arrow-right-purple.png`;
  const arrowRightCtaUrl = `${iconsBase}/arrow-right-purple.png`;
  const avatarBotPurpleUrl = `${iconsBase}/avatar-bot-purple.png`;
  const avatarBotBlueUrl = `${iconsBase}/avatar-bot-blue.png`;
  const avatarTeamUrl = isDark
    ? `${iconsBase}/avatar-team-dark.png`
    : `${iconsBase}/avatar-team-light.png`;
  const sparklesBlueUrl = `${iconsBase}/sparkles-blue.png`;
  const filetextBadgeUrl = isDark
    ? `${iconsBase}/filetext-badge-dark.png`
    : `${iconsBase}/filetext-badge-light.png`;
  const checkBlueUrl = `${iconsBase}/check-blue.png`;
  const checkOrangeUrl = `${iconsBase}/check-orange.png`;
  const checkGreenUrl = `${iconsBase}/check-green.png`;
  const folderBadgeUrl = isDark
    ? `${iconsBase}/folder-badge-dark.png`
    : `${iconsBase}/folder-badge-light.png`;
  const usercheckBadgeUrl = isDark
    ? `${iconsBase}/usercheck-badge-dark.png`
    : `${iconsBase}/usercheck-badge-light.png`;
  const shieldBadgeUrl = isDark
    ? `${iconsBase}/shield-badge-dark.png`
    : `${iconsBase}/shield-badge-light.png`;
  const mailPurpleUrl = `${iconsBase}/mail-purple.png`;
  const avatarPaulaUrl = isDark
    ? `${iconsBase}/avatar-paula-dark.png`
    : `${iconsBase}/avatar-paula-light.png`;
  const globePurpleUrl = isDark
    ? `${iconsBase}/globe-purple-dark.png`
    : `${iconsBase}/globe-purple-light.png`;
  const linkedinPurpleUrl = isDark
    ? `${iconsBase}/linkedin-purple-dark.png`
    : `${iconsBase}/linkedin-purple-light.png`;

  const mailtoLink = `mailto:${config.recipientEmail}?subject=${encodeURIComponent(
    config.emailSubject
  )}&body=${encodeURIComponent(config.emailBody)}`;

  const trimmedWebsite = (config.websiteUrl || "").trim();
  const trimmedLinkedin = (config.linkedinUrl || "").trim();
  const cleanDomain = trimmedWebsite
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const fontHeading =
    "'Montserrat', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
  const fontSans =
    "'Nunito', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  const outerBg = isDark ? "#0B0617" : "#F3F1F8";
  const cardBg = isDark ? "#120A24" : "#FFFFFF";
  const cardBorder = isDark ? "#2D1E52" : "#E5E0F0";
  const textMain = isDark ? "#FFFFFF" : "#140E24";

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Glocation — Trabajadores Cognitivos para Oficinas TIC</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
  <style type="text/css">
    body, table, td, p, a, h1, h2, h3, span {
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
    }
    @supports (-webkit-background-clip: text) or (background-clip: text) {
      .gl-grad-hero {
        background-image: linear-gradient(90deg, #C084FC 0%, #A855F7 48%, #38BDF8 100%) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        color: transparent !important;
      }
      .gl-grad-title {
        background-image: ${
          isDark
            ? "linear-gradient(90deg, #C084FC 0%, #A855F7 48%, #38BDF8 100%)"
            : "linear-gradient(90deg, #7C3AED 0%, #6D28D9 48%, #0284C7 100%)"
        } !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        color: transparent !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100% !important; background-color: ${outerBg}; font-family: ${fontSans}; color: ${textMain}; -webkit-font-smoothing: antialiased;">

  <!-- Contenedor maestro 100% -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${outerBg}" style="width: 100%; border-collapse: collapse; background-color: ${outerBg}; margin: 0; padding: 0;">
    <tr>
      <td align="center" style="padding: 20px 10px;">

        <!-- Lienzo fijo 740px -->
        <table role="presentation" width="740" cellpadding="0" cellspacing="0" border="0" style="width: 740px; max-width: 740px; border-collapse: separate; border-spacing: 0; margin: 0 auto;">

          <!-- ======================================================== -->
          <!-- BLOQUE 1 · HERO (740px) — 2 CELDAS EN LA MISMA FILA      -->
          <!-- ======================================================== -->
          <tr>
            <td style="padding: 0 0 6px 0;">
              <table role="presentation" width="740" cellpadding="0" cellspacing="0" border="0" bgcolor="#0D061F" style="width: 740px; border-collapse: separate; border-spacing: 0; background-color: #0D061F; border: 1px solid ${cardBorder}; border-radius: 6px; overflow: hidden;">
                <!-- Línea superior morada de 4px -->
                <tr>
                  <td colspan="2" height="4" bgcolor="#7C3AED" style="height: 4px; line-height: 4px; font-size: 1px; background-color: #7C3AED; background-image: linear-gradient(90deg, #7C3AED 0%, #A855F7 50%, #7C3AED 100%);">&nbsp;</td>
                </tr>
                <!-- Fila principal: Izquierda Texto (390px) + Derecha Ilustración (350px) -->
                <tr>
                  <td width="390" valign="middle" align="left" bgcolor="#0D061F" style="width: 390px; background-color: #0D061F; padding: 34px 0 34px 44px; vertical-align: middle;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                      <!-- Logo GLocation -->
                      <tr>
                        <td align="left" style="padding: 0 0 16px 0;">
                          <img
                            src="${heroLogoUrl}"
                            alt="GLocation"
                            width="147"
                            height="64"
                            style="display: block; width: 147px; height: 64px; border: 0; margin-left: -10px;"
                          />
                        </td>
                      </tr>
                      <!-- Titular Hero -->
                      <tr>
                        <td align="left" style="padding: 0 0 14px 0; font-family: ${fontHeading}; font-size: 25px; font-weight: 800; line-height: 1.2; letter-spacing: -0.025em; color: #FFFFFF;">
                          <span style="color: #FFFFFF;">Su oficina TIC tiene proyectos que liderar.</span><br />
                          <span class="gl-grad-hero" style="color: #C084FC;">Y una operación </span><span class="gl-grad-hero" style="color: #38BDF8;">que<br />no se detiene.</span>
                        </td>
                      </tr>
                      <!-- Línea de acento 48px -->
                      <tr>
                        <td align="left" style="padding: 0 0 16px 0;">
                          <table role="presentation" width="48" cellpadding="0" cellspacing="0" border="0" style="width: 48px; border-collapse: collapse;">
                            <tr>
                              <td height="3" bgcolor="#A855F7" style="height: 3px; line-height: 3px; font-size: 1px; background-color: #A855F7; background-image: linear-gradient(90deg, #A855F7 0%, #38BDF8 100%); border-radius: 99px;">&nbsp;</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <!-- Subtítulo Hero -->
                      <tr>
                        <td align="left" style="padding: 0; font-family: ${fontSans}; font-size: 14px; font-weight: 400; line-height: 1.58; color: #E9D5FF;">
                          Descubra cómo los Trabajadores Cognitivos pueden ampliar las capacidades de su equipo y apoyar actividades institucionales bajo supervisión humana.
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- Celda derecha: Ilustración 01.png integrada al fondo oscuro -->
                  <td width="350" valign="middle" align="right" bgcolor="#0D061F" style="width: 350px; background-color: #0D061F; padding: 0; vertical-align: middle;">
                    <img
                      src="${heroRightImgUrl}"
                      alt="Trabajador Cognitivo GLocation"
                      width="350"
                      height="340"
                      style="display: block; width: 350px; height: 340px; border: 0;"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ======================================================== -->
          <!-- BLOQUE 2 · EL CONCEPTO (740px)                           -->
          <!-- ======================================================== -->
          <tr>
            <td style="padding: 0 0 6px 0;">
              <table role="presentation" width="740" cellpadding="0" cellspacing="0" border="0" bgcolor="${cardBg}" style="width: 740px; border-collapse: separate; border-spacing: 0; background-color: ${cardBg}; border: 1px solid ${cardBorder}; border-radius: 6px; overflow: hidden;">
                <tr>
                  <td style="padding: 32px 44px;">
                    <table role="presentation" width="650" cellpadding="0" cellspacing="0" border="0" style="width: 650px; margin: 0 auto; border-collapse: collapse;">
                      <!-- Encabezado Bloque 2 -->
                      <tr>
                        <td align="center" style="padding: 0 0 8px 0; font-family: ${fontHeading}; font-size: 23px; font-weight: 800; line-height: 1.24; letter-spacing: -0.025em; color: ${textMain};">
                          Ampliar la capacidad, <span class="gl-grad-title" style="color: ${isDark ? "#C084FC" : "#7C3AED"};">no repartir </span><span class="gl-grad-title" style="color: ${isDark ? "#38BDF8" : "#0284C7"};">herramientas.</span>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="padding: 0 16px 22px 16px; font-family: ${fontSans}; font-size: 14.5px; line-height: 1.6; color: ${isDark ? "#D4C7EC" : "#4B5563"};">
                          En Glocation diseñamos <strong style="font-weight: 700; color: ${textMain};">Trabajadores Cognitivos</strong> para incorporarse a procesos organizacionales con funciones definidas, conocimiento institucional y supervisión humana.
                        </td>
                      </tr>

                      <!-- Diagrama comparativo 3 celdas fijas en la misma fila -->
                      <tr>
                        <td style="padding: 0;">
                          <table role="presentation" width="650" cellpadding="0" cellspacing="0" border="0" style="width: 650px; border-collapse: collapse; table-layout: fixed;">
                            <tr>
                              <!-- COLUMNA IZQUIERDA: USO AISLADO (254px) -->
                              <td width="254" valign="top" style="width: 254px; vertical-align: top;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#170E2B" : "#F7F6FA"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#170E2B" : "#F7F6FA"}; border: 1px solid ${isDark ? "#2A1B47" : "#E4E1EC"}; border-radius: 16px;">
                                  <tr>
                                    <td style="padding: 16px;">
                                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                          <td align="left" style="padding: 0 0 12px 0;">
                                            <div style="font-family: ${fontHeading}; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#94A3B8" : "#64748B"};">
                                              USO AISLADO
                                            </div>
                                            <div style="font-family: ${fontHeading}; font-size: 14px; font-weight: 700; line-height: 1.35; color: ${isDark ? "#E2E8F0" : "#334155"}; margin-top: 2px;">
                                              Herramientas individuales
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="padding: 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#120B22" : "#FFFFFF"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#120B22" : "#FFFFFF"}; border: 1px dashed ${isDark ? "#334155" : "#CBD5E1"}; border-radius: 12px;">
                                              <tr>
                                                <td style="padding: 14px 10px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      ${[
                                                        { name: "ChatGPT", src: toolChatgptUrl },
                                                        { name: "Gemini", src: toolGeminiUrl },
                                                        { name: "Excel", src: toolExcelUrl },
                                                      ]
                                                        .map(
                                                          (tool) => `
                                                      <td align="center" width="33%" valign="top" style="padding: 0 4px 10px 4px;">
                                                        <img src="${tool.src}" alt="${tool.name}" width="32" height="32" style="display: block; width: 32px; height: 32px; margin: 0 auto 4px auto; border: 0;" />
                                                        <img src="${arrowDownSlateUrl}" alt="↓" width="12" height="12" style="display: block; width: 12px; height: 12px; margin: 0 auto 4px auto; border: 0;" />
                                                        <img src="${userBadgeUrl}" alt="Usuario" width="28" height="28" style="display: block; width: 28px; height: 28px; margin: 0 auto; border: 0;" />
                                                      </td>`
                                                        )
                                                        .join("")}
                                                    </tr>
                                                    <tr>
                                                      <td colspan="3" align="center" style="font-family: ${fontSans}; font-size: 11px; line-height: 1.38; color: ${isDark ? "#CBD5E1" : "#475569"}; padding: 2px 2px 0 2px;">
                                                        Consultas, documentos y seguimientos gestionados por separado.
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
                                </table>
                              </td>

                              <!-- FLECHA CENTRAL (44px) -->
                              <td width="44" align="center" valign="middle" style="width: 44px; vertical-align: middle; text-align: center; padding: 0 6px;">
                                <img src="${evolutionArrowUrl}" alt="→" width="32" height="32" style="display: block; width: 32px; height: 32px; margin: 0 auto; border: 0;" />
                              </td>

                              <!-- COLUMNA DERECHA: TRANSFORMACIÓN COGNITIVA (352px) -->
                              <td width="352" valign="top" style="width: 352px; vertical-align: top;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#24124D" : "#F6F0FF"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#24124D" : "#F6F0FF"}; background-image: ${isDark ? "linear-gradient(135deg, #24124D 0%, #1D0E3D 50%, #2E1660 100%)" : "linear-gradient(135deg, #F6F0FF 0%, #FAF7FF 50%, #EFE4FF 100%)"}; border: 2px solid ${isDark ? "#7C3AED" : "#C4B5FD"}; border-radius: 16px;">
                                  <tr>
                                    <td style="padding: 15px;">
                                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                          <td style="padding: 0 0 12px 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                              <tr>
                                                <td align="left" valign="top">
                                                  <div style="font-family: ${fontHeading}; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#D8B4FE" : "#6D28D9"};">
                                                    &#9679; TRANSFORMACIÓN COGNITIVA
                                                  </div>
                                                  <div style="font-family: ${fontHeading}; font-size: 14px; font-weight: 800; line-height: 1.35; color: ${textMain}; margin-top: 2px;">
                                                    IA integrada a un proceso
                                                  </div>
                                                </td>
                                                <td align="right" valign="top" width="76" style="width: 76px;">
                                                  <span style="display: inline-block; font-family: ${fontHeading}; font-size: 10px; font-weight: 800; color: #FFFFFF; background-color: #7C3AED; border-radius: 99px; padding: 3px 10px;">
                                                    GLocation
                                                  </span>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="padding: 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#150A2B" : "#FFFFFF"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#150A2B" : "#FFFFFF"}; border: 1px solid ${isDark ? "#581C87" : "#C4B5FD"}; border-radius: 12px;">
                                              <tr>
                                                <td style="padding: 14px 10px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      <!-- Nodo 1: Proceso TIC -->
                                                      <td align="center" valign="top" width="28%" style="padding-bottom: 10px;">
                                                        <img src="${workflowBadgeUrl}" alt="Proceso TIC" width="40" height="40" style="display: block; width: 40px; height: 40px; margin: 0 auto 6px auto; border: 0;" />
                                                        <div style="font-family: ${fontSans}; font-size: 10.5px; font-weight: 600; line-height: 1.2; color: ${isDark ? "#F3E8FF" : "#140E24"}; white-space: nowrap;">
                                                          Proceso TIC
                                                        </div>
                                                      </td>
                                                      <!-- Flecha 1 -->
                                                      <td align="center" valign="middle" width="8%" style="padding-bottom: 22px;">
                                                        <img src="${arrowRightPurpleUrl}" alt="→" width="16" height="16" style="display: block; width: 16px; height: 16px; margin: 0 auto; border: 0;" />
                                                      </td>
                                                      <!-- Nodo 2: Trabajador Cognitivo -->
                                                      <td align="center" valign="top" width="36%" style="padding-bottom: 10px;">
                                                        <img src="${avatarBotPurpleUrl}" alt="Trabajador Cognitivo" width="40" height="40" style="display: block; width: 40px; height: 40px; margin: 0 auto 6px auto; border: 0;" />
                                                        <div style="font-family: ${fontSans}; font-size: 10.5px; font-weight: 800; line-height: 1.2; color: ${isDark ? "#D8B4FE" : "#6D28D9"}; white-space: nowrap;">
                                                          Trabajador Cognitivo
                                                        </div>
                                                      </td>
                                                      <!-- Flecha 2 -->
                                                      <td align="center" valign="middle" width="8%" style="padding-bottom: 22px;">
                                                        <img src="${arrowRightPurpleUrl}" alt="→" width="16" height="16" style="display: block; width: 16px; height: 16px; margin: 0 auto; border: 0;" />
                                                      </td>
                                                      <!-- Nodo 3: Equipo TIC -->
                                                      <td align="center" valign="top" width="20%" style="padding-bottom: 10px;">
                                                        <img src="${avatarTeamUrl}" alt="Equipo TIC" width="40" height="40" style="display: block; width: 40px; height: 40px; margin: 0 auto 6px auto; border: 0;" />
                                                        <div style="font-family: ${fontSans}; font-size: 10.5px; font-weight: 800; line-height: 1.2; color: ${textMain}; white-space: nowrap;">
                                                          Equipo TIC
                                                        </div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td colspan="5" align="center" style="font-family: ${fontSans}; font-size: 11px; line-height: 1.38; color: ${isDark ? "#E9D5FF" : "#4B5563"}; padding: 2px 4px 0 4px;">
                                                        Un Trabajador Cognitivo apoya actividades definidas con información autorizada y supervisión humana.
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
                                </table>
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

          <!-- ======================================================== -->
          <!-- BLOQUE 3 · APLICACIÓN PRÁCTICA (740px)                   -->
          <!-- ======================================================== -->
          <tr>
            <td style="padding: 0 0 6px 0;">
              <table role="presentation" width="740" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#12102B" : "#F6F8FC"}" style="width: 740px; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#12102B" : "#F6F8FC"}; background-image: ${isDark ? "linear-gradient(180deg, #130C26 0%, #11152E 50%, #130A26 100%)" : "linear-gradient(180deg, #F8FAFC 0%, #F4F7FB 50%, #F5F2FF 100%)"}; border: 1px solid ${cardBorder}; border-radius: 6px; overflow: hidden;">
                <tr>
                  <td style="padding: 32px 44px;">
                    <table role="presentation" width="650" cellpadding="0" cellspacing="0" border="0" style="width: 650px; margin: 0 auto; border-collapse: collapse;">
                      <!-- Encabezado Bloque 3 -->
                      <tr>
                        <td align="left" style="padding: 0 0 8px 0; font-family: ${fontHeading}; font-size: 26px; font-weight: 800; line-height: 1.2; letter-spacing: -0.025em; color: ${textMain};">
                          Imagine esta posibilidad <span class="gl-grad-title" style="color: ${isDark ? "#C084FC" : "#7C3AED"};">en su </span><span class="gl-grad-title" style="color: ${isDark ? "#38BDF8" : "#0284C7"};">oficina</span>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="padding: 0 0 20px 0; font-family: ${fontSans}; font-size: 13.5px; line-height: 1.5; color: ${isDark ? "#CBD5E1" : "#334155"};">
                          Necesita conocer qué compromisos y entregables de sus proyectos tecnológicos requieren revisión.
                        </td>
                      </tr>

                      <!-- Dos columnas fijas en la misma fila: Izquierda (372px) + Espacio (16px) + Derecha (262px) -->
                      <tr>
                        <td style="padding: 0;">
                          <table role="presentation" width="650" cellpadding="0" cellspacing="0" border="0" style="width: 650px; border-collapse: collapse; table-layout: fixed;">
                            <tr>
                              <!-- COLUMNA IZQUIERDA (372px) -->
                              <td width="372" valign="top" style="width: 372px; vertical-align: top;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#0F172A" : "#FFFFFF"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#0F172A" : "#FFFFFF"}; border: 1px solid ${isDark ? "#1E3A5F" : "#CBD5E1"}; border-radius: 16px; overflow: hidden;">
                                  <!-- Barra superior tipo ventana -->
                                  <tr>
                                    <td bgcolor="${isDark ? "#162038" : "#F1F5F9"}" style="padding: 10px 16px; background-color: ${isDark ? "#162038" : "#F1F5F9"}; border-bottom: 1px solid ${isDark ? "#233554" : "#E2E8F0"};">
                                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                                        <tr>
                                          <td valign="middle" style="padding-right: 5px;">
                                            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 99px; background-color: #7C3AED; font-size: 1px; line-height: 10px;">&nbsp;</span>
                                          </td>
                                          <td valign="middle" style="padding-right: 5px;">
                                            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 99px; background-color: #0EA5E9; font-size: 1px; line-height: 10px;">&nbsp;</span>
                                          </td>
                                          <td valign="middle" style="padding-right: 10px;">
                                            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 99px; background-color: #94A3B8; font-size: 1px; line-height: 10px;">&nbsp;</span>
                                          </td>
                                          <td valign="middle" style="padding-right: 4px;">
                                            <img src="${sparklesBlueUrl}" alt="" width="12" height="12" style="display: block; width: 12px; height: 12px; border: 0;" />
                                          </td>
                                          <td valign="middle" style="font-family: ${fontHeading}; font-size: 10.5px; font-weight: 700; color: ${isDark ? "#CBD5E1" : "#334155"};">
                                            Ejemplo Oficina TIC
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>

                                  <!-- Contenido ventana -->
                                  <tr>
                                    <td style="padding: 18px;">
                                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                        <!-- Tarjeta Seguimiento de proyectos tecnológicos -->
                                        <tr>
                                          <td style="padding: 0 0 14px 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#152238" : "#F8FAFC"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#152238" : "#F8FAFC"}; border: 1px solid ${isDark ? "#23395B" : "#E2E8F0"}; border-radius: 12px;">
                                              <tr>
                                                <td style="padding: 12px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      <td width="36" valign="top" style="width: 36px; padding-right: 12px; vertical-align: top;">
                                                        <img src="${filetextBadgeUrl}" alt="Documento" width="36" height="36" style="display: block; width: 36px; height: 36px; border: 0;" />
                                                      </td>
                                                      <td valign="top" style="vertical-align: top;">
                                                        <div style="font-family: ${fontHeading}; font-size: 13.5px; font-weight: 800; line-height: 1.25; color: ${isDark ? "#FFFFFF" : "#0F172A"}; margin-bottom: 4px;">
                                                          Seguimiento de proyectos tecnológicos
                                                        </div>
                                                        <div style="font-family: ${fontSans}; font-size: 11.5px; line-height: 1.42; color: ${isDark ? "#CBD5E1" : "#475569"};">
                                                          Un Trabajador Cognitivo podría organizar la información registrada sobre compromisos, entregables y fechas de los proyectos institucionales.
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>

                                        <!-- Encabezado Resumen de seguimiento / Estado -->
                                        <tr>
                                          <td style="padding: 0 0 8px 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                              <tr>
                                                <td align="left" style="padding: 0 4px; font-family: ${fontHeading}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#7DD3FC" : "#0369A1"};">
                                                  Resumen de seguimiento
                                                </td>
                                                <td align="right" style="padding: 0 4px; font-family: ${fontHeading}; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#94A3B8" : "#64748B"};">
                                                  Estado
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>

                                        <!-- Fila 1: Compromisos pendientes -->
                                        <tr>
                                          <td style="padding: 0 0 8px 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#131D31" : "#F8FAFC"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#131D31" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 8px;">
                                              <tr>
                                                <td style="padding: 8px 12px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      <td width="22" valign="middle" style="width: 22px; padding-right: 8px;">
                                                        <img src="${checkBlueUrl}" alt="✓" width="14" height="14" style="display: block; width: 14px; height: 14px; border: 0;" />
                                                      </td>
                                                      <td valign="middle" style="font-family: ${fontSans}; font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};">
                                                        Compromisos pendientes
                                                      </td>
                                                      <td align="right" valign="middle">
                                                        <span style="display: inline-block; font-family: ${fontHeading}; font-size: 10.5px; font-weight: 700; padding: 2px 10px; border-radius: 99px; border: 1px solid ${isDark ? "#0284C7" : "#7DD3FC"}; background-color: ${isDark ? "#0C4A6E" : "#E0F2FE"}; color: ${isDark ? "#E0F2FE" : "#0369A1"}; white-space: nowrap;">
                                                          Por revisar
                                                        </span>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>

                                        <!-- Fila 2: Entregables próximos -->
                                        <tr>
                                          <td style="padding: 0 0 8px 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#131D31" : "#F8FAFC"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#131D31" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 8px;">
                                              <tr>
                                                <td style="padding: 8px 12px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      <td width="22" valign="middle" style="width: 22px; padding-right: 8px;">
                                                        <img src="${checkOrangeUrl}" alt="✓" width="14" height="14" style="display: block; width: 14px; height: 14px; border: 0;" />
                                                      </td>
                                                      <td valign="middle" style="font-family: ${fontSans}; font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};">
                                                        Entregables próximos
                                                      </td>
                                                      <td align="right" valign="middle">
                                                        <span style="display: inline-block; font-family: ${fontHeading}; font-size: 10.5px; font-weight: 700; padding: 2px 10px; border-radius: 99px; border: 1px solid ${isDark ? "#F97316" : "#FDBA74"}; background-color: ${isDark ? "#431407" : "#FFF7ED"}; color: ${isDark ? "#FFEDD5" : "#C2410C"}; white-space: nowrap;">
                                                          Por verificar
                                                        </span>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>

                                        <!-- Fila 3: Responsables y fechas -->
                                        <tr>
                                          <td style="padding: 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#131D31" : "#F8FAFC"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#131D31" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 8px;">
                                              <tr>
                                                <td style="padding: 8px 12px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      <td width="22" valign="middle" style="width: 22px; padding-right: 8px;">
                                                        <img src="${checkGreenUrl}" alt="✓" width="14" height="14" style="display: block; width: 14px; height: 14px; border: 0;" />
                                                      </td>
                                                      <td valign="middle" style="font-family: ${fontSans}; font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};">
                                                        Responsables y fechas
                                                      </td>
                                                      <td align="right" valign="middle">
                                                        <span style="display: inline-block; font-family: ${fontHeading}; font-size: 10.5px; font-weight: 700; padding: 2px 10px; border-radius: 99px; border: 1px solid ${isDark ? "#10B981" : "#6EE7B7"}; background-color: ${isDark ? "#064E3B" : "#ECFDF5"}; color: ${isDark ? "#D1FAE5" : "#047857"}; white-space: nowrap;">
                                                          Identificados
                                                        </span>
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
                                </table>
                              </td>

                              <!-- ESPACIO ENTRE COLUMNAS (16px) -->
                              <td width="16" style="width: 16px; font-size: 1px; line-height: 1px;">&nbsp;</td>

                              <!-- COLUMNA DERECHA (262px) -->
                              <td width="262" valign="top" style="width: 262px; vertical-align: top;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#13182E" : "#FFFFFF"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#13182E" : "#FFFFFF"}; border: 1px solid ${isDark ? "#283558" : "#CBD5E1"}; border-radius: 16px;">
                                  <tr>
                                    <td style="padding: 18px;">
                                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                        <!-- Cabecera con avatar bot azul -->
                                        <tr>
                                          <td style="padding: 0 0 10px 0; border-bottom: 1px solid ${isDark ? "#233252" : "#E2E8F0"};">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                              <tr>
                                                <td width="40" valign="middle" style="width: 40px; padding-right: 8px;">
                                                  <img src="${avatarBotBlueUrl}" alt="Trabajador Cognitivo" width="40" height="40" style="display: block; width: 40px; height: 40px; border: 0;" />
                                                </td>
                                                <td valign="middle">
                                                  <div style="font-family: ${fontHeading}; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#38BDF8" : "#0284C7"};">
                                                    VALOR PARA SU GESTIÓN
                                                  </div>
                                                  <div style="font-family: ${fontHeading}; font-size: 12px; font-weight: 800; line-height: 1.25; letter-spacing: -0.02em; color: ${isDark ? "#FFFFFF" : "#0F172A"}; white-space: nowrap;">
                                                    ¿Qué gana el equipo TIC?
                                                  </div>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>

                                        <!-- Párrafo descriptivo -->
                                        <tr>
                                          <td style="padding: 12px 0 14px 0; font-family: ${fontSans}; font-size: 12px; line-height: 1.5; color: ${isDark ? "#E2E8F0" : "#334155"};">
                                            Una <strong style="font-family: ${fontHeading}; font-weight: 800; color: ${isDark ? "#FFFFFF" : "#0F172A"};">base de información organizada</strong> para preparar el seguimiento, revisar pendientes y concentrar esfuerzos en las decisiones que requieren criterio humano.
                                          </td>
                                        </tr>

                                        <!-- Beneficio 1 -->
                                        <tr>
                                          <td style="padding: 0 0 8px 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#0F172A" : "#F8FAFC"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#0F172A" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 12px;">
                                              <tr>
                                                <td style="padding: 8px 10px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      <td width="28" valign="middle" style="width: 28px; padding-right: 10px;">
                                                        <img src="${folderBadgeUrl}" alt="" width="28" height="28" style="display: block; width: 28px; height: 28px; border: 0;" />
                                                      </td>
                                                      <td valign="middle" style="font-family: ${fontSans}; font-size: 11px; line-height: 1.35; color: ${isDark ? "#CBD5E1" : "#334155"};">
                                                        <strong style="display: block; font-family: ${fontHeading}; font-weight: 800; color: ${isDark ? "#FFFFFF" : "#0F172A"};">Información autorizada:</strong>
                                                        fuentes oficiales de su entidad.
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>

                                        <!-- Beneficio 2 -->
                                        <tr>
                                          <td style="padding: 0 0 8px 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#0F172A" : "#F8FAFC"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#0F172A" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 12px;">
                                              <tr>
                                                <td style="padding: 8px 10px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      <td width="28" valign="middle" style="width: 28px; padding-right: 10px;">
                                                        <img src="${usercheckBadgeUrl}" alt="" width="28" height="28" style="display: block; width: 28px; height: 28px; border: 0;" />
                                                      </td>
                                                      <td valign="middle" style="font-family: ${fontSans}; font-size: 11px; line-height: 1.35; color: ${isDark ? "#CBD5E1" : "#334155"};">
                                                        <strong style="display: block; font-family: ${fontHeading}; font-weight: 800; color: ${isDark ? "#FFFFFF" : "#0F172A"};">Revisión humana:</strong>
                                                        insumos listos para validar.
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>

                                        <!-- Beneficio 3 -->
                                        <tr>
                                          <td style="padding: 0;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${isDark ? "#2E1660" : "#F3EEFF"}" style="width: 100%; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#2E1660" : "#F3EEFF"}; border: 1px solid ${isDark ? "#7C3AED" : "#C4B5FD"}; border-radius: 12px;">
                                              <tr>
                                                <td style="padding: 8px 10px;">
                                                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                      <td width="28" valign="middle" style="width: 28px; padding-right: 10px;">
                                                        <img src="${shieldBadgeUrl}" alt="" width="28" height="28" style="display: block; width: 28px; height: 28px; border: 0;" />
                                                      </td>
                                                      <td valign="middle" style="font-family: ${fontHeading}; font-size: 11px; font-weight: 800; line-height: 1.35; color: ${isDark ? "#FFFFFF" : "#4C1D95"};">
                                                        Su equipo conserva el<br />criterio y las decisiones.
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
                                </table>
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

          <!-- ======================================================== -->
          <!-- BLOQUE 4 · CTA (740px)                                   -->
          <!-- ======================================================== -->
          <tr>
            <td style="padding: 0 0 6px 0;">
              <table role="presentation" width="740" cellpadding="0" cellspacing="0" border="0" bgcolor="${cardBg}" style="width: 740px; border-collapse: separate; border-spacing: 0; background-color: ${cardBg}; border: 1px solid ${cardBorder}; border-radius: 6px; overflow: hidden;">
                <tr>
                  <td style="padding: 32px 44px 40px 44px;">
                    <table
                      role="presentation"
                      width="650"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      bgcolor="${isDark ? "#231048" : "#1A0D36"}"
                      style="width: 650px; margin: 0 auto; border-collapse: separate; border-spacing: 0; background-color: ${isDark ? "#231048" : "#1A0D36"}; background-image: ${isDark ? "linear-gradient(135deg, #231048 0%, #3B197A 50%, #5B21B6 100%)" : "linear-gradient(135deg, #1A0D36 0%, #2D145E 50%, #4C1D95 100%)"}; border-radius: 16px; ${isDark ? "border: 1px solid #6D28D9;" : ""}"
                    >
                      <tr>
                        <td align="center" style="padding: 38px 32px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td align="center" style="padding: 0 0 18px 0; font-family: ${fontHeading}; font-size: 23px; font-weight: 800; line-height: 1.26; letter-spacing: -0.025em; color: #FFFFFF;">
                                ¿Y si exploramos dónde podría<br />aportar valor en su entidad?
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="padding: 0 0 22px 0; font-family: ${fontSans}; font-size: 13.5px; line-height: 1.6; color: #EDE9FE;">
                                Le proponemos una reunión virtual de 20 minutos para conocer sus necesidades<br />
                                e identificar algún proceso en el que tenga sentido evaluar un Trabajador Cognitivo.
                              </td>
                            </tr>
                            <!-- Botón CTA por tabla -->
                            <tr>
                              <td align="center" style="padding: 0 0 20px 0;">
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="border-collapse: separate; border-spacing: 0; background-color: #FFFFFF; border-radius: 999px; box-shadow: 0 8px 22px rgba(15,7,32,0.3);">
                                  <tr>
                                    <td align="center" valign="middle" style="padding: 13px 26px;">
                                      <a href="${mailtoLink}" style="text-decoration: none; display: inline-block;">
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                                          <tr>
                                            <td valign="middle" style="padding-right: 10px;">
                                              <img src="${mailPurpleUrl}" alt="" width="16" height="16" style="display: block; width: 16px; height: 16px; border: 0;" />
                                            </td>
                                            <td valign="middle" style="font-family: ${fontHeading}; font-size: 14.5px; font-weight: 800; color: #4C1D95; text-decoration: none; white-space: nowrap;">
                                              Explorar una oportunidad en mi oficina TIC
                                            </td>
                                            <td valign="middle" style="padding-left: 10px;">
                                              <img src="${arrowRightCtaUrl}" alt="→" width="16" height="16" style="display: block; width: 16px; height: 16px; border: 0;" />
                                            </td>
                                          </tr>
                                        </table>
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="padding: 0; font-family: ${fontSans}; font-size: 12.5px; line-height: 1.5; color: #DDD6FE;">
                                Responda a este correo o deje su información en el formulario<br />
                                y le compartiré dos opciones de horario.
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

          <!-- ======================================================== -->
          <!-- BLOQUE 5 · FIRMA COMERCIAL PAULA ROZO (740px)            -->
          <!-- ======================================================== -->
          <tr>
            <td style="padding: 0;">
              <table role="presentation" width="740" cellpadding="0" cellspacing="0" border="0" bgcolor="${cardBg}" style="width: 740px; border-collapse: separate; border-spacing: 0; background-color: ${cardBg}; border: 1px solid ${cardBorder}; border-radius: 6px; overflow: hidden;">
                <tr>
                  <td style="padding: 24px 36px;">
                    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; margin: 0 auto; border-collapse: collapse; table-layout: fixed;">
                      <tr>
                        <!-- Izquierda: Foto circular de Paula Rozo + Datos (385px) -->
                        <td width="385" valign="middle" style="width: 385px; vertical-align: middle;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td width="78" valign="middle" style="width: 78px; padding-right: 14px;">
                                <img
                                  src="${avatarPaulaUrl}"
                                  alt="${config.senderName}"
                                  width="78"
                                  height="78"
                                  style="display: block; width: 78px; height: 78px; border: 0;"
                                />
                              </td>
                              <td valign="middle" style="vertical-align: middle;">
                                <div style="font-family: ${fontHeading}; font-size: 15px; font-weight: 800; line-height: 1.25; color: ${textMain}; margin-bottom: 2px;">
                                  ${config.senderName}
                                </div>
                                <div style="font-family: ${fontSans}; font-size: 11.5px; font-weight: 600; line-height: 1.35; color: ${isDark ? "#C4B5FD" : "#6D28D9"}; margin-bottom: 4px;">
                                  ${config.senderRole}
                                </div>
                                <div style="font-family: ${fontSans}; font-size: 11.5px; font-weight: 400; line-height: 1.4; color: ${isDark ? "#EDE9FE" : "#4B5563"};">
                                  Estaré pendiente de su respuesta para coordinar<br />
                                  una reunión con nuestro equipo.
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>

                        <!-- Derecha: Logo GLocation + Tagline + Enlaces (215px) -->
                        <td width="215" align="right" valign="middle" style="width: 215px; vertical-align: middle; text-align: right; padding-left: 24px; border-left: 1px solid ${isDark ? "#2E1C59" : "#EAE4F7"};">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" style="border-collapse: collapse; margin-left: auto;">
                            <tr>
                              <td align="right" style="padding-bottom: 6px;">
                                <img
                                  src="${footerLogoUrl}"
                                  alt="GLocation"
                                  width="${isDark ? "110" : "111"}"
                                  height="48"
                                  style="display: block; width: ${isDark ? "110px" : "111px"}; height: 48px; margin-left: auto; border: 0;"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td align="right" style="padding-bottom: 8px; font-family: ${fontSans}; font-size: 11.5px; font-weight: 500; line-height: 1.35; color: ${isDark ? "#D8B4FE" : "#5B21B6"}; white-space: nowrap;">
                                ${config.companyTagline}
                              </td>
                            </tr>
                            <tr>
                              <td align="right">
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" style="border-collapse: collapse; margin-left: auto;">
                                  <tr>
                                    ${
                                      trimmedWebsite
                                        ? `<td valign="middle" style="padding-right: 5px;">
                                            <img src="${globePurpleUrl}" alt="" width="14" height="14" style="display: block; width: 14px; height: 14px; border: 0;" />
                                          </td>
                                          <td valign="middle" style="font-family: ${fontSans}; font-size: 11.5px; font-weight: 600;">
                                            <a href="${trimmedWebsite}" target="_blank" rel="noopener noreferrer" style="color: ${isDark ? "#C4B5FD" : "#6D28D9"}; text-decoration: none;">${cleanDomain}</a>
                                          </td>`
                                        : ""
                                    }
                                    ${
                                      trimmedWebsite && trimmedLinkedin
                                        ? `<td valign="middle" style="padding: 0 8px; color: #A855F7; font-size: 12px;">&middot;</td>`
                                        : ""
                                    }
                                    ${
                                      trimmedLinkedin
                                        ? `<td valign="middle" style="padding-right: 5px;">
                                            <img src="${linkedinPurpleUrl}" alt="" width="14" height="14" style="display: block; width: 14px; height: 14px; border: 0;" />
                                          </td>
                                          <td valign="middle" style="font-family: ${fontSans}; font-size: 11.5px; font-weight: 600;">
                                            <a href="${trimmedLinkedin}" target="_blank" rel="noopener noreferrer" style="color: ${isDark ? "#C4B5FD" : "#6D28D9"}; text-decoration: none;">GLocation</a>
                                          </td>`
                                        : ""
                                    }
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
