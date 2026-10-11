import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './EventItem.module.css';

export interface EventItemProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** `featured` (vermelho) para o próximo evento; `default` para os demais. */
  emphasis?: 'featured' | 'default';
  /** Ex.: "HOJE · 19H · ONLINE". */
  overline: ReactNode;
  title: ReactNode;
  headingLevel?: 2 | 3 | 4;
  /** No featured, use `<Button variant="on-red" size="sm">`. */
  action?: ReactNode;
}

/** Item de evento para listas do app (tela Início). */
export function EventItem({ emphasis = 'default', overline, title, headingLevel = 3, action, className, ...rest }: EventItemProps) {
  const H = `h${headingLevel}` as 'h3';
  return (
    <article className={cx(styles.item, styles[emphasis], className)} {...rest}>
      <p className={styles.overline}>{overline}</p>
      <H className={styles.title}>{title}</H>
      {action && <div className={styles.action}>{action}</div>}
    </article>
  );
}
