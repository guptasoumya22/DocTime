import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'swiper/css': 'swiper/swiper-bundle.min.css',
      'swiper/css/pagination': 'swiper/modules/pagination/pagination.min.css',
    },
  },
  
});
