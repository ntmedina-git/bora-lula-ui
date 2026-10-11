import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { CircleAlert } from 'lucide-react';
import { cx } from '../../utils';
import styles from './TextField.module.css';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Rótulo sempre visível acima do campo. Nunca use só placeholder. */
  label: string;
  /** Texto de ajuda abaixo do campo. */
  helperText?: ReactNode;
  /** Mensagem de erro: diga como corrigir ("Escolha uma cidade da lista"). Ativa o estado de erro. */
  error?: ReactNode;
  /** Ícone à direita, ex.: `<Search />` ou `<ChevronDown />` em seletores. */
  trailingIcon?: ReactNode;
}

/** Campo de texto com rótulo visível, ajuda e erro acessíveis. */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, helperText, error, trailingIcon, id, className, disabled, ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? `tf-${autoId}`;
  const helpId = `${inputId}-help`;
  const hasHelp = Boolean(error || helperText);
  return (
    <div className={cx(styles.field, error ? styles.error : undefined, disabled && styles.disabled, className)}>
      <label htmlFor={inputId} className={styles.label}>{label}</label>
      <div className={styles.box}>
        <input
          ref={ref}
          id={inputId}
          className={styles.input}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={hasHelp ? helpId : undefined}
          {...rest}
        />
        {trailingIcon && <span className={styles.trailing} aria-hidden="true">{trailingIcon}</span>}
      </div>
      {hasHelp && (
        <p id={helpId} className={styles.help}>
          {error && <CircleAlert aria-hidden="true" className={styles.helpIcon} />}
          <span>{error ?? helperText}</span>
        </p>
      )}
    </div>
  );
});
