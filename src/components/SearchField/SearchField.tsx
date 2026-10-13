import { forwardRef } from 'react';
import type { FormEvent, InputHTMLAttributes } from 'react';
import { MapPin, SlidersHorizontal } from 'lucide-react';
import { cx } from '../../utils';
import { IconButton } from '../IconButton/IconButton';
import styles from './SearchField.module.css';

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Nome acessível do campo (fica visualmente escondido; o placeholder não substitui o rótulo). */
  label?: string;
  /** Enter busca a frase inteira. */
  onSearch?: (value: string) => void;
  /** Mostra o botão "Perto de mim". */
  onNearMe?: () => void;
  /** Mostra o botão de filtros. */
  onFilters?: () => void;
}

/** Campo de busca do mapa, sobre o próprio mapa: sombra no lugar da borda. Aceita nome da ação, tipo, bairro, cidade ou organização. */
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(function SearchField(
  { label = 'Buscar no mapa', placeholder = 'Ação, tipo, lugar ou assunto', onSearch, onNearMe, onFilters, className, ...rest },
  ref,
) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('q') as HTMLInputElement | null;
    onSearch?.(input?.value ?? '');
  };
  return (
    <form role="search" className={cx(styles.field, className)} onSubmit={submit}>
      <input ref={ref} type="search" name="q" aria-label={label} placeholder={placeholder} className={styles.input} {...rest} />
      {onNearMe && <IconButton icon={<MapPin />} label="Perto de mim" onClick={onNearMe} />}
      {onFilters && <IconButton icon={<SlidersHorizontal />} label="Filtros" onClick={onFilters} />}
    </form>
  );
});
