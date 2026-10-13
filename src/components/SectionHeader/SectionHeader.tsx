import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Título da faixa. Com `city`, vira o prefixo (ex.: "Perto de você:"). */
  title: ReactNode;
  /** Ex.: "Acontecendo agora ou começando nas próximas 3 horas." */
  subtitle?: ReactNode;
  /** Cidade escolhida: botão sublinhado em primary que abre o seletor de cidade. */
  city?: string;
  onCityClick?: () => void;
  /** À direita, normalmente `<Link>Ver no mapa</Link>`. */
  action?: ReactNode;
  headingLevel?: 2 | 3;
}

/** Cabeçalho das faixas da Início (Agora perto de você, Online, cada cidade): H2, subtítulo opcional e link à direita. */
export function SectionHeader({ title, subtitle, city, onCityClick, action, headingLevel = 2, className, ...rest }: SectionHeaderProps) {
  const H = `h${headingLevel}` as 'h2';
  return (
    <header className={cx(styles.header, className)} {...rest}>
      <div className={styles.heading}>
        <H className={styles.title}>
          {title}
          {city && (
            <>
              {' '}
              <button type="button" className={styles.city} onClick={onCityClick}>
                <span className={styles.cityName}>{city}</span>
                <span aria-hidden="true" className={styles.caret}>▾</span>
                <span className="cp-visually-hidden"> (trocar cidade)</span>
              </button>
            </>
          )}
        </H>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </header>
  );
}
