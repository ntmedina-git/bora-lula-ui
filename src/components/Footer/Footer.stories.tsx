import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../Link/Link';
import { Footer } from './Footer';

const meta = {
  title: 'Agenda/Footer',
  component: Footer,
  args: {
    note: 'Fotos de exemplo do Wikimedia Commons, com licenças livres. O crédito de cada uma está na página da ação.',
    children: 'Uma iniciativa do Comitê Popular do Lula. Não é site oficial da campanha. Nenhuma divulgação paga.',
    links: <Link href="#">Privacidade</Link>,
  },
  argTypes: { links: { control: false } },
  decorators: [(S) => <div style={{ width: 'min(640px, 90vw)' }}><S /></div>],
  parameters: { docs: { description: { component: 'Rodapé da Início: crédito das fotos, aviso de que não é site oficial da campanha e link de privacidade. Centralizado, até 640 px.' } } },
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };
