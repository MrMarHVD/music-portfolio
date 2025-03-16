import { fileURLToPath, URL } from 'node:url'
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import vueDevTools from 'vite-plugin-vue-devtools'

   export default defineConfig({
     base: '/music-portfolio/', // Add this line
     plugins: [
       vue(),
       vueDevTools(),
     ],
     resolve: {
       alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
       },
     },
     preview: {
       port: 3000
     }
   })