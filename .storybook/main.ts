import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    disableTelemetry: true,
  },
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
};

export default config;
