import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterChip } from './FilterChip';

const meta = {
  title: 'Agenda/FilterChip',
  component: FilterChip,
  args: { children: 'Hoje', selected: false },
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Chip de filtro (filter chip do M3) para recortes rápidos de data no topo da lista do mapa. Pílula de 44 px com borda `outline` de 1,5 px. Selecionado: `primary-container`, borda primary, check e texto em vermelho escuro, não só cor de fundo. É um botão de alternância (`aria-pressed`).' } } },
} satisfies Meta<typeof FilterChip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const NaoSelecionado: Story = { name: 'Não selecionado' };
export const Selecionado: Story = { args: { selected: true } };

const DATAS = ['Escolher datas', 'Hoje', 'Amanhã'];
export const Grupo: Story = {
  name: 'Grupo de datas',
  render: () => {
    const [atual, setAtual] = useState('Hoje');
    return (
      <div role="group" aria-label="Quando" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {DATAS.map((d) => <FilterChip key={d} selected={atual === d} onClick={() => setAtual(d)}>{d}</FilterChip>)}
      </div>
    );
  },
};
