import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Alert } from './Alert';

const meta = {
  title: 'Componentes/Alert',
  component: Alert,
  args: { tone: 'success', children: 'Inscrição confirmada! O link chega no seu e-mail entre 17h e 18h.' },
  argTypes: { tone: { control: 'inline-radio', options: ['success', 'warning', 'danger', 'info'] } },
  decorators: [(S) => <div style={{ width: 480 }}><S /></div>],
  parameters: { docs: { description: { component: 'Ícone + frase curta e direta. Mensagens de erro dizem **o que fazer**, não só o que deu errado. `danger` é anunciado na hora (role="alert"); os outros, com calma (role="status").' } } },
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Todos: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Alert tone="success">Inscrição confirmada! O link chega no seu e-mail entre 17h e 18h.</Alert>
      <Alert tone="warning">Inscrições encerram hoje às 18h.</Alert>
      <Alert tone="danger">Não foi possível enviar. Confira o e-mail e tente de novo.</Alert>
      <Alert tone="info">A reunião será gravada e enviada aos inscritos.</Alert>
    </div>
  ),
};
export const ComFechar: Story = { name: 'Com botão de fechar', args: { tone: 'info', children: 'A reunião será gravada e enviada aos inscritos.', onDismiss: fn() } };
