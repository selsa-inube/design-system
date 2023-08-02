import { BrowserRouter } from "react-router-dom";

import { BreadcrumbMenuLink, IBreadcrumbMenuLinkProps } from "..";
import { props } from "../props";

const story = {
  title: "navigation/BreadcrumbMenuLink",
  components: [BreadcrumbMenuLink],
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

export const Default = (args: IBreadcrumbMenuLinkProps) => (
  <BreadcrumbMenuLink {...args} />
);
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  typo: "large",
};

export default story;
