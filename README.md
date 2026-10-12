# @boralula/ui

Biblioteca de componentes React do Comitê Popular / Bora Lula, com tokens, componentes e regras de acessibilidade do **Guia de Interface Web e Apps**. Organização inspirada no Material 3: primitivos → papéis semânticos → componentes.

- **Figma:** arquivo Bora-Lula, frame **Library** (fonte do design).
- **Guideline:** Storybook deste repositório (`npm run dev`), com páginas de foundations, regras e todos os componentes.

## Uso

```bash
npm install @boralula/ui
```

```tsx
import '@boralula/ui/fonts.css';
import '@boralula/ui/styles.css';
import { Button } from '@boralula/ui';
import { MapPin } from 'lucide-react';

<Button leadingIcon={<MapPin />}>Perto de mim</Button>;
```

Só tokens: `@import '@boralula/ui/tokens.css';` · Tailwind: `presets: [require('@boralula/ui/tailwind-preset')]` · DTCG: `@boralula/ui/tokens.json`.

## Componentes

| Componente | Equivalente M3 | Figma |
| --- | --- | --- |
| `Button` (primary, outline, secondary, on-red · sm/md/lg) | Filled / Outlined button | Button |
| `IconButton` | Icon button | Icon button |
| `Link` | — | Link |
| `TextField` | Outlined text field | Text field |
| `SelectionOption` | Filter chip (largura total) | Selection option |
| `Checkbox` | Checkbox | Checkbox |
| `SegmentedButton` | Segmented button | Segmented button |
| `Tag` | Badge / Assist chip | Tag |
| `Alert` | Banner | Alert |
| `ProgressBar`, `StepIndicator` | Linear progress | Progress bar, Step indicator |
| `Card`, `DateBadge`, `BrandStripes` | Outlined card | Card, Date, Brand/Stripes |
| `EventItem`, `AgendaItem`, `Stat` | List item | Event item, Agenda item, Stat |
| `TopNavigation` | Top app bar | Top navigation, Nav link |
| `NavigationBar` | Navigation bar | Navigation bar, Navigation item |
| `Logo` | — | Brand/Logo |

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Storybook em http://localhost:6006 |
| `npm run tokens` | Gera `src/styles/tokens.css`, `typography.css`, `tokens/tokens.json`, `tokens/tailwind-preset.cjs` e `src/tokens.ts` a partir de `tokens/figma-export.json` |
| `npm test` | axe em todas as histórias + contraste AA dos papéis de cor |
| `npm run build` | `dist/` com `index.js`, `styles.css`, `tokens.css`, `fonts.css` e tipos |
| `npm run build-storybook` | Site estático do guia em `storybook-static/` |

## Atualizar tokens a partir do Figma

1. No Figma, ajuste as variáveis (coleções `Primitives`, `Color`, `Spacing`, `Radius`, `Size`, `Border`).
2. Exporte para `tokens/figma-export.json` (mesmo formato do arquivo atual; dá para usar o MCP do Figma ou um plugin de export de variáveis).
3. Rode `npm run tokens && npm test`. Se algum par de cor cair abaixo de 4,5:1, o teste falha.

## Decisões

- **CSS Modules + variáveis CSS**, sem runtime de CSS-in-JS: leve para conexões fracas (CSS da lib com ~26 KB).
- **Ícones do lucide-react**, os mesmos da biblioteca do Figma (traço 2 px, pontas arredondadas).
- **Montserrat via @fontsource**, só os pesos 500/700/800/900 e o subconjunto latino, com `font-display: swap`.
- **Inputs nativos** em Checkbox e SelectionOption, para teclado e leitor de tela funcionarem sem JavaScript extra.
- **Logo:** `src/assets/logo-bora-lula.png` é o selo circular "L 13" (500 px, fundo transparente, exportado do Figma, nó `64:620`). Para outra versão, passe `src` no `<Logo>`.
- **Não há modo escuro**: o guia não define. A estrutura de papéis já permite criar um tema sobrescrevendo as variáveis `--cp-color-*`.
