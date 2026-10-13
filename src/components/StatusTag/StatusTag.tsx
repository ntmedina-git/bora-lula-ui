import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';
import styles from './StatusTag.module.css';

export interface StatusTagProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

/** Etiqueta de procedência. Neutra de propósito: não é alerta. O `title` explica a origem. */
export function StatusTag({
  children = 'Divulgação pública',
  title = 'A ação veio de um post público e a moderação ainda não conferiu.',
  className,
  ...rest
}: StatusTagProps) {
  return <span title={title} className={cx(styles.tag, className)} {...rest}>{children}</span>;
}
