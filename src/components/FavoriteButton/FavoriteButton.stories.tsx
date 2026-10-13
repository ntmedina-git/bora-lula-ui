import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FavoriteButton } from './FavoriteButton';

const meta = {
  title: 'Agenda/FavoriteButton',
  component: FavoriteButton,
  args: { saved: false, surface: 'media' },
  argTypes: { surface: { control: 'inline-radio', options: ['media', 'surface'] } },
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Coração para salvar a ação no aparelho (lista Salvos). Área de toque de 44 × 44 px. On media: branco 92% com Elevation/1 sobre foto ou cartaz. On surface: borda `outline-variant` na página de detalhe. Salvo: coração preenchido em primary. O nome acessível ("Salvar ação") não muda; o estado vai no `aria-pressed`.' } } },
} satisfies Meta<typeof FavoriteButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const SobreMidia: Story = { name: 'Sobre mídia' };
export const SobreMidiaSalvo: Story = { name: 'Sobre mídia, salvo', args: { saved: true } };
export const NaPagina: Story = { name: 'Na página', args: { surface: 'surface' } };
export const NaPaginaSalvo: Story = { name: 'Na página, salvo', args: { surface: 'surface', saved: true } };

export const Alternar: Story = {
  name: 'Alternar',
  render: (args) => {
    const [saved, setSaved] = useState(false);
    return <FavoriteButton {...args} saved={saved} onClick={() => setSaved((s) => !s)} />;
  },
};
