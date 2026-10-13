import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './GoogleSignInButton.module.css';

export interface GoogleSignInButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

/** Único jeito de entrar (Perfil, Cadastrar ação, Eu vou!). Pílula grafite com selo branco, para não competir com o primário vermelho da página. */
export const GoogleSignInButton = forwardRef<HTMLButtonElement, GoogleSignInButtonProps>(function GoogleSignInButton(
  { children = 'Entrar com Google', className, type = 'button', ...rest },
  ref,
) {
  return (
    <button ref={ref} type={type} className={cx(styles.button, className)} {...rest}>
      <span className={styles.badge} aria-hidden="true">G</span>
      {children}
    </button>
  );
});
