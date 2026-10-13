import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBar, SearchSegment } from './SearchBar';

const meta = {
  title: 'Agenda/SearchBar',
  component: SearchBar,
  args: {
    segments: [
      { label: 'Onde', placeholder: 'Cidade ou bairro' },
      { label: 'Quando', placeholder: 'Em breve' },
      { label: 'O que', placeholder: 'Qualquer ação' },
    ],
    onSubmit: (e) => e.preventDefault(),
  },
  decorators: [(S) => <div style={{ width: 'min(860px, 90vw)' }}><S /></div>],
  globals: { backgrounds: { value: 'container' } },
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Busca tripla do topo da Início. Pílula branca com borda `outline` de 1,5 px e sombra Elevation/2. Cada segmento é um `SearchSegment`: o toque abre o seletor de cidade, de data ou de tipo. O botão é o Button Primary/Large com ícone search. Abaixo de 768 px os segmentos empilham num cartão (raio lg) e o botão ocupa a largura toda.' } },
  },
} satisfies Meta<typeof SearchBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Vazia: Story = {};
export const Preenchida: Story = {
  args: {
    segments: [
      { label: 'Onde', placeholder: 'Cidade ou bairro', value: 'Santo André' },
      { label: 'Quando', placeholder: 'Em breve', value: 'Hoje' },
      { label: 'O que', placeholder: 'Qualquer ação', value: 'Panfletagem' },
    ],
  },
};
export const Celular: Story = { globals: { viewport: { value: 'android' } } };

export const Segmento: StoryObj<typeof SearchSegment> = {
  name: 'SearchSegment',
  render: () => (
    <div style={{ display: 'flex', gap: 24, padding: 24, borderRadius: 8, background: 'var(--cp-color-surface)' }}>
      <SearchSegment label="Onde" placeholder="Cidade ou bairro" />
      <SearchSegment label="Onde" placeholder="Cidade ou bairro" value="Santo André" />
    </div>
  ),
};
