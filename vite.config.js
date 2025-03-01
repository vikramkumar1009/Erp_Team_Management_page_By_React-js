import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
 
  
    theme: {
     textColor: theme => theme('colors'),
     textColor: {
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
     },
     alias: {
      '@': path.resolve(__dirname, 'src'),  // Enables @ as an alias for src
    },
    }
  
})

