import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitesconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "@data": resolve(__dirname, "src/data"),
      "@feedback": resolve(__dirname, "src/feedback"),
      "@inputs": resolve(__dirname, "src/inputs"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@navigation": resolve(__dirname, "src/navigation"),
      "@utils": resolve(__dirname, "src/utils"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@shared": resolve(__dirname, "src/shared"),
      "@utilities": resolve(__dirname, "src/utilities"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "design-system",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-router-dom",
        "styled-components",
        "react-icons",
        "prop-types",
      ],
      output: {
        globals: {
          react: "React",
          "react-router-dom": "ReactRouterDOM",
          "styled-components": "styled",
          "react-icons": "ReactIcons",
          "prop-types": "PropTypes",
        },
      },
    },
  },
  plugins: [react(), vitesconfigPaths()],
});
