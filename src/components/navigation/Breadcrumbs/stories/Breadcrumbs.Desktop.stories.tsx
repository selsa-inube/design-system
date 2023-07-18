import { Breadcrumbs } from "../index";
import { BrowserRouter } from "react-router-dom";
import { parameters, route } from "./props";
import { IBreadcrumbsProps } from "../interfaces/Breadcrumbs.interface";

const story = {
  title: "navigation/Breadcrumbs/Desktop",
  components: [Breadcrumbs],
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

export const Desktop = (args: IBreadcrumbsProps) => <Breadcrumbs {...args} />;
Desktop.args = {
  route: "Privileges/Users/Edition/Branches/City",
};
Desktop.argTypes = {
  route,
};

export default story;
