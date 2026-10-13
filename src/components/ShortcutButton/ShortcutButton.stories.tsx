import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar, Ellipsis, Share2 } from 'lucide-react';
import { ShortcutButton } from './ShortcutButton';

const meta = {
  title: 'Agenda/ShortcutButton',
  component: ShortcutButton,
  args: { icon: <Share2 />, label: 'Compartilhar', showLabel: false },
  argTypes: { icon: { control: false } },
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Atalho quadrado de 44 px (raio 12) abaixo do título da ação: adicionar ao Google Agenda / Apple, story do Instagram, compartilhar e "Opções". **Só ícone**: o `label` vira o `aria-label`. **Com rótulo**: ícone de 20 px + rótulo curto. Logos de terceiros entram como imagem no lugar do ícone. Na barra, 8 px entre os botões.' } } },
} satisfies Meta<typeof ShortcutButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const SoIcone: Story = { name: 'Só ícone' };
export const ComRotulo: Story = { name: 'Com rótulo', args: { icon: <Ellipsis />, label: 'Opções', showLabel: true } };

export const Barra: Story = {
  name: 'Barra de atalhos',
  render: () => (
    <div role="group" aria-label="Atalhos" style={{ display: 'flex', gap: 8 }}>
      <ShortcutButton href="#" icon={<Calendar />} label="Adicionar à agenda" />
      <ShortcutButton icon={<Share2 />} label="Compartilhar" />
      <ShortcutButton icon={<Ellipsis />} label="Opções" showLabel />
    </div>
  ),
};
