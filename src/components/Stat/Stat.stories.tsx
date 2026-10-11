import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat } from './Stat';

const meta = {
  title: 'Componentes/Stat',
  component: Stat,
  args: { value: '605', label: 'visitas ao site', surface: 'light' },
  argTypes: { surface: { control: 'inline-radio', options: ['light', 'red'] } },
  parameters: { docs: { description: { component: 'Contador com valor e rótulo curto. Sobre vermelho, o número fica em amarelo, permitido só em texto grande (contraste 4:1).' } } },
} satisfies Meta<typeof Stat>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Claro: Story = {};
export const SobreVermelho: Story = { name: 'Sobre vermelho', args: { surface: 'red' }, globals: { backgrounds: { value: 'red' } } };
