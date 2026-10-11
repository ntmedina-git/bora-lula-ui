import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import { BrandStripes } from '../BrandStripes/BrandStripes';
import { DateBadge } from '../DateBadge/DateBadge';
import styles from './Card.module.css';

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** `red`/`green` usam as faixas do logo; ou passe um `<img>` (com alt) para foto. Omita para card sem mídia (ex.: petição). */
  media?: 'red' | 'green' | ReactNode;
  /** Mostra o selo de data sobre a mídia. */
  date?: Date;
  /** Rótulo curto acima do título, ex.: "ONLINE · 19H". */
  overline?: ReactNode;
  /** `muted` para metadados, `primary` para editoria (ex.: "BRASIL COM LULA"). */
  overlineTone?: 'muted' | 'primary';
  title: ReactNode;
  /** Nível do título no documento. */
  headingLevel?: 2 | 3 | 4;
  /** Uma ação por card: um Button ou um Link. */
  action?: ReactNode;
  /** Conteúdo extra entre o título e a ação (ex.: contagem e ProgressBar). */
  children?: ReactNode;
}

/** Card de conteúdo: evento, notícia ou petição. Fundo branco, borda outline-variant, raio 8, padding 16. */
export function Card({ media, date, overline, overlineTone = 'muted', title, headingLevel = 3, action, children, className, ...rest }: CardProps) {
  const H = `h${headingLevel}` as 'h3';
  return (
    <article className={cx(styles.card, className)} {...rest}>
      {media && (
        <div className={styles.media}>
          {typeof media === 'string' && (media === 'red' || media === 'green') ? <BrandStripes base={media} /> : media}
          {date && <DateBadge date={date} className={styles.date} />}
        </div>
      )}
      <div className={styles.content}>
        {overline && <p className={cx(styles.overline, overlineTone === 'primary' && styles.overlinePrimary)}>{overline}</p>}
        <H className={styles.title}>{title}</H>
        {children && <div className={styles.body}>{children}</div>}
        {action && <div className={styles.action}>{action}</div>}
      </div>
    </article>
  );
}
