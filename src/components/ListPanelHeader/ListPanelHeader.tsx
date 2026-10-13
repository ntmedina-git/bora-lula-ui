import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './ListPanelHeader.module.css';

export interface ListPanelHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Quantas ações estão na área visível, ex.: "64 ações nesta área". Anunciado quando muda. */
  children: ReactNode;
  /** Mostra o botão de esconder a lista. */
  onHide?: () => void;
  hideLabel?: string;
}

/** Topo da lista lateral do mapa: contagem da área visível e botão de esconder a lista. Fica acima dos Filter chips; o painel inteiro rola. */
export function ListPanelHeader({ children, onHide, hideLabel = 'Esconder lista', className, ...rest }: ListPanelHeaderProps) {
  return (
    <div className={cx(styles.header, className)} {...rest}>
      <p className={styles.count} aria-live="polite">{children}</p>
      {onHide && (
        <button type="button" className={styles.hide} onClick={onHide}>
          {hideLabel}
          <span aria-hidden="true">✕</span>
        </button>
      )}
    </div>
  );
}
