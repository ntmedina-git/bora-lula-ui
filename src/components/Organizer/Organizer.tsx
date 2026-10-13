import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './Organizer.module.css';

export interface OrganizerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Nome de quem organiza. */
  name: string;
  /** Logo ou foto no lugar da inicial (22 px, decorativa). */
  avatar?: ReactNode;
  /** Esconda o avatar quando quem organiza é a própria Agenda Bora Lula. */
  hideAvatar?: boolean;
}

/** Quem organiza: avatar com a inicial (ou logo) e nome em Body/Small. Usado no card, na lista e no detalhe. */
export function Organizer({ name, avatar, hideAvatar, className, ...rest }: OrganizerProps) {
  return (
    <span className={cx(styles.organizer, className)} {...rest}>
      {!hideAvatar && <span className={styles.avatar} aria-hidden="true">{avatar ?? name.trim().charAt(0).toUpperCase()}</span>}
      <span className={styles.name}>{name}</span>
    </span>
  );
}
