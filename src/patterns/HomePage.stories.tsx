import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomePage } from './HomePage';

const meta = {
  title: 'Exemplos/Home boralula.org',
  component: HomePage,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'A home do boralula.org reconstruída só com componentes e tokens da biblioteca. Use o seletor de viewport para ver no celular.' } },
  },
} satisfies Meta<typeof HomePage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: 'desktop' } } };
export const Celular: Story = { globals: { viewport: { value: 'android' } } };
