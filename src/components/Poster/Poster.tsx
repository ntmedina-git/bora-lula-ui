import type { HTMLAttributes } from 'react';
import { cx } from '../../utils';
import styles from './Poster.module.css';

export type PosterColor = 'red' | 'green' | 'blue' | 'wine';

export interface PosterProps extends HTMLAttributes<HTMLDivElement> {
  /** Cor pelo tipo da ação: red (padrão, panfletagem, ação), green (ato), blue (caminhada, cultural), wine (encontro). */
  color?: PosterColor;
  /** `card` (4:5) para a vitrine; `thumb` (1:1, 72 px) para listas, sem tarja nem cidade. */
  size?: 'card' | 'thumb';
  /** Tipo da ação, renderizado em caixa-alta. No thumb, use o tipo curto (AÇÃO, ATO, ENCONTRO). */
  type: string;
  /** Cidade. Só aparece no `card`. */
  place?: string;
}

/** Cartaz tipográfico para ações sem foto. O texto acompanha a largura (unidades cqw), então o cartaz escala inteiro. */
export function Poster({ color = 'red', size = 'card', type, place, className, ...rest }: PosterProps) {
  const card = size === 'card';
  return (
    <div className={cx(styles.poster, styles[color], styles[size], className)} {...rest}>
      <div className={styles.inner}>
        {card && <span className={styles.stamp}>Bora Lula</span>}
        <span className={styles.type}>{type}</span>
        {card && place && <span className={styles.place}>{place}</span>}
      </div>
    </div>
  );
}
