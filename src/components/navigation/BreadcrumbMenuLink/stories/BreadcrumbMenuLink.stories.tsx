import { BreadcrumbMenuLink } from "../index";
import { BrowserRouter } from "react-router-dom";

import { parameters, id, label, typo, path } from "./props";
import { IBreadcrumbMenuLinkProps } from "../interfaces/BreadcrumbMenuLink.interface";

const story = {
  title: "navigation/BreadcrumbMenuLink",
  components: [BreadcrumbMenuLink],
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

export const Default = (args: IBreadcrumbMenuLinkProps) => (
  <BreadcrumbMenuLink {...args} />
);
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  typo: "large",
};
Default.argTypes = {
  id,
  label,
  typo,
  path,
};

export default story;
