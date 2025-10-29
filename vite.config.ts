import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      ignored: ["**/server/**"], // server폴더 이하의 파일에는 Vite가 어떠한 변화가 생겨도 리액트 앱을 리렌더링 하는 불필요한 동작을 하지 않게됨
    },
  },
});
