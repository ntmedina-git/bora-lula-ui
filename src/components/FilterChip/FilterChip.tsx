import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cx } from '../../utils';
import styles from './FilterChip.module.css';

export interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selecionado: primary-container, borda primary e check (não só cor). Vira `aria-pressed`. */
  selected?: boolean;
  /** Recorte curto: "Hoje", "Amanhã", "Escolher datas". */
  children: ReactNode;
}

/** Chip de filtro (filter chip do M3) para recortes rápidos de data. Pílula de 44 px; use em grupo com 8 px entre eles. */
export const FilterChip = forwardRef<HTMLButtonElement, FilterChipProps>(function FilterChip(
  { selected = false, className, children, type = 'button', ...rest },
  ref,
) {
  return (
    <button ref={ref} type={type} aria-pressed={selected} className={cx(styles.chip, selected && styles.selected, className)} {...rest}>
      {selected && <Check aria-hidden="true" className={styles.check} />}
      {children}
    </button>
  );
});
