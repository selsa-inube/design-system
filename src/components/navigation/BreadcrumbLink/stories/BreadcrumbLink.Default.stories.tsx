import { BreadcrumbLink } from "../index";
import { BreadcrumbLinkController } from "./BreadcrumbLinkController";
import { BrowserRouter } from "react-router-dom";

import { props } from "../props";
import { IBreadcrumbLinkProps } from "../interfaces/BreadcrumbLink.interface";

const story = {
  title: "navigation/BreadcrumbLink",
  components: [BreadcrumbLink],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

export const Default = (args: IBreadcrumbLinkProps) => (
  <BreadcrumbLinkController {...args} />
);
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  isActive: false,
  typo: "large",
};

export default story;
