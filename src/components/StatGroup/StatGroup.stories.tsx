import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatGroup } from './StatGroup';

const meta = {
  title: 'Agenda/StatGroup',
  component: StatGroup,
  args: {
    stats: [
      { value: '1.426', label: 'eventos agendados' },
      { value: '597', label: 'por vir' },
      { value: '248', label: 'acontecendo hoje' },
    ],
    surface: 'light',
    'aria-label': 'Ações na agenda',
  },
  argTypes: { surface: { control: 'inline-radio', options: ['light', 'map'] } },
  parameters: { docs: { description: { component: 'Contadores de ações. Mostre no máximo três números. **Light**: na Início, número 26/900 em primary e rótulo 12/600. **Map**: sobre as fotos do mapa, scrim grafite 60% com borda branca 24% e número 34/900 em highlight (o amarelo só aparece sobre fundo escuro). O número e o rótulo são lidos juntos.' } } },
} satisfies Meta<typeof StatGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Claro: Story = { decorators: [(S) => <div style={{ width: 'min(520px, 90vw)' }}><S /></div>] };
export const SobreMapa: Story = {
  name: 'Sobre o mapa',
  args: { surface: 'map' },
  decorators: [(S) => <div style={{ padding: 24, borderRadius: 8, background: 'var(--cp-color-primary)' }}><S /></div>],
};
