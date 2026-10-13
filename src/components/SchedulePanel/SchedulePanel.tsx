import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './SchedulePanel.module.css';

export interface SchedulePanelProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: ReactNode;
  /** Dia e horário de início, em negrito: "ter 13/10, 9h". */
  date: ReactNode;
  /** Fim, ex.: "até 18h". */
  until?: ReactNode;
  /** Quantas pessoas vão, ou o convite para ser a primeira. */
  going?: ReactNode;
  /** "Eu vou!" como Button Primary/Large (pede login com Google). */
  action?: ReactNode;
  /** Depois da ação: divulgação original (Button Outline/Small com external-link) e adicionar à agenda (Link). */
  children?: ReactNode;
  headingLevel?: 2 | 3;
}

/** Painel "Quando" do detalhe da ação: fixo à direita no desktop, abaixo da mídia no celular. */
export function SchedulePanel({ title = 'Quando', date, until, going, action, children, headingLevel = 2, className, ...rest }: SchedulePanelProps) {
  const H = `h${headingLevel}` as 'h2';
  return (
    <section className={cx(styles.panel, className)} {...rest}>
      <H className={styles.title}>{title}</H>
      <div className={styles.info}>
        <p className={styles.date}><strong>{date}</strong>{until && <><br />{until}</>}</p>
        {going && <p className={styles.going}>{going}</p>}
      </div>
      {action}
      {children}
    </section>
  );
}
