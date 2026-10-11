// Copia CSS que o consumidor importa direto: tokens.css e fonts.css.
import { copyFileSync } from 'node:fs';
copyFileSync('src/styles/tokens.css', 'dist/tokens.css');
copyFileSync('src/styles/fonts.css', 'dist/fonts.css');
console.log('dist/tokens.css e dist/fonts.css copiados');
