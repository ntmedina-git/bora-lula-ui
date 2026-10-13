import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimeBadge } from './TimeBadge';

const meta = {
  title: 'Agenda/TimeBadge',
  component: TimeBadge,
  args: { children: 'ter 9h', tone: 'default' },
  argTypes: { tone: { control: 'inline-radio', options: ['default', 'online'] } },
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Selo de dia e horário no canto superior esquerdo da mídia do card, a 10 px das bordas (Label/Small, caixa-alta). Default: branco com Elevation/1. Online: fundo `tertiary`, para ações remotas; leitores de tela também ouvem "Online".' } } },
} satisfies Meta<typeof TimeBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };
export const Online: Story = { args: { tone: 'online' } };
