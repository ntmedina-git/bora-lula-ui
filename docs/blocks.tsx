import type { CSSProperties, ReactNode } from 'react';
import * as Icons from 'lucide-react';
import { tokens } from '../src/tokens';

/* Blocos de documentação que leem os tokens gerados do Figma. */

const prim = Object.fromEntries(tokens.primitives.map((p) => [p.name, p]));
const hexOf = (c: (typeof tokens.color)[number]) => prim[c.alias].value;

function luminance(hex: string) {
  const v = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}
export function contrast(a: string, b: string) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

const grid: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, margin: '16px 0 32px' };
const mono: CSSProperties = { fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: 'var(--cp-color-on-surface-variant)' };

export function PrimitiveSwatches({ family }: { family: string }) {
  const list = tokens.primitives.filter((p) => p.name.startsWith(family + '/'));
  return (
    <div className="sb-unstyled" style={grid}>
      {list.map((p) => (
        <div key={p.name}>
          <div style={{ height: 72, borderRadius: 8, background: `var(${p.css})`, boxShadow: 'inset 0 0 0 1px var(--cp-color-outline-variant)' }} />
          <div style={{ fontWeight: 700, fontSize: 14, marginTop: 8 }}>{p.name}</div>
          <div style={mono}>{p.value} · {p.css}</div>
        </div>
      ))}
    </div>
  );
}

