import type { Meta, StoryObj } from '@storybook/react-vite';
import { BackLink } from './BackLink';

const meta = {
  title: 'Agenda/BackLink',
  component: BackLink,
  args: { href: '#', children: 'Ações' },
  parameters: { docs: { description: { component: 'Voltar para a lista de onde a pessoa veio. Primeiro item da página de detalhe, acima da mídia. 14/500 `on-surface-variant` sublinhado, área de toque de 44 px de altura. A seta é decorativa.' } } },
} satisfies Meta<typeof BackLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };
