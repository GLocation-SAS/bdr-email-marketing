const fs = require('fs');
const path = require('path');

const SECTORS = [
  {
    key: 'tecnologia',
    title: 'GLocation · Tecnología y Servicios Digitales',
    preheader: 'Una forma estructurada de explorar Trabajadores Cognitivos en su portafolio.',
    chip: 'TECNOLOGÍA · SERVICIOS DIGITALES',
    h1_a: 'Sus clientes preguntan por IA.',
    h1_b: 'Y USTED NO TIENE QUE INVENTARLA <span style="color:#A78BDB;">DESDE CERO.</span>',
    sub_hero: 'El valor de su empresa está en lo que ya sabe hacer bien; la IA complementa, no reemplaza.',
    destinatario: 'Estimado(a) líder de Operaciones, Tecnología o Dirección:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. La demanda de IA crece, pero armar soluciones propias toma meses y desvía la atención de los servicios que hoy le generan ingresos.',
    hoy_items: [
      'Clientes que piden IA en cada propuesta',
      'Desarrollo propio que toma meses',
      'Riesgo de perder contratos clave'
    ],
    tc_items: [
      'Su oferta incorpora un Trabajador Cognitivo',
      'Cada parte sabe qué aporta, por escrito',
      'Una persona autoriza los cambios críticos'
    ],
    tc_highlight: 'Una persona autoriza los cambios críticos',
    case_ico: 'WS',
    case_sub: 'El caso de uso',
    case_title: 'Google Workspace para sus clientes',
    case_desc: '<strong style="color:#0D2140;font-weight:600;">TC-Workspace</strong> gestiona usuarios y permisos en las cuentas de sus clientes; un administrador autoriza cada cambio crítico. Usted conserva la relación con el cliente.',
    case_pill: '&#9679;&nbsp; EL CLIENTE SIGUE SIENDO SUYO',
    trust_1: 'Primero se define, por escrito, qué aporta y qué se reserva cada parte.',
    trust_2: 'El acuerdo lo revisan ambas gerencias antes de cualquier piloto.',
    cta_q: '¿Tiene un caso de IA que<br>podamos explorar juntos?',
    cta_sub: 'Conversemos sobre cómo complementar su oferta con Trabajadores Cognitivos. Usted elige cómo empezar.',
    cta_btn: 'Agendar conversación de alianza (30 min) &rarr;',
    cta_support: 'Si a&uacute;n no desea agendar, responda este correo con el caso que tiene en mente:',
    cta_sec_text: 'Tengo un caso para explorar &#9993;',
    mailto_sub: 'Posible alianza con GLocation',
    mailto_body: 'Hola, Paula: me interesa explorar una posible alianza. El caso que tenemos en mente es: ',
    files: {
      storytelling: 'GLocation_Tecnologia_Storytelling.html',
      plantilla: 'plantilla-red-tecnologia.html',
      glocation: 'glocation-red-tecnologia-y-servicios-digitales.html'
    }
  },
  {
    key: 'logistica',
    title: 'GLocation · Logística y Transporte',
    preheader: 'Ofertas y requisitos de proveedores consolidados para que Compras decida más rápido.',
    chip: 'LOGÍSTICA Y TRANSPORTE',
    h1_a: 'Cerrar fletes y rutas a tiempo,',
    h1_b: 'SIN PERDER DÍAS <span style="color:#A78BDB;">EVALUANDO OFERTAS.</span>',
    sub_hero: 'El criterio comercial es de su equipo; la consolidación de ofertas la hace la tecnología.',
    destinatario: 'Estimado(a) líder de Compras, Abastecimiento o Contratos:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. En logística, cada día que toma evaluar proveedores o comparar ofertas de transporte es un día de retraso en la operación. Su equipo pasa horas tabulando cotizaciones en lugar de negociar.',
    hoy_items: [
      'Ofertas en formatos distintos y dispersas',
      'Horas tabulando cotizaciones a mano',
      'Decisiones que se retrasan por falta de cuadro'
    ],
    tc_items: [
      'Cuadro comparativo listo al recibir ofertas',
      'Pólizas y requisitos verificados al día',
      'Su equipo negocia y aprueba con datos claros'
    ],
    tc_highlight: 'Su equipo negocia y aprueba con datos claros',
    case_ico: 'COT',
    case_sub: 'El caso de uso',
    case_title: 'Comparativo de ofertas y evaluación de proveedores',
    case_desc: 'Para cada invitación a cotizar, <strong style="color:#0D2140;font-weight:600;">TC-Analista</strong> reúne ofertas y requisitos, prepara el comparativo y el expediente de cada proveedor, y deja a la vista lo que falta.',
    case_pill: '&#9679;&nbsp; USTED RECOMIENDA: COMPRAS',
    trust_1: 'Se suma al ERP o la plataforma que ya usan, sin reemplazarlos.',
    trust_2: 'No toma decisiones: prepara y propone; su equipo aprueba.',
    cta_q: '¿Revisamos dónde se demora<br>hoy su equipo?',
    cta_sub: 'En 30 minutos, sin venta, miramos la evaluación de proveedores o los comparativos de ofertas y definimos si vale la pena.',
    cta_btn: 'Agendar Diagnóstico Cognitivo (30 min) &rarr;',
    cta_support: 'Si a&uacute;n no desea agendar, responda este correo y cu&eacute;ntenos qu&eacute; proceso le gustar&iacute;a revisar:',
    cta_sec_text: 'Quiero revisar un proceso de compras &#9993;',
    mailto_sub: 'Diagnóstico Cognitivo Logística - GLocation',
    mailto_body: 'Hola, Paula: me interesa revisar un proceso de compras. Nuestro proceso es: ',
    files: {
      storytelling: 'GLocation_Logistica_Storytelling.html',
      plantilla: 'plantilla-red-logistica.html',
      glocation: 'glocation-red-logistica-y-transporte.html'
    }
  },
  {
    key: 'construccion',
    title: 'GLocation · Construcción e Inmobiliario',
    preheader: 'Expedientes de subcontratistas completos y al día; Contratos y Obra deciden.',
    chip: 'CONSTRUCCIÓN E INMOBILIARIO',
    h1_a: 'Licitaciones y subcontratos al día,',
    h1_b: 'SIN FRENAR EL AVANCE <span style="color:#A78BDB;">DE LA OBRA.</span>',
    sub_hero: 'El criterio técnico y contractual sigue en su equipo; la verificación de soportes la hace la tecnología.',
    destinatario: 'Estimado(a) líder de Compras, Contratos o Proyectos:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. La contratación de subcontratistas exige revisar pólizas, hojas de vida y cotizaciones de múltiples oferentes. Ese proceso manual genera cuellos de botella que retrasan el inicio de obra.',
    hoy_items: [
      'Documentos de subcontratistas incompletos',
      'Pólizas vencidas que se descubren en auditoría',
      'Aprobaciones que demoran el arranque de obra'
    ],
    tc_items: [
      'Expediente completo por contratista antes de firmar',
      'Alertas de vigencias y pólizas automáticas',
      'Contratos aprueba con trazabilidad total'
    ],
    tc_highlight: 'Contratos aprueba con trazabilidad total',
    case_ico: 'EXP',
    case_sub: 'El caso de uso',
    case_title: 'Expediente de contratación',
    case_desc: '<strong style="color:#0D2140;font-weight:600;">TC-Analista</strong> consolida las cotizaciones de cada proyecto, verifica que pólizas y soportes estén completos y prepara el expediente para su aprobación.',
    case_pill: '&#9679;&nbsp; USTED APRUEBA: CONTRATOS',
    trust_1: 'Se suma al ERP o la plataforma que ya usan, sin reemplazar nada.',
    trust_2: 'La decisión de contratar y la firma siguen en su equipo.',
    cta_q: '¿Revisamos qué está frenando<br>su contratación?',
    cta_sub: 'En 30 minutos, sin venta, miramos las cotizaciones o los expedientes de un proyecto y definimos si vale la pena.',
    cta_btn: 'Agendar Diagnóstico Cognitivo (30 min) &rarr;',
    cta_support: 'Si a&uacute;n no desea agendar, responda este correo y cu&eacute;ntenos qué proceso le gustaría revisar:',
    cta_sec_text: 'Quiero revisar un proceso de contratación &#9993;',
    mailto_sub: 'Diagnóstico Cognitivo Construcción - GLocation',
    mailto_body: 'Hola, Paula: me interesa revisar un proceso de contratación. Nuestro proceso es: ',
    files: {
      storytelling: 'GLocation_Construccion_Storytelling.html',
      plantilla: 'plantilla-red-construccion.html',
      glocation: 'glocation-red-construccion-e-inmobiliario.html'
    }
  },
  {
    key: 'agroindustria',
    title: 'GLocation · Agroindustria y Alimentos',
    preheader: 'Soportes faltantes o vencidos identificados por categoría; Compras y Calidad deciden.',
    chip: 'AGROINDUSTRIA · COMPRAS Y CALIDAD',
    h1_a: 'Aprobar un proveedor necesita a Compras y a Calidad.',
    h1_b: 'Y QUE CADA SOPORTE ESTÉ <span style="color:#3F1C81;">VIGENTE.</span>',
    sub_hero: 'La decisión es técnica; el tiempo se va en reunir y verificar documentos.',
    destinatario: 'Estimado(a) líder de Compras, Abastecimiento o Calidad:',
    intro: 'Le escribimos porque su empresa hizo parte del programa Proveedores en Red. Para aprobar un proveedor, su equipo pide certificados y fichas técnicas, comprueba vigencias y los cruza con los requisitos de cada categoría. Entre Compras y Calidad, ese ir y venir retrasa la decisión.',
    hoy_items: [
      'Soportes pedidos y revisados uno a uno',
      'Vigencias que se descubren tarde',
      'Criterios distintos entre áreas'
    ],
    tc_items: [
      'Expediente completo por proveedor',
      'Faltantes y vencidos señalados',
      'Calidad valida; Compras aprueba'
    ],
    tc_highlight: 'Calidad valida; Compras aprueba',
    case_ico: 'EXP',
    case_sub: 'El caso de uso',
    case_title: 'Expediente y matriz por categoría',
    case_desc: '<strong style="color:#0D2140;font-weight:600;">TC-Analista</strong> reúne los soportes de cada proveedor, señala faltantes o vencidos y arma la matriz de su categoría. No certifica cumplimiento: deja todo listo para que Calidad y Compras decidan.',
    case_pill: '&#9679;&nbsp; USTED DECIDE: COMPRAS Y CALIDAD',
    trust_1: 'Se suma a la plataforma de proveedores que ya usan.',
    trust_2: 'El criterio técnico y la aprobación siguen en su equipo.',
    cta_q: '¿Revisamos cómo aprueban<br>hoy a un proveedor?',
    cta_sub: 'En 30 minutos, sin venta, miramos la recopilación de documentos o la revisión de vigencias y definimos si vale la pena.',
    cta_btn: 'Agendar Diagnóstico Cognitivo (30 min) &rarr;',
    cta_support: 'Si a&uacute;n no desea agendar, responda este correo y cu&eacute;ntenos qu&eacute; proceso le gustar&iacute;a revisar:',
    cta_sec_text: 'Quiero revisar la evaluación de proveedores &#9993;',
    mailto_sub: 'Diagnóstico Cognitivo Agroindustria - GLocation',
    mailto_body: 'Hola, Paula: me interesa revisar la evaluación de proveedores. Nuestro proceso es: ',
    files: {
      storytelling: 'GLocation_Agroindustria_Storytelling.html',
      plantilla: 'plantilla-red-agroindustria.html',
      glocation: 'glocation-red-agroindustria-y-alimentos.html'
    }
  }
];

