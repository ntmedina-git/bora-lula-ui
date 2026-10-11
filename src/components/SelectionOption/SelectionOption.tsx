import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cx } from '../../utils';
import styles from './SelectionOption.module.css';

export interface SelectionOptionProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** `checkbox` para várias respostas, `radio` para uma só (use o mesmo `name`). */
  type?: 'checkbox' | 'radio';
  label: ReactNode;
}

/** Opção em cartão para cadastros com uma pergunta por tela. Selecionada: fundo suave, borda primária e check. */
export const SelectionOption = forwardRef<HTMLInputElement, SelectionOptionProps>(function SelectionOption(
  { type = 'checkbox', label, className, ...rest },
  ref,
) {
  return (
    <label className={cx(styles.option, className)}>
      <input ref={ref} type={type} className={styles.input} {...rest} />
      <Check aria-hidden="true" className={styles.check} />
      <span className={styles.label}>{label}</span>
    </label>
  );
});
