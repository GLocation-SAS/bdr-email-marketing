/**
 * Plantilla de Email Marketing — Follow-up 1 SaaSW Líderes TIC (TC-PMO Actas de Contratistas)
 * GLocation SAS · Holding Servinformación
 * Versión iterada con Storytelling B2B y bloques visuales de alta resolución
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
  preheader: "Un caso concreto: de los informes de contratistas al acta lista para revisión, con su equipo al mando.",
  baseUrl: "https://glocation.co",
  citasUrl: "https://citas.glocation.co/?theme=light",
  mailtoUrl: "mailto:paula.rozo@glocation.com.co?subject=Caso%20de%20uso%20TC-PMO%20-%20ACTAS",
  homoagenticusUrl: "https://homoagenticus.co",
  paulaEmail: "paula.rozo@glocation.com.co",
};

export function generateSaaswFu1Html(): string {
  const c = defaultSaaswFu1Config;
  return `<!-- Preencabezado (oculto) -->
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:#EFF3F8;">
  ${c.preheader}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#EFF3F8" style="width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;background-color:#EFF3F8;margin:0 !important;padding:0 !important;border:0 !important;">
  <tr>
    <td align="center" style="padding:28px 12px 36px 12px !important;margin:0 !important;border:0 !important;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px !important;max-width:600px !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 auto !important;padding:0 !important;border:0 !important;">
        <tr>
          <td align="center" style="padding:0 !important;margin:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;">
            <!-- 1. Encabezado → glocation.co -->
            <a href="${c.baseUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-01-encabezado-claro.png?v=20261120h" width="600" alt="GLocation · Holding Servinformación · Google Cloud Premier Partner" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 2. Apertura (sin enlace) -->
            <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-02-apertura-claro.png?v=20261120h" width="600" alt="Caso de uso · TC-PMO · Oficina TIC. Del informe del contratista al acta, lista para revisión. Estimado(a) Líder de Tecnología: la semana pasada le escribí sobre fuerza laboral cognitiva para su Oficina TIC. Hoy quiero mostrarle cómo podría aplicarse a una tarea concreta: revisar entregables de contratistas y preparar las actas correspondientes. ¿Qué sucede cuando lo reportado no coincide con lo contratado?" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 3. Caso de uso en 4 pasos (sin enlace) -->
            <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-03-pasos-claro.png?v=20261120h" width="600" alt="Así apoya TC-PMO a su Oficina TIC en 4 pasos: 1. Llegan los informes de avance. 2. TC-PMO los contrasta con TDR, cronograma y plan de pagos. 3. TC-PMO prepara un borrador e identifica faltantes (alertas y dashboards). 4. El supervisor revisa, aprueba y firma (control humano estricto)." border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 4. Hoy / Con TC-PMO y otros trabajadores (sin enlace) -->
            <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-04-comparativo-claro.png?v=20261120h" width="600" alt="Hoy su equipo redacta actas desde cero con desgaste manual; con TC-PMO recibe un borrador preparado con faltantes identificados para su revisión. La tecnología prepara. Su equipo verifica y decide." border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 5. CTA Principal → citas.glocation.co -->
            <a href="${c.citasUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-05-cta-claro.png?v=20261120h" width="600" alt="Diagnóstico Cognitivo 30 min: ¿Le gustaría explorar cómo funcionaría este proceso en su Oficina TIC? Agendar Diagnóstico Cognitivo (30 min) en citas.glocation.co" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 6. Respuesta Rápida → mailto -->
            <a href="${c.mailtoUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;line-height:0 !important;font-size:0 !important;margin:0 !important;padding:0 !important;border:0 !important;outline:none !important;"><img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-06-respuesta-claro.png?v=20261120h" width="600" alt="Si prefiere no agendar todavía, responda con una sola palabra: ACTAS, ACCESOS o PRUEBAS a paula.rozo@glocation.com.co" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a>
            <!-- 7. Cintillo Holding -->
            <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-07-firma-banda-claro.png?v=20261120h" width="600" alt="Holding Servinformación · Google Cloud Premier Partner · Norma ISO 27001" border="0" style="display:block !important;width:600px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" />
            <!-- 8. Firma: Paula (3 columnas) -->
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px !important;max-width:100% !important;border-collapse:collapse !important;border-spacing:0 !important;margin:0 !important;padding:0 !important;border:0 !important;table-layout:fixed !important;">
              <tr>
                <td width="334" valign="top" style="width:334px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="mailto:${c.paulaEmail}?subject=Diagn%C3%B3stico%20Cognitivo%20Oficina%20TIC%20-%20GLocation" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-08-firma-paula-claro.png?v=20261120h" width="334" alt="Paula Rozo · BDR · paula.rozo@glocation.com.co" border="0" style="display:block !important;width:334px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
                <td width="127" valign="top" style="width:127px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="${c.baseUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-09-firma-glocation-claro.png?v=20261120h" width="127" alt="glocation.co · Plataforma" border="0" style="display:block !important;width:127px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
                <td width="139" valign="top" style="width:139px !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;border:0 !important;mso-line-height-rule:exactly;"><a href="${c.homoagenticusUrl}" target="_blank" rel="noopener noreferrer" style="display:block !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;line-height:0 !important;font-size:0 !important;"><img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-blocks/saasw-fu1-10-firma-homoagenticus-claro.png?v=20261120h" width="139" alt="homoagenticus.co · Manifiesto" border="0" style="display:block !important;width:139px !important;max-width:100% !important;height:auto !important;border:0 !important;outline:none !important;text-decoration:none !important;margin:0 !important;padding:0 !important;-ms-interpolation-mode:bicubic;" /></a></td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- 9. Pie (texto legal) -->
        <tr>
          <td align="center" style="border-width:0px;padding:18px 20px 24px 20px;font-family:'Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#94A3B8;text-align:center;">
            &copy; 2026 GLocation SAS &middot; Bogotá D.C., Colombia.<br />
            Recibe este mensaje porque su entidad lidera proyectos estratégicos de tecnología.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}
