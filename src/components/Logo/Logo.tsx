import type { ImgHTMLAttributes } from 'react';
import defaultLogo from '../../assets/logo-bora-lula.png';

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  /** Lado em px. Mínimo 48 px na navegação. */
  size?: number;
  /** Troque pela URL do logo em alta resolução do seu projeto. */
  src?: string;
  alt?: string;
}

/** Selo circular "L 13" do Bora Lula. O texto alternativo segue o guia: "Comitê Popular do Lula". */
export function Logo({ size = 56, src = defaultLogo, alt = 'Comitê Popular do Lula', style, ...rest }: LogoProps) {
  return <img src={src} alt={alt} width={size} height={size} style={{ display: 'block', borderRadius: '50%', ...style }} {...rest} />;
}
