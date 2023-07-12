import { Breadcrumbs } from "../index";
import { BrowserRouter } from "react-router-dom";
import { route } from "./props";
import { IBreadcrumbsProps } from "../interfaces/Breadcrumbs.interface";

const story = {
  title: "navigation/Breadcrumbs/Default",
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

export const Default = (args: IBreadcrumbsProps) => <Breadcrumbs {...args} />;
Default.args = {
  route: "Privileges/Users",
};
Default.argTypes = {
  route,
};

export default story;
