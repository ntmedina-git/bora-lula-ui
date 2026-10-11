import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentedButton } from './SegmentedButton';

const meta = {
  title: 'Componentes/SegmentedButton',
  component: SegmentedButton,
  args: { label: 'Visualização', value: 'mapa', onChange: () => {}, options: [{ value: 'mapa', label: 'Mapa' }, { value: 'tabela', label: 'Tabela' }] },
  parameters: { docs: { description: { component: 'Segmented button do M3. Alterna visões ou camadas. É um grupo de rádio: setas mudam a opção, Tab sai do grupo. Selecionado com check, não só cor.' } } },
  render: function Render(args) {
    const [v, setV] = useState(args.value);
    return <SegmentedButton {...args} value={v} onChange={setV} />;
  },
} satisfies Meta<typeof SegmentedButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const MapaTabela: Story = { name: 'Mapa / Tabela' };
export const Camadas: Story = {
  args: { label: 'Camada do mapa', value: 'candidatos', options: [{ value: 'candidatos', label: 'Candidatos' }, { value: 'censo', label: 'Censo' }, { value: 'buscas', label: 'Buscas' }] },
};
