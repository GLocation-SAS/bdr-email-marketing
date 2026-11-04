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
  theme?: "light" | "dark";
}

export const defaultJefesTiEmailConfig: Required<JefesTiEmailConfig> = {
  recipientEmail: "contacto@glocation.com",
  emailSubject:
    "Sí, me interesa - Reunión 20 min Trabajadores Cognitivos (Oficina TIC)",
  emailBody:
    "Sí, me interesa.\n\nHola Paula, me gustaría recibir dos opciones de horario para la reunión virtual de 20 minutos sobre Trabajadores Cognitivos.\n\nSaludos cordiales,",
  senderPhotoUrl: "/paula_natalia_rozo%20(4).png",
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
  unsubscribeUrl: "/email-marketing/baja",
  logoHeroUrl: "/Logotipo%20%20SL%20Versi%C3%B3n%20Negativo%20(1).png",
  logoFooterUrl: "/Logotipo%20%20SL%20Versi%C3%B3n%20Negativo%20(1).png",
  heroAgentImageUrl: "/01.png",
  processImageUrl: "/1.png",
  teamImageUrl: "/2.png",
  ctaImageUrl: "/cta.png",
  theme: "light",
};

/**
 * Genera el HTML compatible con clientes de correo (Gmail, Outlook, Apple Mail)
 * de 740px con imágenes institucionales y color de acento (#7C3AED),
 * disponible en Versión Clara ('light') y Versión Oscura ('dark').
 */
