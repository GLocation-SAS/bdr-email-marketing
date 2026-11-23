const fs = require('fs');
const path = require('path');

const files = [
  'C:/Users/Paula/Downloads/GLocation_Tecnologia_Storytelling.html',
  'C:/Users/Paula/Downloads/GLocation_Logistica_Storytelling.html',
  'C:/Users/Paula/Downloads/GLocation_Construccion_Storytelling.html',
  'C:/Users/Paula/Downloads/GLocation_Agroindustria_Storytelling.html',
  'C:/Users/Paula/Downloads/GLocation_Tecnologia-y-Servicios-Digitales.html',
  'C:/Users/Paula/Downloads/GLocation_Logistica-y-Transporte.html',
  'C:/Users/Paula/Downloads/GLocation_Construccion-e-Inmobiliario.html',
  'C:/Users/Paula/Downloads/GLocation_Agroindustria-y-Alimentos.html',
  path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Tecnologia_Storytelling.html'),
  path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Logistica_Storytelling.html'),
  path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Construccion_Storytelling.html'),
  path.join(__dirname, '..', 'recursos', 'storytelling', 'GLocation_Agroindustria_Storytelling.html')
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    const original = content;
    // Replace: ' Si prefiere no recibir más mensajes, responda «BAJA» a este correo.'
    content = content.replace(/\s*Si prefiere no recibir m[áa]s mensajes,?\s*responda\s*[«"']?BAJA[»"']?\s*a este correo\.?/gi, '');
    content = content.replace(/\s*Si prefiere no recibir m&aacute;s mensajes,?\s*responda\s*(&laquo;|[«"'])?BAJA(&raquo;|[»"'])?\s*a este correo\.?/gi, '');
    if (content !== original) {
      fs.writeFileSync(f, content, 'utf8');
      console.log('✓ Removed BAJA notice in:', f);
    } else {
      console.log('No BAJA notice found in:', f);
    }
  }
});
