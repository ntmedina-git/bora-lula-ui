import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { Heart } from 'lucide-react';
import { cx } from '../../utils';
import styles from './FavoriteButton.module.css';

export interface FavoriteButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Ação salva: coração preenchido em primary. Vira `aria-pressed`. */
  saved?: boolean;
  /** `media` sobre foto ou cartaz (branco 92% com Elevation/1); `surface` na página de detalhe (borda outline-variant). */
  surface?: 'media' | 'surface';
  /** Nome acessível. Fica igual nos dois estados; o `aria-pressed` diz se está salvo. */
  label?: string;
}

/** Coração para salvar a ação no aparelho (lista Salvos). Área de toque de 44 × 44 px. */
export const FavoriteButton = forwardRef<HTMLButtonElement, FavoriteButtonProps>(function FavoriteButton(
  { saved = false, surface = 'media', label = 'Salvar ação', className, type = 'button', ...rest },
  ref,
) {
  return (
    <button ref={ref} type={type} aria-pressed={saved} aria-label={label} title={label} className={cx(styles.button, styles[surface], saved && styles.saved, className)} {...rest}>
      <Heart aria-hidden="true" className={styles.icon} />
    </button>
  );
});
