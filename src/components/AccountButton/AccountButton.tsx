import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { User } from 'lucide-react';
import { cx } from '../../utils';
import styles from './AccountButton.module.css';

type BaseProps = {
  /** Primeiro nome de quem entrou. Sem nome, mostra "Entrar". */
  name?: string;
  /** Foto de quem entrou. Sem foto, mostra a inicial. */
  avatarSrc?: string;
};
type AsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { href?: undefined };
type AsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & { href: string };
export type AccountButtonProps = AsButton | AsLink;

/** Entrar / conta na barra da agenda. Deslogado: anel branco com ícone user e "Entrar". Logado: inicial ou foto e o primeiro nome. */
export const AccountButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, AccountButtonProps>(function AccountButton(
  { name, avatarSrc, className, ...rest },
  ref,
) {
  const content = (
    <>
      <span className={styles.avatar} aria-hidden="true">
        {avatarSrc ? <img src={avatarSrc} alt="" /> : name ? name.trim().charAt(0).toUpperCase() : <User />}
      </span>
      <span className={styles.label}>{name ?? 'Entrar'}</span>
    </>
  );
  if ('href' in rest && rest.href !== undefined) {
    return <a ref={ref as React.Ref<HTMLAnchorElement>} className={cx(styles.button, className)} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</a>;
  }
  const { type = 'button', ...btn } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button ref={ref as React.Ref<HTMLButtonElement>} type={type} className={cx(styles.button, className)} {...btn}>{content}</button>;
});
