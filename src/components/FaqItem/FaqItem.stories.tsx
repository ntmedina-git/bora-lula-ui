import type { Meta, StoryObj } from '@storybook/react-vite';
import { FaqItem } from './FaqItem';

const meta = {
  title: 'Agenda/FaqItem',
  component: FaqItem,
  args: {
    question: 'Como acho uma ação?',
    children: 'Na busca do mapa você escreve o que quiser: o nome da ação, o tipo, o bairro ou a cidade, quem organiza ou uma palavra da descrição.',
  },
  decorators: [(S) => <div style={{ width: 'min(572px, 90vw)' }}><S /></div>],
  parameters: { docs: { description: { component: 'Pergunta frequente da Ajuda em acordeão, com `<details>`/`<summary>` nativos (funciona sem JavaScript). Divisória superior `outline-variant`; a pergunta inteira é o alvo de toque (mínimo de 44 px com o padding). Use uma abaixo da outra.' } } },
} satisfies Meta<typeof FaqItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Fechada: Story = {};
export const Aberta: Story = { args: { open: true } };

export const Lista: Story = {
  render: () => (
    <div>
      <FaqItem question="Como acho uma ação?">Na busca do mapa você escreve o que quiser: o nome da ação, o tipo, o bairro ou a cidade, quem organiza ou uma palavra da descrição.</FaqItem>
      <FaqItem question="Preciso de conta para participar?">Não para ver a agenda. Para dizer “Eu vou!”, salvar em outro aparelho ou cadastrar uma ação, entre com a conta Google.</FaqItem>
      <FaqItem question="Quem confere as ações?">A moderação do Comitê. Ações que vieram de post público aparecem com a etiqueta “Divulgação pública” até serem conferidas.</FaqItem>
    </div>
  ),
};
