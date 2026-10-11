import type { HTMLAttributes } from 'react';
import { cx } from '../../utils';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** De 0 a `max`. */
  value: number;
  max?: number;
  /** Secondary (verde) para petições e metas; primary (vermelho) para passos de cadastro. */
  tone?: 'primary' | 'secondary';
  /** Nome acessível, ex.: "Assinaturas da petição". Obrigatório se não houver aria-labelledby. */
  label?: string;
  /** Texto lido por leitores de tela, ex.: "1.248 de 2.000 assinaturas". */
  valueText?: string;
}

/** Barra de progresso linear. */
export function ProgressBar({ value, max = 100, tone = 'secondary', label, valueText, className, ...rest }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={valueText}
      aria-label={label}
      className={cx(styles.track, className)}
      {...rest}
    >
      <div className={cx(styles.indicator, styles[tone])} style={{ width: `${pct}%` }} />
    </div>
  );
}
