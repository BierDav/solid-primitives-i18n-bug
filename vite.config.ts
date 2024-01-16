import { defineConfig } from 'vite';
import solid from 'solid-start/vite';

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
  },
  base: '/',
});
