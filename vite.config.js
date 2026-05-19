import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 部署到 GitHub Pages 時，base 必須是 "/<repo-name>/"
// 若你的 repo 名稱不是 web，請改成你自己的 repo 名稱
export default defineConfig({
  plugins: [react()],
  base: '/web/',
})
