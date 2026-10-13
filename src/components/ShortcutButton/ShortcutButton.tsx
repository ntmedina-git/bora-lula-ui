import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './ShortcutButton.module.css';

type BaseProps = {
  /** Ícone de traço (24 px; 20 px com rótulo) ou logo de terceiro como imagem. */
  icon: ReactNode;
  /** Rótulo curto. Sem `showLabel`, vira o nome acessível. */
  label: string;
  /** Mostra o rótulo ao lado do ícone. */
  showLabel?: boolean;
};
type AsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { href?: undefined };
type AsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & { href: string };
export type ShortcutButtonProps = AsButton | AsLink;

/** Atalho quadrado de 44 px (raio 12) abaixo do título da ação: agenda, story do Instagram, compartilhar, opções. Renderiza `<a>` com `href`. */
export const ShortcutButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ShortcutButtonProps>(function ShortcutButton(
  { icon, label, showLabel = false, className, ...rest },
  ref,
) {
  const cls = cx(styles.button, showLabel && styles.withLabel, className);
  const a11y = showLabel ? {} : { 'aria-label': label, title: label };
  const content = (
    <>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      {showLabel && <span className={styles.label}>{label}</span>}
    </>
  );
  if ('href' in rest && rest.href !== undefined) {
    return <a ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...a11y} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</a>;
  }
  const { type = 'button', ...btn } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button ref={ref as React.Ref<HTMLButtonElement>} type={type} className={cls} {...a11y} {...btn}>{content}</button>;
});
