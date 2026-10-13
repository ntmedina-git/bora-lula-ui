import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './LayerChip.module.css';

export interface LayerChipProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Emoji ou ícone grande (decorativo). */
  icon: ReactNode;
  /** Rótulo curto, até 2 linhas. */
  label: ReactNode;
}

/** Chip de camada do mapa eleitoral. Só uma camada ativa por vez: é um rádio nativo, use o mesmo `name` no grupo. */
export const LayerChip = forwardRef<HTMLInputElement, LayerChipProps>(function LayerChip(
  { icon, label, className, ...rest },
  ref,
) {
  return (
    <label className={cx(styles.chip, className)}>
      <input ref={ref} type="radio" className={styles.input} {...rest} />
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <span className={styles.label}>{label}</span>
    </label>
  );
});
