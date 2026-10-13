import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClusterMarker } from '../ClusterMarker/ClusterMarker';
import { MapLabel } from './MapLabel';

const meta = {
  title: 'Agenda/MapLabel',
  component: MapLabel,
  args: { icon: '🗣️', children: 'qui 19h', selected: false, highlighted: false, live: false },
  argTypes: { icon: { control: 'text' } },
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Uma etiqueta por ação visível no mapa: emoji do tipo + dia e hora. **Default**: branca com Elevation/2. **Hover ou item da lista em foco** (`highlighted`): vinho. **Selecionada**: primary, 13 px, contorno branco de 2 px. Ação acontecendo agora pulsa (`live`; desligado com movimento reduzido).' } } },
} satisfies Meta<typeof MapLabel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };
export const Destacada: Story = { name: 'Em foco na lista', args: { highlighted: true } };
export const Selecionada: Story = { args: { selected: true } };
export const AoVivo: Story = { name: 'Acontecendo agora', args: { live: true, children: 'agora' } };

const at = (left: number, top: number): CSSProperties => ({ position: 'absolute', left: `${left}%`, top });
export const SobreOMapa: Story = {
  name: 'Sobre o mapa',
  parameters: { docs: { description: { story: 'Etiquetas e bolhas sobre o mapa coroplético. As cores do resultado eleitoral vêm do próprio mapa, não da biblioteca.' } } },
  render: () => (
    <div style={{ position: 'relative', width: 'min(720px, 90vw)', height: 260, overflow: 'hidden', borderRadius: 8, background: 'linear-gradient(90deg, #9e99d1, #edc7cc 55%, #d47380)' }}>
      <MapLabel icon="⭐" style={at(11, 60)}>17h</MapLabel>
      <MapLabel icon="📣" selected style={at(42, 130)}>ter 9h</MapLabel>
      <MapLabel icon="🚶" highlighted style={at(65, 40)}>ter 18h</MapLabel>
      <MapLabel icon="🗣️" style={at(72, 200)}>qui 19h</MapLabel>
      <ClusterMarker count={31} style={at(28, 170)} />
      <ClusterMarker count={2} style={at(86, 110)} />
      <ClusterMarker count={7} style={at(56, 60)} />
    </div>
  ),
};
