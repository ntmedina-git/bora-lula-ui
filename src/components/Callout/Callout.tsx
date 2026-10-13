import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './Callout.module.css';

export interface CalloutProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Título curto. */
  title: ReactNode;
  /** Uma frase. */
  children: ReactNode;
  /** Um botão, ex.: `<Button>Escolher</Button>`. */
  action?: ReactNode;
  headingLevel?: 2 | 3 | 4;
}

/** Convite em amarelo claro (warning-container) para personalizar a vitrine. Não é alerta: título curto, uma frase e um botão. */
export function Callout({ title, children, action, headingLevel = 2, className, ...rest }: CalloutProps) {
  const H = `h${headingLevel}` as 'h2';
  return (
    <section className={cx(styles.callout, className)} {...rest}>
      <H className={styles.title}>{title}</H>
      <p className={styles.body}>{children}</p>
      {action && <div className={styles.action}>{action}</div>}
    </section>
  );
}
