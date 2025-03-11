import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy: {
  //   "/api": {
  //     target: "http://localhost:8080",
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, "/"),
  //   },
  // },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [...configDefaults.coverage.exclude, "src/test/**"],
    },
  },
});
