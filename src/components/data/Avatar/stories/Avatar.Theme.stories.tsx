import { ThemeProvider } from "styled-components";
import { Avatar } from "../index";

import { parameters, props } from "./props";
import { presente } from "@src/shared/themes/presente";

const theme = {
  colors: {
    primary: presente.colors.stroke.primary,
    info: presente.colors.stroke.information,
    success: presente.colors.stroke.success,
    warning: presente.colors.stroke.warning,
    dark: presente.colors.stroke.dark,
    gray: presente.colors.stroke.gray,
    light: presente.colors.stroke.light,
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "24px",
  },
};

console.log("theme", theme);

const story = {
  title: "data/Avatar",
  components: [Avatar],
  parameters,
  decorators: [
    (Story: React.ElementType) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: props,
};

export const Theme = () => <Avatar />;

export default story;
