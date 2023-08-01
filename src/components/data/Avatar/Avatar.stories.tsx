import { ThemeProvider } from "styled-components";

import { presente } from "@src/shared/themes/presente";
import { Avatar, IAvatarProps } from ".";

import { props } from "./props";

const story = {
  title: "data/Avatar",
  components: [Avatar],
  parameters: props.parameters,
  argTypes: props,
};

export const Default = () => <Avatar />;

const theme = {
  ...presente,
};

export const Themed = (args: IAvatarProps) => (
  <ThemeProvider theme={theme}>
    <Avatar {...args} />
  </ThemeProvider>
);

export default story;
