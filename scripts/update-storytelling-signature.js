const fs = require('fs');
const path = require('path');

const targets = [
  {
    name: 'Tecnología',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Tecnologia_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Tecnologia_Storytelling.html',
    subject: 'Conversaci%C3%B3n%20de%20alianza%20-%20GLocation'
  },
  {
    name: 'Logística',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Logistica_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Logistica_Storytelling.html',
    subject: 'Diagn%C3%B3stico%20Cognitivo%20Log%C3%ADstica%20-%20GLocation'
  },
  {
    name: 'Construcción',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Construccion_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Construccion_Storytelling.html',
    subject: 'Diagn%C3%B3stico%20Cognitivo%20Construcci%C3%B3n%20-%20GLocation'
  },
  {
    name: 'Agroindustria',
    fileRecursos: path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Agroindustria_Storytelling.html'),
    fileDownloads: 'C:\\Users\\Paula\\Downloads\\GLocation_Agroindustria_Storytelling.html',
    subject: 'Diagn%C3%B3stico%20Cognitivo%20Agroindustria%20-%20GLocation'
  }
];

function buildSection08(subject) {
  return `<!-- 08 · FIRMA Y ECOSISTEMA -->
<tr><td class="px" style="padding:14px 34px 12px 34px;background-color:#F8FAFD;border-top:1px solid #E3E9F1;">
  <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:15px;font-weight:600;letter-spacing:1.2px;color:#64748B;text-transform:uppercase;text-align:center;">
    HOLDING SERVINFORMACI&Oacute;N (27 A&Ntilde;OS) &nbsp;&bull;&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;&bull;&nbsp; NORMA ISO 27001
  </p>
</td></tr>

<tr><td class="px" style="padding:22px 34px 18px 34px;background-color:#ffffff;border-top:1px solid #E3E9F1;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
    <td width="66" valign="middle" style="width:66px;padding-right:14px;"><img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png" width="54" height="54" alt="Paula Rozo" style="width:54px;height:54px;border-radius:27px;display:block;border:2px solid #E0F2FE;"></td>
    <td valign="middle">
      <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:15px;line-height:20px;font-weight:700;color:#0D2140;">Paula Rozo</p>
      <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:17px;font-weight:400;color:#4A515D;">BDR &middot; Business Development Representative</p>
      <p style="margin:0 0 4px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:17px;font-weight:600;color:#22779c;">GLocation SAS &middot; Transformaci&oacute;n Cognitiva</p>
      <p style="margin:0 0 0px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:17px;font-weight:500;color:#64748B;">
        <a href="mailto:paula.rozo@glocation.com.co?subject=${subject}" style="color:#0284c7;text-decoration:none;font-weight:600;">&#9993;&nbsp;paula.rozo@glocation.com.co</a>
        &nbsp;&nbsp;<span style="color:#CBD5E1;">|</span>&nbsp;&nbsp;
        <a href="https://www.linkedin.com/company/glocation/" target="_blank" rel="noopener noreferrer" style="color:#0A66C2;text-decoration:none;font-weight:600;">&#128188;&nbsp;LinkedIn Oficial &rarr;</a>
      </p>
    </td>
  </tr></table>
</td></tr>

<!-- ECOSISTEMA EN VIVO: 4 TARJETAS INTERACTIVAS -->
<tr><td class="px" style="padding:18px 34px 22px 34px;background-color:#F8FAFD;border-top:1px solid #E3E9F1;">
  <p style="margin:0 0 14px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:14px;font-weight:700;letter-spacing:1.8px;color:#64748B;text-transform:uppercase;text-align:center;">
    EXPLORE NUESTRO ECOSISTEMA EN VIVO
  </p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;">
    <tr>
      <td class="col" width="48%" valign="top" style="width:48%;padding:0 6px 12px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#F0F9FF;border:1px solid #BAE6FD;border-radius:12px;">
          <tr>
            <td align="center" style="padding:14px 10px;">
              <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:22px;line-height:26px;">&#127760;</div>
                <p style="margin:6px 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:17px;font-weight:700;color:#0284C7;">glocation.co</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:500;color:#64748B;">Plataforma Comercial SaaSW &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
      <td class="col" width="48%" valign="top" style="width:48%;padding:0 0 12px 6px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#FAF5FF;border:1px solid #E9D5FF;border-radius:12px;">
          <tr>
            <td align="center" style="padding:14px 10px;">
              <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:22px;line-height:26px;">&#128214;</div>
                <p style="margin:6px 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:17px;font-weight:700;color:#7C3AED;">homoagenticus.co</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:500;color:#64748B;">El Manifiesto del Homo agenticus &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="col" width="48%" valign="top" style="width:48%;padding:0 6px 0 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#F8FAFC;border:1px solid #CBD5E1;border-radius:12px;">
          <tr>
            <td align="center" style="padding:14px 10px;">
              <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:22px;line-height:26px;">&#127963;&#65039;</div>
                <p style="margin:6px 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:17px;font-weight:700;color:#334155;">preagentica.glocation.co</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:500;color:#64748B;">Nuestra Herencia Pre-IA &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
      <td class="col" width="48%" valign="top" style="width:48%;padding:0 0 0 6px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#F0F7FF;border:1px solid #BFDBFE;border-radius:12px;">
          <tr>
            <td align="center" style="padding:14px 10px;">
              <a href="https://www.linkedin.com/company/glocation/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:22px;line-height:26px;">&#128188;</div>
                <p style="margin:6px 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:13px;line-height:17px;font-weight:700;color:#0A66C2;">LinkedIn GLocation</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:500;color:#64748B;">Perfil Oficial en LinkedIn &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</td></tr>`;
}

for (const t of targets) {
  for (const filePath of [t.fileRecursos, t.fileDownloads]) {
    if (!fs.existsSync(filePath)) {
      console.log('Skipping missing file:', filePath);
      continue;
    }
    let html = fs.readFileSync(filePath, 'utf8');

    // Replace old Section 08 (from <!-- 08 · FIRMA Y PIE --> to before the legal footer row)
    const regex = /<!-- 08 [·\-] FIRMA Y PIE -->[\s\S]*?(?=<tr><td class="px" align="center" bgcolor="#F4F6F9")/i;
    if (regex.test(html)) {
      html = html.replace(regex, buildSection08(t.subject) + '\n');
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`✓ Updated ${t.name} signature & ecosystem cards in ${path.basename(filePath)}`);
    } else {
      console.warn(`! Regex did not match in ${filePath}`);
    }
  }
}
