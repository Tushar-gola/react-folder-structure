import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
const root = resolve(process.cwd(), "src")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "components": resolve(root, "components"),
      "assets": resolve(root, "assets"),
      "layouts": resolve(root, "layouts"),
      "pages": resolve(root, "pages"),
      "services": resolve(root, "services"),
      "svg": resolve(root, "svg"),
      "utils": resolve(root, "utils"),
      "routes": resolve(root, "routes"),
      "helpers": resolve(root, "helpers"),
      "functions": resolve(root, "functions"),
      "features": resolve(root, "features"),
      "constants": resolve(root, "constants"),
    }
  },
  server: {
    open: true
  }
})
