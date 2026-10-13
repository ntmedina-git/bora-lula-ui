import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './TimeBadge.module.css';

export interface TimeBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** `online` (fundo tertiary) para ações remotas. */
  tone?: 'default' | 'online';
  /** Dia e horário curtos, ex.: "ter 9h". Renderizado em caixa-alta. */
  children: ReactNode;
}

/** Selo de dia e horário sobre a mídia do card, a 10 px das bordas. */
export function TimeBadge({ tone = 'default', className, children, ...rest }: TimeBadgeProps) {
  return (
    <span className={cx(styles.badge, styles[tone], className)} {...rest}>
      {tone === 'online' && <span className="cp-visually-hidden">Online, </span>}
      {children}
    </span>
  );
}
