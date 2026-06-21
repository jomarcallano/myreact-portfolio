import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
  ],
  server: {
      proxy: {
          "/api": "http://localhost:3001",
      },
  },
  resolve: {
    alias: {
      'next/navigation': path.resolve(__dirname, 'src/stubs/next-navigation.js'),
      'next/navigation.js': path.resolve(__dirname, 'src/stubs/next-navigation.js'),
    },
  },
})
