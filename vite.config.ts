import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Build da biblioteca: ESM + um único styles.css
export default defineConfig({
  plugins: [react()],
  css: { modules: { generateScopedName: 'cp-[local]-[hash:base64:5]' } },
  build: {
    lib: { entry: resolve(__dirname, 'src/index.ts'), formats: ['es'], fileName: () => 'index.js' },
    cssCodeSplit: false,
    assetsInlineLimit: 20000,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react', /^@fontsource\//],
      output: { assetFileNames: (a) => (a.names?.[0]?.endsWith('.css') ? 'styles.css' : 'assets/[name][extname]') },
    },
  },
});
