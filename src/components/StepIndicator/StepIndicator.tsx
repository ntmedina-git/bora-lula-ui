import { useId } from 'react';
import type { HTMLAttributes } from 'react';
import { cx } from '../../utils';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import styles from './StepIndicator.module.css';

export interface StepIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Passo atual, a partir de 1. */
  step: number;
  total: number;
}

/** Cabeçalho de cadastro com uma pergunta por tela: "PASSO 2 DE 3" + progresso. */
export function StepIndicator({ step, total, className, ...rest }: StepIndicatorProps) {
  const id = useId();
  return (
    <div className={cx(styles.step, className)} {...rest}>
      <span id={id} className={styles.label}>Passo {step} de {total}</span>
      <ProgressBar value={step} max={total} tone="primary" aria-labelledby={id} valueText={`Passo ${step} de ${total}`} />
    </div>
  );
}
