const fs = require('fs');
const path = require('path');

const sectors = [
  {
    file: 'GLocation_Tecnologia_Storytelling.html',
    question: '¿Tiene un caso de IA que<br>podamos explorar juntos?',
    description: 'Conversemos sobre cómo complementar su oferta con Trabajadores Cognitivos. Usted elige cómo empezar.',
    primaryBtn: 'Agendar conversación de alianza (30 min) &rarr;',
    supportLine: 'Si a&uacute;n no desea agendar, responda este correo con el caso que tiene en mente:',
    secondaryBtn: 'Tengo un caso para explorar &#9993;',
    mailtoSubject: 'Posible alianza con GLocation',
    mailtoBody: 'Hola, Paula: me interesa explorar una posible alianza. El caso que tenemos en mente es: '
  },
  {
    file: 'GLocation_Logistica_Storytelling.html',
    question: '¿Revisamos dónde se demora<br>hoy su equipo?',
    description: 'En 30 minutos, sin venta, miramos la evaluación de proveedores o los comparativos de ofertas y definimos si vale la pena.',
    primaryBtn: 'Agendar Diagnóstico Cognitivo (30 min) &rarr;',
    supportLine: 'Si a&uacute;n no desea agendar, responda este correo y cu&eacute;ntenos qu&eacute; proceso le gustar&iacute;a revisar:',
    secondaryBtn: 'Quiero revisar un proceso de compras &#9993;',
    mailtoSubject: 'Diagnóstico Cognitivo Logística - GLocation',
    mailtoBody: 'Hola, Paula: me interesa revisar un proceso de compras. Nuestro proceso es: '
  },
  {
    file: 'GLocation_Construccion_Storytelling.html',
    question: '¿Revisamos qué está frenando<br>su contratación?',
    description: 'En 30 minutos, sin venta, miramos las cotizaciones o los expedientes de un proyecto y definimos si vale la pena.',
    primaryBtn: 'Agendar Diagnóstico Cognitivo (30 min) &rarr;',
    supportLine: 'Si a&uacute;n no desea agendar, responda este correo y cu&eacute;ntenos qu&eacute; proceso le gustar&iacute;a revisar:',
    secondaryBtn: 'Quiero revisar un proceso de contratación &#9993;',
    mailtoSubject: 'Diagnóstico Cognitivo Construcción - GLocation',
    mailtoBody: 'Hola, Paula: me interesa revisar un proceso de contratación. Nuestro proceso es: '
  },
  {
    file: 'GLocation_Agroindustria_Storytelling.html',
    question: '¿Revisamos cómo aprueban<br>hoy a un proveedor?',
    description: 'En 30 minutos, sin venta, miramos la recopilación de documentos o la revisión de vigencias y definimos si vale la pena.',
    primaryBtn: 'Agendar Diagnóstico Cognitivo (30 min) &rarr;',
    supportLine: 'Si a&uacute;n no desea agendar, responda este correo y cu&eacute;ntenos qu&eacute; proceso le gustar&iacute;a revisar:',
    secondaryBtn: 'Quiero revisar la evaluación de proveedores &#9993;',
    mailtoSubject: 'Diagnóstico Cognitivo Agroindustria - GLocation',
    mailtoBody: 'Hola, Paula: me interesa revisar la evaluación de proveedores. Nuestro proceso es: '
  }
];

function buildCtaSection(s) {
  const encSubject = encodeURIComponent(s.mailtoSubject);
  const encBody = encodeURIComponent(s.mailtoBody);
  const mailtoHref = `mailto:paula.rozo@glocation.com.co?subject=${encSubject}&amp;body=${encBody}`;

  return `<!-- 07 · CTA: dos caminos para avanzar -->
<tr><td class="px" style="padding:4px 34px 28px 34px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;background-color:#EEF6FC;background-image:linear-gradient(135deg,#E6F6FE 0%,#F3EEFC 100%);border:1px solid #DCE6F2;border-radius:16px;"><tr>
  <td align="center" style="padding:28px 24px 26px 24px;">
    <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:20px;line-height:27px;font-weight:700;color:#0D2140;text-align:center;">${s.question}</p>
    <p style="margin:0 0 20px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;font-weight:400;color:#4A515D;text-align:center;">${s.description}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td class="btn" align="center" bgcolor="#3F1C81" style="border-radius:40px;background-color:#3F1C81;background-image:linear-gradient(90deg,#3F1C81 0%,#BF8BDB 100%);">
        <a href="https://citas.glocation.co/?theme=light" target="_blank" style="display:inline-block;padding:15px 30px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;font-weight:700;color:#ffffff;text-decoration:none;">${s.primaryBtn}</a>
      </td>
    </tr></table>
        <p style="margin:18px 0 12px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:500;color:#64748B;text-align:center;">${s.supportLine}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:separate !important;">
      <tr>
        <td align="center" bgcolor="#FFFFFF" style="border-radius:40px;background-color:#FFFFFF;border:1.5px solid #CBD5E1;box-shadow:0 1px 2px rgba(0,0,0,0.04);">
          <a href="${mailtoHref}" style="display:inline-block;padding:11px 24px;border-radius:40px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;font-weight:600;color:#1E293B;text-decoration:none;">${s.secondaryBtn}</a>
        </td>
      </tr>
    </table>
  </td></tr></table>
</td></tr>`;
}

const ctaRegex = /<!-- 07 · CTA: dos caminos para avanzar -->[\s\S]*?(?=<!-- 08 · FIRMA Y ECOSISTEMA HORIZONTAL -->)/;

sectors.forEach(s => {
  const filePath = path.join(__dirname, '..', 'recursos', 'storytelling', s.file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!ctaRegex.test(content)) {
    console.error(`CTA regex not matched in ${s.file}`);
    return;
  }

  const newCta = buildCtaSection(s) + '\n\n';
  content = content.replace(ctaRegex, newCta);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated CTA in ${s.file}`);

  // Also update in C:\Users\Paula\Downloads\
  const downloadPath = path.join('C:', 'Users', 'Paula', 'Downloads', s.file);
  if (fs.existsSync(downloadPath)) {
    let dlContent = fs.readFileSync(downloadPath, 'utf8');
    dlContent = dlContent.replace(ctaRegex, newCta);
    fs.writeFileSync(downloadPath, dlContent, 'utf8');
    console.log(`Updated CTA in Downloads: ${downloadPath}`);
  }
});
