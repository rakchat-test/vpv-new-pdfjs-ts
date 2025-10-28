import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["pdfjs-dist"],
    esbuildOptions: {
      supported: {
        "top-level-await": true,
      },
      target: "esnext",
    },
  },
});
