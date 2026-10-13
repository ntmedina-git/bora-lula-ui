import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../../utils';
import styles from './ClusterMarker.module.css';

export interface ClusterMarkerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Quantas ações estão agrupadas no ponto. Até 9 a bolha é pequena; a partir de 10, grande. */
  count: number;
  /** Nome acessível. Padrão: "Aproximar: N ações". */
  label?: string;
}

/** Bolha de agrupamento: várias ações próximas no mesmo ponto. Toque aproxima o mapa. Contorno branco para destacar sobre as cores eleitorais. */
export const ClusterMarker = forwardRef<HTMLButtonElement, ClusterMarkerProps>(function ClusterMarker(
  { count, label, className, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label ?? `Aproximar: ${count} ações`}
      className={cx(styles.marker, count >= 10 ? styles.large : styles.small, className)}
      {...rest}
    >
      {count}
    </button>
  );
});