export function generateJefesTiEmailHtml(
  customConfig?: JefesTiEmailConfig
): string {
  const config = { ...defaultJefesTiEmailConfig, ...customConfig };
  const isDark = config.theme === "dark";

  const heroLogo =
    customConfig?.logoHeroUrl ||
    "/Logotipo%20%20SL%20Versi%C3%B3n%20Negativo%20(1).png";
  const footerLogo =
    customConfig?.logoFooterUrl ||
    (isDark
      ? "/Logotipo%20%20SL%20Versi%C3%B3n%20Negativo%20(1).png"
      : "/LogotipoSL.svg");

  const mailtoLink = `mailto:${config.recipientEmail}?subject=${encodeURIComponent(
    config.emailSubject
  )}&body=${encodeURIComponent(config.emailBody)}`;

  const trimmedWebsite = (config.websiteUrl || "").trim();
  const trimmedLinkedin = (config.linkedinUrl || "").trim();
  const cleanDomain = trimmedWebsite
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const outerBg = isDark ? "#0B0617" : "#F3F1F8";
  const containerBg = isDark ? "#120A24" : "#FFFFFF";
  const containerBorder = isDark ? "#2D1E52" : "#E5E0F0";
  const textMain = isDark ? "#FFFFFF" : "#140E24";
  const textBody = isDark ? "#D4C7EC" : "#4B5563";
  const accentColor = isDark ? "#C084FC" : "#7C3AED";
  const dividerBorder = isDark ? "#261746" : "#EFEBF7";

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Glocation — Trabajadores Cognitivos para Oficinas TIC</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
  <style type="text/css">
    body, table, td, p, a {
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    .font-heading {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse;
    }
    img {
      border: 0;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    @media only screen and (max-width: 760px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
      .mobile-pad { padding: 28px 20px !important; }
      .hero-title { font-size: 22px !important; line-height: 1.25 !important; }
      .section-title { font-size: 19px !important; line-height: 1.25 !important; }
      .stack-column { display: block !important; width: 100% !important; max-width: 100% !important; }
      .mobile-mb { margin-bottom: 16px !important; }
      .sig-col { display: block !important; width: 100% !important; text-align: center !important; padding-left: 0 !important; padding-right: 0 !important; border-left: none !important; }
      .sig-photo-cell { display: block !important; width: 100% !important; padding-right: 0 !important; padding-bottom: 10px !important; text-align: center !important; }
      .sig-photo-wrap { margin: 0 auto !important; }
      .sig-logo-img { margin: 12px auto 4px auto !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: ${outerBg};">
  <!-- Preheader oculto -->
  <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all;">
    Su oficina TIC tiene proyectos que liderar. Y una operación que no se detiene. Descubra cómo los Trabajadores Cognitivos pueden ampliar las capacidades de su equipo.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${outerBg};">
    <tr>
      <td align="center" style="padding: 24px 10px;">
        <!-- Contenedor Principal 740px -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="740" class="email-container" style="width: 740px; max-width: 740px; background-color: ${containerBg}; border-radius: 6px; overflow: hidden; border: 1px solid ${containerBorder};">

          <!-- ========================================== -->
          <!-- BLOQUE 1 · HERO                            -->
          <!-- ========================================== -->
          <tr>
            <td class="mobile-pad" background="${config.heroAgentImageUrl}" style="background-color: #0E0620; background-image: linear-gradient(90deg, #0D061F 0%, rgba(13,6,31,0.94) 36%, rgba(13,6,31,0.55) 56%, rgba(13,6,31,0.08) 78%, rgba(13,6,31,0) 100%), url('${config.heroAgentImageUrl}'); background-size: cover; background-position: right center; background-repeat: no-repeat; border-bottom: 1px solid #2D1E52; border-top: 4px solid #7C3AED; padding: 48px 44px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td class="stack-column" width="54%" valign="middle" style="padding-right: 12px;">
                    <img src="${heroLogo}" alt="Glocation" width="175" style="display: block; height: 56px; width: auto; margin-left: -10px; margin-bottom: 16px;" />

                    <h1 class="font-heading hero-title" style="margin: 0 0 12px 0; font-family: 'Montserrat', Arial, sans-serif; font-size: 25px; font-weight: 800; line-height: 1.22; color: #FFFFFF; letter-spacing: -0.3px;">
                      <span style="display: block; color: #FFFFFF;">Su oficina TIC tiene proyectos que liderar.</span>
                      <span style="display: block; color: #C084FC; margin-top: 4px;">Y una operación que<br />no se detiene.</span>
                    </h1>

                    <div style="width: 48px; height: 3px; background-color: #A855F7; border-radius: 3px; margin-bottom: 14px;"></div>

                    <p style="margin: 0; font-family: 'Nunito', Arial, sans-serif; font-size: 14.5px; line-height: 1.6; color: #E9D5FF; font-weight: 400;">
                      Descubra cómo los Trabajadores Cognitivos pueden ampliar las capacidades de su equipo y apoyar actividades institucionales bajo supervisión humana.
                    </p>
                  </td>
                  <td class="stack-column" width="46%" valign="middle">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========================================== -->
          <!-- BLOQUE 2 · EL CONCEPTO                     -->
          <!-- ========================================== -->
          <tr>
            <td class="mobile-pad" style="background-color: ${containerBg}; border-bottom: 1px solid ${dividerBorder}; padding: 40px 44px;">
              <div style="text-align: center; max-width: 600px; margin: 0 auto 24px auto;">
                <h2 class="font-heading section-title" style="margin: 0 0 10px 0; font-family: 'Montserrat', Arial, sans-serif; font-size: 22px; font-weight: 800; line-height: 1.24; color: ${textMain}; white-space: nowrap;">
                  Ampliar la capacidad, <span style="color: ${accentColor};">no repartir herramientas.</span>
                </h2>

                <p style="margin: 0; font-size: 14.5px; line-height: 1.62; color: ${textBody};">
                  En Glocation diseñamos <strong style="color: ${textMain};">Trabajadores Cognitivos</strong> para incorporarse a procesos organizacionales con funciones definidas, conocimiento institucional y supervisión humana.
                </p>
              </div>

              <!-- Diagrama comparativo simplificado -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <!-- Lado Izquierdo: Herramientas individuales -->
                  <td class="stack-column mobile-mb" width="38%" valign="top">
                    <div style="background-color: ${isDark ? "#170E2B" : "#F7F6FA"}; border: 1px solid ${isDark ? "#2A1B47" : "#E4E1EC"}; border-radius: 12px; padding: 14px;">
                      <div class="font-heading" style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94A3B8; margin-bottom: 2px;">
                        Uso aislado
                      </div>
                      <div class="font-heading" style="font-size: 13.5px; font-weight: 700; color: ${isDark ? "#E2E8F0" : "#334155"}; margin-bottom: 12px;">
                        Herramientas individuales
                      </div>
                      <div style="background-color: ${isDark ? "#120B22" : "#FFFFFF"}; border: 1px dashed ${isDark ? "#334155" : "#CBD5E1"}; border-radius: 8px; padding: 12px; text-align: center;">
                        <div style="font-size: 13px; color: #94A3B8; margin-bottom: 6px;">
                          &#128295; &darr; &#128100; &nbsp;&nbsp; &#128172; &darr; &#128100; &nbsp;&nbsp; &#10024; &darr; &#128100;
                        </div>
                        <div style="font-size: 11px; color: #94A3B8; line-height: 1.35;">
                          Esfuerzos dispersos por persona
                        </div>
                      </div>
                    </div>
                  </td>

                  <!-- Flecha central -->
                  <td class="stack-column mobile-mb" width="6%" valign="middle" align="center" style="padding: 0 4px;">
                    <div style="width: 30px; height: 30px; line-height: 30px; border-radius: 50%; background-color: #7C3AED; color: #FFFFFF; font-size: 15px; font-weight: 800; text-align: center; margin: 0 auto;">
                      &rarr;
                    </div>
                  </td>

                  <!-- Lado Derecho: IA integrada a un proceso -->
                  <td class="stack-column" width="56%" valign="top">
                    <div style="background-color: ${isDark ? "#24124D" : "#F6F0FF"}; border: 2px solid ${isDark ? "#7C3AED" : "#C4B5FD"}; border-radius: 16px; padding: 14px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                        <tr>
                          <td>
                            <div class="font-heading" style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: ${isDark ? "#D8B4FE" : "#6D28D9"};">
                              &#9679; Transformación Cognitiva
                            </div>
                            <div class="font-heading" style="font-size: 14.5px; font-weight: 800; color: ${textMain};">
                              IA integrada a un proceso
                            </div>
                          </td>
                          <td align="right" valign="top">
                            <span class="font-heading" style="display: inline-block; background-color: #7C3AED; color: #FFFFFF; border-radius: 99px; padding: 2px 9px; font-size: 10px; font-weight: 800;">
                              GLocation
                            </span>
                          </td>
                        </tr>
                      </table>

                      <div style="background-color: ${isDark ? "#150A2B" : "#FFFFFF"}; border: 1px solid ${isDark ? "#581C87" : "#C4B5FD"}; border-radius: 8px; padding: 12px 10px; text-align: center;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td align="center" style="font-size: 10.5px; font-weight: 600; color: ${textMain}; white-space: nowrap;">
                              <div style="width: 34px; height: 34px; line-height: 34px; border-radius: 8px; background-color: ${isDark ? "#2A1554" : "#F3E8FF"}; border: 1px solid ${isDark ? "#58329E" : "#DDD6FE"}; margin: 0 auto 4px auto;">&#9881;</div>
                              Proceso TIC
                            </td>
                            <td align="center" style="color: ${accentColor}; font-weight: 800; font-size: 14px; padding: 0 4px;">&rarr;</td>
                            <td align="center" style="font-size: 10.5px; font-weight: 800; color: ${isDark ? "#D8B4FE" : "#6D28D9"}; white-space: nowrap;">
                              <img src="${config.processImageUrl}" alt="Trabajador Cognitivo" width="38" height="38" style="display: block; width: 38px; height: 38px; border-radius: 50%; border: 2px solid #7C3AED; object-fit: cover; margin: 0 auto 4px auto; background-color: #FFFFFF;" />
                              Trabajador Cognitivo
                            </td>
                            <td align="center" style="color: ${accentColor}; font-weight: 800; font-size: 14px; padding: 0 4px;">&rarr;</td>
                            <td align="center" style="font-size: 10.5px; font-weight: 800; color: ${textMain}; white-space: nowrap;">
                              <img src="${config.teamImageUrl}" alt="Equipo TIC" width="38" height="38" style="display: block; width: 38px; height: 38px; border-radius: 50%; border: 2px solid #A855F7; object-fit: cover; margin: 0 auto 4px auto; background-color: #F3E8FF;" />
                              Equipo TIC
                            </td>
                          </tr>
                        </table>
                        <div style="font-size: 11px; font-weight: 600; color: ${isDark ? "#C4B5FD" : "#6D28D9"}; margin-top: 8px; line-height: 1.35;">
                          Capacidad articulada en su operación
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========================================== -->
          <!-- BLOQUE 3 · APLICACIÓN PRÁCTICA             -->
          <!-- ========================================== -->
          <tr>
            <td class="mobile-pad" style="background-color: ${isDark ? "#150C2A" : "#F8F5FF"}; padding: 40px 44px;">
              <!-- Título y Situación -->
              <div style="margin-bottom: 22px;">
                <h2 class="font-heading section-title" style="margin: 0 0 8px 0; font-family: 'Montserrat', Arial, sans-serif; font-size: 24px; font-weight: 800; line-height: 1.22; color: ${textMain};">
                  Imagine esta posibilidad <span style="color: ${accentColor};">en su oficina</span>
                </h2>
                <p style="margin: 0; font-size: 13.5px; line-height: 1.5; color: ${isDark ? "#E9D5FF" : "#332947"}; white-space: nowrap;">
                  Necesita conocer qué compromisos y entregables de sus proyectos tecnológicos requieren revisión.
                </p>
              </div>

              <!-- Vista protagonista + Valor y gobierno para el equipo TIC -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 22px;">
                <tr>
                  <!-- Vista ilustrativa concreta del Resumen de seguimiento -->
                  <td class="stack-column mobile-mb" width="58%" valign="top" style="padding-right: 16px;">
                    <div style="background-color: ${isDark ? "#0F172A" : "#FFFFFF"}; border: 1px solid ${isDark ? "#1E3A5F" : "#CBD5E1"}; border-radius: 16px; overflow: hidden;">
                      <div style="background-color: ${isDark ? "#162038" : "#EFF6FF"}; padding: 8px 14px; border-bottom: 1px solid ${isDark ? "#233554" : "#E2E8F0"};">
                        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #7C3AED; margin-right: 4px;"></span>
                        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #0EA5E9; margin-right: 4px;"></span>
                        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #94A3B8; margin-right: 6px;"></span>
                        <span class="font-heading" style="font-size: 10.5px; font-weight: 700; color: ${isDark ? "#CBD5E1" : "#334155"};">&#10024; Ejemplo Oficina TIC</span>
                        <span class="font-heading" style="float: right; display: inline-block; background-color: ${isDark ? "#0C4A6E" : "#E0F2FE"}; border: 1px solid ${isDark ? "#0284C7" : "#7DD3FC"}; border-radius: 999px; padding: 1px 9px; font-size: 10px; font-weight: 700; color: ${isDark ? "#E0F2FE" : "#0369A1"};">
                          Para revisión
                        </span>
                      </div>

                      <div style="padding: 16px;">
                        <div style="background-color: ${isDark ? "#152238" : "#F8FAFC"}; border: 1px solid ${isDark ? "#23395B" : "#E2E8F0"}; border-radius: 12px; padding: 12px; margin-bottom: 12px;">
                          <div class="font-heading" style="font-size: 13.5px; font-weight: 800; color: ${textMain}; margin-bottom: 4px;">
                            Seguimiento de proyectos tecnológicos
                          </div>
                          <div style="font-size: 11.5px; line-height: 1.42; color: ${isDark ? "#CBD5E1" : "#475569"};">
                            Un Trabajador Cognitivo podría organizar la información registrada sobre compromisos, entregables y fechas de los proyectos institucionales.
                          </div>
                        </div>

                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td class="font-heading" style="font-size: 10.5px; font-weight: 800; text-transform: uppercase; color: ${isDark ? "#7DD3FC" : "#0369A1"}; padding: 0 4px 6px 4px;">Resumen de seguimiento</td>
                            <td align="right" class="font-heading" style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #64748B; padding: 0 4px 6px 4px;">Estado</td>
                          </tr>
                          <tr>
                            <td colspan="2" style="padding-bottom: 6px;">
                              <div style="background-color: ${isDark ? "#131D31" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 8px; padding: 7px 10px;">
                                <span style="font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};"><span style="color: #0284C7;">&#10003;</span>&nbsp; Compromisos pendientes</span>
                                <span class="font-heading" style="float: right; display: inline-block; background-color: ${isDark ? "#0C4A6E" : "#E0F2FE"}; border: 1px solid ${isDark ? "#0284C7" : "#7DD3FC"}; border-radius: 99px; padding: 1px 9px; font-size: 10px; font-weight: 700; color: ${isDark ? "#E0F2FE" : "#0369A1"};">Por revisar</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="padding-bottom: 6px;">
                              <div style="background-color: ${isDark ? "#131D31" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 8px; padding: 7px 10px;">
                                <span style="font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};"><span style="color: #EA580C;">&#10003;</span>&nbsp; Entregables próximos</span>
                                <span class="font-heading" style="float: right; display: inline-block; background-color: ${isDark ? "#431407" : "#FFF7ED"}; border: 1px solid ${isDark ? "#F97316" : "#FDBA74"}; border-radius: 99px; padding: 1px 9px; font-size: 10px; font-weight: 700; color: ${isDark ? "#FFEDD5" : "#C2410C"};">Por verificar</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="padding-bottom: 8px;">
                              <div style="background-color: ${isDark ? "#131D31" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 8px; padding: 7px 10px;">
                                <span style="font-size: 12px; font-weight: 600; color: ${isDark ? "#F1F5F9" : "#1E293B"};"><span style="color: #059669;">&#10003;</span>&nbsp; Responsables y fechas</span>
                                <span class="font-heading" style="float: right; display: inline-block; background-color: ${isDark ? "#064E3B" : "#ECFDF5"}; border: 1px solid ${isDark ? "#10B981" : "#6EE7B7"}; border-radius: 99px; padding: 1px 9px; font-size: 10px; font-weight: 700; color: ${isDark ? "#D1FAE5" : "#047857"};">Identificados</span>
                              </div>
                            </td>
                          </tr>
                        </table>

                        <div style="font-size: 10.5px; font-style: italic; color: #64748B;">
                          Representación conceptual, no resultado de una implementación real.
                        </div>
                      </div>
                    </div>
                  </td>

                  <!-- Columna derecha estructurada: ¿Qué gana el equipo TIC? + Gobierno y seguridad -->
                  <td class="stack-column" width="42%" valign="top">
                    <div style="background-color: ${isDark ? "#13182E" : "#FFFFFF"}; border: 1px solid ${isDark ? "#283558" : "#CBD5E1"}; border-radius: 16px; padding: 14px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid ${isDark ? "#233252" : "#E2E8F0"};">
                        <tr>
                          <td width="44" valign="middle" style="padding-right: 8px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; border: 2px solid #0284C7; overflow: hidden; background-color: #FFFFFF;">
                              <img src="${config.processImageUrl}" alt="Trabajador Cognitivo" width="36" height="36" style="display: block; width: 36px; height: 36px; object-fit: cover; object-position: top;" />
                            </div>
                          </td>
                          <td valign="middle">
                            <div class="font-heading" style="font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: ${isDark ? "#38BDF8" : "#0284C7"};">
                              Valor para su gestión
                            </div>
                            <div class="font-heading" style="font-size: 13px; font-weight: 800; line-height: 1.25; color: ${textMain};">
                              ¿Qué gana el equipo TIC?
                            </div>
                          </td>
                        </tr>
                      </table>

                      <p style="margin: 0 0 12px 0; font-size: 12px; line-height: 1.48; color: ${isDark ? "#E2E8F0" : "#334155"};">
                        Una <strong class="font-heading" style="color: ${textMain};">base de información organizada</strong> para preparar el seguimiento, revisar pendientes y concentrar esfuerzos en las decisiones que requieren criterio humano.
                      </p>

                      <div style="background-color: ${isDark ? "#0F172A" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 10px; padding: 8px 10px; margin-bottom: 8px; font-size: 11.5px; line-height: 1.35; color: ${isDark ? "#CBD5E1" : "#334155"};">
                        <strong class="font-heading" style="display: block; color: ${textMain};">Información autorizada:</strong>
                        fuentes oficiales de su entidad.
                      </div>

                      <div style="background-color: ${isDark ? "#0F172A" : "#F8FAFC"}; border: 1px solid ${isDark ? "#22324C" : "#E2E8F0"}; border-radius: 10px; padding: 8px 10px; margin-bottom: 8px; font-size: 11.5px; line-height: 1.35; color: ${isDark ? "#CBD5E1" : "#334155"};">
                        <strong class="font-heading" style="display: block; color: ${textMain};">Revisión humana:</strong>
                        insumos listos para validar.
                      </div>

                      <div class="font-heading" style="background-color: ${isDark ? "#0C4A6E" : "#E0F2FE"}; border: 1px solid ${isDark ? "#0284C7" : "#7DD3FC"}; border-radius: 10px; padding: 8px 10px; font-family: 'Montserrat', Arial, sans-serif; font-size: 11.5px; font-weight: 700; line-height: 1.35; color: ${isDark ? "#FFFFFF" : "#0F172A"};">
                        &#10003;&nbsp; Su equipo conserva el<br />criterio y las decisiones.
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========================================== -->
          <!-- BLOQUE 4 · CTA                             -->
          <!-- ========================================== -->
          <tr>
            <td class="mobile-pad" style="background-color: ${isDark ? "#120A24" : "#FFFFFF"}; padding: 16px 44px 36px 44px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #2D145E; background-image: linear-gradient(135deg, #1A0D36 0%, #2D145E 55%, #4C1D95 100%); border-radius: 16px;">
                <tr>
                  <td align="center" style="padding: 36px 32px;">
                    <h2 class="font-heading section-title" style="margin: 0 0 12px 0; font-family: 'Montserrat', Arial, sans-serif; font-size: 22px; font-weight: 800; line-height: 1.28; color: #FFFFFF;">
                      ¿Y si exploramos dónde podría<br />aportar valor en su entidad?
                    </h2>

                    <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #EDE9FE; max-width: 590px;">
                      Le proponemos una reunión virtual de 20 minutos para conocer sus necesidades<br />e identificar algún proceso en el que tenga sentido evaluar un Trabajador Cognitivo.
                    </p>

                    <!-- Botón único "Explorar una oportunidad en mi oficina TIC" -->
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto 16px auto;">
                      <tr>
                        <td align="center" bgcolor="#FFFFFF" style="border-radius: 999px;">
                          <a href="${mailtoLink}" class="font-heading" style="display: inline-block; padding: 13px 28px; font-family: 'Montserrat', Arial, sans-serif; font-size: 14px; font-weight: 800; color: #4C1D95 !important; text-decoration: none; border-radius: 999px; background-color: #FFFFFF;">
                            <span style="color: #4C1D95;">&#9993;&nbsp;&nbsp;Explorar una oportunidad en mi oficina TIC&nbsp;&nbsp;&rarr;</span>
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Texto secundario -->
                    <p style="margin: 0; font-size: 12.5px; line-height: 1.5; color: #DDD6FE;">
                      Responda a este correo o deje su información en el formulario y le compartiré dos opciones de horario.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========================================== -->
          <!-- FIRMA COMERCIAL B2B                        -->
          <!-- ========================================== -->
          <tr>
            <td class="mobile-pad" style="background-color: ${isDark ? "#090514" : "#FFFFFF"}; border-top: 1px solid ${isDark ? "#2A1B4E" : "#EAE6F3"}; padding: 22px 36px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                <tr>
                  <!-- Izquierda: Fotografía circular real de Paula Rozo + datos comerciales -->
                  <td class="sig-col" width="66%" valign="middle" style="padding-right: 16px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td class="sig-photo-cell" width="62" valign="middle" style="padding-right: 14px;">
                          <div class="sig-photo-wrap" style="width: 56px; height: 56px; border-radius: 50%; border: 2px solid #A855F7; overflow: hidden; background-color: ${isDark ? "#150B2E" : "#F5F0FF"}; text-align: center; line-height: 56px;">
                            <img src="${config.senderPhotoUrl}" alt="${config.senderName}" width="56" height="56" style="display: block; width: 56px; height: 56px; border-radius: 50%; object-fit: cover; object-position: top; color: ${isDark ? "#E9D5FF" : "#6D28D9"}; font-family: 'Montserrat', Arial, sans-serif; font-size: 13px; font-weight: 800;" />
                          </div>
                        </td>
                        <td class="sig-col" valign="middle" style="text-align: left;">
                          <div class="font-heading" style="font-family: 'Montserrat', Arial, sans-serif; font-size: 15px; font-weight: 800; line-height: 1.2; color: ${isDark ? "#FFFFFF" : "#140E24"}; margin-bottom: 2px;">
                            ${config.senderName}
                          </div>
                          <div style="font-family: 'Nunito', Arial, sans-serif; font-size: 11.5px; font-weight: 600; line-height: 1.3; color: ${isDark ? "#C4B5FD" : "#6D28D9"}; margin-bottom: 4px;">
                            ${config.senderRole}
                          </div>
                          <p style="margin: 0; font-family: 'Nunito', Arial, sans-serif; font-size: 11.5px; font-weight: 400; line-height: 1.4; color: ${isDark ? "#EDE9FE" : "#4B5563"};">
                            ${config.senderMessage.replace(
                              /\s*una reunión/i,
                              "<br />una reunión"
                            )}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- Derecha: Logotipo oficial de Glocation + lema + enlaces discretos si están configurados -->
                  <td class="sig-col" width="34%" valign="middle" align="right" style="padding: 4px 0 4px 26px; border-left: 1px solid ${isDark ? "#2E1C59" : "#EAE4F7"}; text-align: right;">
                    <img class="sig-logo-img" src="${footerLogo}" alt="Glocation" width="160" style="display: block; height: 44px; width: auto; margin: 0 0 8px auto;" />
                    <div style="font-family: 'Nunito', Arial, sans-serif; font-size: 11.5px; font-weight: 500; color: ${isDark ? "#D8B4FE" : "#5B21B6"}; margin-bottom: 8px;">
                      ${config.companyTagline}
                    </div>
                    ${
                      trimmedWebsite || trimmedLinkedin
                        ? `<div style="font-family: 'Nunito', Arial, sans-serif; font-size: 11.5px; color: ${isDark ? "#C4B5FD" : "#6D28D9"};">
                            ${
                              trimmedWebsite
                                ? `<a href="${trimmedWebsite}" target="_blank" style="color: ${isDark ? "#C4B5FD" : "#6D28D9"}; font-weight: 600; text-decoration: none;"><span style="color: ${isDark ? "#C084FC" : "#7C3AED"}; font-size: 11px; vertical-align: middle; margin-right: 5px;">&#127760;</span>${cleanDomain}</a>`
                                : ""
                            }
                            ${
                              trimmedWebsite && trimmedLinkedin
                                ? `&nbsp;&nbsp;<span style="color: #A855F7;">&middot;</span>&nbsp;&nbsp;`
                                : ""
                            }
                            ${
                              trimmedLinkedin
                                ? `<a href="${trimmedLinkedin}" target="_blank" style="color: ${isDark ? "#C4B5FD" : "#6D28D9"}; font-weight: 600; text-decoration: none;"><span style="display: inline-block; background-color: ${isDark ? "#C084FC" : "#7C3AED"}; color: ${isDark ? "#120A24" : "#FFFFFF"}; font-family: Arial, sans-serif; font-size: 9px; font-weight: 800; line-height: 13px; width: 13px; height: 13px; border-radius: 2px; text-align: center; vertical-align: middle; margin-right: 5px;">in</span>GLocation</a>`
                                : ""
                            }
                          </div>`
                        : ""
                    }
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
