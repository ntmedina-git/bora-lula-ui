import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronDown, Search } from 'lucide-react';
import { TextField } from './TextField';

const meta = {
  title: 'Componentes/TextField',
  component: TextField,
  args: { label: 'Nome completo', placeholder: 'Maria da Silva', autoComplete: 'name' },
  argTypes: { trailingIcon: { control: false } },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
  parameters: {
    docs: {
      description: {
        component:
          'Rótulo **sempre visível** acima do campo, nunca só placeholder. Use `autoComplete` e o `type`/`inputMode` certos. Erro com ícone e texto que diz como corrigir. O texto de ajuda e o erro são ligados ao campo por `aria-describedby`.',
      },
    },
  },
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Email: Story = { args: { label: 'E-mail', type: 'email', autoComplete: 'email', placeholder: 'maria@exemplo.com', helperText: 'Ninguém vê o seu e-mail.' } };
export const Erro: Story = { args: { label: 'Cidade / UF', defaultValue: 'Sao Paulo', error: 'Escolha uma cidade da lista', trailingIcon: <ChevronDown /> } };
export const Busca: Story = { args: { label: 'Cidade, candidato, evento ou material', placeholder: 'Ex.: Rio de Janeiro, adesivo', type: 'search', trailingIcon: <Search />, helperText: 'Também aceita link de um post do Instagram.' } };
export const Desabilitado: Story = { args: { disabled: true, defaultValue: 'Maria da Silva' } };
