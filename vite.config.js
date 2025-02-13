import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // All requests starting with /api will be proxied
        target: 'http://127.0.0.1:8000', // Your backend URL
        changeOrigin: true, // Required for CORS to work
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: remove /api from the path when forwarding
      },
    },
  },
})
