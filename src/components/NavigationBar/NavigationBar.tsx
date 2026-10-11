import type { ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './NavigationBar.module.css';

export interface NavigationBarItem {
  label: string;
  href: string;
  /** Ícone de traço 24 px, ex.: `<House />`. */
  icon: ReactNode;
  current?: boolean;
}

export interface NavigationBarProps {
  /** De 3 a 5 itens, sempre com rótulo. */
  items: NavigationBarItem[];
  /** Fixa no rodapé da tela. */
  fixed?: boolean;
  className?: string;
}

/** Barra de abas do app. Ativa em vermelho, inativas em grafite 60%. Respeita a área segura do aparelho. */
export function NavigationBar({ items, fixed, className }: NavigationBarProps) {
  if (process.env.NODE_ENV !== 'production' && (items.length < 3 || items.length > 5)) {
    console.warn('NavigationBar: use de 3 a 5 itens (Guia de Interface, barra de abas).');
  }
  return (
    <nav aria-label="Seções do app" className={cx(styles.bar, fixed && styles.fixed, className)}>
      <ul className={styles.list}>
        {items.map((i) => (
          <li key={i.href} className={styles.li}>
            <a href={i.href} aria-current={i.current ? 'page' : undefined} className={cx(styles.item, i.current && styles.current)}>
              <span className={styles.icon} aria-hidden="true">{i.icon}</span>
              <span className={styles.label}>{i.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
