import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './StatGroup.module.css';

export interface StatGroupItem {
  value: ReactNode;
  label: ReactNode;
}

export interface StatGroupProps extends HTMLAttributes<HTMLUListElement> {
  /** No máximo três números. */
  stats: StatGroupItem[];
  /** `light` na Início; `map` sobre as fotos do mapa (scrim escuro, número em amarelo). */
  surface?: 'light' | 'map';
}

/** Contadores de ações do topo. Cada número é lido junto com o rótulo ("1.426 eventos agendados"). */
export function StatGroup({ stats, surface = 'light', className, ...rest }: StatGroupProps) {
  if (process.env.NODE_ENV !== 'production' && stats.length > 3) {
    console.warn('StatGroup: mostre no máximo três números.');
  }
  return (
    <ul className={cx(styles.group, styles[surface], className)} {...rest}>
      {stats.map((s, i) => (
        <li key={i} className={styles.stat}>
          <span className={styles.value}>{s.value}</span> <span className={styles.label}>{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
