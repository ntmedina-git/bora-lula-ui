import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterChip } from '../FilterChip/FilterChip';
import { ListPanelHeader } from './ListPanelHeader';

const meta = {
  title: 'Agenda/ListPanelHeader',
  component: ListPanelHeader,
  args: { children: '64 ações nesta área', onHide: () => {} },
  decorators: [(S, { parameters }) => <div style={{ width: parameters.width }}><S /></div>],
  parameters: { width: 296, docs: { description: { component: 'Topo da lista lateral do mapa: quantas ações estão na área visível (anunciado quando muda) e o botão de esconder a lista (36 px de altura dentro do painel; o painel inteiro rola). Fica acima dos Filter chips.' } } },
} satisfies Meta<typeof ListPanelHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };

export const NoPainel: Story = {
  name: 'No painel da lista',
  parameters: { width: 'min(360px, 90vw)' },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, padding: 16, borderRadius: 8, background: 'var(--cp-color-surface)', boxShadow: 'var(--cp-shadow-2)' }}>
      <ListPanelHeader {...args} />
      <div role="group" aria-label="Quando" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <FilterChip>Escolher datas</FilterChip>
        <FilterChip>Hoje</FilterChip>
        <FilterChip>Amanhã</FilterChip>
      </div>
    </div>
  ),
};
