import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartColumn, CircleHelp, Heart, House, Map as MapIcon } from 'lucide-react';
import { AccountButton } from '../AccountButton/AccountButton';
import { AgendaWordmark } from '../AgendaWordmark/AgendaWordmark';
import { AgendaTopBar } from './AgendaTopBar';

const meta = {
  title: 'Agenda/AgendaTopBar',
  component: AgendaTopBar,
  args: {
    items: [
      { label: 'Início', href: '#inicio', icon: <House />, current: true },
      { label: 'Mapa', href: '#mapa', icon: <MapIcon /> },
      { label: 'Salvos', href: '#salvos', icon: <Heart /> },
      { label: 'Painel', href: '#painel', icon: <ChartColumn /> },
    ],
    secondaryItems: [{ label: 'Ajuda', href: '#ajuda', icon: <CircleHelp /> }],
    account: <AccountButton href="#entrar" />,
  },
  argTypes: { account: { control: false } },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Barra superior do boralula.org nas telas da agenda (substitui a TopNavigation): marca da Agenda, itens com ícone (Início, Mapa, Salvos, Painel), Ajuda e Entrar. Item ativo com indicador de 4 px em `highlight` colado na base e `aria-current="page"` (o amarelo só aparece sobre o vermelho). **Abaixo de 1024 px** fica só a marca e Entrar; a navegação principal vai para a NavigationBar.' } },
  },
} satisfies Meta<typeof AgendaTopBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: 'desktop' } } };
export const Celular: Story = { globals: { viewport: { value: 'android' } } };
export const Logado: Story = { args: { account: <AccountButton href="#perfil" name="Ana" /> }, globals: { viewport: { value: 'desktop' } } };

export const Pecas: Story = {
  name: 'AccountButton e AgendaWordmark',
  parameters: { layout: 'centered' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: '0 24px', borderRadius: 8, background: 'var(--cp-color-primary)' }}>
      <AgendaWordmark height={48} style={{ margin: '24px 0' }} />
      <AccountButton />
      <AccountButton name="Ana" />
    </div>
  ),
};
