import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import { Poster } from '../Poster/Poster';
import type { PosterProps } from '../Poster/Poster';
import styles from './ActionRow.module.css';

export interface ActionRowProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Página da ação. A linha inteira é o link. */
  href: string;
  title: ReactNode;
  /** Dia e horário em negrito, ex.: "ter 13/10, 13h". */
  date: ReactNode;
  /** Local depois do horário, ex.: "Online". */
  place?: ReactNode;
  /** Thumb 72 × 72 do cartaz. Use o tipo curto (AÇÃO, ATO, ENCONTRO). */
  poster?: Pick<PosterProps, 'color' | 'type'>;
  /** Foto no lugar do cartaz (recortada em 72 × 72). */
  image?: string;
  /** `<Organizer>`. */
  organizer?: ReactNode;
  /** `<StatusTag>`. */
  status?: ReactNode;
  headingLevel?: 2 | 3 | 4;
}

/** Linha compacta de ação para listas longas e ações online. Divisória inferior; 2 colunas no desktop (gap 28), 1 no celular. */
export function ActionRow({ href, title, date, place, poster, image, organizer, status, headingLevel = 3, className, ...rest }: ActionRowProps) {
  const H = `h${headingLevel}` as 'h3';
  return (
    <article className={cx(styles.row, className)} {...rest}>
      {image
        ? <img src={image} alt="" className={styles.thumb} />
        : <Poster size="thumb" {...(poster ?? { type: 'Ação' })} aria-hidden="true" />}
      <div className={styles.text}>
        <H className={styles.title}><a href={href} className={styles.link}>{title}</a></H>
        <p className={styles.meta}>
          <span className={styles.date}>{date}</span>
          {place && <span className={styles.place}> · {place}</span>}
        </p>
        {organizer}
        {status}
      </div>
    </article>
  );
}
