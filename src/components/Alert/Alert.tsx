import type { HTMLAttributes, ReactNode } from 'react';
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-react';
import { cx } from '../../utils';
import styles from './Alert.module.css';

export type AlertTone = 'success' | 'warning' | 'danger' | 'info';

const ICONS = { success: CircleCheck, warning: TriangleAlert, danger: CircleAlert, info: Info } as const;

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
  /** Frase curta e direta. Em erro, diga o que fazer, não só o que deu errado. */
  children: ReactNode;
  /** Mostra o botão de fechar. */
  onDismiss?: () => void;
}

/** Alerta inline com ícone, faixa lateral e texto. `danger` usa role="alert"; os demais, role="status". */
export function Alert({ tone = 'info', children, onDismiss, className, ...rest }: AlertProps) {
  const Icon = ICONS[tone];
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} className={cx(styles.alert, styles[tone], className)} {...rest}>
      <Icon aria-hidden="true" className={styles.icon} />
      <div className={styles.message}>{children}</div>
      {onDismiss && (
        <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label="Fechar aviso">
          <X aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