export function RoleSwatches({ filter }: { filter: (name: string) => boolean }) {
  const list = tokens.color.filter((c) => filter(c.name));
  return (
    <div className="sb-unstyled" style={{ ...grid, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {list.map((c) => (
        <div key={c.name} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12, borderRadius: 8, boxShadow: 'inset 0 0 0 1px var(--cp-color-outline-variant)' }}>
          <div style={{ width: 48, height: 48, flex: 'none', borderRadius: 8, background: `var(${c.css})`, boxShadow: 'inset 0 0 0 1px var(--cp-color-outline-variant)' }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 14 }}>{c.name}</div>
            <div style={mono}>var({c.css}) → {c.alias} {hexOf(c)}</div>
            <div style={{ fontSize: 13, color: 'var(--cp-color-on-surface-variant)' }}>{c.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const PAIRS: Array<[string, string, string]> = [
  ['color/on-primary', 'color/primary', 'Branco / primary'],
  ['color/on-highlight', 'color/highlight', 'Grafite / highlight'],
  ['color/on-secondary', 'color/secondary', 'Branco / secondary (verde 700)'],
  ['color/on-tertiary', 'color/tertiary', 'Branco / tertiary (azul 700)'],
  ['color/on-surface', 'color/surface', 'Grafite / superfície'],
  ['color/on-surface-variant', 'color/surface', 'Texto secundário / superfície'],
  ['color/on-secondary', 'color/secondary-accent', 'Branco / verde 500'],
  ['color/on-tertiary', 'color/tertiary-accent', 'Branco / azul 500'],
  ['color/highlight', 'color/primary', 'Amarelo / vermelho'],
  ['color/outline', 'color/surface', 'Borda de controle / superfície'],
  ['color/highlight', 'color/surface', 'Amarelo / branco'],
];

/** Tabela de contraste calculada a partir dos tokens (WCAG 2.x). */
export function ContrastTable() {
  const byName = Object.fromEntries(tokens.color.map((c) => [c.name, c]));
  return (
    <table className="sb-unstyled" style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0 32px', fontSize: 14 }}>
      <thead>
        <tr style={{ textAlign: 'left' }}><th>Amostra</th><th>Par</th><th>Razão</th><th>Uso permitido</th></tr>
      </thead>
      <tbody>
        {PAIRS.map(([fg, bg, label]) => {
          const r = contrast(hexOf(byName[fg]), hexOf(byName[bg]));
          const verdict = r >= 4.5 ? 'Texto normal' : r >= 3 ? 'Só texto grande / controles' : 'Nunca';
          const tone = r >= 4.5 ? 'var(--cp-success-text)' : r >= 3 ? 'var(--cp-warning-text)' : 'var(--cp-danger-text)';
          return (
            <tr key={label} style={{ borderTop: '1px solid var(--cp-color-outline-variant)' }}>
              <td style={{ padding: 8 }}><span style={{ display: 'inline-grid', placeItems: 'center', width: 56, height: 40, borderRadius: 6, background: `var(${byName[bg].css})`, color: `var(${byName[fg].css})`, fontWeight: 800, boxShadow: 'inset 0 0 0 1px var(--cp-color-outline-variant)' }}>Aa</span></td>
              <td style={{ padding: 8 }}>{label}</td>
              <td style={{ padding: 8, fontWeight: 700 }}>{r.toFixed(2).replace('.', ',')}:1</td>
              <td style={{ padding: 8, color: tone, fontWeight: 700 }}>{verdict}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function TypeScale() {
  const samples: Record<string, string> = { Display: 'Vem com a gente', H1: 'Trabalhadores de tecnologia', H2: 'Próximas mobilizações', H3: 'Plenária de organização', Title: 'Mais creches no meu bairro', 'Body Large': 'Os Comitês Populares são portadores de um projeto de esperança.', Body: 'Preencha o formulário e receba o link da reunião no seu e-mail.', 'Body Small': 'Publicado em 9 de outubro de 2026', 'Body Small Strong': '1.248 de 2.000 assinaturas', 'Label Large': 'Faça parte', 'Label Medium': 'Agenda', 'Label Small': 'Trabalho de base', 'Label Tab': 'Mobilizar' };
  return (
    <div className="sb-unstyled" style={{ margin: '16px 0 32px' }}>
      {tokens.text.map((t) => (
        <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, padding: '16px 0', borderTop: '1px solid var(--cp-color-outline-variant)', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 800 }}>{t.name}</div>
            <div style={mono}>.cp-text-{t.name.toLowerCase().replace(/\s+/g, '-')}<br />{t.min === t.max ? `${t.min} px` : `${t.min} → ${t.max} px`} · {t.weight} · {t.lineHeight}</div>
          </div>
          <div className={`cp-text-${t.name.toLowerCase().replace(/\s+/g, '-')}`}>{samples[t.name]}</div>
        </div>
      ))}
    </div>
  );
}

export function SpaceScale() {
  return (
    <div className="sb-unstyled" style={{ margin: '16px 0 32px' }}>
      {tokens.spacing.filter((s) => s.value > 0).map((s) => (
        <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '6px 0' }}>
          <code style={{ width: 120, fontWeight: 700 }}>{s.name}</code>
          <span style={{ width: s.value, height: 20, background: 'var(--cp-color-primary)', borderRadius: 2 }} />
          <span style={mono}>{s.value} px · var({s.css}) {s.description && `· ${s.description}`}</span>
        </div>
      ))}
    </div>
  );
}

export function RadiusScale() {
  return (
    <div className="sb-unstyled" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', margin: '16px 0 32px' }}>
      {tokens.radius.filter((r) => r.value > 0).map((r) => (
        <div key={r.name}>
          <div style={{ width: 160, height: 96, background: 'var(--cp-color-surface-container)', border: '1px solid var(--cp-color-outline)', borderRadius: `var(${r.css})` }} />
          <div style={{ fontWeight: 700, marginTop: 8 }}>{r.name}</div>
          <div style={mono}>{r.value} px · {r.description}</div>
        </div>
      ))}
    </div>
  );
}

export function EffectSamples() {
  return (
    <div className="sb-unstyled" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', padding: 32, background: 'var(--cp-color-surface-container)', borderRadius: 16, margin: '16px 0 32px' }}>
      {tokens.effects.map((e) => (
        <div key={e.name} style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
          <div style={{ padding: 20, borderRadius: 12, background: e.name === 'focus-red' ? 'var(--cp-color-primary)' : 'transparent' }}>
            <div style={{ width: 140, height: e.name.startsWith('focus') ? 44 : 88, borderRadius: e.name.startsWith('focus') ? 999 : 8, background: 'var(--cp-color-surface)', boxShadow: `var(${e.css})` }} />
          </div>
          <div><strong>{e.name}</strong><div style={mono}>var({e.css})<br />{e.description}</div></div>
        </div>
      ))}
    </div>
  );
}

export const ICON_NAMES = ['Check', 'X', 'Plus', 'Minus', 'ChevronLeft', 'ChevronRight', 'ChevronDown', 'ArrowRight', 'Menu', 'Search', 'House', 'Calendar', 'Megaphone', 'User', 'Users', 'Info', 'CircleAlert', 'TriangleAlert', 'CircleCheck', 'Clock', 'MapPin', 'Video', 'Share2', 'ExternalLink', 'Heart', 'Map', 'SlidersHorizontal', 'ChartColumn', 'CircleHelp', 'CircleUser', 'Ellipsis'] as const;

export function IconGrid() {
  return (
    <div className="sb-unstyled" style={{ ...grid, gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
      {ICON_NAMES.map((n) => {
        const I = (Icons as unknown as Record<string, (p: { size?: number; strokeWidth?: number }) => ReactNode>)[n];
        return (
          <div key={n} style={{ display: 'grid', justifyItems: 'center', gap: 8, padding: 16, borderRadius: 8, boxShadow: 'inset 0 0 0 1px var(--cp-color-outline-variant)' }}>
            <I size={24} strokeWidth={2} />
            <code style={{ fontSize: 12 }}>{n}</code>
          </div>
        );
      })}
    </div>
  );
}

export function Do({ children }: { children: ReactNode }) {
  return <div style={{ padding: 16, borderRadius: 8, borderTop: '4px solid var(--cp-color-secondary)', background: 'var(--cp-success-bg)' }}><strong style={{ color: 'var(--cp-success-text)' }}>Faça</strong><div style={{ marginTop: 8 }}>{children}</div></div>;
}
export function Dont({ children }: { children: ReactNode }) {
  return <div style={{ padding: 16, borderRadius: 8, borderTop: '4px solid var(--cp-color-error)', background: 'var(--cp-danger-bg)' }}><strong style={{ color: 'var(--cp-danger-text)' }}>Evite</strong><div style={{ marginTop: 8 }}>{children}</div></div>;
}
export function DoDont({ children }: { children: ReactNode }) {
  return <div className="sb-unstyled" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0 32px' }}>{children}</div>;
}
