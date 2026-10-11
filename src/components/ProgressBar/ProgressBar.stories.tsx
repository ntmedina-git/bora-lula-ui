import type { Meta, StoryObj } from '@storybook/react-vite';
import { StepIndicator } from '../StepIndicator/StepIndicator';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Componentes/ProgressBar',
  component: ProgressBar,
  args: { value: 1248, max: 2000, tone: 'secondary', label: 'Assinaturas da petição', valueText: '1.248 de 2.000 assinaturas' },
  argTypes: { tone: { control: 'inline-radio', options: ['secondary', 'primary'] }, value: { control: { type: 'range', min: 0, max: 2000 } } },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
  parameters: { docs: { description: { component: 'Barra linear. Verde para petições e metas, vermelho para passos de cadastro. Sempre com nome acessível (`label`) e, se ajudar, `valueText`.' } } },
} satisfies Meta<typeof ProgressBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Passos: Story = {
  name: 'StepIndicator',
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <StepIndicator step={1} total={3} />
      <StepIndicator step={2} total={3} />
      <StepIndicator step={3} total={3} />
    </div>
  ),
};
