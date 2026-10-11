import { describe, expect, it } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import axe from 'axe-core';
import type React from 'react';

// Roda o axe em TODAS as histórias. Contraste de cor é testado à parte (tokens.test.ts),
// porque o jsdom não calcula cores renderizadas.
const modules = import.meta.glob<Record<string, unknown>>('./**/*.stories.tsx', { eager: true });

describe.each(Object.entries(modules))('%s', (_file, mod) => {
  const stories = composeStories(mod as Parameters<typeof composeStories>[0]);
  it.each(Object.entries(stories) as Array<[string, React.ComponentType]>)('%s sem violações de acessibilidade', async (_name, Story) => {
    const { container } = render(<Story />);
    const result = await axe.run(container, { rules: { 'color-contrast': { enabled: false }, region: { enabled: false } } });
    cleanup();
    const msgs = result.violations.map((v) => `${v.id}: ${v.help} → ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
    expect(msgs).toEqual([]);
  });
});
