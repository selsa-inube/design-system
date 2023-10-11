import { BrowserRouter } from "react-router-dom";
import { presente } from "@shared/themes/presente";
import { ThemeProvider } from "styled-components";
import { BreadcrumbMenuLink, IBreadcrumbMenuLinkProps } from "..";
import { props } from "../props";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbMenuLink",
  components: [BreadcrumbMenuLink],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbMenuLinkProps) => (
  <BreadcrumbMenuLink {...args} />
);
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  typo: "large",
};

const theme = structuredClone(presente);

const Themed = (args: IBreadcrumbMenuLinkProps) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
