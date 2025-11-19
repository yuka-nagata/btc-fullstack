import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/countries": {
        target: "http://localhost:3000",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.js"],
    exclude: ["e2e/**", "**/*.e2e.test.*", "node_modules/**", "dist/**"],
  },
});
