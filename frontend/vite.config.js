// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // only if you’re using React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), // if using React or similar framework
    tailwindcss(),
  ],
})
