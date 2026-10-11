import type { ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './Stat.module.css';

export interface StatProps {
  value: ReactNode;
  label: ReactNode;
  /** `red` para o hero (número em amarelo, só tamanho grande); `light` para superfícies claras. */
  surface?: 'red' | 'light';
  className?: string;
}

/** Contador: valor em destaque + rótulo curto. */
export function Stat({ value, label, surface = 'light', className }: StatProps) {
  return (
    <div className={cx(styles.stat, styles[surface], className)}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
