import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // app layer
      "@app": path.resolve(__dirname, "src/app"),
      // pages layer
      "@pages": path.resolve(__dirname, "src/pages"),
      // widgets layer
      "@widgets": path.resolve(__dirname, "src/widgets"),
      // features layer
      "@features": path.resolve(__dirname, "src/features"),
      // entities layer
      "@entities": path.resolve(__dirname, "src/entities"),
      // shared layer
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
});
