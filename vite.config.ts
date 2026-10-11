import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build:preview` makes one self-contained HTML file (hash routing).
const preview = process.env.PREVIEW === '1'
export default defineConfig({
  plugins: [react(), tailwindcss(), ...(preview ? [viteSingleFile()] : [])],
  define: { 'import.meta.env.VITE_HASH': JSON.stringify(preview ? '1' : '') },
})
