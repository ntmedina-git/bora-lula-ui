import { useState } from 'react';
import { MapPin, Plus, Search, ArrowRight } from 'lucide-react';
import {
  AgendaItem, Alert, BrandStripes, Button, Link, Logo, ProgressBar, SegmentedButton, Stat, Tag, TextField, TopNavigation,
} from '../index';
import styles from './HomePage.module.css';

const days = [['S', 10, 0], ['D', 11, 2], ['S', 12, 0], ['T', 13, 1], ['Q', 14, 0], ['Q', 15, 0], ['S', 16, 0], ['S', 17, 0], ['D', 18, 0], ['S', 19, 0], ['T', 20, 0], ['Q', 21, 0], ['Q', 22, 0], ['S', 23, 0], ['S', 24, 0], ['D', 25, 0]] as const;

const steps = [
  ['Eventos públicos', 'Atos, plenárias e caminhadas aparecem para todo mundo, com endereço e a divulgação original. Quem entra confirma presença e recebe aviso se algo mudar.'],
  ['Atividades de apoiadores', 'São combinadas entre pessoas: peça para participar e o local aparece quando a organização aceitar.'],
  ['Sabe de algo que vai acontecer?', 'Ponha na agenda: um evento público ou uma atividade.'],
  ['Pontos de material', 'Mostram onde buscar santinho, adesivo e bandeira. Peça o que precisa: no ponto protegido, o endereço aparece quando quem cuida aceitar.'],
  ['Depois, conte como foi.', 'O que funcionou, o que as pessoas disseram, que boato apareceu.'],
];

