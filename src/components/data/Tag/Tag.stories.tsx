import { ThemeProvider } from "styled-components";

import { props, parameters } from "./props";
import { presente } from "@shared/themes/presente";
import { ITagProps, Tag } from ".";

const story = {
  title: "data/Tag",
  component: Tag,
  parameters,
  argTypes: props,
};

export const Default = (args: ITagProps) => <Tag {...args} />;

Default.args = {
  appearance: "primary",
  label: "Tag",
};

const theme = {
  ...presente,
};

export const Themed = (args: ITagProps) => (
  <ThemeProvider theme={theme}>
    <Tag {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
