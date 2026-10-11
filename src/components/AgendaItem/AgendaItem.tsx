import type { HTMLAttributes, ReactNode } from 'react';
import { Check, MapPin, Users } from 'lucide-react';
import { cx } from '../../utils';
import { Tag } from '../Tag/Tag';
import styles from './AgendaItem.module.css';

export interface AgendaItemProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** `public`: evento aberto (faixa vermelha). `supporters`: atividade de apoiadores (faixa verde; o local só aparece para quem foi aceito). */
  type?: 'public' | 'supporters';
  /** Ex.: "9h". */
  hour: string;
  /** Ex.: "em diante". */
  hourNote?: string;
  title: ReactNode;
  /** Se for um link para o evento, passe `href`. */
  href?: string;
  location?: ReactNode;
  organizer?: ReactNode;
  /** Categoria em caixa-alta, ex.: "Ato". */
  category?: string;
  /** Quem verificou, ex.: "Agenda Lulaço". */
  verifiedBy?: string;
  /** Ex.: "10 mil interessados". */
  interest?: ReactNode;
  headingLevel?: 3 | 4;
}

/** Linha da agenda de eventos. */
export function AgendaItem({
  type = 'public', hour, hourNote = 'em diante', title, href, location, organizer, category, verifiedBy, interest, headingLevel = 3, className, ...rest
}: AgendaItemProps) {
  const H = `h${headingLevel}` as 'h3';
  return (
    <article className={cx(styles.item, styles[type], className)} {...rest}>
      <div className={styles.time}>
        <span className={styles.hour}>{hour}</span>
        {hourNote && <span className={styles.hourNote}>{hourNote}</span>}
      </div>
      <div className={styles.content}>
        <H className={styles.title}>{href ? <a href={href} className={styles.titleLink}>{title}</a> : title}</H>
        <span className="cp-visually-hidden">{type === 'public' ? 'Evento público' : 'Atividade de apoiadores'}</span>
        {location && <p className={styles.row}><MapPin aria-hidden="true" className={styles.icon} />{location}</p>}
        {organizer && <p className={cx(styles.row, styles.strong)}><Users aria-hidden="true" className={styles.icon} />{organizer}</p>}
        {(category || verifiedBy || interest) && (
          <div className={styles.meta}>
            {category && <Tag tone="neutral">{category}</Tag>}
            {verifiedBy && <span className={styles.verified}><Check aria-hidden="true" className={styles.icon} />{verifiedBy}</span>}
            {interest && <span className={styles.interest}>{interest}</span>}
          </div>
        )}
      </div>
    </article>
  );
}
