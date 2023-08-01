import { BrowserRouter } from "react-router-dom";

import { BreadcrumbMenuLink, IBreadcrumbMenuLinkProps } from "..";
import { parameters, id, label, typo, path } from "./props";

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
