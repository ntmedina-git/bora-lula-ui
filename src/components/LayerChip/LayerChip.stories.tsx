import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayerChip } from './LayerChip';

const meta = {
  title: 'Agenda/LayerChip',
  component: LayerChip,
  args: { icon: '🏆', label: 'quem ficou na frente', name: 'camada-exemplo' },
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Camadas do mapa eleitoral: emoji ou ícone grande e rótulo curto em até 2 linhas. Só uma ativa por vez (rádio nativo); a seleção troca a legenda do mapa. Não selecionado: sem borda, Elevation/1, texto `on-surface-variant`. Selecionado: borda primary de 2 px e texto `on-primary-container`.' } } },
} satisfies Meta<typeof LayerChip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const NaoSelecionado: Story = { name: 'Não selecionado' };
export const Selecionado: Story = { args: { defaultChecked: true } };

export const Camadas: Story = {
  name: 'Grupo de camadas',
  render: () => (
    <fieldset style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: 0, padding: 0, border: 0 }}>
      <legend className="cp-visually-hidden">Camada do mapa</legend>
      <LayerChip name="camada" value="frente" icon="🏆" label="quem ficou na frente" defaultChecked />
      <LayerChip name="camada" value="votos" icon="🗳️" label="votos de candidato ou partido" />
      <LayerChip name="camada" value="abstencao" icon="🚫" label="abstenção" />
      <LayerChip name="camada" value="segundo-turno" icon="🎯" label="votos em jogo no 2º turno" />
    </fieldset>
  ),
};
