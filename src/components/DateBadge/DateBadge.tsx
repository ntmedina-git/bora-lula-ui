import { cx } from '../../utils';
import styles from './DateBadge.module.css';

export interface DateBadgeProps {
  /** Data do evento. */
  date: Date;
  className?: string;
}

const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

/** Selo de data: dia em destaque e mês abreviado. Lido por inteiro por leitores de tela. */
export function DateBadge({ date, className }: DateBadgeProps) {
  const day = String(date.getDate()).padStart(2, '0');
  const full = date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
  return (
    <time dateTime={`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${day}`} className={cx(styles.badge, className)}>
      <span className={styles.day} aria-hidden="true">{day}</span>
      <span className={styles.month} aria-hidden="true">{MONTHS[date.getMonth()]}</span>
      <span className="cp-visually-hidden">{full}</span>
    </time>
  );
}
