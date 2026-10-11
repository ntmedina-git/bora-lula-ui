import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'outline' | 'secondary' | 'on-red';
export type ButtonSize = 'sm' | 'md' | 'lg';

type BaseProps = {
  /** Primary para a ação principal (uma por bloco), Outline para a secundária, Secondary (verde 700) para uma segunda ação de destaque, On red sobre fundo vermelho. */
  variant?: ButtonVariant;
  /** `md` (44 px) é o padrão. `sm` (36 px) só no desktop, nunca como alvo de toque principal. */
  size?: ButtonSize;
  /** Ícone antes do rótulo, ex.: `<MapPin />` do lucide-react. */
  leadingIcon?: ReactNode;
  /** Ícone depois do rótulo, ex.: `<ArrowRight />`. */
  trailingIcon?: ReactNode;
  /** Ocupa toda a largura do container (útil no celular). */
  fullWidth?: boolean;
  /** Use um verbo de ação: "Assinar", "Participar". */
  children: ReactNode;
};

type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
export type ButtonProps = AsButton | AsLink;

/** Botão em pílula do Comitê. Renderiza `<a>` quando recebe `href`. */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', leadingIcon, trailingIcon, fullWidth, className, children, ...rest },
  ref,
) {
  const cls = cx(styles.button, styles[variant], styles[size], fullWidth && styles.full, className);
  const content = (
    <>
      {leadingIcon && <span className={styles.icon} aria-hidden="true">{leadingIcon}</span>}
      <span className={styles.label}>{children}</span>
      {trailingIcon && <span className={styles.icon} aria-hidden="true">{trailingIcon}</span>}
    </>
  );
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  const { type = 'button', ...btn } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} type={type} className={cls} {...btn}>
      {content}
    </button>
  );
});
