import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronLeft, Menu, Minus, Plus, Share2, X } from 'lucide-react';
import { IconButton } from './IconButton';

const meta = {
  title: 'Componentes/IconButton',
  component: IconButton,
  args: { icon: <Menu />, label: 'Abrir menu', variant: 'standard' },
  argTypes: { variant: { control: 'inline-radio', options: ['standard', 'filled', 'on-red'] }, icon: { control: false } },
  parameters: { docs: { description: { component: 'Ícone clicável com área de 44 × 44 px. `label` é obrigatório: vira o nome acessível (aria-label).' } } },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Todos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <IconButton icon={<ChevronLeft />} label="Voltar" />
      <IconButton icon={<Share2 />} label="Compartilhar" />
      <IconButton icon={<X />} label="Fechar" />
      <IconButton icon={<Plus />} label="Aproximar mapa" variant="filled" />
      <IconButton icon={<Minus />} label="Afastar mapa" disabled />
    </div>
  ),
};

export const SobreVermelho: Story = {
  name: 'Sobre vermelho',
  args: { variant: 'on-red' },
  globals: { backgrounds: { value: 'red' } },
};
