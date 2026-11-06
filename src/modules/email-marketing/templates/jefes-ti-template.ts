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
 * servida desde GitHub Pages con codificación válida de espacios y paréntesis.
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
  // Evitar doble codificación si ya contiene %20 o %C3
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
  senderPhotoUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/paula_natalia_rozo%20(4).png`,
  senderEyebrow: "HABLEMOS",
  senderName: "Paula Rozo",
  senderRole: "BDR | Business Development Representative",
  senderMessage:
    "Estaré pendiente de su respuesta para coordinar una reunión con nuestro equipo.",
  senderNameAndRole: "Paula Rozo · BDR | Business Development Representative",
  companyTagline: "Construimos capacidad cognitiva",
  senderPhone: "",
  websiteUrl: "https://glocation.co",
  linkedinUrl: "https://www.linkedin.com/company/glocation/",
  unsubscribeUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-marketing/baja/`,
  logoHeroUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/Logotipo%20%20SL%20Versi%C3%B3n%20Negativo%20(1).png`,
  logoFooterUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/LogotipoSL.svg`,
  heroAgentImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/01.png`,
  processImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/1.png`,
  teamImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/2.png`,
  ctaImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/cta.png`,
  publicBaseUrl: PUBLIC_GITHUB_PAGES_BASE_URL,
  theme: "light",
};

/**
 * Genera el archivo HTML autónomo 100% idéntico visualmente a la vista de
 * la Campaña Jefes de Oficinas TIC (5 bloques, tipografías Montserrat y Nunito,
 * iconos vectoriales Lucide, degradados Primary -> Azul y URLs públicas absolutas).
 */
export function generateJefesTiEmailHtml(
  customConfig?: JefesTiEmailConfig
): string {
  const config = { ...defaultJefesTiEmailConfig, ...customConfig };
  const baseUrl = config.publicBaseUrl || PUBLIC_GITHUB_PAGES_BASE_URL;
  const isDark = config.theme === "dark";

  const heroBgUrl = toPublicAssetUrl(
    customConfig?.heroAgentImageUrl || "/01.png",
    baseUrl
  );
  const heroLogoUrl = toPublicAssetUrl(
    customConfig?.logoHeroUrl || "/Logotipo  SL Versión Negativo (1).png",
    baseUrl
  );
  const footerLogoUrl = toPublicAssetUrl(
    customConfig?.logoFooterUrl ||
    (isDark
      ? "/Logotipo  SL Versión Negativo (1).png"
      : "/LogotipoSL.svg"),
    baseUrl
  );
  const chatgptLogoUrl = toPublicAssetUrl(
    "/chatgpt_gris_circular.png",
    baseUrl
  );
  const geminiLogoUrl = toPublicAssetUrl("/gemini_gris_circular.png", baseUrl);
  const excelLogoUrl = toPublicAssetUrl("/excel_gris_circular.png", baseUrl);
  const processImgUrl = toPublicAssetUrl(
    customConfig?.processImageUrl || "/1.png",
    baseUrl
  );
  const teamImgUrl = toPublicAssetUrl(
    customConfig?.teamImageUrl || "/2.png",
    baseUrl
  );
  const senderPhotoUrl = toPublicAssetUrl(
    customConfig?.senderPhotoUrl || "/paula_natalia_rozo (4).png",
    baseUrl
  );

  const mailtoLink = `mailto:${config.recipientEmail}?subject=${encodeURIComponent(
    config.emailSubject
  )}&body=${encodeURIComponent(config.emailBody)}`;

  const trimmedWebsite = (config.websiteUrl || "").trim();
  const trimmedLinkedin = (config.linkedinUrl || "").trim();
  const cleanDomain = trimmedWebsite
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const outerBg = isDark ? "#0B0617" : "#F3F1F8";
  const cardBg = isDark ? "#120A24" : "#FFFFFF";
  const cardBorder = isDark ? "#2D1E52" : "#E5E0F0";
  const textMain = isDark ? "#FFFFFF" : "#140E24";
  const textGradientCss = isDark
    ? "background-image: linear-gradient(90deg, #C084FC 0%, #A855F7 48%, #38BDF8 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: #C084FC;"
    : "background-image: linear-gradient(90deg, #7C3AED 0%, #6D28D9 48%, #0284C7 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: #7C3AED;";

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Glocation — Trabajadores Cognitivos para Oficinas TIC</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
  <style type="text/css">
    *, *::before, *::after {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 0;
      background-color: ${outerBg};
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${textMain};
    }
    .font-heading {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
    }
    .font-sans {
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
    }
    .email-wrapper {
      width: 100%;
      background-color: ${outerBg};
      padding: 24px 16px;
    }
    .email-canvas {
      width: 740px;
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .block-card {
      position: relative;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid ${cardBorder};
      background-color: ${cardBg};
    }
    /* Grid & Flex helpers matching the React components 1:1 */
    .b2-row {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      gap: 12px;
    }
    .b2-left {
      width: 40%;
      flex-shrink: 0;
    }
    .b2-right {
      flex: 1 1 0%;
      min-width: 0;
    }
    .b3-grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 16px;
      align-items: stretch;
    }
    .b3-left {
      grid-column: span 7 / span 7;
    }
    .b3-right {
      grid-column: span 5 / span 5;
    }
    .footer-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .footer-left {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }
    .footer-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
      flex-shrink: 0;
      gap: 8px;
      padding: 4px 0 4px 28px;
      border-left: 1px solid ${isDark ? "rgba(46, 28, 89, 0.8)" : "#EAE4F7"};
    }
    @media only screen and (max-width: 680px) {
      .block-pad {
        padding-left: 24px !important;
        padding-right: 24px !important;
      }
      .b2-row {
        flex-direction: column !important;
      }
      .b2-left, .b2-right {
        width: 100% !important;
      }
      .b3-grid {
        display: flex !important;
        flex-direction: column !important;
      }
      .footer-row, .footer-left {
        flex-direction: column !important;
        text-align: center !important;
      }
      .footer-right {
        align-items: center !important;
        text-align: center !important;
        padding-left: 0 !important;
        border-left: none !important;
      }
      .nowrap-desktop {
        white-space: normal !important;
      }
    }
  </style>
