import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExternalLink } from 'lucide-react';
import { Button } from '../Button/Button';
import { CtaBlock } from './CtaBlock';

const meta = {
  title: 'Agenda/CtaBlock',
  component: CtaBlock,
  args: { question: 'Não achou ação na sua cidade?', action: <Button href="#">Cadastrar a primeira ação</Button> },
  argTypes: { action: { control: false } },
  decorators: [(S) => <div style={{ width: 'min(640px, 90vw)' }}><S /></div>],
  parameters: { docs: { description: { component: 'Bloco de chamada centralizado no fim da Início: pergunta e **um botão**. Primary para cadastrar ação; Outline para doar ou falar com a gente. Link externo leva o ícone `external-link` à direita.' } } },
} satisfies Meta<typeof CtaBlock>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primario: Story = { name: 'Primário' };
export const LinkExterno: Story = {
  name: 'Link externo',
  args: { question: 'Prefere ajudar com dinheiro?', action: <Button variant="outline" href="#" target="_blank" rel="noopener noreferrer" trailingIcon={<ExternalLink />}>Doe para a campanha do Lula</Button> },
};
export const ComApoio: Story = {
  name: 'Com frase de apoio',
  args: {
    question: 'Achou um erro ou quer falar com a gente?',
    supporting: 'Ação com dado errado, botão que não funciona, ideia: conte pra gente.',
    action: <Button variant="outline" href="#">Enviar mensagem</Button>,
  },
};
