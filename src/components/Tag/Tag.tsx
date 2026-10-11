import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './Tag.module.css';

export type TagTone = 'live' | 'urgent' | 'success' | 'info' | 'neutral';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** live = AO VIVO (com ponto), urgent = prazos, success = confirmado, info = online, neutral = presencial/categorias. */
  tone?: TagTone;
  /** Uma ou duas palavras. Renderizado em caixa-alta. */
  children: ReactNode;
}

/** Etiqueta de status. A cor reforça, o texto é que informa. */
export function Tag({ tone = 'neutral', className, children, ...rest }: TagProps) {
  return (
    <span className={cx(styles.tag, styles[tone], className)} {...rest}>
      {tone === 'live' && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
