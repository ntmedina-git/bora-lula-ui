import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar, House, Megaphone, User, Users } from 'lucide-react';
import { Button } from '../Button/Button';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { TopNavigation } from './TopNavigation';

const links = [
  { label: 'Início', href: '#', current: true },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Acervo', href: '#acervo' },
  { label: 'Saiba mais', href: '#saiba-mais' },
];

const meta = {
  title: 'Componentes/TopNavigation',
  component: TopNavigation,
  args: { links, surface: 'light' },
  argTypes: { surface: { control: 'inline-radio', options: ['light', 'red'] }, cta: { control: false }, logo: { control: false } },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Logo à esquerda. Item ativo com sublinhado grosso (vermelho no claro, amarelo no vermelho) e `aria-current="page"`. **Abaixo de 1024 px os links vão para um menu.** Mude o viewport para ver.' } },
  },
} satisfies Meta<typeof TopNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Clara: Story = { args: { cta: <Button>Faça parte</Button> } };
export const Vermelha: Story = { args: { surface: 'red', cta: <Button variant="on-red">Entrar</Button> } };
export const Celular: Story = {
  args: { surface: 'red', cta: <Button variant="on-red" size="sm">Entrar</Button> },
  globals: { viewport: { value: 'android' } },
};

export const BarraDeAbas: StoryObj<typeof NavigationBar> = {
  name: 'NavigationBar (app)',
  render: () => (
    <div style={{ width: 360 }}>
      <NavigationBar
        items={[
          { label: 'Início', href: '#', icon: <House />, current: true },
          { label: 'Agenda', href: '#agenda', icon: <Calendar /> },
          { label: 'Mobilizar', href: '#mobilizar', icon: <Megaphone /> },
          { label: 'Comitês', href: '#comites', icon: <Users /> },
          { label: 'Perfil', href: '#perfil', icon: <User /> },
        ]}
      />
    </div>
  ),
  parameters: { layout: 'centered', docs: { description: { story: 'De 3 a 5 itens, sempre com rótulo. Ativa em vermelho e sublinhada; inativas em grafite 60%. Respeita `env(safe-area-inset-bottom)`.' } } },
};
