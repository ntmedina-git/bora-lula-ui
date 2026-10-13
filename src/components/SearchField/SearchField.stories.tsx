import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchField } from './SearchField';

const meta = {
  title: 'Agenda/SearchField',
  component: SearchField,
  args: { onSearch: () => {}, onNearMe: () => {}, onFilters: () => {} },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Busca do mapa, sobre o próprio mapa (por isso a sombra Elevation/2 no lugar da borda). Aceita nome da ação, tipo, bairro, cidade ou organização; Enter busca a frase inteira. À direita, "Perto de mim" e "Filtros" como Icon button Standard, cada um aparece quando recebe o handler.' } } },
} satisfies Meta<typeof SearchField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };
export const Preenchido: Story = { args: { defaultValue: 'plenária em Recife' } };
export const SoBusca: Story = { name: 'Sem atalhos', args: { onNearMe: undefined, onFilters: undefined } };
