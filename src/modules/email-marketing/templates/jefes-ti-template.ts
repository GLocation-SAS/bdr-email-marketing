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
  heroAgentImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-blocks/01-glocation-bloque-hero-claro.png`,
  processImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-blocks/02-glocation-bloque-concepto-claro.png`,
  teamImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-blocks/03-glocation-bloque-aplicacion-claro.png`,
  ctaImageUrl: `${PUBLIC_GITHUB_PAGES_BASE_URL}/email-blocks/04-glocation-bloque-cta-claro.png`,
  publicBaseUrl: PUBLIC_GITHUB_PAGES_BASE_URL,
  theme: "light",
};

/**
 * Genera el documento HTML con la estructura de 5 bloques usando las imágenes PNG 2x HD
 * alojadas públicamente en GitHub Pages (`https://glocation-sas.github.io/bdr-email-marketing/email-blocks/...`).
 * Garantiza fidelidad visual 100% idéntica en cualquier cliente de correo (Gmail, Outlook, HubSpot, Brevo, etc.)
 * sin desintegrarse ni apilar columnas por separado.
 */
export function generateJefesTiEmailHtml(
  customConfig?: JefesTiEmailConfig
): string {
  const baseUrl = (
    customConfig?.publicBaseUrl || PUBLIC_GITHUB_PAGES_BASE_URL
  ).replace(/\/$/, "");
  const isDark = customConfig?.theme === "dark";
  const suffix = isDark ? "oscuro" : "claro";

  const config: Required<JefesTiEmailConfig> = {
    ...defaultJefesTiEmailConfig,
    ...customConfig,
  };

  const blocksBase = `${baseUrl}/email-blocks`;

  const block1HeroUrl = `${blocksBase}/01-glocation-bloque-hero-${suffix}.png`;
  const block2ConceptUrl = `${blocksBase}/02-glocation-bloque-concepto-${suffix}.png`;
  const block3ApplicationUrl = `${blocksBase}/03-glocation-bloque-aplicacion-${suffix}.png`;
  const block4CtaUrl = `${blocksBase}/04-glocation-bloque-cta-${suffix}.png`;
  const block5FooterUrl = `${blocksBase}/05-glocation-bloque-firma-${suffix}.png`;

  const mailtoLink = `mailto:${config.recipientEmail}?subject=${encodeURIComponent(
    config.emailSubject
  )}&body=${encodeURIComponent(config.emailBody)}`;

  const trimmedWebsite = (config.websiteUrl || "https://glocation.co").trim();
  const outerBg = isDark ? "#0B0617" : "#F3F1F8";

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>GLocation — Trabajadores Cognitivos para Oficinas TIC</title>
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
        <table role="presentation" width="740" cellpadding="0" cellspacing="0" border="0" style="width: 740px; max-width: 100%; border-collapse: collapse; margin: 0 auto;">

          <!-- BLOQUE 1 · HERO — PROYECTOS Y OPERACIÓN TIC -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0;">
              <img
                src="${block1HeroUrl}"
                alt="GLocation — Su oficina TIC tiene proyectos que liderar. Y una operación que no se detiene."
                width="740"
                style="display: block; width: 740px; max-width: 100%; height: auto; border: 0;"
              />
            </td>
          </tr>

          <!-- BLOQUE 2 · EL CONCEPTO — AMPLIAR LA CAPACIDAD -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0;">
              <img
                src="${block2ConceptUrl}"
                alt="Ampliar la capacidad, no repartir herramientas — Uso aislado vs. Transformación Cognitiva GLocation"
                width="740"
                style="display: block; width: 740px; max-width: 100%; height: auto; border: 0;"
              />
            </td>
          </tr>

          <!-- BLOQUE 3 · APLICACIÓN PRÁCTICA — SEGUIMIENTO DE PROYECTOS -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0;">
              <img
                src="${block3ApplicationUrl}"
                alt="Imagine esta posibilidad en su oficina — Seguimiento de proyectos tecnológicos y valor para el equipo TIC"
                width="740"
                style="display: block; width: 740px; max-width: 100%; height: auto; border: 0;"
              />
            </td>
          </tr>

          <!-- BLOQUE 4 · CTA — REUNIÓN VIRTUAL DE 20 MINUTOS (CON ENLACE MAILTO) -->
          <tr>
            <td align="center" style="padding: 0 0 6px 0;">
              <a
                href="${mailtoLink}"
                style="display: block; text-decoration: none; border: 0;"
              >
                <img
                  src="${block4CtaUrl}"
                  alt="¿Y si exploramos dónde podría aportar valor en su entidad? — Explorar una oportunidad en mi oficina TIC"
                  width="740"
                  style="display: block; width: 740px; max-width: 100%; height: auto; border: 0;"
                />
              </a>
            </td>
          </tr>

          <!-- BLOQUE 5 · FIRMA COMERCIAL — PAULA ROZO · GLOCATION (CON ENLACE WEB) -->
          <tr>
            <td align="center" style="padding: 0;">
              <a
                href="${trimmedWebsite}"
                target="_blank"
                rel="noopener noreferrer"
                style="display: block; text-decoration: none; border: 0;"
              >
                <img
                  src="${block5FooterUrl}"
                  alt="Paula Rozo — BDR | Business Development Representative · GLocation (glocation.co)"
                  width="740"
                  style="display: block; width: 740px; max-width: 100%; height: auto; border: 0;"
                />
              </a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
