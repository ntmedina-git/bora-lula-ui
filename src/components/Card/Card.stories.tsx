import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { DateBadge } from '../DateBadge/DateBadge';
import { BrandStripes } from '../BrandStripes/BrandStripes';
import { Card } from './Card';

const meta = {
  title: 'Componentes/Card',
  component: Card,
  args: { title: 'Plenária dos trabalhadores de tecnologia' },
  argTypes: { media: { control: 'inline-radio', options: ['red', 'green', undefined] }, overlineTone: { control: 'inline-radio', options: ['muted', 'primary'] } },
  decorators: [(S) => <div style={{ width: 280 }}><S /></div>],
  parameters: { docs: { description: { component: 'Outlined card do M3 adaptado: fundo branco, borda `outline-variant`, raio 8, padding 16. Sem foto, a mídia usa as faixas do logo sobre uma cor da marca. **Um botão por card.**' } } },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Evento: Story = {
  args: { media: 'red', date: new Date(2026, 9, 9), overline: 'Online · 19h', action: <Button>Inscreva-se</Button> },
};
export const Noticia: Story = {
  name: 'Notícia',
  args: { media: 'green', overline: 'Brasil com Lula', overlineTone: 'primary', title: 'Virar voto: cada conversa pode virar um voto', action: <Link href="#">Ler notícia</Link> },
};
export const Peticao: Story = {
  name: 'Petição',
  args: {
    overline: 'Petição',
    title: 'Mais creches no meu bairro',
    children: (
      <>
        <strong>1.248 de 2.000 assinaturas</strong>
        <ProgressBar value={1248} max={2000} label="Assinaturas da petição" />
      </>
    ),
    action: <Button variant="secondary">Assinar</Button>,
  },
};
export const ComponentesDeApoio: Story = {
  name: 'DateBadge e BrandStripes',
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ background: 'var(--cp-color-primary)', padding: 24, borderRadius: 8 }}><DateBadge date={new Date(2026, 9, 9)} /></div>
      <div style={{ height: 140, borderRadius: 8, overflow: 'hidden' }}><BrandStripes base="red" /></div>
      <div style={{ height: 140, borderRadius: 8, overflow: 'hidden' }}><BrandStripes base="green" /></div>
    </div>
  ),
};
