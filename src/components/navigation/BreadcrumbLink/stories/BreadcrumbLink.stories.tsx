import { BrowserRouter } from "react-router-dom";
import { BreadcrumbLink, IBreadcrumbLinkProps } from "..";
import { BreadcrumbLinkController } from "./BreadcrumbLinkController";

import {
  parameters,
  id,
  isActive,
  handleClick,
  label,
  typo,
  path,
} from "./props";

const story = {
  title: "navigation/BreadcrumbLink",
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
  isActive: false,
  typo: "large",
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
