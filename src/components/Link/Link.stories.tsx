import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

const meta = {
  title: 'Componentes/Link',
  component: Link,
  args: { children: 'Ler notícia', href: '#', tone: 'primary' },
  argTypes: { tone: { control: 'inline-radio', options: ['primary', 'tertiary', 'on-red'] } },
  parameters: { docs: { description: { component: 'Links de texto **sempre sublinhados**. Vermelho por padrão, azul 700 em textos longos, branco sobre vermelho.' } } },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Terciario: Story = { name: 'Tertiary (azul)', args: { tone: 'tertiary', children: 'Veja todos os cuidados' } };
export const Externo: Story = { args: { external: true, children: 'Instagram do Comitê', href: 'https://instagram.com' } };
export const SobreVermelho: Story = { name: 'Sobre vermelho', args: { tone: 'on-red', children: 'Privacidade' }, globals: { backgrounds: { value: 'red' } } };
