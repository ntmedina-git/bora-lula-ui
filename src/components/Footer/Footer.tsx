import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './Footer.module.css';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Linha pequena acima do texto, ex.: crédito das fotos. */
  note?: ReactNode;
  /** Aviso principal, ex.: "Uma iniciativa do Comitê Popular do Lula. Não é site oficial da campanha." */
  children: ReactNode;
  /** Links, ex.: `<Link href="/privacidade">Privacidade</Link>`. */
  links?: ReactNode;
}

/** Rodapé da Início: crédito das fotos, aviso de que não é site oficial e links. Centralizado, até 640 px. */
export function Footer({ note, children, links, className, ...rest }: FooterProps) {
  return (
    <footer className={cx(styles.footer, className)} {...rest}>
      {note && <p className={styles.note}>{note}</p>}
      <p className={styles.text}>{children}</p>
      {links && <div className={styles.links}>{links}</div>}
    </footer>
  );
}
