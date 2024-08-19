import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages';
import generateSitemap from 'vite-plugin-pages-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  
  plugins: [react(),
    Pages({
      onRoutesGenerated: (routes) => {
        generateSitemap({
          routes,
          hostname: 'https://seashoremediclinic.com/',  // Replace with actual domain
          outDir: 'dist',
          readable: true,
        });
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
     port: 5173
  }
})
