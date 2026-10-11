import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './IconButton.module.css';

export type IconButtonVariant = 'standard' | 'filled' | 'on-red';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Ícone de 24 px, ex.: `<Menu />`. */
  icon: ReactNode;
  /** Nome acessível. Obrigatório: o botão não tem texto visível. */
  label: string;
  /** Standard sobre fundo claro, Filled para destaque, On red sobre vermelho. */
  variant?: IconButtonVariant;
}

/** Botão só com ícone, área de toque de 44 × 44 px. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, label, variant = 'standard', className, type = 'button', ...rest },
  ref,
) {
  return (
    <button ref={ref} type={type} aria-label={label} title={label} className={cx(styles.button, styles[variant], className)} {...rest}>
      <span aria-hidden="true" className={styles.icon}>{icon}</span>
    </button>
  );
});
