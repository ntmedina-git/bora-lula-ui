import { useRef } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cx } from '../../utils';
import styles from './SegmentedButton.module.css';

export interface SegmentOption<T extends string = string> {
  value: T;
  label: ReactNode;
}

export interface SegmentedButtonProps<T extends string = string> {
  /** 2 ou 3 opções. */
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Nome do grupo para leitores de tela, ex.: "Visualização". */
  label: string;
  className?: string;
}

/** Alterna visões (Mapa/Tabela) ou camadas. Grupo de rádio com setas do teclado. */
export function SegmentedButton<T extends string = string>({ options, value, onChange, label, className }: SegmentedButtonProps<T>) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const onKey = (e: KeyboardEvent, i: number) => {
    const delta = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + options.length) % options.length;
    onChange(options[next].value);
    refs.current[next]?.focus();
  };
  return (
    <div role="radiogroup" aria-label={label} className={cx(styles.group, className)}>
      {options.map((o, i) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value}
            ref={(el) => { refs.current[i] = el; }}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            className={cx(styles.segment, selected && styles.selected)}
            onClick={() => onChange(o.value)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {selected && <Check aria-hidden="true" className={styles.check} />}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
