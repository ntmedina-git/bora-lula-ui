import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExternalLink } from 'lucide-react';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';
import { SchedulePanel } from './SchedulePanel';

const meta = {
  title: 'Agenda/SchedulePanel',
  component: SchedulePanel,
  args: {
    date: 'ter 13/10, 9h',
    until: 'até 18h',
    going: 'Ninguém disse que vai ainda. Seja a primeira pessoa!',
    action: <Button size="lg">Eu vou!</Button>,
    children: (
      <>
        <Button variant="outline" size="sm" href="#" target="_blank" rel="noopener noreferrer" trailingIcon={<ExternalLink />}>Ver a divulgação original</Button>
        <Link href="#">📅 Adicionar à agenda</Link>
      </>
    ),
  },
  argTypes: { action: { control: false }, children: { control: false } },
  decorators: [(S) => <div style={{ width: 340 }}><S /></div>],
  globals: { backgrounds: { value: 'container' } },
  parameters: { docs: { description: { component: 'Coluna lateral da página da ação (fixa à direita no desktop, abaixo da mídia no celular). Dia e horário com o dia em negrito, quantas pessoas vão, "Eu vou!" (Button Primary/Large; pede login com Google), link para a divulgação original quando a ação veio de post público, e adicionar à agenda.' } } },
} satisfies Meta<typeof SchedulePanel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DePostPublico: Story = { name: 'Vinda de post público' };
export const ComPessoas: Story = {
  name: 'Com pessoas confirmadas',
  args: { going: '🙋 12 pessoas vão', children: <Link href="#">📅 Adicionar à agenda</Link> },
};
