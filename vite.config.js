import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://rceron-saatva.github.io/gh-actions-react-test/',
  plugins: [react()]
})
