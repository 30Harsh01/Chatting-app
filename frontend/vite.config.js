import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  // Load .env file for current mode
  const env = loadEnv(mode, process.cwd(), '')

  console.log("ENV",env.VITE_API_BASE_URL)

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL, // <-- use env.VITE_API_BASE_URL here
          changeOrigin: true,
          secure: false,
        },
      },
    },
  })
}
