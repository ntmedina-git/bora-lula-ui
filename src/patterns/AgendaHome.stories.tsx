import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgendaHome } from './AgendaHome';

const meta = {
  title: 'Exemplos/Agenda boralula.org',
  component: AgendaHome,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'A Início da agenda do boralula.org montada só com os componentes da seção Agenda. Use o seletor de viewport para ver no celular (a vitrine vira rolagem horizontal e a barra fica só com a marca e Entrar).' } },
  },
} satisfies Meta<typeof AgendaHome>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: 'desktop' } } };
export const Celular: Story = { globals: { viewport: { value: 'android' } } };
