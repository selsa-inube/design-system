import { ThemeProvider } from "styled-components";
import { action } from "@storybook/addon-actions";
import { props, parameters } from "./props";
import { presente } from "@shared/themes/presente";

import { ISectionMessageProps, SectionMessage } from ".";
import { MdWarning } from "react-icons/md";

const story = {
  title: "feedback/SectionMessage",
  components: [SectionMessage],
  parameters,
  argTypes: {
    ...props,
  },
};

const Default = (args: ISectionMessageProps) => <SectionMessage {...args} />;
const closeSectionMessage = () => {
  action("SectionMessage closed")();
};
Default.args = {
  title: "Title",
  description: "Description",
  icon: <MdWarning />,
  duration: 10000,
  closeSectionMessage: closeSectionMessage,
};

const theme = {
  ...presente,
};

const Themed = (args: ISectionMessageProps) => (
  <ThemeProvider theme={theme}>
    <SectionMessage {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
