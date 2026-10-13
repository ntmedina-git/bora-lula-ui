import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Organizer } from '../Organizer/Organizer';
import { StatusTag } from '../StatusTag/StatusTag';
import { ActionCard } from './ActionCard';

const meta = {
  title: 'Agenda/ActionCard',
  component: ActionCard,
  args: {
    href: '#',
    title: 'Panfletagem nas Igrejas Evangélicas',
    date: 'ter 13/10, 9h',
    place: 'Santo André',
    time: 'ter 9h',
    poster: { color: 'red', type: 'Panfletagem', place: 'Santo André' },
    organizer: <Organizer name="Vereador Clovis Giradi" />,
    status: <StatusTag />,
    saved: false,
    onSavedChange: () => {},
  },
  argTypes: { organizer: { control: false }, status: { control: false } },
  // Largura do card por história (parameters.width); a vitrine usa a largura toda.
  decorators: [(S, { parameters }) => <div style={{ width: parameters.width }}><S /></div>],
  globals: { backgrounds: { value: 'container' } },
  parameters: { width: 244, docs: { description: { component: 'Card da vitrine de ações (Início, Salvos, cidade). Mídia 4:5 com `Poster` ou foto, `TimeBadge` e `FavoriteButton`; depois título, dia/horário, cidade, quem organiza, etiqueta de procedência e, quando houver, quantas pessoas vão (em `secondary`). **O card inteiro é o link para a ação**; o coração é o único controle interno. 4 por linha no desktop (gap 24), rolagem horizontal no celular.' } } },
} satisfies Meta<typeof ActionCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ComCartaz: Story = { name: 'Com cartaz' };
// Foto de exemplo (paisagem 16:9) para mostrar a imagem contida sobre o fundo desfocado.
const FOTO = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><rect width="640" height="360" fill="#048ED6"/><rect y="230" width="640" height="130" fill="#087A23"/><circle cx="520" cy="80" r="44" fill="#FBCE02"/><g fill="#C3090A"><rect x="80" y="120" width="10" height="130"/><path d="M90 120h90l-20 30 20 30H90z"/><rect x="300" y="100" width="10" height="150"/><path d="M310 100h110l-24 34 24 34H310z"/></g></svg>',
)}`;

export const ComFoto: Story = {
  name: 'Com foto',
  args: { image: FOTO, imageAlt: 'Ilustração: bandeiras vermelhas num campo sob o céu azul', going: '🙋 12 vão' },
};
export const Online: Story = { args: { online: true, time: 'ter 13h', place: 'Online', poster: { color: 'red', type: 'Ação' } } };

const VITRINE = [
  { title: 'Ato antifascista dos estudantes da UFABC', date: 'ter 13/10, 12h', place: 'São Bernardo do Campo', time: 'ter 12h', poster: { color: 'green', type: 'Ato', place: 'São Bernardo do Campo' }, org: 'DCE UFABC' },
  { title: 'Passeata dos Estudantes pela Democracia!', date: 'ter 13/10, 17h', place: 'São Paulo', time: 'ter 17h', poster: { color: 'blue', type: 'Caminhada', place: 'São Paulo' }, org: 'APG USP Capital', going: '🙋 1 vai' },
  { title: 'Panfletagem no Mercado de São José', date: 'qua 14/10, 9h', place: 'São José, Recife', time: 'qua 9h', poster: { color: 'red', type: 'Panfletagem', place: 'Recife' }, org: 'Comitê UPE pela Democracia' },
  { title: 'Grande Plenária da Virada', date: 'ter 13/10, 18h', place: 'Porto Alegre', time: 'ter 18h', poster: { color: 'wine', type: 'Encontro', place: 'Porto Alegre' }, org: 'Agenda Bora Lula' },
] as const;

export const Vitrine: Story = {
  name: 'Vitrine',
  parameters: { width: 'min(1048px, 90vw)' },
  render: () => {
    const [salvos, setSalvos] = useState<string[]>([]);
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24, alignItems: 'start' }}>
        {VITRINE.map((a) => (
          <ActionCard
            key={a.title}
            href="#"
            title={a.title}
            date={a.date}
            place={a.place}
            time={a.time}
            poster={a.poster}
            organizer={<Organizer name={a.org} />}
            status={<StatusTag />}
            going={'going' in a ? a.going : undefined}
            saved={salvos.includes(a.title)}
            onSavedChange={(s) => setSalvos((l) => (s ? [...l, a.title] : l.filter((t) => t !== a.title)))}
          />
        ))}
      </div>
    );
  },
};
