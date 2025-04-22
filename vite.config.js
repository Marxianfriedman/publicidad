import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    assetsDir: 'assets',  // Directorio fijo para recursos
    manifest: true        // Genera mapa de archivos
  }
})
