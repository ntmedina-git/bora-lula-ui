import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cx } from '../../utils';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Rótulo clicável. A linha inteira tem no mínimo 44 px de altura. */
  label: ReactNode;
}

/** Checkbox nativo com caixa de 20 px e rótulo clicável. */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ label, className, ...rest }, ref) {
  return (
    <label className={cx(styles.row, className)}>
      <span className={styles.boxWrap}>
        <input ref={ref} type="checkbox" className={styles.input} {...rest} />
        <span className={styles.box} aria-hidden="true">
          <Check className={styles.check} />
        </span>
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
});
