import type { Meta, StoryObj } from '@storybook/react-vite';
import { Poster } from './Poster';

const meta = {
  title: 'Agenda/Poster',
  component: Poster,
  args: { color: 'red', size: 'card', type: 'Panfletagem', place: 'Santo André' },
  argTypes: { color: { control: 'inline-radio', options: ['red', 'green', 'blue', 'wine'] }, size: { control: 'inline-radio', options: ['card', 'thumb'] } },
  decorators: [(S, { parameters }) => <div style={{ width: parameters.width }}><S /></div>],
  globals: { backgrounds: { value: 'container' } },
  parameters: { width: 242, docs: { description: { component: 'Mídia padrão quando a ação não tem foto: tarja "Bora Lula" em highlight, tipo em 900 caixa-alta e cidade. Cor por tipo: **red** (padrão, panfletagem, ação), **green** (ato), **blue** (caminhada, cultural), **wine** (encontro). Card 4:5 para a vitrine; Thumb 1:1 de 72 px para listas, sem tarja nem cidade (use o tipo curto). O tamanho do texto é fluido (cqw): o cartaz escala inteiro com a largura.' } } },
} satisfies Meta<typeof Poster>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {};
export const Thumb: Story = { args: { size: 'thumb', type: 'Ação' }, parameters: { width: 'auto' } };

export const Cores: Story = {
  name: 'Cores por tipo',
  parameters: { width: 'auto' },
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 180px)', gap: 16 }}>
        <Poster color="red" type="Panfletagem" place="Santo André" />
        <Poster color="green" type="Ato" place="São Bernardo do Campo" />
        <Poster color="blue" type="Caminhada" place="São Paulo" />
        <Poster color="wine" type="Encontro" place="Porto Alegre" />
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Poster size="thumb" color="red" type="Ação" />
        <Poster size="thumb" color="green" type="Ato" />
        <Poster size="thumb" color="blue" type="Cultural" />
        <Poster size="thumb" color="wine" type="Encontro" />
      </div>
    </div>
  ),
};
