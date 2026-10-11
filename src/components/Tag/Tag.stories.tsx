import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta = {
  title: 'Componentes/Tag',
  component: Tag,
  args: { children: 'Ao vivo', tone: 'live' },
  argTypes: { tone: { control: 'inline-radio', options: ['live', 'urgent', 'success', 'info', 'neutral'] } },
  parameters: { docs: { description: { component: 'Rótulo curto em caixa-alta para status. A cor reforça, mas o texto é que informa: nunca use a Tag só com cor.' } } },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Todas: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag tone="live">Ao vivo</Tag>
      <Tag tone="urgent">Urgente</Tag>
      <Tag tone="success">Confirmado</Tag>
      <Tag tone="info">Online</Tag>
      <Tag tone="neutral">Presencial</Tag>
    </div>
  ),
};
