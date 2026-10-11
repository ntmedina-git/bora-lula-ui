// Nome e idioma do site de guideline gerado pelo Storybook.
import { readFileSync, writeFileSync } from 'node:fs';
for (const f of ['storybook-static/index.html', 'storybook-static/iframe.html']) {
  let s = readFileSync(f, 'utf8');
  s = s.replace(/<html lang="en">/, '<html lang="pt-BR">').replace(/<title>.*?<\/title>/, '<title>Bora Lula Design System</title>');
  writeFileSync(f, s);
}
console.log('títulos e idioma ajustados');

// O caractere U+FFFD literal em alguns bundles de terceiros quebra a publicação como artifact: troca por escape.
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
for (const f of walk('storybook-static').filter((f) => f.endsWith('.js'))) {
  const s = readFileSync(f, 'utf8');
  if (s.includes('�')) writeFileSync(f, s.split('�').join('\\uFFFD'));
}
