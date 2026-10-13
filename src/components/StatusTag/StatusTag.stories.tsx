import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusTag } from './StatusTag';

const meta = {
  title: 'Agenda/StatusTag',
  component: StatusTag,
  parameters: { docs: { description: { component: 'Etiqueta de procedência. "Divulgação pública": a ação veio de um post público e a moderação ainda não conferiu (o `title` explica). Neutra de propósito: não é alerta, por isso não usa as cores de feedback.' } } },
} satisfies Meta<typeof StatusTag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DivulgacaoPublica: Story = { name: 'Divulgação pública' };
