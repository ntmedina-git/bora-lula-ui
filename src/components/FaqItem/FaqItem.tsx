import type { DetailsHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './FaqItem.module.css';

export interface FaqItemProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  question: ReactNode;
  /** Resposta. */
  children: ReactNode;
}

/** Pergunta frequente em acordeão, com `<details>`/`<summary>` nativos (sem JavaScript). A pergunta inteira é o alvo de toque. */
export function FaqItem({ question, children, className, ...rest }: FaqItemProps) {
  return (
    <details className={cx(styles.item, className)} {...rest}>
      <summary className={styles.summary}>
        <span className={styles.marker} aria-hidden="true">▶</span>
        {question}
      </summary>
      <div className={styles.answer}>{children}</div>
    </details>
  );
}
