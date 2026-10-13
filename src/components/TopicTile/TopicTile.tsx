import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './TopicTile.module.css';

type BaseProps = {
  /** Emoji ou ícone (decorativo). */
  icon: ReactNode;
  title: ReactNode;
  /** Exemplos curtos, ex.: "horário, lugar, já aconteceu, cancelada". */
  helper?: ReactNode;
};
type AsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> & { href?: undefined };
type AsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> & { href: string };
export type TopicTileProps = AsButton | AsLink;

/** Assunto para abrir um chamado na Ajuda. Botão do tamanho do card; ao escolher, abre o formulário já com o assunto. Renderiza `<a>` com `href`. */
export const TopicTile = forwardRef<HTMLButtonElement | HTMLAnchorElement, TopicTileProps>(function TopicTile(
  { icon, title, helper, className, ...rest },
  ref,
) {
  const content = (
    <>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <span className={styles.title}>{title}</span>
      {helper && <span className={styles.helper}>{helper}</span>}
    </>
  );
  if ('href' in rest && rest.href !== undefined) {
    return <a ref={ref as React.Ref<HTMLAnchorElement>} className={cx(styles.tile, className)} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</a>;
  }
  const { type = 'button', ...btn } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button ref={ref as React.Ref<HTMLButtonElement>} type={type} className={cx(styles.tile, className)} {...btn}>{content}</button>;
});
