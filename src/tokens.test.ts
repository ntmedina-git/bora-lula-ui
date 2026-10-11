import { describe, expect, it } from 'vitest';
import { tokens } from './tokens';
import { contrast } from '../docs/blocks';

const prim = Object.fromEntries(tokens.primitives.map((p) => [p.name, p.value]));
const role = (n: string) => prim[tokens.color.find((c) => c.name === `color/${n}`)!.alias];

// Regras do Guia de Interface (página 01 · Cores como tokens)
describe('contraste dos papéis de cor (WCAG AA)', () => {
  const text: Array<[string, string]> = [
    ['on-primary', 'primary'], ['on-secondary', 'secondary'], ['on-tertiary', 'tertiary'], ['on-highlight', 'highlight'],
    ['on-surface', 'surface'], ['on-surface-variant', 'surface'], ['on-surface-variant', 'surface-container'],
    ['on-primary-container', 'primary-container'], ['error', 'surface'], ['primary', 'surface'], ['secondary', 'surface'], ['tertiary', 'surface'],
    ['feedback/on-success-container', 'feedback/success-container'], ['feedback/on-warning-container', 'feedback/warning-container'],
    ['feedback/on-danger-container', 'feedback/danger-container'], ['feedback/on-info-container', 'feedback/info-container'],
  ];
  it.each(text)('%s sobre %s ≥ 4,5:1 (texto normal)', (fg, bg) => {
    expect(contrast(role(fg), role(bg))).toBeGreaterThanOrEqual(4.5);
  });
  it.each([['outline', 'surface'], ['highlight', 'primary'], ['focus-ring', 'surface']])('%s sobre %s ≥ 3:1 (controles e texto grande)', (fg, bg) => {
    expect(contrast(role(fg), role(bg))).toBeGreaterThanOrEqual(3);
  });
  it('amarelo sobre branco nunca passa (regra "nunca")', () => {
    expect(contrast(role('highlight'), role('surface'))).toBeLessThan(3);
  });
});
