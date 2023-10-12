import { BrowserRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import { presente } from "@shared/themes/presente";
import { props } from "../props";
import { BreadcrumbLink, IBreadcrumbLinkProps } from "..";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbLink",
  components: [BreadcrumbLink],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbLinkProps) => <BreadcrumbLink {...args} />;
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  size: "large",
  handleClick: action("onClick"),
};

const theme = structuredClone(presente);

const Themed = (args: IBreadcrumbLinkProps) => (
  <ThemeProvider theme={theme}>
    <BreadcrumbLink {...args} />
  </ThemeProvider>
);
Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
