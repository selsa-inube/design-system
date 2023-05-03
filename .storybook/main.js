import { mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "storybook-addon-designs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["storybook-addon-designs"],
      },
    });
  },
};
