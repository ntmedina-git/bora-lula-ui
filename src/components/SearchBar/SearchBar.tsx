import { Fragment } from 'react';
import type { ButtonHTMLAttributes, FormHTMLAttributes, ReactNode } from 'react';
import { Search } from 'lucide-react';
import { cx } from '../../utils';
import { Button } from '../Button/Button';
import styles from './SearchBar.module.css';

export interface SearchSegmentProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /** Rótulo curto, ex.: "Onde". */
  label: string;
  /** Valor escolhido. Sem valor, o segmento mostra o `placeholder` em on-surface-variant. */
  value?: ReactNode;
  /** Ex.: "Cidade ou bairro". */
  placeholder: string;
}

/** Segmento da busca tripla: rótulo curto e valor. Tocar abre o seletor (cidade, data ou tipo). */
export function SearchSegment({ label, value, placeholder, className, type = 'button', ...rest }: SearchSegmentProps) {
  const filled = value !== undefined && value !== null && value !== '';
  return (
    <button type={type} className={cx(styles.segment, filled && styles.filled, className)} {...rest}>
      <span className={styles.segmentLabel}>{label}</span>
      <span className={styles.segmentValue}>{filled ? value : placeholder}</span>
    </button>
  );
}

export interface SearchBarProps extends FormHTMLAttributes<HTMLFormElement> {
  /** Normalmente três: onde, quando, o que. */
  segments: SearchSegmentProps[];
  /** Rótulo do botão. */
  submitLabel?: string;
  /** Nome do formulário de busca para leitores de tela. */
  'aria-label'?: string;
}

/** Busca tripla da Início (onde, quando, o que + Buscar). Abaixo de 768 px os segmentos empilham num cartão e o botão ocupa a largura toda. */
export function SearchBar({ segments, submitLabel = 'Buscar', className, 'aria-label': ariaLabel = 'Buscar ações', ...rest }: SearchBarProps) {
  return (
    <form role="search" aria-label={ariaLabel} className={cx(styles.bar, className)} {...rest}>
      {segments.map((s, i) => (
        <Fragment key={s.label}>
          {i > 0 && <span className={styles.divider} aria-hidden="true" />}
          <SearchSegment {...s} />
        </Fragment>
      ))}
      <Button type="submit" size="lg" leadingIcon={<Search />} className={styles.submit}>{submitLabel}</Button>
    </form>
  );
}
