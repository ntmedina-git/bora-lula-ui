import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClusterMarker } from './ClusterMarker';

const meta = {
  title: 'Agenda/ClusterMarker',
  component: ClusterMarker,
  args: { count: 3 },
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Quando as etiquetas se sobrepõem, viram uma bolha com a contagem. Pequena (28 px) até 9; grande (36 px) a partir de 10. O toque aproxima o mapa. Contorno branco para destacar sobre as cores eleitorais.' } } },
} satisfies Meta<typeof ClusterMarker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Pequena: Story = {};
export const Grande: Story = { args: { count: 31 } };
