import type { Meta, StoryObj } from '@storybook/react-vite';
import { Organizer } from '../Organizer/Organizer';
import { StatusTag } from '../StatusTag/StatusTag';
import { ActionRow } from './ActionRow';

const meta = {
  title: 'Agenda/ActionRow',
  component: ActionRow,
  args: {
    href: '#',
    title: 'Livezão do Lula 13 (live da virada)',
    date: 'ter 13/10, 13h',
    place: 'Online',
    poster: { color: 'red', type: 'Ação' },
    organizer: <Organizer name="Agenda Bora Lula" hideAvatar />,
    status: <StatusTag />,
  },
  argTypes: { organizer: { control: false }, status: { control: false } },
  decorators: [(S, { parameters }) => <div style={{ width: parameters.width }}><S /></div>],
  parameters: { width: 'min(512px, 90vw)', docs: { description: { component: 'Linha compacta de ação para listas longas e para ações online, em que a cidade não importa (lista do mapa, "Online, de qualquer lugar"). Thumb 72 × 72 do `Poster`, título, dia/horário em negrito + local, quem organiza e procedência. Divisória inferior `outline-variant`; 2 colunas no desktop (gap 28), 1 no celular. A linha inteira é o link.' } } },
} satisfies Meta<typeof ActionRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };

export const ListaOnline: Story = {
  name: 'Lista online',
  parameters: { width: 'min(1108px, 90vw)' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '4px 28px', padding: 24, border: '1px solid var(--cp-color-outline-variant)', borderRadius: 8 }}>
      <ActionRow href="#" title="Livezão do Lula 13 (live da virada)" date="ter 13/10, 13h" place="Online" poster={{ color: 'red', type: 'Ação' }} organizer={<Organizer name="Agenda Bora Lula" hideAvatar />} status={<StatusTag />} />
      <ActionRow href="#" title="COEBE extraordinário: luta contra o fascismo na UFCG e em defesa da democracia" date="ter 13/10, 14h" place="Online" poster={{ color: 'wine', type: 'Encontro' }} organizer={<Organizer name="DCE João Roberto Borges da UFCG" />} status={<StatusTag />} />
      <ActionRow href="#" title="Assembleia Geral virtual das trabalhadoras e trabalhadores em educação pública do Pará" date="ter 13/10, 16h30" place="Online" poster={{ color: 'wine', type: 'Encontro' }} organizer={<Organizer name="SINTEPP" />} status={<StatusTag />} />
      <ActionRow href="#" title="Assembleia Geral Virtual Extraordinária: Eleições 2026 e Educação Pública" date="ter 13/10, 16h30" place="Online" poster={{ color: 'green', type: 'Encontro' }} organizer={<Organizer name="SINTEPP" />} status={<StatusTag />} />
    </div>
  ),
};
