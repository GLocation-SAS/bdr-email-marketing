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
  return `<!-- 08 · FIRMA Y ECOSISTEMA (AL LADO) -->
<tr><td class="px" style="padding:14px 34px 12px 34px;background-color:#F8FAFD;border-top:1px solid #E3E9F1;">
  <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:15px;font-weight:600;letter-spacing:1.2px;color:#64748B;text-transform:uppercase;text-align:center;">
    HOLDING SERVINFORMACI&Oacute;N (27 A&Ntilde;OS) &nbsp;&bull;&nbsp; GOOGLE CLOUD PREMIER PARTNER &nbsp;&bull;&nbsp; NORMA ISO 27001
  </p>
</td></tr>

<tr><td class="px" style="padding:22px 28px 20px 28px;background-color:#ffffff;border-top:1px solid #E3E9F1;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;">
    <tr>
      <!-- COLUMNA IZQUIERDA: PERFIL PAULA ROZO -->
      <td class="col" width="50%" valign="middle" style="width:50%;padding:0 10px 0 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="58" valign="middle" style="width:58px;padding-right:12px;">
              <img src="https://raw.githubusercontent.com/GLocation-SAS/bdr-email-marketing/main/public/email-icons/avatar-paula-light.png" width="52" height="52" alt="Paula Rozo" style="width:52px;height:52px;border-radius:26px;display:block;border:2px solid #E0F2FE;">
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
      </td>

      <!-- COLUMNA DERECHA: PÁGINAS Y ECOSISTEMA AL LADO -->
      <td class="col" width="50%" valign="middle" style="width:50%;padding:0 0 0 10px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;">
          <tr>
            <!-- TARJETA 1: glocation.co -->
            <td width="48%" valign="top" style="width:48%;padding:0 4px 6px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#F0F9FF;border:1px solid #BAE6FD;border-radius:10px;">
                <tr>
                  <td align="center" style="padding:9px 6px;">
                    <a href="https://glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                      <div style="font-size:18px;line-height:20px;">&#127760;</div>
                      <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:15px;font-weight:700;color:#0284C7;">glocation.co</p>
                      <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:13px;font-weight:500;color:#64748B;">Plataforma &rarr;</p>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
            <!-- TARJETA 2: homoagenticus.co -->
            <td width="48%" valign="top" style="width:48%;padding:0 0 6px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#FAF5FF;border:1px solid #E9D5FF;border-radius:10px;">
                <tr>
                  <td align="center" style="padding:9px 6px;">
                    <a href="https://homoagenticus.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                      <div style="font-size:18px;line-height:20px;">&#128214;</div>
                      <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:15px;font-weight:700;color:#7C3AED;">homoagenticus</p>
                      <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:13px;font-weight:500;color:#64748B;">Manifiesto &rarr;</p>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <!-- TARJETA 3: preagentica.glocation.co -->
            <td width="48%" valign="top" style="width:48%;padding:0 4px 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#F8FAFC;border:1px solid #CBD5E1;border-radius:10px;">
                <tr>
                  <td align="center" style="padding:9px 6px;">
                    <a href="https://preagentica.glocation.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                      <div style="font-size:18px;line-height:20px;">&#127963;&#65039;</div>
                      <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:15px;font-weight:700;color:#334155;">preagentica</p>
                      <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:13px;font-weight:500;color:#64748B;">Pre-IA &rarr;</p>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
            <!-- TARJETA 4: LinkedIn Oficial -->
            <td width="48%" valign="top" style="width:48%;padding:0 0 0 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate !important;background-color:#F0F7FF;border:1px solid #BFDBFE;border-radius:10px;">
                <tr>
                  <td align="center" style="padding:9px 6px;">
                    <a href="https://www.linkedin.com/company/glocation/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
                      <div style="font-size:18px;line-height:20px;">&#128188;</div>
                      <p style="margin:3px 0 1px 0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:12px;line-height:15px;font-weight:700;color:#0A66C2;">LinkedIn</p>
                      <p style="margin:0;font-family:'Poppins','Segoe UI',Arial,Helvetica,sans-serif;font-size:10px;line-height:13px;font-weight:500;color:#64748B;">Perfil &rarr;</p>
                    </a>
                  </td>
                </tr>
              </table>
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
      console.log(`✓ Updated ${t.name} side-by-side signature in ${path.basename(filePath)}`);
    } else {
      console.warn(`! Regex did not match in ${filePath}`);
    }
  }
}
