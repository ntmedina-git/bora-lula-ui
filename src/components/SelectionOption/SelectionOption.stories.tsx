import type { Meta, StoryObj } from '@storybook/react-vite';
import { SelectionOption } from './SelectionOption';

const meta = {
  title: 'Componentes/SelectionOption',
  component: SelectionOption,
  args: { label: 'Desenvolvimento front-end', type: 'checkbox' },
  argTypes: { type: { control: 'inline-radio', options: ['checkbox', 'radio'] } },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
  parameters: { docs: { description: { component: 'Opção em cartão para cadastros com **uma pergunta por tela**. Usa um input nativo (checkbox ou radio), então teclado e leitores de tela funcionam sem código extra.' } } },
} satisfies Meta<typeof SelectionOption>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Selecionada: Story = { args: { defaultChecked: true } };

export const Pergunta: Story = {
  name: 'Pergunta do cadastro',
  render: () => (
    <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'grid', gap: 12 }}>
      <legend className="cp-text-h3" style={{ marginBottom: 12 }}>Como você quer ajudar?</legend>
      {['Desenvolvimento front-end', 'Desenvolvimento back-end', 'UX/UI', 'Dados', 'QA e testes'].map((l, i) => (
        <SelectionOption key={l} name="ajuda" value={l} label={l} defaultChecked={i === 0 || i === 3} />
      ))}
    </fieldset>
  ),
};