</head>
<body>
  <!-- Preheader oculto -->
  <div style="display: none; max-height: 0px; overflow: hidden;">
    Su oficina TIC tiene proyectos que liderar. Y una operación que no se detiene. Descubra cómo los Trabajadores Cognitivos pueden ampliar las capacidades de su equipo.
  </div>

  <div class="email-wrapper">
    <div class="email-canvas">

      <!-- ======================================================== -->
      <!-- BLOQUE 1 · HERO (EmailHeroBlock)                         -->
      <!-- ======================================================== -->
      <div class="block-card">
        <div class="block-pad" style="position: relative; overflow: hidden; background-color: #0E0620; color: #FFFFFF; padding: 56px 48px; min-height: 340px; display: flex; align-items: center;">
          <!-- Imagen de fondo 01.png -->
          <img
            src="${heroBgUrl}"
            alt="Imagen principal Hero"
            style="pointer-events: none; user-select: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: right center; display: block;"
          />
          <!-- Difuminado a la izquierda idéntico al componente React -->
          <div
            style="pointer-events: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: linear-gradient(90deg, #0D061F 0%, rgba(13,6,31,0.94) 36%, rgba(13,6,31,0.55) 56%, rgba(13,6,31,0.08) 78%, rgba(13,6,31,0) 100%);"
          ></div>
          <!-- Línea superior de marca -->
          <div
            style="pointer-events: none; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #7C3AED 0%, #A855F7 50%, #7C3AED 100%);"
          ></div>

          <div style="position: relative; z-index: 10; width: 100%; max-width: 650px; margin: 0 auto;">
            <div style="max-width: 355px;">
              <div style="margin-bottom: 20px;">
                <img
                  src="${heroLogoUrl}"
                  alt="Glocation"
                  style="height: 64px; width: auto; object-fit: contain; margin-left: -10px; margin-top: -8px; margin-bottom: -8px; display: block;"
                />
              </div>

              <div style="margin-bottom: 20px;">
                <h1 class="font-heading" style="margin: 0 0 14px 0; font-size: 26px; font-weight: 800; letter-spacing: -0.025em; line-height: 1.2;">
                  <span style="display: block; color: #FFFFFF; text-shadow: 0 2px 10px rgba(0,0,0,0.45);">
                    Su oficina TIC tiene proyectos que liderar.
                  </span>
                  <span style="display: inline-block; margin-top: 4px; background-image: linear-gradient(90deg, #C084FC 0%, #A855F7 48%, #38BDF8 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: #C084FC;">
                    Y una operación que<br />no se detiene.
                  </span>
                </h1>

                <div style="height: 2px; width: 48px; border-radius: 9999px; background-image: linear-gradient(90deg, #A855F7 0%, #38BDF8 100%);"></div>
              </div>

              <p class="font-sans" style="margin: 0; font-size: 14.5px; line-height: 1.6; font-weight: 400; color: #E9D5FF; text-shadow: 0 1px 6px rgba(0,0,0,0.5);">
                Descubra cómo los Trabajadores Cognitivos pueden ampliar las capacidades de su equipo y apoyar actividades institucionales bajo supervisión humana.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- BLOQUE 2 · EL CONCEPTO (EmailTransformationBlock)        -->
      <!-- ======================================================== -->
      <div class="block-card">
        <div
          class="block-pad"
          style="padding: 32px 48px; background-color: ${isDark ? "#120A24" : "#FFFFFF"}; color: ${textMain};"
        >
          <div style="max-width: 650px; margin: 0 auto;">
            <!-- Encabezado editorial limpio -->
            <div style="text-align: center; max-width: 600px; margin: 0 auto 20px auto;">
              <h2
                class="font-heading nowrap-desktop"
                style="margin: 0 0 8px 0; font-size: 23px; font-weight: 800; letter-spacing: -0.025em; line-height: 1.24; color: ${textMain}; white-space: nowrap;"
              >
                Ampliar la capacidad,
                <span style="display: inline-block; ${textGradientCss}">
                  no repartir herramientas.
                </span>
              </h2>

              <p
                class="font-sans"
                style="margin: 0; font-size: 14.5px; line-height: 1.62; color: ${isDark ? "#D4C7EC" : "#4B5563"};"
              >
                En Glocation diseñamos
                <strong style="font-weight: 700; color: ${textMain};">Trabajadores Cognitivos</strong>
                para incorporarse a procesos organizacionales con funciones definidas, conocimiento institucional y supervisión humana.
              </p>
            </div>

            <!-- Diagrama comparativo: Uso aislado vs Transformación Cognitiva -->
            <div class="b2-row">
              <!-- COLUMNA IZQUIERDA: USO AISLADO -->
              <div
                class="b2-left"
                style="border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 12px; border: 1px solid ${isDark ? "#2A1B47" : "#E4E1EC"}; background-color: ${isDark ? "rgba(23, 14, 43, 0.75)" : "#F7F6FA"};"
              >
                <div>
                  <span
                    class="font-heading"
                    style="display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#94A3B8" : "#64748B"};"
                  >
                    USO AISLADO
                  </span>
                  <h3
                    class="font-heading"
                    style="margin: 2px 0 0 0; font-size: 14px; font-weight: 700; line-height: 1.35; color: ${isDark ? "#E2E8F0" : "#334155"};"
                  >
                    Herramientas individuales
                  </h3>
                </div>

                <div
                  style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 12px; border: 1px dashed ${isDark ? "#334155" : "#CBD5E1"}; background-color: ${isDark ? "#120B22" : "#FFFFFF"}; padding: 14px 12px; gap: 10px;"
                >
                  <!-- Logos circulares + flecha + humano -->
                  <div style="display: flex; align-items: center; justify-content: space-around; width: 100%; margin: auto 0;">
                    ${[
      { name: "ChatGPT", src: chatgptLogoUrl },
      { name: "Gemini", src: geminiLogoUrl },
      { name: "Excel", src: excelLogoUrl },
    ]
      .map(
        (tool) => `
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                      <span style="position: relative; display: flex; width: 32px; height: 32px; align-items: center; justify-content: center; border-radius: 9999px; overflow: hidden;">
                        <img
                          src="${tool.src}"
                          alt="${tool.name}"
                          width="32"
                          height="32"
                          style="width: 100%; height: 100%; object-fit: cover; transform: scale(1.12); display: block;"
                        />
                      </span>
                      <!-- ArrowDown Lucide SVG -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
                      </svg>
                      <span style="display: flex; width: 28px; height: 28px; align-items: center; justify-content: center; border-radius: 9999px; background-color: ${isDark ? "#1E293B" : "#F1F5F9"}; color: ${isDark ? "#CBD5E1" : "#475569"};">
                        <!-- User Lucide SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                        </svg>
                      </span>
                    </div>`
      )
      .join("")}
                  </div>

                  <p
                    class="font-sans"
                    style="margin: 0; font-size: 11px; text-align: center; line-height: 1.35; color: ${isDark ? "#CBD5E1" : "#475569"};"
                  >
                    Consultas, documentos y seguimientos gestionados por separado.
                  </p>
                </div>
              </div>

              <!-- Flecha de evolución -->
              <div style="display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <div style="display: flex; width: 32px; height: 32px; align-items: center; justify-content: center; border-radius: 9999px; background-color: #7C3AED; color: #FFFFFF; box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </div>
              </div>

              <!-- COLUMNA DERECHA: TRANSFORMACIÓN COGNITIVA -->
              <div
                class="b2-right"
                style="position: relative; overflow: hidden; border-radius: 16px; border: 2px solid ${isDark ? "#7C3AED" : "#C4B5FD"}; padding: 16px; display: flex; flex-direction: column; gap: 12px; background: ${isDark ? "linear-gradient(135deg, #24124D 0%, #1D0E3D 50%, #2E1660 100%)" : "linear-gradient(135deg, #F6F0FF 0%, #FAF7FF 50%, #EFE4FF 100%)"}; box-shadow: ${isDark ? "0 10px 28px rgba(124,58,237,0.22)" : "0 10px 28px rgba(124,58,237,0.12)"};"
              >
                <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;">
                  <div>
                    <span
                      class="font-heading"
                      style="display: inline-flex; align-items: center; gap: 6px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#D8B4FE" : "#6D28D9"};"
                    >
                      <span style="width: 6px; height: 6px; border-radius: 9999px; background-color: #7C3AED; display: inline-block;"></span>
                      TRANSFORMACIÓN COGNITIVA
                    </span>
                    <h3
                      class="font-heading"
                      style="margin: 2px 0 0 0; font-size: 14px; font-weight: 800; line-height: 1.35; color: ${textMain};"
                    >
                      IA integrada a un proceso
                    </h3>
                  </div>
                  <span
                    class="font-heading"
                    style="border-radius: 9999px; padding: 2px 10px; font-size: 10px; font-weight: 800; background-color: #7C3AED; color: #FFFFFF; flex-shrink: 0;"
                  >
                    GLocation
                  </span>
                </div>

                <!-- Flujo limpio de 3 nodos centrado -->
                <div
                  style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 12px; border: 1px solid ${isDark ? "#581C87" : "#C4B5FD"}; background-color: ${isDark ? "rgba(21, 10, 43, 0.95)" : "#FFFFFF"}; padding: 14px; gap: 12px;"
                >
                  <div style="display: flex; align-items: center; justify-content: space-around; width: 100%; gap: 4px; margin: auto 0;">
                    <!-- Nodo 1: Proceso TIC -->
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex-shrink: 0;">
                      <span
                        style="display: flex; width: 40px; height: 40px; align-items: center; justify-content: center; border-radius: 9999px; border: 1px solid ${isDark ? "#58329E" : "#DDD6FE"}; background-color: ${isDark ? "#2A1554" : "#F3E8FF"}; color: ${isDark ? "#D8B4FE" : "#7C3AED"};"
                      >
                        <!-- Workflow Lucide SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>
                        </svg>
                      </span>
                      <span style="font-size: 10.5px; font-weight: 600; margin-top: 6px; line-height: 1.2; white-space: nowrap; color: ${isDark ? "#F3E8FF" : "#140E24"};">
                        Proceso TIC
                      </span>
                    </div>

                    <!-- ArrowRight -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${isDark ? "#C084FC" : "#7C3AED"}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>

                    <!-- Nodo 2: Trabajador Cognitivo -->
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex-shrink: 0;">
                      <span style="position: relative; display: flex; width: 40px; height: 40px; align-items: center; justify-content: center; border-radius: 9999px; background-color: #FFFFFF; border: 2px solid #7C3AED; box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.20); overflow: hidden;">
                        <img
                          src="${processImgUrl}"
                          alt="Trabajador Cognitivo"
                          width="40"
                          height="40"
                          style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;"
                        />
                      </span>
                      <span style="font-size: 10.5px; font-weight: 800; margin-top: 6px; line-height: 1.2; white-space: nowrap; color: ${isDark ? "#D8B4FE" : "#6D28D9"};">
                        Trabajador Cognitivo
                      </span>
                    </div>

                    <!-- ArrowRight -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${isDark ? "#C084FC" : "#7C3AED"}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>

                    <!-- Nodo 3: Equipo TIC -->
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex-shrink: 0;">
                      <span style="position: relative; display: flex; width: 40px; height: 40px; align-items: center; justify-content: center; border-radius: 9999px; background-color: ${isDark ? "#2A1554" : "#F3E8FF"}; border: 2px solid ${isDark ? "#C084FC" : "#A855F7"}; overflow: hidden;">
                        <img
                          src="${teamImgUrl}"
                          alt="Equipo TIC"
                          width="40"
                          height="40"
                          style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;"
                        />
                      </span>
                      <span style="font-size: 10.5px; font-weight: 800; margin-top: 6px; line-height: 1.2; white-space: nowrap; color: ${textMain};">
                        Equipo TIC
                      </span>
                    </div>
                  </div>

                  <p
                    class="font-sans"
                    style="margin: 0; font-size: 11px; text-align: center; line-height: 1.35; color: ${isDark ? "rgba(233, 213, 255, 0.9)" : "#4B5563"};"
                  >
                    Un Trabajador Cognitivo apoya actividades definidas con información autorizada y supervisión humana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- BLOQUE 3 · APLICACIÓN PRÁCTICA (EmailApplicationsBlock)  -->
      <!-- ======================================================== -->
      <div class="block-card">
        <div
          class="block-pad"
          style="padding: 32px 48px; background: ${isDark ? "linear-gradient(180deg, #130C26 0%, #11152E 50%, #130A26 100%)" : "linear-gradient(180deg, #F8FAFC 0%, #F4F7FB 50%, #F5F2FF 100%)"};"
        >
          <div style="max-width: 650px; margin: 0 auto;">
            <!-- Encabezado Editorial + Situación reconocible -->
            <div style="margin-bottom: 20px;">
              <h2
                class="font-heading"
                style="margin: 0 0 10px 0; font-size: 26px; font-weight: 800; letter-spacing: -0.025em; line-height: 1.2; color: ${textMain};"
              >
                Imagine esta posibilidad
                <span style="display: inline-block; ${textGradientCss}">
                  en su oficina
                </span>
              </h2>

              <p
                class="font-sans nowrap-desktop"
                style="margin: 0; font-size: 13.5px; line-height: 1.5; white-space: nowrap; color: ${isDark ? "#CBD5E1" : "#334155"};"
              >
                Necesita conocer qué compromisos y entregables de sus proyectos tecnológicos requieren revisión.
              </p>
            </div>

            <!-- Composición protagonista (12 cols) -->
            <div class="b3-grid">
              <!-- Elemento Protagonista (7 cols) -->
              <div
                class="b3-left"
                style="border-radius: 16px; border: 1px solid ${isDark ? "#1E3A5F" : "#CBD5E1"}; background-color: ${isDark ? "rgba(15, 23, 42, 0.95)" : "#FFFFFF"}; box-shadow: ${isDark ? "none" : "0 8px 24px rgba(15,23,42,0.06)"}; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;"
              >
                <!-- Barra superior de ventana -->
                <div
                  style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 16px; border-bottom: 1px solid ${isDark ? "#233554" : "#E2E8F0"}; background: ${isDark ? "#162038" : "linear-gradient(90deg, #EFF6FF 0%, #F1F5F9 50%, #F5F3FF 100%)"};"
                >
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="width: 10px; height: 10px; border-radius: 9999px; background-color: #7C3AED; display: inline-block;"></span>
                      <span style="width: 10px; height: 10px; border-radius: 9999px; background-color: #0EA5E9; display: inline-block;"></span>
                      <span style="width: 10px; height: 10px; border-radius: 9999px; background-color: #94A3B8; display: inline-block;"></span>
                    </div>
                    <span
                      class="font-heading"
                      style="display: inline-flex; align-items: center; gap: 4px; font-size: 10.5px; font-weight: 700; color: ${isDark ? "#CBD5E1" : "#334155"};"
                    >
                      <!-- Sparkles Lucide SVG -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                      </svg>
                      Ejemplo Oficina TIC
                    </span>
                  </div>
                </div>

                <!-- Cuerpo del caso concreto -->
                <div style="padding: 20px; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; flex: 1;">
                  <div
                    style="border-radius: 12px; border: 1px solid ${isDark ? "#23395B" : "#E2E8F0"}; background-color: ${isDark ? "#152238" : "#F8FAFC"}; padding: 12px; display: flex; align-items: flex-start; gap: 12px;"
                  >
                    <div
                      style="display: flex; width: 36px; height: 36px; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid ${isDark ? "#0284C7" : "#BAE6FD"}; background-color: ${isDark ? "rgba(12, 74, 110, 0.6)" : "#E0F2FE"}; color: ${isDark ? "#38BDF8" : "#0284C7"}; flex-shrink: 0; margin-top: 2px;"
                    >
                      <!-- FileText Lucide SVG -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                      </svg>
                    </div>

                    <div style="flex: 1; min-width: 0;">
                      <h3
                        class="font-heading"
                        style="margin: 0; font-size: 13.5px; font-weight: 800; line-height: 1.25; color: ${isDark ? "#FFFFFF" : "#0F172A"};"
                      >
                        Seguimiento de proyectos tecnológicos
                      </h3>
                      <p
                        class="font-sans"
                        style="margin: 4px 0 0 0; font-size: 11.5px; line-height: 1.42; color: ${isDark ? "#CBD5E1" : "#475569"};"
                      >
                        Un Trabajador Cognitivo podría organizar la información registrada sobre compromisos, entregables y fechas de los proyectos institucionales.
                      </p>
                    </div>
                  </div>

                  <!-- Tabla Resumen de seguimiento -->
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; padding: 0 4px;">
                      <span
                        class="font-heading"
                        style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#7DD3FC" : "#0369A1"};"
                      >
                        Resumen de seguimiento
                      </span>
                      <span
                        class="font-heading"
                        style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#94A3B8" : "#64748B"};"
                      >
                        Estado
                      </span>
                    </div>

                    <!-- Fila 1 -->
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; border-radius: 8px; padding: 8px 12px; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; background-color: ${isDark ? "#131D31" : "#F8FAFC"};">
                      <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                          <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                        </svg>
                        <span class="font-sans" style="font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};">
                          Compromisos pendientes
                        </span>
                      </div>
                      <span class="font-heading" style="display: inline-flex; align-items: center; border-radius: 9999px; padding: 2px 10px; font-size: 10.5px; font-weight: 700; border: 1px solid ${isDark ? "#0284C7" : "#7DD3FC"}; background-color: ${isDark ? "rgba(12, 74, 110, 0.7)" : "#E0F2FE"}; color: ${isDark ? "#E0F2FE" : "#0369A1"}; white-space: nowrap;">
                        Por revisar
                      </span>
                    </div>

                    <!-- Fila 2 -->
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; border-radius: 8px; padding: 8px 12px; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; background-color: ${isDark ? "#131D31" : "#F8FAFC"};">
                      <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EA580C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                          <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                        </svg>
                        <span class="font-sans" style="font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};">
                          Entregables próximos
                        </span>
                      </div>
                      <span class="font-heading" style="display: inline-flex; align-items: center; border-radius: 9999px; padding: 2px 10px; font-size: 10.5px; font-weight: 700; border: 1px solid ${isDark ? "#F97316" : "#FDBA74"}; background-color: ${isDark ? "rgba(67, 20, 7, 0.8)" : "#FFF7ED"}; color: ${isDark ? "#FFEDD5" : "#C2410C"}; white-space: nowrap;">
                        Por verificar
                      </span>
                    </div>

                    <!-- Fila 3 -->
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; border-radius: 8px; padding: 8px 12px; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; background-color: ${isDark ? "#131D31" : "#F8FAFC"};">
                      <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                          <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                        </svg>
                        <span class="font-sans" style="font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};">
                          Responsables y fechas
                        </span>
                      </div>
                      <span class="font-heading" style="display: inline-flex; align-items: center; border-radius: 9999px; padding: 2px 10px; font-size: 10.5px; font-weight: 700; border: 1px solid ${isDark ? "#10B981" : "#6EE7B7"}; background-color: ${isDark ? "rgba(6, 78, 59, 0.8)" : "#ECFDF5"}; color: ${isDark ? "#D1FAE5" : "#047857"}; white-space: nowrap;">
                        Identificados
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Columna derecha estructurada (5 cols) -->
              <div
                class="b3-right"
                style="border-radius: 16px; border: 1px solid ${isDark ? "#283558" : "#CBD5E1"}; background-color: ${isDark ? "rgba(19, 24, 46, 0.9)" : "#FFFFFF"}; box-shadow: ${isDark ? "none" : "0 8px 24px rgba(15,23,42,0.06)"}; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; gap: 14px;"
              >
                <div>
                  <div
                    style="display: flex; align-items: center; gap: 8px; padding-bottom: 10px; margin-bottom: 12px; border-bottom: 1px solid ${isDark ? "#233252" : "#E2E8F0"};"
                  >
                    <span
                      style="position: relative; display: flex; width: 40px; height: 40px; align-items: center; justify-content: center; border-radius: 9999px; background-color: #FFFFFF; border: 2px solid #0284C7; box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.15); overflow: hidden; flex-shrink: 0;"
                    >
                      <img
                        src="${processImgUrl}"
                        alt="Trabajador Cognitivo"
                        width="40"
                        height="40"
                        style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;"
                      />
                    </span>
                    <div style="min-width: 0; padding-right: 4px;">
                      <span
                        class="font-heading"
                        style="display: block; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: ${isDark ? "#38BDF8" : "#0284C7"};"
                      >
                        Valor para su gestión
                      </span>
                      <p
                        class="font-heading"
                        style="margin: 0; font-size: 12px; font-weight: 800; letter-spacing: -0.025em; line-height: 1.25; white-space: nowrap; color: ${isDark ? "#FFFFFF" : "#0F172A"};"
                      >
                        ¿Qué gana el equipo TIC?
                      </p>
                    </div>
                  </div>

                  <p
                    class="font-sans"
                    style="margin: 0; font-size: 12px; line-height: 1.5; color: ${isDark ? "#E2E8F0" : "#334155"};"
                  >
                    Una
                    <strong class="font-heading" style="font-weight: 800; color: ${isDark ? "#FFFFFF" : "#0F172A"};">base de información organizada</strong>
                    para preparar el seguimiento, revisar pendientes y concentrar esfuerzos en las decisiones que requieren criterio humano.
                  </p>
                </div>

                <!-- 3 bloques alineados de 2 líneas -->
                <div style="display: flex; flex-direction: column; gap: 8px; margin-top: auto;">
                  <!-- Item 1: Información autorizada -->
                  <div
                    style="display: flex; align-items: center; gap: 10px; border-radius: 12px; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; background-color: ${isDark ? "rgba(15, 23, 42, 0.85)" : "#F8FAFC"}; padding: 8px 12px;"
                  >
                    <span
                      style="display: flex; width: 28px; height: 28px; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid ${isDark ? "#0284C7" : "#BAE6FD"}; background-color: ${isDark ? "rgba(12, 74, 110, 0.7)" : "#E0F2FE"}; color: ${isDark ? "#38BDF8" : "#0284C7"}; flex-shrink: 0;"
                    >
                      <!-- FolderSearch Lucide SVG -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"/><path d="m21 21-1.9-1.9"/><circle cx="17" cy="17" r="3"/>
                      </svg>
                    </span>
                    <span class="font-sans" style="font-size: 11px; line-height: 1.35; color: ${isDark ? "#CBD5E1" : "#334155"}; min-width: 0;">
                      <strong class="font-heading" style="display: block; font-weight: 800; white-space: nowrap; color: ${isDark ? "#FFFFFF" : "#0F172A"};">
                        Información autorizada:
                      </strong>
                      <span style="display: block; white-space: nowrap;">fuentes oficiales de su entidad.</span>
                    </span>
                  </div>

                  <!-- Item 2: Revisión humana -->
                  <div
                    style="display: flex; align-items: center; gap: 10px; border-radius: 12px; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; background-color: ${isDark ? "rgba(15, 23, 42, 0.85)" : "#F8FAFC"}; padding: 8px 12px;"
                  >
                    <span
                      style="display: flex; width: 28px; height: 28px; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid ${isDark ? "#581C87" : "#DDD6FE"}; background-color: ${isDark ? "#26144C" : "#F3EEFF"}; color: ${isDark ? "#C084FC" : "#7C3AED"}; flex-shrink: 0;"
                    >
                      <!-- UserCheck Lucide SVG -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
                      </svg>
                    </span>
                    <span class="font-sans" style="font-size: 11px; line-height: 1.35; color: ${isDark ? "#CBD5E1" : "#334155"}; min-width: 0;">
                      <strong class="font-heading" style="display: block; font-weight: 800; white-space: nowrap; color: ${isDark ? "#FFFFFF" : "#0F172A"};">
                        Revisión humana:
                      </strong>
                      <span style="display: block; white-space: nowrap;">insumos listos para validar.</span>
                    </span>
                  </div>

                  <!-- Item 3: Destaque de cierre en Primary -->
                  <div
                    style="display: flex; align-items: center; gap: 10px; border-radius: 12px; border: 1px solid ${isDark ? "#7C3AED" : "#C4B5FD"}; background: ${isDark ? "rgba(46, 22, 96, 0.7)" : "linear-gradient(90deg, #F5F3FF 0%, #EDE9FE 100%)"}; padding: 8px 12px;"
                  >
                    <span
                      style="display: flex; width: 28px; height: 28px; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid ${isDark ? "#A855F7" : "#C4B5FD"}; background-color: ${isDark ? "#3B1D6E" : "#FFFFFF"}; color: ${isDark ? "#E9D5FF" : "#7C3AED"}; flex-shrink: 0;"
                    >
                      <!-- ShieldCheck Lucide SVG -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
                      </svg>
                    </span>
                    <span
                      class="font-heading"
                      style="font-size: 11px; font-weight: 800; line-height: 1.35; color: ${isDark ? "#FFFFFF" : "#4C1D95"}; min-width: 0;"
                    >
                      <span style="display: block; white-space: nowrap;">Su equipo conserva el</span>
                      <span style="display: block; white-space: nowrap;">criterio y las decisiones.</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- BLOQUE 4 · CTA (EmailCtaBlock)                           -->
      <!-- ======================================================== -->
      <div class="block-card">
        <div
          class="block-pad"
          style="padding: 32px 48px 40px 48px; background-color: ${isDark ? "#120A24" : "#FFFFFF"};"
        >
          <div style="max-width: 650px; margin: 0 auto;">
            <div
              style="position: relative; overflow: hidden; border-radius: 16px; color: #FFFFFF; padding: 40px; text-align: center; background-color: ${isDark ? "#231048" : "#1A0D36"}; background-image: ${isDark ? "linear-gradient(135deg, #231048 0%, #3B197A 50%, #5B21B6 100%)" : "linear-gradient(135deg, #1A0D36 0%, #2D145E 50%, #4C1D95 100%)"}; ${isDark ? "border: 1px solid rgba(109, 40, 217, 0.6);" : ""}"
            >
              <!-- Acento luminoso sutil -->
              <div
                style="pointer-events: none; position: absolute; top: -80px; left: 50%; transform: translateX(-50%); height: 176px; width: 288px; border-radius: 9999px; background-color: rgba(168, 85, 247, 0.20); filter: blur(48px);"
              ></div>

              <div style="position: relative; z-index: 10; max-width: 590px; margin: 0 auto;">
                <h2
                  class="font-heading"
                  style="margin: 0 0 20px 0; font-size: 23px; font-weight: 800; letter-spacing: -0.025em; color: #FFFFFF; line-height: 1.26;"
                >
                  ¿Y si exploramos dónde podría<br />aportar valor en su entidad?
                </h2>

                <p
                  class="font-sans"
                  style="margin: 0 0 20px 0; font-size: 13.5px; line-height: 1.6; color: rgba(237, 233, 254, 0.95);"
                >
                  <span class="nowrap-desktop" style="display: block; white-space: nowrap;">
                    Le proponemos una reunión virtual de 20 minutos para conocer sus necesidades
                  </span>
                  <span class="nowrap-desktop" style="display: block; white-space: nowrap;">
                    e identificar algún proceso en el que tenga sentido evaluar un Trabajador Cognitivo.
                  </span>
                </p>

                <!-- Botón único CTA -->
                <div style="padding-top: 4px; margin-bottom: 20px;">
                  <a
                    href="${mailtoLink}"
                    class="font-heading"
                    style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; border-radius: 9999px; background-color: #FFFFFF; color: #4C1D95; font-weight: 800; font-size: 14.5px; padding: 14px 28px; box-shadow: 0 8px 22px rgba(15,7,32,0.3); text-decoration: none;"
                  >
                    <!-- Mail Lucide SVG -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span style="color: #4C1D95; font-weight: 800;">
                      Explorar una oportunidad en mi oficina TIC
                    </span>
                    <!-- ArrowRight Lucide SVG -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </a>
                </div>

                <!-- Texto secundario en 2 líneas -->
                <p
                  class="font-sans"
                  style="margin: 0; font-size: 12.5px; line-height: 1.5; color: rgba(221, 214, 254, 0.90);"
                >
                  <span class="nowrap-desktop" style="display: block; white-space: nowrap;">
                    Responda a este correo o deje su información en el formulario
                  </span>
                  <span class="nowrap-desktop" style="display: block; white-space: nowrap;">
                    y le compartiré dos opciones de horario.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- BLOQUE 5 · FIRMA COMERCIAL (EmailFooterBlock)            -->
      <!-- ======================================================== -->
      <div class="block-card">
        <footer
          style="position: relative; overflow: hidden; padding: 24px 32px; background: ${isDark ? "linear-gradient(90deg, #090514 0%, #120A28 50%, #1A0E3A 100%)" : "#FFFFFF"}; color: ${textMain};"
        >
          <div style="position: relative; z-index: 10; max-width: 600px; margin: 0 auto;">
            <div class="footer-row">
              <!-- Izquierda: Fotografía circular + datos comerciales -->
              <div class="footer-left">
                <div style="position: relative; flex-shrink: 0;">
                  <div
                    style="width: 78px; height: 78px; border-radius: 9999px; overflow: hidden; border: 2px solid #A855F7; box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.15), 0 4px 14px rgba(124, 58, 237, 0.18); background-color: ${isDark ? "#150B2E" : "#F5F0FF"}; display: flex; align-items: center; justify-content: center;"
                  >
                    <img
                      src="${senderPhotoUrl}"
                      alt="${config.senderName}"
                      width="78"
                      height="78"
                      style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;"
                    />
                  </div>
                </div>

                <div style="max-width: 350px;">
                  <div
                    class="font-heading"
                    style="font-size: 15px; font-weight: 800; line-height: 1.25; color: ${textMain}; margin-bottom: 2px;"
                  >
                    ${config.senderName}
                  </div>
                  <div
                    class="font-sans"
                    style="font-size: 11.5px; font-weight: 600; line-height: 1.35; color: ${isDark ? "#C4B5FD" : "#6D28D9"}; margin-bottom: 4px;"
                  >
                    ${config.senderRole}
                  </div>
                  <p
                    class="font-sans"
                    style="margin: 0; font-size: 11.5px; font-weight: 400; line-height: 1.4; color: ${isDark ? "rgba(237, 233, 254, 0.9)" : "#4B5563"};"
                  >
                    <span class="nowrap-desktop" style="white-space: nowrap;">Estaré pendiente de su respuesta para coordinar</span><br />
                    <span class="nowrap-desktop" style="white-space: nowrap;">una reunión con nuestro equipo.</span>
                  </p>
                </div>
              </div>

              <!-- Derecha: Logotipo oficial de Glocation + lema + enlaces -->
              <div class="footer-right">
                <img
                  src="${footerLogoUrl}"
                  alt="Glocation"
                  style="height: 48px; width: auto; object-fit: contain; display: block;"
                />
                <span
                  class="font-sans"
                  style="font-size: 11.5px; font-weight: 500; letter-spacing: 0.025em; line-height: 1.35; color: ${isDark ? "#D8B4FE" : "#5B21B6"};"
                >
                  ${config.companyTagline}
                </span>

                <div
                  class="font-sans"
                  style="display: flex; align-items: center; justify-content: flex-end; gap: 12px; padding-top: 4px; font-size: 11.5px; color: ${isDark ? "#C4B5FD" : "#6D28D9"};"
                >
                  ${trimmedWebsite
      ? `<a
                          href="${trimmedWebsite}"
                          target="_blank"
                          rel="noopener noreferrer"
                          style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: ${isDark ? "#C4B5FD" : "#6D28D9"}; text-decoration: none;"
                        >
                          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${isDark ? "#C084FC" : "#7C3AED"}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>
                          <span>${cleanDomain}</span>
                        </a>`
      : ""
    }
                  ${trimmedWebsite && trimmedLinkedin
      ? `<span style="color: #A855F7;">&middot;</span>`
      : ""
    }
                  ${trimmedLinkedin
      ? `<a
                          href="${trimmedLinkedin}"
                          target="_blank"
                          rel="noopener noreferrer"
                          style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: ${isDark ? "#C4B5FD" : "#6D28D9"}; text-decoration: none;"
                        >
                          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="${isDark ? "#C084FC" : "#7C3AED"}" style="flex-shrink: 0;">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                          <span>GLocation</span>
                        </a>`
      : ""
    }
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  </div>
</body>
</html>`;
}
