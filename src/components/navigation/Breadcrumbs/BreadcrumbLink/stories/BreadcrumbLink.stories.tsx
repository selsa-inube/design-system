import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { BreadcrumbLink, IBreadcrumbLinkProps } from "..";
import { props } from "../props";

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

export const Default = (args: IBreadcrumbLinkProps) => (
  <BreadcrumbLink handleClick={action("onCLick")} {...args} />
);
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  typo: "large",
};

export default story;
