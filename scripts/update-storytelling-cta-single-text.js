const fs = require('fs');
const path = require('path');

const targets = [
  {
    sector: 'Tecnología',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Tecnologia_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Tecnologia_Storytelling.html',
    btnText: 'Tengo un caso para explorar &#9993;',
    mailto: 'mailto:paula.rozo@glocation.com.co?subject=Posible%20alianza%20con%20GLocation&amp;body=Hola%20Paula%2C%20me%20interesa%20explorar%20una%20posible%20alianza.%20El%20caso%20que%20tenemos%20en%20mente%20es%3A%20'
  },
  {
    sector: 'Logística',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Logistica_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Logistica_Storytelling.html',
    btnText: 'Quiero revisar un proceso de compras &#9993;',
    mailto: 'mailto:paula.rozo@glocation.com.co?subject=Posible%20alianza%20con%20GLocation%20-%20Log%C3%ADstica&amp;body=Hola%20Paula%2C%20me%20interesa%20revisar%20un%20proceso%20de%20compras%20con%20Trabajadores%20Cognitivos.%20Nuestro%20caso%20es%3A%20'
  },
  {
    sector: 'Construcción',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Construccion_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Construccion_Storytelling.html',
    btnText: 'Quiero revisar un proceso de contrataci&oacute;n &#9993;',
    mailto: 'mailto:paula.rozo@glocation.com.co?subject=Posible%20alianza%20con%20GLocation%20-%20Construcci%C3%B3n&amp;body=Hola%20Paula%2C%20me%20interesa%20revisar%20un%20proceso%20de%20contrataci%C3%B3n%20con%20Trabajadores%20Cognitivos.%20Nuestro%20caso%20es%3A%20'
  },
  {
    sector: 'Agroindustria',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Agroindustria_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Agroindustria_Storytelling.html',
    btnText: 'Quiero revisar la evaluaci&oacute;n de proveedores &#9993;',
    mailto: 'mailto:paula.rozo@glocation.com.co?subject=Posible%20alianza%20con%20GLocation%20-%20Agroindustria&amp;body=Hola%20Paula%2C%20me%20interesa%20revisar%20la%20evaluaci%C3%B3n%20de%20proveedores%20con%20Trabajadores%20Cognitivos.%20Nuestro%20caso%20es%3A%20'
  }
];

function buildCtaSecondaryBlock(btnText, mailto) {
  return `    <p style="margin:18px 0 12px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:500;color:#64748B;text-align:center;">Si a&uacute;n no desea agendar, responda este correo con una descripci&oacute;n de su necesidad o inter&eacute;s:</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:separate !important;border:0 !important;border-style:none !important;"><tr>
      <td align="center" bgcolor="#475569" style="border-radius:40px;background-color:#475569;border:0 !important;border-style:none !important;">
        <a href="${mailto}" style="display:inline-block;padding:12px 26px;border-radius:40px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;font-weight:600;color:#ffffff;text-decoration:none;">${btnText}</a>
      </td>
    </tr></table>`;
}

// Regex to match from "O empecemos por correo" or text before second button up to closing of CTA td
const ctaRegex = /<p[^>]*>O empecemos por correo<\/p>[\s\S]*?(?=<\/td><\/tr><\/table>\s*<\/td><\/tr>\s*<!-- 08)/i;

for (const t of targets) {
  for (const filePath of [t.fileRecursos, t.fileDownloads]) {
    if (!fs.existsSync(filePath)) {
      console.log('Skipping:', filePath);
      continue;
    }
    let html = fs.readFileSync(filePath, 'utf8');
    if (ctaRegex.test(html)) {
      html = html.replace(ctaRegex, buildCtaSecondaryBlock(t.btnText, t.mailto) + '\n  ');
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`✓ Updated CTA in ${path.basename(filePath)}`);
    } else {
      console.warn(`! Regex did not match in ${filePath}`);
    }
  }
}
