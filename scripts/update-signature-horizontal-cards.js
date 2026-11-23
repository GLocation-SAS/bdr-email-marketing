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
  return `<!-- 08 · FIRMA Y ECOSISTEMA HORIZONTAL -->
<tr><td class="px" style="padding:14px 34px 12px 34px;background-color:#F8FAFD;border-top:1px solid #E3E9F1;">
  <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:15px;font-weight:600;letter-spacing:1.2px;color:#64748B;text-transform:uppercase;text-align:center;">
    HOLDING SERVINFORMACI&Oacute;N (27 A&Ntilde;OS) &nbsp;&bull;&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;&bull;&nbsp; NORMA ISO 27001
  </p>
</td></tr>

<tr><td class="px" style="padding:18px 28px 18px 28px;background-color:#ffffff;border-top:1px solid #E3E9F1;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="66" valign="middle" style="width:66px;min-width:66px;padding-right:14px;">
        <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png" width="52" height="52" alt="Paula Rozo" style="width:52px;height:52px;min-width:52px;max-width:52px;min-height:52px;max-height:52px;border-radius:26px;display:block;border:0;outline:none;">
      </td>
      <td valign="middle">
        <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:15px;line-height:19px;font-weight:700;color:#0D2140;">Paula Rozo</p>
        <p style="margin:0 0 2px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:400;color:#4A515D;">BDR &middot; Business Development Representative</p>
        <p style="margin:0 0 3px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:600;color:#22779c;">GLocation SAS &middot; Transformaci&oacute;n Cognitiva</p>
        <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:16px;font-weight:600;color:#0284c7;">
          <a href="mailto:paula.rozo@glocation.com.co?subject=${subject}" style="color:#0284c7;text-decoration:none;">&#9993;&nbsp;paula.rozo@glocation.com.co</a>
        </p>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 4 TARJETAS EN UNA SOLA LÍNEA HORIZONTAL ABAJITO -->
<tr><td class="px" style="padding:16px 24px 18px 24px;background-color:#F8FAFD;border-top:1px solid #E3E9F1;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;">
    <tr>
      <!-- TARJETA 1: glocation.co -->
      <td width="25%" valign="top" style="width:25%;padding:0 4px 0 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">
          <tr>
            <td align="center" style="padding:9px 4px;">
              <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:18px;line-height:20px;">&#127760;</div>
                <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#0284C7;white-space:nowrap;">glocation.co</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:9px;line-height:12px;font-weight:500;color:#64748B;white-space:nowrap;">Plataforma &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
      <!-- TARJETA 2: homoagenticus.co -->
      <td width="25%" valign="top" style="width:25%;padding:0 3px 0 3px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">
          <tr>
            <td align="center" style="padding:9px 4px;">
              <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:18px;line-height:20px;">&#128214;</div>
                <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#7C3AED;white-space:nowrap;">homoagenticus</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:9px;line-height:12px;font-weight:500;color:#64748B;white-space:nowrap;">Manifiesto &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
      <!-- TARJETA 3: preagentica.glocation.co -->
      <td width="25%" valign="top" style="width:25%;padding:0 3px 0 3px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">
          <tr>
            <td align="center" style="padding:9px 4px;">
              <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:18px;line-height:20px;">&#127963;&#65039;</div>
                <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#334155;white-space:nowrap;">preagentica</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:9px;line-height:12px;font-weight:500;color:#64748B;white-space:nowrap;">Pre-IA &rarr;</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
      <!-- TARJETA 4: LinkedIn Oficial -->
      <td width="25%" valign="top" style="width:25%;padding:0 0 0 4px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.02);">
          <tr>
            <td align="center" style="padding:9px 4px;">
              <a href="https://www.linkedin.com/company/glocation/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                <div style="font-size:18px;line-height:20px;">&#128188;</div>
                <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#0A66C2;white-space:nowrap;">LinkedIn</p>
                <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:9px;line-height:12px;font-weight:500;color:#64748B;white-space:nowrap;">Perfil &rarr;</p>
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

    // Replace old Section 08 (from <!-- 08 to before the legal footer row)
    const regex = /<!-- 08 [·\-] FIRMA Y ECOSISTEMA[\s\S]*?(?=<tr><td class="px" align="center" bgcolor="#F4F6F9")/i;
    if (regex.test(html)) {
      html = html.replace(regex, buildSection08(t.subject) + '\n');
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`✓ Updated ${t.name} horizontal cards in ${path.basename(filePath)}`);
    } else {
      console.warn(`! Regex did not match in ${filePath}`);
    }
  }
}
