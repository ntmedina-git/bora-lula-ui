import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './MapLabel.module.css';

export interface MapLabelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Emoji do tipo da ação (decorativo). */
  icon?: ReactNode;
  /** Dia e hora, ex.: "qui 19h". */
  children: ReactNode;
  /** Ação aberta: primary, 13 px, contorno branco. Vira `aria-pressed`. */
  selected?: boolean;
  /** Item correspondente em foco na lista: fica vinho, como no hover. */
  highlighted?: boolean;
  /** Ação acontecendo agora: pulsa (some com movimento reduzido). */
  live?: boolean;
}

/** Etiqueta de uma ação no mapa: emoji do tipo + dia e hora. Default branca com Elevation/2; hover ou foco vinho; selecionada em primary. */
export const MapLabel = forwardRef<HTMLButtonElement, MapLabelProps>(function MapLabel(
  { icon, children, selected = false, highlighted, live, className, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-pressed={selected}
      className={cx(styles.label, highlighted && styles.highlighted, selected && styles.selected, live && styles.live, className)}
      {...rest}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
});
