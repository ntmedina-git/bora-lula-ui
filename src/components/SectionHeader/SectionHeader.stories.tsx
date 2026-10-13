import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../Link/Link';
import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'Agenda/SectionHeader',
  component: SectionHeader,
  args: {
    title: 'Agora perto de você',
    subtitle: 'Acontecendo agora ou começando nas próximas 3 horas.',
    action: <Link href="#">Ver no mapa</Link>,
  },
  argTypes: { action: { control: false } },
  decorators: [(S) => <div style={{ width: 'min(1052px, 90vw)' }}><S /></div>],
  parameters: { layout: 'padded', docs: { description: { component: 'Abre cada faixa de ações da Início (Agora perto de você, Online, cada cidade): H2, subtítulo opcional e link "Ver no mapa" à direita. Com `city`, o título vira prefixo e a cidade é um botão sublinhado em primary que abre o seletor de cidade.' } } },
} satisfies Meta<typeof SectionHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Simples: Story = {};
export const ComCidade: Story = { name: 'Com cidade', args: { title: 'Perto de você:', city: 'São Paulo', onCityClick: () => {} } };
export const SemSubtitulo: Story = { name: 'Sem subtítulo', args: { title: 'Online, de qualquer lugar', subtitle: undefined } };
