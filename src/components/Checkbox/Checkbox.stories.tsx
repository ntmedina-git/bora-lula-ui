import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Componentes/Checkbox',
  component: Checkbox,
  args: { label: 'Quero receber avisos por e-mail' },
  parameters: { docs: { description: { component: 'Caixa de 20 px dentro de uma área de toque de 44 px. Para aceite de termos e listas curtas.' } } },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Marcado: Story = { args: { defaultChecked: true } };
export const Desabilitado: Story = { args: { disabled: true, defaultChecked: true } };
