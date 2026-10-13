import type { Meta, StoryObj } from '@storybook/react-vite';
import { GoogleSignInButton } from './GoogleSignInButton';

const meta = {
  title: 'Agenda/GoogleSignInButton',
  component: GoogleSignInButton,
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Entrar com a conta Google: o único jeito de entrar (Perfil, Cadastrar ação, Eu vou!). Pílula grafite (`on-surface`) com selo branco, para não competir com o primário vermelho da página. Mesmo foco dos botões (anel sobre fundo claro).' } } },
} satisfies Meta<typeof GoogleSignInButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };
