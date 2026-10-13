import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './CtaBlock.module.css';

export interface CtaBlockProps extends HTMLAttributes<HTMLElement> {
  /** Pergunta curta, ex.: "Não achou ação na sua cidade?". */
  question: ReactNode;
  /** Frase de apoio opcional. */
  supporting?: ReactNode;
  /** Um botão: Primary para cadastrar ação, Outline para doar ou falar com a gente. Link externo leva o ícone external-link à direita. */
  action: ReactNode;
}

/** Bloco de chamada centralizado no fim da Início: pergunta + um botão. */
export function CtaBlock({ question, supporting, action, className, ...rest }: CtaBlockProps) {
  return (
    <section className={cx(styles.block, className)} {...rest}>
      <p className={styles.question}>{question}</p>
      {supporting && <p className={styles.supporting}>{supporting}</p>}
      {action}
    </section>
  );
}