function buildEmailHtml(s) {
  const mailtoEncoded = `mailto:paula.rozo@glocation.com.co?subject=${encodeURIComponent(s.mailto_sub)}&body=${encodeURIComponent(s.mailto_body)}`;

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>${s.title}</title>
<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet"><!--<![endif]-->
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><style>p,td,a,span,h1{font-family:Arial,sans-serif !important;}</style><![endif]-->
<style type="text/css">
  body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
  table,td{mso-table-lspace:0pt;mso-table-rspace:0pt;}
  table.cke_show_border, table.cke_show_border td, table.cke_show_border tr, .cke_show_border, .cke_show_border td, .cke_show_border tr { border: 0 !important; outline: none !important; }
  .cke_table-faked-selection-editor { border: 0 !important; outline: none !important; }
  img{-ms-interpolation-mode:bicubic;border:0;outline:none;text-decoration:none;display:block;}
  a{text-decoration:none;}
  @media screen and (max-width:620px){
    .px{padding-left:22px !important;padding-right:22px !important;}
    .h-a{font-size:19px !important;line-height:25px !important;}
    .h-b{font-size:25px !important;line-height:29px !important;}
    .col{display:block !important;width:auto !important;}
    .gap{display:block !important;height:10px !important;width:auto !important;}
    .btn a{padding:14px 20px !important;font-size:13px !important;}
    .hide-m{display:none !important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:#E7EEF8;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#E7EEF8;opacity:0;">${s.preheader}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>

<div data-converso-root="true" style="margin:0 !important;padding:0 !important;background-color:#E7EEF8;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#E7EEF8" style="width:100% !important;border-collapse:collapse !important;background-color:#E7EEF8;margin:0 !important;padding:0 !important;border:0 !important;">
<tr><td align="center" style="padding:24px 10px 30px 10px !important;margin:0 !important;border:0 !important;">
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="width:600px !important;max-width:600px !important;margin:0 auto !important;border-collapse:collapse !important;background-color:#ffffff;border-radius:18px;overflow:hidden;border:0 !important;box-shadow:0 8px 30px rgba(15,23,42,0.08);">

<!-- 01 · ENCABEZADO -->
<tr><td height="4" bgcolor="#38C6FF" style="height:4px;font-size:0;line-height:0;background-color:#38C6FF;background-image:linear-gradient(90deg,#0284c7 0%,#38C6FF 30%,#16a34a 55%,#A78BDB 80%,#3F1C81 100%);border:0 !important;">&nbsp;</td></tr>
<tr><td class="px" bgcolor="#ffffff" style="padding:14px 34px;background-color:#ffffff;border:0 !important;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100% !important;border-collapse:collapse !important;border:0 !important;"><tr>
    <td valign="middle" style="border:0 !important;"><a href="https://glocation.co" target="_blank"><img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/logo-glocation-claro.png" height="34" alt="GLocation" style="height:34px;width:auto;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:15px;font-weight:700;color:#3F1C81;border:0;"></a></td>
    <td valign="middle" align="right" style="border:0 !important;"><p style="margin:0 0 0px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:10px;line-height:14px;font-weight:600;color:#4A515D;letter-spacing:1.5px;text-transform:uppercase;text-align:right;">Holding Servinformación</p></td>
  </tr></table>
</td></tr>

<!-- 02 · HERO NARRATIVO -->
<tr><td class="px" bgcolor="#EEF6FC" style="background-color:#EEF6FC;background-image:linear-gradient(135deg,#E6F6FE 0%,#EEF2FB 55%,#F3EEFC 100%);padding:30px 34px 28px 34px;border:0 !important;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;border:0 !important;"><tr><td bgcolor="#3F1C81" style="background-color:#3F1C81;background-image:linear-gradient(90deg,#3F1C81 0%,#BF8BDB 100%);border-radius:40px;padding:7px 14px;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:10px;line-height:13px;font-weight:700;letter-spacing:1.8px;color:#ffffff;border:0 !important;">${s.chip}</td></tr></table>
  <h1 style="margin:16px 0 12px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;mso-line-height-rule:exactly;">
    <span class="h-a" style="display:block;font-size:21px;line-height:27px;font-weight:600;color:#0D2140;letter-spacing:-0.3px;">${s.h1_a}</span>
    <span class="h-b" style="display:block;font-size:28px;line-height:32px;font-weight:800;color:#040914;letter-spacing:-0.6px;margin-top:4px;">${s.h1_b}</span>
  </h1>
  <p style="margin:0 0 0px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:14px;line-height:21px;font-weight:400;color:#4A515D;">${s.sub_hero}</p>
</td></tr>

<!-- 03 · CONFLICTO Y CONSECUENCIAS -->
<tr><td class="px" bgcolor="#ffffff" style="padding:26px 34px 6px 34px;background-color:#ffffff;border:0 !important;">
  <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:14px;line-height:21px;font-weight:700;color:#0D2140;">${s.destinatario}</p>
  <p style="margin:0 0 0px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:14px;line-height:23px;font-weight:400;color:#4A515D;">${s.intro}</p>
</td></tr>

<!-- 04 · TRANSFORMACIÓN: ANTES / CON UN TRABAJADOR COGNITIVO -->
<tr><td class="px" bgcolor="#ffffff" style="padding:20px 34px 6px 34px;background-color:#ffffff;border:0 !important;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100% !important;border-collapse:separate !important;border:0 !important;"><tr>
    <td class="col" width="256" valign="top" bgcolor="#F4F6F9" style="width:256px !important;max-width:256px;background-color:#F4F6F9;border-radius:14px;padding:16px 16px 8px 16px;border:0 !important;">
      <p style="margin:0 0 10px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:10px;line-height:14px;font-weight:700;color:#8a94a3;letter-spacing:2px;text-transform:uppercase;text-align:left;">Hoy</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;border:0 !important;">
        ${s.hoy_items.map(item => `<tr><td width="20" valign="top" style="width:20px;padding:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:19px;font-weight:700;color:#B7C6D8;border:0 !important;">&ndash;</td><td valign="top" style="padding:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:19px;font-weight:400;color:#4A515D;border:0 !important;">${item}</td></tr>`).join('')}
      </table>
    </td>
    <td class="gap" width="20" style="width:20px !important;font-size:0;line-height:0;border:0 !important;">&nbsp;</td>
    <td class="col" width="256" valign="top" bgcolor="#F3EEFC" style="width:256px !important;max-width:256px;background-color:#F3EEFC;border:1px solid #DDD0FB;border-radius:14px;padding:16px 16px 8px 16px;">
      <p style="margin:0 0 10px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:10px;line-height:14px;font-weight:700;color:#3F1C81;letter-spacing:2px;text-transform:uppercase;text-align:left;">Con un Trabajador Cognitivo</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;border:0 !important;">
        ${s.tc_items.map(item => {
          const isHigh = item === s.tc_highlight;
          return `<tr><td width="20" valign="top" style="width:20px;padding:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:19px;font-weight:700;color:#3F1C81;border:0 !important;">&#10003;</td><td valign="top" style="padding:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:19px;font-weight:${isHigh ? '700' : '400'};color:#0D2140;border:0 !important;">${item}</td></tr>`;
        }).join('')}
      </table>
    </td>
  </tr></table>
</td></tr>

<!-- 05 · SOLUCIÓN: un caso de uso protagonista -->
<tr><td class="px" bgcolor="#ffffff" style="padding:16px 34px 6px 34px;background-color:#ffffff;border:0 !important;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100% !important;border-collapse:collapse !important;border:0 !important;">
    <tr>
      <td bgcolor="#F8FAFD" style="background-color:#F8FAFD;border-top:1px solid #DCE6F2;border-right:1px solid #DCE6F2;border-bottom:1px solid #DCE6F2;border-left:4px solid #0284C7;border-radius:14px;padding:16px 18px 16px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100% !important;border-collapse:collapse !important;border:0 !important;">
          <tr>
            <td width="52" valign="top" align="left" style="width:52px !important;vertical-align:top;padding:2px 14px 0 0;border:0 !important;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;border:0 !important;">
                <tr>
                  <td width="44" height="44" align="center" valign="middle" bgcolor="#0284C7" style="width:44px !important;height:44px !important;border-radius:12px;background-color:#0284C7;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:12px;line-height:44px;font-weight:700;color:#FFFFFF;text-align:center;border:0 !important;">${s.case_ico}</td>
                </tr>
              </table>
            </td>
            <td valign="top" align="left" style="vertical-align:top;text-align:left;border:0 !important;padding:0 !important;">
              <p style="margin:0 0 4px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:10px;line-height:14px;font-weight:700;color:#22779c;letter-spacing:2px;text-transform:uppercase;text-align:left;">${s.case_sub}</p>
              <p style="margin:0 0 6px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:16px;line-height:21px;font-weight:700;color:#0D2140;text-align:left;">${s.case_title}</p>
              <p style="margin:0 0 10px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:20px;font-weight:400;color:#4A515D;text-align:left;">${s.case_desc}</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse !important;border:0 !important;">
                <tr>
                  <td bgcolor="#E0F2FE" style="background-color:#E0F2FE;border-radius:20px;padding:4px 11px;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:10px;line-height:14px;font-weight:700;letter-spacing:0.8px;color:#0284C7;border:0 !important;">${s.case_pill}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 06 · CONFIANZA -->
<tr><td class="px" bgcolor="#ffffff" style="padding:18px 34px 24px 34px;background-color:#ffffff;border:0 !important;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100% !important;border-collapse:collapse !important;border:0 !important;">
    <tr><td width="20" valign="top" style="width:20px;padding:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:19px;font-weight:700;color:#16a34a;border:0 !important;">&#10003;</td><td valign="top" style="padding:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:19px;font-weight:400;color:#4A515D;border:0 !important;">${s.trust_1}</td></tr>
    <tr><td width="20" valign="top" style="width:20px;padding:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:19px;font-weight:700;color:#16a34a;border:0 !important;">&#10003;</td><td valign="top" style="padding:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:19px;font-weight:400;color:#4A515D;border:0 !important;">${s.trust_2}</td></tr>
  </table>
</td></tr>

<!-- 07 · CTA: dos caminos para avanzar -->
<tr><td class="px" bgcolor="#ffffff" style="padding:4px 34px 28px 34px;background-color:#ffffff;border:0 !important;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100% !important;border-collapse:collapse !important;border:0 !important;">
    <tr>
      <td align="center" bgcolor="#EEF6FC" style="background-color:#EEF6FC;border:1px solid #DCE6F2;border-radius:16px;padding:28px 24px 26px 24px;text-align:center;">
        <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:20px;line-height:27px;font-weight:700;color:#0D2140;text-align:center;">${s.cta_q}</p>
        <p style="margin:0 0 20px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:20px;font-weight:400;color:#4A515D;text-align:center;">${s.cta_sub}</p>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:collapse !important;border:0 !important;margin:0 auto !important;"><tr>
          <td class="btn" align="center" bgcolor="#3F1C81" style="border-radius:40px;background-color:#3F1C81;border:0 !important;">
            <a href="https://citas.glocation.co/?theme=light" target="_blank" style="display:inline-block;padding:15px 30px;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:14px;line-height:20px;font-weight:700;color:#ffffff;text-decoration:none;">${s.cta_btn}</a>
          </td>
        </tr></table>
        <p style="margin:18px 0 12px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:12px;line-height:18px;font-weight:500;color:#64748B;text-align:center;">${s.cta_support}</p>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:collapse !important;border:0 !important;margin:0 auto !important;">
          <tr>
            <td align="center" bgcolor="#FFFFFF" style="border-radius:40px;background-color:#FFFFFF;border:1.5px solid #CBD5E1;box-shadow:0 1px 2px rgba(0,0,0,0.04);">
              <a href="${mailtoEncoded}" style="display:inline-block;padding:11px 24px;border-radius:40px;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:13px;line-height:18px;font-weight:600;color:#1E293B;text-decoration:none;">${s.cta_sec_text}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 08 · FIRMA Y ECOSISTEMA HORIZONTAL -->
<tr><td class="px" bgcolor="#F8FAFD" style="padding:14px 34px 12px 34px;background-color:#F8FAFD;border-top:1px solid #E3E9F1;border-bottom:0 !important;">
  <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:10px;line-height:15px;font-weight:600;letter-spacing:1.2px;color:#64748B;text-transform:uppercase;text-align:center;">
    HOLDING SERVINFORMACI&Oacute;N (27 A&Ntilde;OS) &nbsp;&bull;&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;&bull;&nbsp; NORMA ISO 27001
  </p>
</td></tr>

<tr><td class="px" bgcolor="#ffffff" style="padding:18px 28px 18px 28px;background-color:#ffffff;border-top:1px solid #E3E9F1;border-bottom:0 !important;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100% !important;border-collapse:collapse !important;border:0 !important;">
    <tr>
      <td width="66" valign="middle" style="width:66px;min-width:66px;padding-right:14px;border:0 !important;">
        <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png?v=20261124b" width="52" height="52" alt="Paula Rozo" style="width:52px;height:52px;min-width:52px;max-width:52px;min-height:52px;max-height:52px;border-radius:26px;display:block;border:0;outline:none;">
      </td>
      <td valign="middle" style="border:0 !important;">
        <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:15px;line-height:19px;font-weight:700;color:#0D2140;">Paula Rozo</p>
        <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:11px;line-height:15px;font-weight:400;color:#4A515D;">BDR &middot; Business Development Representative</p>
        <p style="margin:0 0 3px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:11px;line-height:15px;font-weight:600;color:#22779c;">GLocation SAS &middot; Transformaci&oacute;n Cognitiva</p>
        <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:11px;line-height:16px;font-weight:600;color:#0284c7;">
          <a href="mailto:paula.rozo@glocation.com.co?subject=${encodeURIComponent(s.mailto_sub)}" style="color:#0284c7;text-decoration:none;">&#9993;&nbsp;paula.rozo@glocation.com.co</a>
        </p>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 4 TARJETAS EN UNA SOLA LÍNEA HORIZONTAL ABAJITO -->
<tr><td class="px" bgcolor="#F8FAFD" style="padding:16px 24px 18px 24px;background-color:#F8FAFD;border-top:1px solid #E3E9F1;border-bottom:0 !important;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100% !important;border-collapse:separate !important;border:0 !important;">
    <tr>
      <!-- TARJETA 1: glocation.co -->
      <td width="132" valign="top" style="width:132px !important;padding:0 4px 0 0;border:0 !important;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">
          <tr>
            <td align="center" style="padding:9px 4px;border:0 !important;">
              <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:18px;line-height:20px;">&#127760;</div>
                <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#0284C7;white-space:nowrap;">glocation.co</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:9px;line-height:12px;font-weight:500;color:#64748B;white-space:nowrap;">Plataforma &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
      <!-- TARJETA 2: homoagenticus.co -->
      <td width="132" valign="top" style="width:132px !important;padding:0 3px 0 3px;border:0 !important;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">
          <tr>
            <td align="center" style="padding:9px 4px;border:0 !important;">
              <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:18px;line-height:20px;">&#128214;</div>
                <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#7C3AED;white-space:nowrap;">homoagenticus</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:9px;line-height:12px;font-weight:500;color:#64748B;white-space:nowrap;">Manifiesto &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
      <!-- TARJETA 3: preagentica.glocation.co -->
      <td width="132" valign="top" style="width:132px !important;padding:0 3px 0 3px;border:0 !important;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">
          <tr>
            <td align="center" style="padding:9px 4px;border:0 !important;">
              <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:18px;line-height:20px;">&#127963;&#65039;</div>
                <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#334155;white-space:nowrap;">preagentica</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:9px;line-height:12px;font-weight:500;color:#64748B;white-space:nowrap;">Pre-IA &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
      <!-- TARJETA 4: LinkedIn Oficial -->
      <td width="132" valign="top" style="width:132px !important;padding:0 0 0 4px;border:0 !important;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">
          <tr>
            <td align="center" style="padding:9px 4px;border:0 !important;">
              <a href="https://www.linkedin.com/company/glocation/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:18px;line-height:20px;">&#128188;</div>
                <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#0A66C2;white-space:nowrap;">LinkedIn</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:9px;line-height:12px;font-weight:500;color:#64748B;white-space:nowrap;">Perfil &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td class="px" align="center" bgcolor="#F4F6F9" style="background-color:#F4F6F9;border-top:1px solid #E3E9F1;padding:18px 34px 20px 34px;border-bottom:0 !important;">
  <p style="margin:0 0 6px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:11px;line-height:17px;font-weight:600;color:#0D2140;text-align:center;">&copy; 2026 GLocation SAS &middot; Bogotá D.C., Colombia.</p>
  <p style="margin:0 0 0px 0;font-family:'Poppins','Segoe UI',Arial,sans-serif;font-size:10px;line-height:16px;font-weight:400;color:#7B8798;text-align:center;">Recibe este mensaje porque su empresa participó en el programa Proveedores en Red. Sus datos de contacto se usan para agendar reuniones comerciales en Colombia y para la recolección de datos asociada, conforme a la Ley 1581 de 2012.</p>
</td></tr>

</table>
</td></tr>
</table>
</div>
</body>
</html>`;
}

function buildPublicViewerHtml(s, pureHtml) {
  const base64Pure = Buffer.from(pureHtml, 'utf8').toString('base64');
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${s.title}</title>
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #E7EEF8; }
    #converso-floating-toolbar {
      position: sticky; top: 0; z-index: 999999;
      background: #0F172A; border-bottom: 2px solid #0284C7;
      padding: 12px 20px; display: flex; align-items: center; justify-content: center;
      gap: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.25); flex-wrap: wrap;
    }
    .btn-action-primary {
      background: linear-gradient(90deg, #0284C7 0%, #2563EB 100%);
      color: #FFFFFF; border: none; padding: 10px 22px; border-radius: 8px;
      font-weight: 700; font-size: 13px; cursor: pointer; box-shadow: 0 2px 8px rgba(2,132,199,0.5);
      display: inline-flex; align-items: center; gap: 8px;
    }
    .btn-action-secondary {
      background: #1E293B; color: #38BDF8; border: 1.5px solid #38BDF8;
      padding: 10px 18px; border-radius: 8px; font-weight: 700; font-size: 13px; cursor: pointer;
    }
    #copyMsg { color: #38BDF8; font-size: 13px; font-weight: 700; display: none; }
  </style>
</head>
<body>
  <div id="converso-floating-toolbar">
    <button class="btn-action-primary" onclick="copiarCorreoVisual()">
      📋 COPIAR DISEÑO VISUAL (Ctrl+V directo en Converso)
    </button>
    <button class="btn-action-secondary" onclick="copiarCodigoHtml()">
      &lt;&gt; COPIAR CÓDIGO HTML (Para "Fuente HTML" en Converso)
    </button>
    <span id="copyMsg">✓ ¡Copiado con éxito!</span>
  </div>

  <script>
    var pureHtml = decodeURIComponent(escape(atob('${base64Pure}')));

    function copiarCorreoVisual() {
      var root = document.querySelector('[data-converso-root="true"]') || document.getElementById('pure-email-wrapper');
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
          ]).catch(function(){});
        }
        document.execCommand('copy');
        sel.removeAllRanges();
        mostrarMsg('✓ ¡Diseño copiado con enlaces y formato exacto! Pégalo con Ctrl+V en Converso');
      } catch (err) {
        alert('Presione Ctrl+C para copiar');
      }
    }

    function copiarCodigoHtml() {
      var root = document.querySelector('[data-converso-root="true"]');
      var codeToCopy = root ? root.outerHTML : pureHtml;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeToCopy).then(function() {
          mostrarMsg('✓ ¡Código HTML limpio copiado! Pégalo en el botón &ldquo;Fuente HTML&rdquo; de Converso');
        });
      } else {
        copyFallback(codeToCopy);
      }
    }

    function copyFallback(text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      mostrarMsg('✓ ¡Código copiado!');
    }

    function mostrarMsg(texto) {
      var msg = document.getElementById('copyMsg');
      if (!msg) return;
      msg.innerHTML = texto;
      msg.style.display = 'inline';
      setTimeout(function () { msg.style.display = 'none'; }, 4000);
    }
  </script>

  <div id="pure-email-wrapper">
    ${pureHtml.replace(/^[\s\S]*?<body[^>]*>/i, '').replace(/<\/body>[\s\S]*$/i, '')}
  </div>
</body>
</html>`;
}

// EXECUTE GENERATION
const downloadsDir = 'C:\\Users\\Paula\\Downloads';
const storytellingDir = path.join(__dirname, '../recursos/storytelling');
const recursosDir = path.join(__dirname, '../recursos');
const publicDir = path.join(__dirname, '../public');

SECTORS.forEach(s => {
  const pureHtml = buildEmailHtml(s);
  const viewerHtml = buildPublicViewerHtml(s, pureHtml);

  // 1. Write to Downloads
  fs.writeFileSync(path.join(downloadsDir, s.files.storytelling), pureHtml, 'utf8');

  // 2. Write to recursos/storytelling
  fs.writeFileSync(path.join(storytellingDir, s.files.storytelling), pureHtml, 'utf8');

  // 3. Write to recursos/plantilla-red-*.html
  fs.writeFileSync(path.join(recursosDir, s.files.plantilla), pureHtml, 'utf8');

  // 4. Write to public/plantilla-red-*.html (with floating toolbar)
  fs.writeFileSync(path.join(publicDir, s.files.plantilla), viewerHtml, 'utf8');

  // 5. Write to public/glocation-red-*.html
  fs.writeFileSync(path.join(publicDir, s.files.glocation), viewerHtml, 'utf8');

  console.log(`[OK] Generated and synchronized: ${s.key}`);
});

console.log('All templates successfully generated and synchronized!');
