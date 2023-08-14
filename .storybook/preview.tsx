import React from "react";
import { useFonts } from "../src/hooks/useFonts";
import { presente } from "../src/shared/themes/presente";

/** @type { import('@storybook/react').Preview } */
const preview: import("@storybook/react").Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const theme = {
        ...presente,
      };
      useFonts(theme.typography.fonts);
      return <Story />;
    },
  ],
};

export default preview;
