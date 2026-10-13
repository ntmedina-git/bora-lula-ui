import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { TopicTile } from './TopicTile';

// Decorator tipado à parte: com props em união (botão | link) a inferência do Storybook vira `never`.
const width: Decorator = (S, { parameters }) => <div style={{ width: parameters.width }}><S /></div>;

const meta = {
  title: 'Agenda/TopicTile',
  component: TopicTile,
  args: { icon: '📍', title: 'Problema com uma ação', helper: 'horário, lugar, já aconteceu, cancelada' },
  argTypes: { icon: { control: 'text' } },
  decorators: [width],
  globals: { backgrounds: { value: 'container' } },
  parameters: { width: 175, docs: { description: { component: 'Assunto para abrir um chamado na Ajuda. Botão do tamanho do card com ícone, título e exemplos curtos; ao escolher, abre o formulário do chamado já com o assunto. Em grade: 3 por linha no desktop, 2 no celular.' } } },
} satisfies Meta<typeof TopicTile>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { name: 'Padrão' };

const ASSUNTOS = [
  { icon: '❓', title: 'Dúvida sobre como usar' },
  { icon: '🛠️', title: 'Algo não funciona no site' },
  { icon: '📍', title: 'Problema com uma ação', helper: 'horário, lugar, já aconteceu, cancelada' },
  { icon: '🚩', title: 'Denunciar uma ação', helper: 'golpe, evento falso, ataque, ódio, risco' },
  { icon: '💡', title: 'Sugestão ou ideia' },
  { icon: '🔒', title: 'Meus dados (LGPD)', helper: 'ver, corrigir ou apagar o que o site guarda de você' },
];

export const AbrirChamado: Story = {
  name: 'Abrir um chamado',
  parameters: { width: 'min(572px, 90vw)' },
  render: () => (
    <section aria-labelledby="chamado" style={{ display: 'grid', gap: 12, padding: 16, borderRadius: 16, background: 'var(--cp-color-surface-container)' }}>
      <h2 id="chamado" className="cp-text-h3" style={{ margin: 0 }}>Abrir um chamado</h2>
      <p style={{ margin: 0 }}>Escolha o assunto. Você descreve, recebe um número de protocolo e a moderação responde pelo contato que você deixar.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12 }}>
        {ASSUNTOS.map((a) => <TopicTile key={a.title} {...a} />)}
      </div>
    </section>
  ),
};
