import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Povolení pollingu pro detekci změn souborů ve Dockeru
      usePolling: true,
    }
  },
})
