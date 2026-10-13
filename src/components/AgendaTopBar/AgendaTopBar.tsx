import type { ReactNode } from 'react';
import { cx } from '../../utils';
import { AgendaWordmark } from '../AgendaWordmark/AgendaWordmark';
import styles from './AgendaTopBar.module.css';

export interface AgendaTopBarItem {
  label: string;
  href: string;
  /** Ícone de traço 18 px, ex.: `<House />`. */
  icon: ReactNode;
  /** Página atual: indicador amarelo de 4 px na base e aria-current="page". */
  current?: boolean;
}

export interface AgendaTopBarProps {
  /** Navegação principal: Início, Mapa, Salvos, Painel. */
  items: AgendaTopBarItem[];
  /** Itens à direita, antes da conta (ex.: Ajuda). */
  secondaryItems?: AgendaTopBarItem[];
  /** `<AccountButton>`. */
  account?: ReactNode;
  homeHref?: string;
  className?: string;
}

/** Barra superior da agenda (boralula.org). A partir de 1024 px mostra a navegação; abaixo disso, fica só a marca e a conta, e os itens vão para a NavigationBar. */
export function AgendaTopBar({ items, secondaryItems = [], account, homeHref = '/', className }: AgendaTopBarProps) {
  const list = (l: AgendaTopBarItem[], extra?: string) => (
    <ul className={cx(styles.list, extra)}>
      {l.map((i) => (
        <li key={i.href}>
          <a href={i.href} aria-current={i.current ? 'page' : undefined} className={cx(styles.item, i.current && styles.current)}>
            <span className={styles.icon} aria-hidden="true">{i.icon}</span>
            {i.label}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <header className={cx(styles.bar, className)}>
      <a href={homeHref} className={styles.brand} aria-label="Agenda Bora Lula, início">
        <AgendaWordmark height={23} alt="" />
      </a>
      <nav aria-label="Principal" className={styles.nav}>
        {list(items)}
        {secondaryItems.length > 0 && list(secondaryItems, styles.secondary)}
      </nav>
      {account && <div className={styles.account}>{account}</div>}
    </header>
  );
}
