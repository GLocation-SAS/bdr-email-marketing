const fs = require('fs');
const path = require('path');

const targets = [
  {
    name: 'Tecnología',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Tecnologia_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Tecnologia_Storytelling.html'
  },
  {
    name: 'Logística',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Logistica_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Logistica_Storytelling.html'
  },
  {
    name: 'Construcción',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Construccion_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Construccion_Storytelling.html'
  },
  {
    name: 'Agroindustria',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Agroindustria_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Agroindustria_Storytelling.html'
  }
];

for (const t of targets) {
  for (const filePath of [t.fileRecursos, t.fileDownloads]) {
    if (!fs.existsSync(filePath)) continue;
    let html = fs.readFileSync(filePath, 'utf8');

    const regex = /<table role="presentation"[^>]*align="center"[^>]*><tr>\s*<td align="center" bgcolor="#475569"[^>]*>\s*<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/td>\s*<\/tr>\s*<\/table>/g;

    if (regex.test(html)) {
      html = html.replace(regex, (match, mailtoUrl, linkText) => {
        return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:separate !important;">
      <tr>
        <td align="center" bgcolor="#FFFFFF" style="border-radius:40px;background-color:#FFFFFF;border:1.5px solid #CBD5E1;box-shadow:0 1px 2px rgba(0,0,0,0.04);">
          <a href="${mailtoUrl}" style="display:inline-block;padding:11px 24px;border-radius:40px;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;font-weight:600;color:#1E293B;text-decoration:none;">${linkText.trim()}</a>
        </td>
      </tr>
    </table>`;
      });
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`✓ Updated ghost button in ${path.basename(filePath)} (${t.name})`);
    } else {
      console.warn(`! Regex did not match in ${filePath}`);
    }
  }
}
