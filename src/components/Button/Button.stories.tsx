import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, MapPin, Plus } from 'lucide-react';
import { Button } from './Button';

const meta = {
  title: 'Componentes/Button',
  component: Button,
  args: { children: 'Faça parte', variant: 'primary', size: 'md' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'outline', 'secondary', 'on-red'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Botão em pílula. **44 px é o padrão**; o de 36 px (`sm`) só no desktop, nunca como alvo de toque principal. Use **um Primary por bloco**. Rótulo com verbo de ação ("Assinar", "Participar"). Foco: anel branco + grafite; sobre vermelho, anel amarelo.',
      },
    },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button>Inscreva-se</Button>
      <Button variant="outline">Ver agenda</Button>
      <Button variant="secondary">Assinar petição</Button>
      <Button disabled>Faça parte</Button>
    </div>
  ),
};

export const SobreVermelho: Story = {
  name: 'Sobre vermelho',
  args: { variant: 'on-red', children: 'Link na bio' },
  parameters: { backgrounds: { value: 'red' } },
  globals: { backgrounds: { value: 'red' } },
};

export const Tamanhos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="sm">36 px · desktop</Button>
      <Button size="md">44 px · padrão</Button>
      <Button size="lg">52 px · destaque</Button>
    </div>
  ),
};

export const ComIcones: Story = {
  name: 'Com ícones',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button leadingIcon={<MapPin />}>Perto de mim</Button>
      <Button variant="outline" leadingIcon={<Plus />}>Pôr na agenda</Button>
      <Button size="lg" trailingIcon={<ArrowRight />}>Quero participar</Button>
    </div>
  ),
};

export const ComoLink: Story = {
  name: 'Como link (href)',
  args: { href: '#agenda', children: 'Ver agenda completa', variant: 'outline' },
};

export const LarguraTotal: Story = {
  name: 'Largura total (celular)',
  args: { fullWidth: true, children: 'Quero participar', size: 'lg' },
  decorators: [(S) => <div style={{ width: 328 }}><S /></div>],
};
