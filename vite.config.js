import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GITHUB_PAGES=true sets the sub-path base for GitHub Pages hosting.
// Local dev (npm run dev) uses '/' automatically.
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/oa-preview-24-heating-cooling/' : '/',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
})
