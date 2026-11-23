const fs = require('fs');
const path = require('path');

const files = [
  'GLocation_Tecnologia_Storytelling.html',
  'GLocation_Logistica_Storytelling.html',
  'GLocation_Construccion_Storytelling.html',
  'GLocation_Agroindustria_Storytelling.html'
];

files.forEach(f => {
  const p1 = path.join(__dirname, '..', 'recursos', 'storytelling', f);
  if (fs.existsSync(p1)) {
    let lines = fs.readFileSync(p1, 'utf8').split(/\r?\n/);
    lines = lines.filter(l => !l.includes('Google Cloud Partner of the Year 2026 en Colombia'));
    fs.writeFileSync(p1, lines.join('\n'), 'utf8');
    console.log('Processed ' + p1);
  }

  const p2 = path.join('C:', 'Users', 'Paula', 'Downloads', f);
  if (fs.existsSync(p2)) {
    let dlLines = fs.readFileSync(p2, 'utf8').split(/\r?\n/);
    dlLines = dlLines.filter(l => !l.includes('Google Cloud Partner of the Year 2026 en Colombia'));
    fs.writeFileSync(p2, dlLines.join('\n'), 'utf8');
    console.log('Processed ' + p2);
  }
});
