// Gera tokens.css, tokens.json (DTCG), preset do Tailwind e tokens.ts
// a partir de tokens/figma-export.json (exportado das variáveis do Figma).
// Uso: npm run tokens
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = JSON.parse(readFileSync(resolve(root, 'tokens/figma-export.json'), 'utf8'));
const write = (p, s) => { const f = resolve(root, p); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, s); };

const prim = src.collections.Primitives;
const primByName = Object.fromEntries(prim.map((p) => [p.name, p]));
const px = (n) => (n === 0 ? '0' : `${n}px`);
const rem = (n) => `${+(n / 16).toFixed(4)}rem`;

// Fluido entre 360 px e 1280 px de viewport
const fluid = (min, max) => {
  if (min === max) return rem(min);
  const slope = (max - min) / (1280 - 360);
  const intercept = min - slope * 360;
  return `clamp(${rem(min)}, ${rem(intercept)} + ${+(slope * 100).toFixed(3)}vw, ${rem(max)})`;
};

const lines = [];
const L = (s = '') => lines.push(s);
L('/* Gerado por scripts/build-tokens.mjs a partir das variáveis do Figma. Não edite à mão. */');
L(':root {');
L('  /* Primitivos — valores crus. Prefira os papéis semânticos abaixo. */');
for (const p of prim) L(`  ${p.css}: ${p.value};`);
L();
L('  /* Papéis semânticos (estilo M3) */');
for (const c of src.collections.Color) L(`  ${c.css}: var(${primByName[c.alias].css});${c.description ? ` /* ${c.description} */` : ''}`);
for (const [coll, label] of [['Spacing', 'Espaçamento (base 4 px)'], ['Radius', 'Raios'], ['Size', 'Tamanhos'], ['Border', 'Bordas']]) {
  L();
  L(`  /* ${label} */`);
  for (const t of src.collections[coll]) L(`  ${t.css}: ${px(t.value)};${t.description ? ` /* ${t.description} */` : ''}`);
}
L();
L('  /* Tipografia — títulos fluidos entre 360 e 1280 px */');
L('  --cp-font: "Montserrat", system-ui, sans-serif;');
for (const t of src.text) L(`  ${t.css}: ${fluid(t.min, t.max)};`);
L();
L('  /* Sombras e foco */');
for (const e of src.effects) L(`  ${e.css}: ${e.value};`);
L();
L('  /* Breakpoints (referência; use em media queries) */');
L('  --cp-bp-md: 768px;');
L('  --cp-bp-lg: 1024px;');
L('  --cp-bp-xl: 1280px;');
L('  --cp-content-max: 1200px;');
L('  --cp-motion-fast: 120ms;');
L('  --cp-motion: 200ms;');
L('}');
L();
L('@media (prefers-reduced-motion: reduce) {');
L('  :root { --cp-motion-fast: 0ms; --cp-motion: 0ms; }');
L('}');
write('src/styles/tokens.css', lines.join('\n') + '\n');

// Classes de tipografia
const ty = ['/* Gerado por scripts/build-tokens.mjs. */'];
for (const t of src.text) {
  const cls = 'cp-text-' + t.name.toLowerCase().replace(/\s+/g, '-');
  ty.push(`.${cls} { font-family: var(--cp-font); font-size: var(${t.css}); font-weight: ${t.weight}; line-height: ${t.lineHeight};${t.case === 'uppercase' ? ' text-transform: uppercase;' : ''}${t.letterSpacing ? ` letter-spacing: ${t.letterSpacing};` : ''} }`);
}
write('src/styles/typography.css', ty.join('\n') + '\n');

// DTCG (Design Tokens Community Group) — útil para zeroheight, Style Dictionary etc.
const dtcg = { $description: src.source, primitive: {}, color: {}, space: {}, radius: {}, size: {}, border: {}, shadow: {}, typography: {} };
const setPath = (obj, path, val) => { const parts = path.split('/'); let o = obj; parts.slice(0, -1).forEach((k) => (o = o[k] ??= {})); o[parts.at(-1)] = val; };
for (const p of prim) setPath(dtcg.primitive, p.name, { $type: 'color', $value: p.value });
for (const c of src.collections.Color) setPath(dtcg.color, c.name.replace(/^color\//, ''), { $type: 'color', $value: `{primitive.${c.alias.replace('/', '.')}}`, $description: c.description });
for (const [coll, key] of [['Spacing', 'space'], ['Radius', 'radius'], ['Size', 'size'], ['Border', 'border']])
  for (const t of src.collections[coll]) dtcg[key][t.name.split('/')[1]] = { $type: 'dimension', $value: px(t.value), $description: t.description };
for (const e of src.effects) dtcg.shadow[e.name] = { $type: 'shadow', $value: e.value, $description: e.description };
for (const t of src.text) dtcg.typography[t.name] = { $type: 'typography', $value: { fontFamily: 'Montserrat', fontWeight: t.weight, fontSize: `${t.min}px → ${t.max}px`, lineHeight: t.lineHeight } };
write('tokens/tokens.json', JSON.stringify(dtcg, null, 2) + '\n');

// Preset do Tailwind (mesmos valores do guia)
const tw = {
  theme: {
    extend: {
      colors: {
        cp: Object.fromEntries(
          src.collections.Color.map((c) => [c.name.replace(/^color\//, '').replace('feedback/', ''), `var(${c.css})`]),
        ),
      },
      spacing: Object.fromEntries(src.collections.Spacing.map((t) => [`cp-${t.name.split('/')[1]}`, `var(${t.css})`])),
      borderRadius: Object.fromEntries(src.collections.Radius.map((t) => [`cp-${t.name.split('/')[1]}`, `var(${t.css})`])),
      fontFamily: { sans: ['Montserrat', 'system-ui', 'sans-serif'] },
      boxShadow: { 'cp-1': 'var(--cp-shadow-1)', 'cp-2': 'var(--cp-shadow-2)', 'cp-focus': 'var(--cp-focus-light)', 'cp-focus-red': 'var(--cp-focus-red)' },
      screens: { md: '768px', lg: '1024px', xl: '1280px' },
    },
  },
};
write('tokens/tailwind-preset.cjs', `/* Gerado por scripts/build-tokens.mjs. Use: presets: [require('@boralula/ui/tailwind-preset')] */\nmodule.exports = ${JSON.stringify(tw, null, 2)};\n`);

// Objeto TS para as páginas de documentação
write('src/tokens.ts', `/* Gerado por scripts/build-tokens.mjs. */\nexport const tokens = ${JSON.stringify({ primitives: prim, color: src.collections.Color, spacing: src.collections.Spacing, radius: src.collections.Radius, size: src.collections.Size, border: src.collections.Border, text: src.text, effects: src.effects }, null, 2)} as const;\n`);

console.log(`tokens: ${prim.length} primitivos, ${src.collections.Color.length} papéis, ${src.text.length} estilos de texto`);
