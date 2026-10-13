import { useState } from 'react';
import { ChartColumn, CircleHelp, ExternalLink, Heart, House, Map as MapIcon } from 'lucide-react';
import {
  AccountButton, ActionCard, ActionRow, AgendaTopBar, Button, Callout, CtaBlock, Footer, Link, Organizer, SearchBar, SectionHeader, StatGroup, StatusTag,
} from '../index';
import type { PosterColor } from '../index';
import styles from './AgendaHome.module.css';

const PERTO: Array<{ title: string; date: string; time: string; place: string; color: PosterColor; type: string; org: string; going?: string }> = [
  { title: 'Ato antifascista dos estudantes da UFABC', date: 'ter 13/10, 12h', time: 'ter 12h', place: 'São Bernardo do Campo', color: 'green', type: 'Ato', org: 'DCE UFABC' },
  { title: 'Passeata dos Estudantes pela Democracia!', date: 'ter 13/10, 17h', time: 'ter 17h', place: 'São Paulo', color: 'blue', type: 'Caminhada', org: 'APG USP Capital', going: '🙋 1 vai' },
  { title: 'Panfletagem nas Igrejas Evangélicas', date: 'ter 13/10, 9h', time: 'ter 9h', place: 'Santo André', color: 'red', type: 'Panfletagem', org: 'Vereador Clovis Giradi' },
  { title: 'Grande Plenária da Virada', date: 'ter 13/10, 18h', time: 'ter 18h', place: 'São Paulo', color: 'wine', type: 'Encontro', org: 'Agenda Bora Lula' },
];

const ONLINE: Array<{ title: string; date: string; color: PosterColor; type: string; org: string }> = [
  { title: 'Livezão do Lula 13 (live da virada)', date: 'ter 13/10, 13h', color: 'red', type: 'Ação', org: 'Agenda Bora Lula' },
  { title: 'COEBE extraordinário: luta contra o fascismo na UFCG e em defesa da democracia', date: 'ter 13/10, 14h', color: 'wine', type: 'Encontro', org: 'DCE João Roberto Borges da UFCG' },
  { title: 'Assembleia Geral virtual das trabalhadoras e trabalhadores em educação pública do Pará', date: 'ter 13/10, 16h30', color: 'wine', type: 'Encontro', org: 'SINTEPP' },
  { title: 'Assembleia Geral Virtual Extraordinária: Eleições 2026 e Educação Pública', date: 'ter 13/10, 16h30', color: 'green', type: 'Encontro', org: 'SINTEPP' },
];

/** Início da agenda do boralula.org montada só com a biblioteca. Exemplo de composição, não faz parte do pacote. */
export function AgendaHome() {
  const [salvos, setSalvos] = useState<string[]>([]);
  const toggle = (t: string) => (s: boolean) => setSalvos((l) => (s ? [...l, t] : l.filter((x) => x !== t)));
  return (
    <div className={styles.page}>
      <a href="#conteudo" className={styles.skip}>Pular para o conteúdo</a>
      <AgendaTopBar
        items={[
          { label: 'Início', href: '#', icon: <House />, current: true },
          { label: 'Mapa', href: '#mapa', icon: <MapIcon /> },
          { label: 'Salvos', href: '#salvos', icon: <Heart /> },
          { label: 'Painel', href: '#painel', icon: <ChartColumn /> },
        ]}
        secondaryItems={[{ label: 'Ajuda', href: '#ajuda', icon: <CircleHelp /> }]}
        account={<AccountButton href="#entrar" />}
      />
      <main id="conteudo" className={`cp-container ${styles.main}`}>
        <h1 className="cp-visually-hidden">Agenda Bora Lula</h1>
        <SearchBar
          segments={[
            { label: 'Onde', placeholder: 'Cidade ou bairro' },
            { label: 'Quando', placeholder: 'Em breve' },
            { label: 'O que', placeholder: 'Qualquer ação' },
          ]}
          onSubmit={(e) => e.preventDefault()}
        />
        <StatGroup
          aria-label="Ações na agenda"
          className={styles.stats}
          stats={[{ value: '1.426', label: 'eventos agendados' }, { value: '597', label: 'por vir' }, { value: '248', label: 'acontecendo hoje' }]}
        />
        <Callout title="Conte do que você gosta" action={<Button>Escolher</Button>}>
          Escolha tipos de ação e organizações. A gente mostra primeiro o que combina com você, e diz por quê.
        </Callout>

        <section className={styles.section}>
          <SectionHeader title="Perto de você:" city="São Paulo" subtitle="Acontecendo agora ou começando nas próximas 3 horas." action={<Link href="#mapa">Ver no mapa</Link>} />
          <div className={styles.showcase}>
            {PERTO.map((a) => (
              <ActionCard
                key={a.title}
                href="#acao"
                title={a.title}
                date={a.date}
                place={a.place}
                time={a.time}
                poster={{ color: a.color, type: a.type, place: a.place }}
                organizer={<Organizer name={a.org} />}
                status={<StatusTag />}
                going={a.going}
                saved={salvos.includes(a.title)}
                onSavedChange={toggle(a.title)}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <SectionHeader title="Online, de qualquer lugar" action={<Link href="#online">Ver todas</Link>} />
          <div className={styles.rows}>
            {ONLINE.map((a) => (
              <ActionRow
                key={a.title}
                href="#acao"
                title={a.title}
                date={a.date}
                place="Online"
                poster={{ color: a.color, type: a.type }}
                organizer={<Organizer name={a.org} hideAvatar={a.org === 'Agenda Bora Lula'} />}
                status={<StatusTag />}
              />
            ))}
          </div>
        </section>

        <div className={styles.ctas}>
          <CtaBlock question="Não achou ação na sua cidade?" action={<Button href="#cadastrar">Cadastrar a primeira ação</Button>} />
          <CtaBlock question="Prefere ajudar com dinheiro?" action={<Button variant="outline" href="#doar" trailingIcon={<ExternalLink />}>Doe para a campanha do Lula</Button>} />
        </div>
      </main>
      <Footer links={<Link href="#privacidade">Privacidade</Link>}>
        Uma iniciativa do Comitê Popular do Lula. Não é site oficial da campanha. Nenhuma divulgação paga.
      </Footer>
    </div>
  );
}
