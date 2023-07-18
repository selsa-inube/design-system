import { BreadcrumbLink } from "../index";
import { BreadcrumbLinkController } from "./BreadcrumbLinkController";
import { BrowserRouter } from "react-router-dom";

import {
  parameters,
  id,
  isActive,
  handleClick,
  label,
  typo,
  path,
} from "./props";
import { IBreadcrumbLinkProps } from "../interfaces/BreadcrumbLink.interface";

const story = {
  title: "navigation/BreadcrumbLink/Default",
  components: [BreadcrumbLink],
  parameters,
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
};
Default.argTypes = {
  id,
  isActive,
  handleClick,
  label,
  typo,
  path,
};

export default story;
