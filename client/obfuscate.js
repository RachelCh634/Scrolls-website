const obfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'build', 'static', 'js');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(dir, file);
    const code = fs.readFileSync(filePath, 'utf8');
    const obfuscated = obfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true,
      stringArray: true,
      rotateStringArray: true,
      stringArrayEncoding: ['base64'],
      stringArrayThreshold: 0.75
    }).getObfuscatedCode();
    fs.writeFileSync(filePath, obfuscated);
  }
});
