import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { cx } from '../../utils';
import styles from './Link.module.css';

export type LinkTone = 'primary' | 'tertiary' | 'on-red';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Vermelho (primary) por padrão, azul (tertiary) em textos longos, branco sobre vermelho. */
  tone?: LinkTone;
  /** Abre em nova aba e mostra o ícone de link externo. */
  external?: boolean;
  children: ReactNode;
}

/** Link de texto, sempre sublinhado. */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { tone = 'primary', external, className, children, ...rest },
  ref,
) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a ref={ref} className={cx(styles.link, styles[tone], className)} {...ext} {...rest}>
      {children}
      {external && (
        <>
          <ExternalLink aria-hidden="true" className={styles.icon} />
          <span className="cp-visually-hidden"> (abre em nova aba)</span>
        </>
      )}
    </a>
  );
});
