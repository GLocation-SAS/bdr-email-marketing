const fs = require('fs');
const path = require('path');

const ctaConfigs = {
  tecnologia: {
    btn2Text: 'Tengo un caso para explorar',
    subject: 'Posible alianza con GLocation',
    body: 'Hola Paula, me interesa explorar una posible alianza. El caso que tenemos en mente es: ',
    microcopy: '¿Aún no desea agendar? Responda este correo con una breve descripción de su necesidad o interés. Paula le dará seguimiento.'
  },
  logistica: {
    btn2Text: 'Quiero revisar un proceso de compras',
    subject: 'Posible alianza con GLocation - Logística',
    body: 'Hola Paula, me interesa revisar un proceso de compras con Trabajadores Cognitivos. Nuestro caso es: ',
    microcopy: '¿Aún no desea agendar? Responda este correo indicando qué proceso de compras o fletes le gustaría agilizar. Paula le dará seguimiento.'
  },
  construccion: {
    btn2Text: 'Quiero revisar un proceso de contratación',
    subject: 'Posible alianza con GLocation - Construcción',
    body: 'Hola Paula, me interesa revisar un proceso de contratación con Trabajadores Cognitivos. Nuestro caso es: ',
    microcopy: '¿Aún no desea agendar? Responda este correo indicando qué trámite o expediente de obra le quita más tiempo. Paula le dará seguimiento.'
  },
  agroindustria: {
    btn2Text: 'Quiero revisar la evaluación de proveedores',
    subject: 'Posible alianza con GLocation - Agroindustria',
    body: 'Hola Paula, me interesa revisar la evaluación de proveedores con Trabajadores Cognitivos. Nuestro caso es: ',
    microcopy: '¿Aún no desea agendar? Responda este correo indicando qué validación de calidad o proveedores le resulta más desgastante. Paula le dará seguimiento.'
  }
};

function generateCtaHtml(cfg) {
  const mailtoUrl = `mailto:paula.rozo@glocation.com.co?subject=${encodeURIComponent(cfg.subject)}&amp;body=${encodeURIComponent(cfg.body)}`;

  return `<!-- 07 · CTA: dos caminos para avanzar -->
<tr><td class="px" style="padding:4px 34px 28px 34px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;background-color:#EEF6FC;background-image:linear-gradient(135deg,#E6F6FE 0%,#F3EEFC 100%);border:1px solid #DCE6F2;border-radius:16px;"><tr>
  <td align="center" style="padding:28px 24px 26px 24px;">
    <p style="margin:0 0 8px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:20px;line-height:27px;font-weight:700;color:#0D2140;text-align:center;">¿Tiene un caso de IA que podamos explorar juntos?</p>
    <p style="margin:0 0 20px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;font-weight:400;color:#4A515D;text-align:center;">Conversemos sobre cómo complementar su oferta con Trabajadores Cognitivos. Usted elige cómo empezar.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td class="btn" align="center" bgcolor="#3F1C81" style="border-radius:40px;background-color:#3F1C81;background-image:linear-gradient(90deg,#3F1C81 0%,#BF8BDB 100%);">
        <a href="https://citas.glocation.co/?theme=light" target="_blank" style="display:inline-block;padding:15px 30px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;font-weight:700;color:#ffffff;text-decoration:none;">Agendar conversación de 30 min &rarr;</a>
      </td>
    </tr></table>
    <p style="margin:16px 0 10px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:600;color:#64748B;text-align:center;">O empecemos por correo</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td align="center" bgcolor="#E2E8F0" style="border-radius:40px;background-color:#E2E8F0;border:1px solid #CBD5E1;">
        <a href="${mailtoUrl}" style="display:inline-block;padding:11px 22px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;font-weight:600;color:#1E293B;text-decoration:none;">${cfg.btn2Text} &#9993;</a>
      </td>
    </tr></table>
    <p style="margin:14px 0 0 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:400;color:#64748B;text-align:center;">${cfg.microcopy}</p>
  </td></tr></table>
</td></tr>\n\n`;
}

const files = [
  { key: 'tecnologia', name: 'GLocation_Tecnologia_Storytelling.html' },
  { key: 'logistica', name: 'GLocation_Logistica_Storytelling.html' },
  { key: 'construccion', name: 'GLocation_Construccion_Storytelling.html' },
  { key: 'agroindustria', name: 'GLocation_Agroindustria_Storytelling.html' }
];

const ctaRegex = /<!-- 07 · CTA:[^]*?(?=<!-- 08 · FIRMA Y PIE)/;

for (const f of files) {
  const cfg = ctaConfigs[f.key];
  const newCta = generateCtaHtml(cfg);

  // 1. Update in recursos/storytelling/
  const localPath = path.join(__dirname, '..', 'recursos', 'storytelling', f.name);
  if (fs.existsSync(localPath)) {
    let content = fs.readFileSync(localPath, 'utf8');
    if (ctaRegex.test(content)) {
      content = content.replace(ctaRegex, newCta);
      fs.writeFileSync(localPath, content, 'utf8');
      console.log(`Updated CTA in: ${localPath}`);
    } else {
      console.warn(`CTA regex failed for: ${localPath}`);
    }
  }

  // 2. Update in c:\Users\Paula\Downloads\
  const dlPath = path.join('c:\\Users\\Paula\\Downloads', f.name);
  if (fs.existsSync(dlPath)) {
    let dlContent = fs.readFileSync(dlPath, 'utf8');
    if (ctaRegex.test(dlContent)) {
      dlContent = dlContent.replace(ctaRegex, newCta);
      fs.writeFileSync(dlPath, dlContent, 'utf8');
      console.log(`Updated CTA in Downloads: ${dlPath}`);
    } else {
      console.warn(`CTA regex failed for: ${dlPath}`);
    }
  }
}
