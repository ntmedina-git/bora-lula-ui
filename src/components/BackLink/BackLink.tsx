import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './BackLink.module.css';

export interface BackLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  /** Nome da lista de onde a pessoa veio, ex.: "Ações". */
  children: ReactNode;
}

/** Voltar para a lista de origem. Primeiro item da página de detalhe, acima da mídia; área de toque de 44 px de altura. */
export const BackLink = forwardRef<HTMLAnchorElement, BackLinkProps>(function BackLink({ className, children, ...rest }, ref) {
  return (
    <a ref={ref} className={cx(styles.link, className)} {...rest}>
      <span aria-hidden="true">←</span>
      {children}
    </a>
  );
});
