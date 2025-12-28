import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/students": "http://localhost:5000",
      "/get_student": "http://localhost:5000",
      "/add_user": "http://localhost:5000",
      "/edit_user": "http://localhost:5000",
      "/delete": "http://localhost:5000",
    },
  },
})
