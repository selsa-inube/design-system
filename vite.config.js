import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "design-system",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs", "umd"],
      exports: "named",
    },
    rollupOptions: {
      external: [
        "react",
        "react-router-dom",
        "styled-components",
        "react-icons",
      ],
      output: {
        globals: {
          react: "React",
          "react-router-dom": "ReactRouterDOM",
          "styled-components": "styled",
          "react-icons": "ReactIcons",
        },
      },
    },
  },
  plugins: [react()],
});
