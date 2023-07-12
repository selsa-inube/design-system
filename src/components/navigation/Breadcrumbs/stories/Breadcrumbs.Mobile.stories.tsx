import { Breadcrumbs } from "../index";
import { BrowserRouter } from "react-router-dom";
import { route } from "./props";
import { IBreadcrumbsProps } from "../interfaces/Breadcrumbs.interface";

const story = {
  title: "navigation/Breadcrumbs/Mobile",
  components: [Breadcrumbs],
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

export const Mobile = (args: IBreadcrumbsProps) => <Breadcrumbs {...args} />;
Mobile.args = {
  route: "Privileges/Users/Registration",
};
Mobile.argTypes = {
  route,
};

export default story;