/** Home do boralula.org reconstruída só com a biblioteca. Exemplo de composição, não faz parte do pacote. */
export function HomePage() {
  const [view, setView] = useState('mapa');
  return (
    <div className={styles.page}>
      <a href="#conteudo" className={styles.skip}>Pular para o conteúdo</a>
      <TopNavigation
        surface="red"
        links={[{ label: 'Início', href: '#', current: true }, { label: 'Agenda', href: '#agenda' }, { label: 'Acervo', href: '#' }, { label: 'Saiba mais', href: '#como-funciona' }]}
        cta={<Button variant="on-red">Entrar</Button>}
      />
      <main id="conteudo">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroArt} aria-hidden="true"><BrandStripes base="red" /></div>
          <div className={`cp-container ${styles.heroInner}`}>
            <div className={styles.heroMain}>
              <Tag tone="urgent">2º turno · 25 de outubro</Tag>
              <h1 id="hero-title" className={`cp-text-display ${styles.heroTitle}`}>Faltam <span className={styles.highlight}>15</span> dias</h1>
              <p className={`cp-text-body-large ${styles.heroLead}`}>Ache um ato, uma plenária ou gente para fazer campanha perto de você.</p>
              <form className={styles.searchCard} role="search" onSubmit={(e) => e.preventDefault()}>
                <TextField label="Cidade, candidato, evento ou material" type="search" placeholder="Ex.: Rio de Janeiro, plenária, adesivo" trailingIcon={<Search />} helperText="Também aceita link de um post do Instagram." />
                <div className={styles.actions}>
                  <Button leadingIcon={<MapPin />}>Perto de mim</Button>
                  <Button variant="outline" leadingIcon={<Plus />}>Pôr na agenda</Button>
                  <Button variant="outline">Mandar foto</Button>
                </div>
                <p className="cp-text-body-small" style={{ margin: 0, color: 'var(--cp-color-on-surface-variant)' }}><strong>3 eventos</strong> no Brasil até 25/10. Busque sua cidade ou toque em “Perto de mim”.</p>
              </form>
            </div>
            <aside className={styles.statsCard} aria-label="Agora no Bora Lula">
              <Tag tone="live">Ao vivo</Tag>
              <div className={styles.stats}>
                <Stat value="605" label="visitas ao site" />
                <Stat value="3" label="eventos planejados" />
                <Stat value="0" label="eventos hoje" />
                <Stat value="0" label="acontecendo agora" />
              </div>
            </aside>
          </div>
        </section>

        <div className={styles.toolbar}>
          <div className={`cp-container ${styles.toolbarInner}`}>
            <Button variant="outline" size="sm" className={styles.filters}>Filtros</Button>
            <span className="cp-text-body-small" style={{ flex: 1, color: 'var(--cp-color-on-surface-variant)' }}>Presidente 2026 · quem ficou na frente no 1º turno</span>
            <SegmentedButton label="Visualização" value={view} onChange={setView} options={[{ value: 'mapa', label: 'Mapa' }, { value: 'tabela', label: 'Tabela' }]} />
          </div>
        </div>

        <section id="agenda" className={`cp-container ${styles.mapAgenda}`} aria-labelledby="agenda-title">
          <div className={styles.map} role="img" aria-label="Mapa do Brasil com os eventos marcados">
            <span className={styles.mapNote}>Área do mapa (OpenFreeMap)</span>
          </div>
          <div className={styles.agenda}>
            <div className={styles.agendaHead}>
              <h2 id="agenda-title" className="cp-text-h2" style={{ margin: 0 }}>Agenda</h2>
              <span className="cp-text-body-small" style={{ color: 'var(--cp-color-on-surface-variant)' }}>3 eventos no Brasil até 25/10</span>
            </div>
            <ul className={styles.legend} aria-label="Legenda">
              <li><span className={styles.sq} style={{ background: 'var(--cp-color-primary)' }} />Evento público</li>
              <li><span className={styles.sq} style={{ background: 'var(--cp-color-secondary)' }} />Atividade de apoiadores</li>
              <li><Link href="#">Entrar para ver</Link></li>
            </ul>
            <h3 className={`cp-text-h3 ${styles.day}`}>Amanhã, domingo, 11 de outubro</h3>
            <AgendaItem headingLevel={4} hour="9h" title="Ato Nem o Pai, Nem o Filho – Bolsonaros Nunca Mais" href="#" location="Largo do Carmo, São Luís (MA)" organizer="Coletivos e entidades estudantis" category="Ato" verifiedBy="Agenda Lulaço" />
            <AgendaItem headingLevel={4} hour="13h" title="Marcha pela Democracia: Fandoms na Rua com Lula" href="#" location="MASP, São Paulo (SP)" organizer="342 Artes, Brasil Fora da Caverna, Eu Tô com Lula" category="Ato" verifiedBy="Agenda Lulaço" interest="10 mil interessados" />
            <h3 className={`cp-text-h3 ${styles.day}`}>Terça-feira, 13 de outubro</h3>
            <AgendaItem headingLevel={4} hour="18h" title="Mobilização estudantil — UFRJ (Fundão)" href="#" location="UFRJ, Cidade Universitária (Fundão), Rio de Janeiro (RJ)" organizer="UNE e ANPG" category="Outro" />
            <div><Button variant="outline" trailingIcon={<ArrowRight />} href="#">Ver agenda completa</Button></div>
          </div>
        </section>

        <section className={styles.movement} aria-labelledby="mov-title">
          <div className="cp-container">
            <div className={styles.agendaHead}>
              <h2 id="mov-title" className="cp-text-h2" style={{ margin: 0 }}>O Brasil em movimento</h2>
              <span className="cp-text-body-small" style={{ color: 'var(--cp-color-on-surface-variant)' }}>Atualiza sozinho · 13:25</span>
            </div>
            <div className={styles.charts}>
              <figure className={styles.chartCard}>
                <figcaption className="cp-text-title">Eventos por dia até o 2º turno</figcaption>
                <ol className={styles.bars} aria-label="Eventos por dia">
                  {days.map(([d, n, v]) => (
                    <li key={n} className={styles.barCol} aria-label={`Dia ${n}: ${v} ${v === 1 ? 'evento' : 'eventos'}`}>
                      {v > 0 && <span className={styles.barValue} aria-hidden="true">{v}</span>}
                      <span className={styles.bar} style={{ height: v ? v * 52 : 2, background: v ? 'var(--cp-color-primary)' : 'var(--cp-color-outline-variant)' }} />
                      <span aria-hidden="true" className={n === 25 ? styles.dayHot : undefined}>{d}<br />{n}</span>
                    </li>
                  ))}
                </ol>
              </figure>
              <figure className={styles.chartCard}>
                <figcaption className="cp-text-title">Onde tem mais <span className="cp-text-body-small" style={{ fontWeight: 500, color: 'var(--cp-color-on-surface-variant)' }}>3 cidades em 3 estados</span></figcaption>
                {['MA', 'RJ', 'SP'].map((uf) => (
                  <div key={uf} className={styles.rank}><strong>{uf}</strong><ProgressBar value={1} max={1} tone="primary" label={`Eventos em ${uf}`} valueText="1 evento" /><strong>1</strong></div>
                ))}
              </figure>
              <figure className={styles.chartCard}>
                <figcaption className="cp-text-title">A agenda está crescendo</figcaption>
                <Stat value="39" label="eventos divulgados" />
                <svg viewBox="0 0 320 100" className={styles.area} aria-hidden="true">
                  <path d="M0 96 L250 96 L276 14 L312 10 L312 100 L0 100 Z" fill="var(--cp-color-primary-container)" />
                  <path d="M0 96 L250 96 L276 14 L312 10" fill="none" stroke="var(--cp-color-primary)" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="312" cy="10" r="5" fill="var(--cp-color-primary)" />
                </svg>
              </figure>
            </div>
          </div>
        </section>

        <section id="como-funciona" className={`cp-container ${styles.how}`} aria-labelledby="how-title">
          <h2 id="how-title" className="cp-text-h2">Como funciona</h2>
          <ol className={styles.steps}>
            {steps.map(([t, b], i) => (
              <li key={t} className={styles.stepItem}>
                <span className={`cp-text-h1 ${styles.stepNum}`} aria-hidden="true">{i + 1}</span>
                <div><h3 className="cp-text-title" style={{ margin: 0 }}>{t}</h3><p className="cp-text-body" style={{ margin: '4px 0 0', color: 'var(--cp-color-on-surface-variant)' }}>{b}</p></div>
              </li>
            ))}
          </ol>
          <div className={styles.cta}><Button size="lg">Pôr na agenda</Button><Link href="#">Saiba mais sobre o Bora Lula</Link></div>
          <h3 className="cp-text-h3">Cuidados</h3>
          <Alert tone="info">Ninguém vê o seu e-mail. O local das atividades de apoiadores só aparece para quem a organização aceitou.</Alert>
          <p><Link tone="tertiary" href="#">Veja todos os cuidados</Link></p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerArt} aria-hidden="true"><BrandStripes base="red" /></div>
        <div className={`cp-container ${styles.footerInner}`}>
          <Logo size={88} />
          <div className={styles.footerText}>
            <p className="cp-text-h3" style={{ margin: 0 }}>A arma da classe trabalhadora é a sua organização e unidade na luta! Por um Brasil justo, democrático e soberano! <span className={styles.highlight}>Lula!</span></p>
            <p className="cp-text-body-small" style={{ margin: 0 }}>Iniciativa independente de apoiadores. Não é o site oficial da campanha. Responsável: Carlos E C Costa.</p>
            <ul className={styles.footerLinks}>
              {['Cuidados e regras', 'Privacidade', 'Relatar um problema', 'Instalar o app'].map((l) => <li key={l}><Link tone="on-red" href="#">{l}</Link></li>)}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
