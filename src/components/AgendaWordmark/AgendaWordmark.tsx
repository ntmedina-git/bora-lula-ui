import type { ImgHTMLAttributes } from 'react';
import wordmark from '../../assets/wordmark-agenda.svg';

export interface AgendaWordmarkProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Altura em px. Mínimo 22 px na barra. */
  height?: number;
}

/** Marca "Bora Lula" da Agenda, em branco para a barra vermelha. Separada do selo do Comitê (`Logo`). */
export function AgendaWordmark({ height = 48, alt = 'Agenda Bora Lula', style, ...rest }: AgendaWordmarkProps) {
  return <img src={wordmark} alt={alt} height={height} width={Math.round((height * 120.15) / 48.42)} style={{ display: 'block', ...style }} {...rest} />;
}
