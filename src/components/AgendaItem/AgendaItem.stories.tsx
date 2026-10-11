import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgendaItem } from './AgendaItem';
import { EventItem } from '../EventItem/EventItem';
import { Button } from '../Button/Button';

const meta = {
  title: 'Componentes/AgendaItem',
  component: AgendaItem,
  args: {
    type: 'public',
    hour: '9h',
    title: 'Ato Nem o Pai, Nem o Filho – Bolsonaros Nunca Mais',
    location: 'Largo do Carmo, São Luís (MA)',
    organizer: 'Coletivos e entidades estudantis',
    category: 'Ato',
    verifiedBy: 'Agenda Lulaço',
    href: '#',
  },
  argTypes: { type: { control: 'inline-radio', options: ['public', 'supporters'] } },
  decorators: [(S) => <div style={{ width: 520, background: 'var(--cp-color-surface-container)', padding: 16 }}><S /></div>],
  parameters: { docs: { description: { component: 'Linha da agenda. Faixa vermelha = evento público; verde = atividade de apoiadores (o amarelo do site antigo não passa como borda sobre branco). O tipo também é anunciado em texto para leitores de tela.' } } },
} satisfies Meta<typeof AgendaItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Publico: Story = { name: 'Evento público' };
export const ComInteresse: Story = {
  name: 'Com interessados',
  args: { hour: '13h', title: 'Marcha pela Democracia: Fandoms na Rua com Lula', location: 'MASP, São Paulo (SP)', organizer: '342 Artes, Brasil Fora da Caverna, Eu Tô com Lula', interest: '10 mil interessados' },
};
export const Apoiadores: Story = { name: 'Atividade de apoiadores', args: { type: 'supporters', title: 'Panfletagem na feira do bairro', hour: '10h', location: 'Local visível para quem foi aceito', organizer: 'Comitê Flamengo', verifiedBy: undefined, category: 'Panfletagem' } };

export const ItemDoApp: StoryObj<typeof EventItem> = {
  name: 'EventItem (app)',
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 328 }}>
      <EventItem emphasis="featured" overline="Hoje · 19h · Online" title="Plenária dos trabalhadores de tecnologia" action={<Button variant="on-red" size="sm">Participar</Button>} />
      <EventItem overline="Sábado · 10h" title="Panfletagem na feira do bairro" />
    </div>
  ),
};
