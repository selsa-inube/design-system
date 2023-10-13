import { BrowserRouter } from "react-router-dom";
import { presente } from "@shared/themes/presente";
import { ThemeProvider } from "styled-components";
import { props } from "../props";
import { IRoute } from "../../props";
import { BreadcrumbMenuLink } from "..";

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

const Default = (args: IRoute) => <BreadcrumbMenuLink {...args} />;
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  size: "large",
};

const theme = structuredClone(presente);

const Themed = (args: IRoute) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
