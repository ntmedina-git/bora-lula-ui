import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { Poster } from '../Poster/Poster';
import type { PosterProps } from '../Poster/Poster';
import { TimeBadge } from '../TimeBadge/TimeBadge';
import styles from './ActionCard.module.css';

export interface ActionCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Página da ação. O card inteiro é o link. */
  href: string;
  title: ReactNode;
  /** Dia e horário, ex.: "ter 13/10, 9h". */
  date: ReactNode;
  /** Cidade ou bairro. */
  place?: ReactNode;
  /** Selo sobre a mídia, ex.: "ter 9h". */
  time?: string;
  /** Ação remota: selo em tertiary. */
  online?: boolean;
  /** Cartaz para ação sem foto. Escolha a cor pelo tipo da ação. */
  poster?: Pick<PosterProps, 'color' | 'type' | 'place'>;
  /** Foto: entra contida sobre um fundo desfocado da própria foto. */
  image?: string;
  imageAlt?: string;
  /** `<Organizer>`. */
  organizer?: ReactNode;
  /** `<StatusTag>`. */
  status?: ReactNode;
  /** Quantas pessoas vão, ex.: "🙋 1 vai". */
  going?: ReactNode;
  /** Estado do coração. */
  saved?: boolean;
  /** Mostra o coração (único controle dentro do card). */
  onSavedChange?: (saved: boolean) => void;
  headingLevel?: 2 | 3 | 4;
}

/** Card da vitrine de ações (Início, Salvos, cidade). Mídia 4:5 com Poster ou foto, selo de horário e coração. 4 por linha no desktop (gap 24), rolagem horizontal no celular. */
export function ActionCard({
  href, title, date, place, time, online, poster, image, imageAlt = '', organizer, status, going, saved = false, onSavedChange, headingLevel = 3, className, ...rest
}: ActionCardProps) {
  const H = `h${headingLevel}` as 'h3';
  return (
    <article className={cx(styles.card, className)} {...rest}>
      <div className={styles.media}>
        {image ? (
          <>
            <img src={image} alt="" aria-hidden="true" className={styles.blur} />
            <img src={image} alt={imageAlt} className={styles.photo} />
          </>
        ) : (
          <Poster {...(poster ?? { type: 'Ação' })} aria-hidden="true" />
        )}
        {time && <TimeBadge tone={online ? 'online' : 'default'} className={styles.time}>{time}</TimeBadge>}
        {onSavedChange && <FavoriteButton saved={saved} onClick={() => onSavedChange(!saved)} className={styles.favorite} />}
      </div>
      <div className={styles.content}>
        <H className={styles.title}><a href={href} className={styles.link}>{title}</a></H>
        <p className={styles.date}>{date}</p>
        {place && <p className={styles.place}>{place}</p>}
        {organizer}
        {status}
        {going && <p className={styles.going}>{going}</p>}
      </div>
    </article>
  );
}
