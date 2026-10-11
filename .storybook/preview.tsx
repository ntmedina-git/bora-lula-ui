import type { Preview } from '@storybook/react-vite';
import '../src/styles/fonts.css';
import '../src/styles/index.css';
import './docs.css';
import theme from './theme';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true, sort: 'requiredFirst' },
    docs: { theme, toc: true },
    a11y: { test: 'error' },
    backgrounds: {
      options: {
        surface: { name: 'Superfície', value: '#FFFFFF' },
        container: { name: 'Surface container', value: '#F3F1EE' },
        red: { name: 'Vermelho (primary)', value: '#C3090A' },
      },
    },
    viewport: {
      options: {
        android: { name: 'Android de entrada (360)', styles: { width: '360px', height: '760px' } },
        tablet: { name: 'Tablet (768)', styles: { width: '768px', height: '1024px' } },
        notebook: { name: 'Notebook (1024)', styles: { width: '1024px', height: '768px' } },
        desktop: { name: 'Desktop (1440)', styles: { width: '1440px', height: '900px' } },
      },
    },
    options: {
      storySort: {
        order: ['Introdução', 'Começando', 'Foundations', ['Cores', 'Tipografia', 'Espaço e forma', 'Elevação e foco', 'Grid', 'Ícones'], 'Regras', 'Componentes', 'Padrões', 'Exemplos'],
      },
    },
  },
  decorators: [(Story) => <div className="cp-root" lang="pt-BR"><Story /></div>],
};
export default preview;
