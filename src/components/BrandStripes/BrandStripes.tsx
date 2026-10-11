import type { CSSProperties } from 'react';

export interface BrandStripesProps {
  /** Cor de fundo da arte. */
  base?: 'red' | 'green';
  className?: string;
  style?: CSSProperties;
}

const STRIPES = {
  red: ['var(--cp-color-tertiary-accent)', 'var(--cp-color-highlight)', 'var(--cp-color-secondary-accent)'],
  green: ['var(--cp-color-highlight)', 'var(--cp-color-primary)', 'var(--cp-color-highlight)'],
};

/** Faixas coloridas do logo, para áreas de imagem sem foto. Decorativo: escondido de leitores de tela. Preenche o container. */
export function BrandStripes({ base = 'red', className, style }: BrandStripesProps) {
  const [a, b, c] = STRIPES[base];
  const bg = base === 'red' ? 'var(--cp-color-primary)' : 'var(--cp-color-secondary-accent)';
  const x = base === 'red' ? [211, 256, 301] : [224, 269, 314];
  const w = [35, 35, base === 'red' ? 35 : 16];
  return (
    <svg viewBox="0 0 320 160" preserveAspectRatio="xMaxYMid slice" aria-hidden="true" focusable="false" className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}>
      <rect width="320" height="160" fill={bg} />
      {[a, b, c].map((color, i) => (
        <polygon key={i} fill={color} points={`${x[i]},0 ${x[i] + w[i]},0 ${x[i] + w[i] - 72},160 ${x[i] - 72},160`} />
      ))}
    </svg>
  );
}
