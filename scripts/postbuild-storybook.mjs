// Nome e idioma do site de guideline gerado pelo Storybook.
import { readFileSync, writeFileSync } from 'node:fs';
for (const f of ['storybook-static/index.html', 'storybook-static/iframe.html']) {
  let s = readFileSync(f, 'utf8');
  s = s.replace(/<html lang="en">/, '<html lang="pt-BR">').replace(/<title>.*?<\/title>/, '<title>Bora Lula Design System</title>');
  writeFileSync(f, s);
}
console.log('títulos e idioma ajustados');
