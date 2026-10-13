import type { Meta, StoryObj } from '@storybook/react-vite';
import { Organizer } from './Organizer';

const meta = {
  title: 'Agenda/Organizer',
  component: Organizer,
  args: { name: 'Vereador Clovis Giradi' },
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Linha de quem organiza: avatar com a inicial (ou logo) e nome em Body/Small. Usada no card, na lista e no detalhe da ação. Esconda o avatar quando quem organiza é a própria Agenda Bora Lula.' } } },
} satisfies Meta<typeof Organizer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ComInicial: Story = { name: 'Com inicial' };
export const SemAvatar: Story = { name: 'Sem avatar', args: { name: 'Agenda Bora Lula', hideAvatar: true } };
