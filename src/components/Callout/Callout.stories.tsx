import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Callout } from './Callout';

const meta = {
  title: 'Agenda/Callout',
  component: Callout,
  args: {
    title: 'Conte do que você gosta',
    children: 'Escolha tipos de ação e organizações. A gente mostra primeiro o que combina com você, e diz por quê.',
    action: <Button>Escolher</Button>,
  },
  argTypes: { action: { control: false } },
  decorators: [(S) => <div style={{ width: 'min(658px, 90vw)' }}><S /></div>],
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Convite em amarelo claro (`warning-container`) para personalizar o que aparece primeiro na vitrine. **Não é alerta**: título curto, uma frase e um botão. Largura de conteúdo (até 1052 px) no desktop.' } } },
} satisfies Meta<typeof Callout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };
export const SemBotao: Story = { name: 'Sem botão', args: { action: undefined } };
