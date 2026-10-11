import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { cx } from '../../utils';
import { IconButton } from '../IconButton/IconButton';
import { Logo } from '../Logo/Logo';
import styles from './TopNavigation.module.css';

export interface NavItem {
  label: string;
  href: string;
  /** Página atual: recebe sublinhado grosso e aria-current="page". */
  current?: boolean;
}

export interface TopNavigationProps {
  /** `light` com borda inferior ou `red`. */
  surface?: 'light' | 'red';
  links: NavItem[];
  /** CTA à direita. Use `<Button variant={surface === 'red' ? 'on-red' : 'primary'}>`. */
  cta?: ReactNode;
  /** Logo; padrão: selo Bora Lula. */
  logo?: ReactNode;
  logoHref?: string;
  className?: string;
}

/** Barra de navegação superior. A partir de 1024 px mostra os links; abaixo disso, os links vão para um menu. */
export function TopNavigation({ surface = 'light', links, cta, logo, logoHref = '/', className }: TopNavigationProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const red = surface === 'red';
  const list = (mobile: boolean) => (
    <ul className={mobile ? styles.mobileList : styles.links}>
      {links.map((l) => (
        <li key={l.href}>
          <a href={l.href} aria-current={l.current ? 'page' : undefined} className={cx(styles.link, l.current && styles.current)}>{l.label}</a>
        </li>
      ))}
    </ul>
  );
  return (
    <header className={cx(styles.bar, styles[surface], className)}>
      <div className={styles.inner}>
        <a href={logoHref} className={styles.logo}>{logo ?? <Logo size={56} />}</a>
        <nav aria-label="Principal" className={styles.desktopNav}>{list(false)}</nav>
        <div className={styles.spacer} />
        {cta && <div className={styles.cta}>{cta}</div>}
        <IconButton
          className={styles.menuButton}
          variant={red ? 'on-red' : 'standard'}
          icon={open ? <X /> : <Menu />}
          label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((o) => !o)}
        />
      </div>
      <nav id={menuId} aria-label="Menu" className={styles.mobileNav} hidden={!open}>{list(true)}</nav>
    </header>
  );
}
