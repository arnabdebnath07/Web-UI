import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * noon.com (web) Garmin lineup PLP. `kit/src` holds the parts of the noon Flow Kit the page uses (tokens, fonts,
 * Origin icons, Garmin photos and product data), imported as `@kit/*` and `@assets/*`.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@kit': fileURLToPath(new URL('./kit/src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./kit/src/assets', import.meta.url)),
    },
  },
  server: { port: 5181 },
  build: { outDir: 'dist', emptyOutDir: true, assetsInlineLimit: 0 },
});
