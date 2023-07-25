import { Breadcrumbs } from "../index";
import { BrowserRouter } from "react-router-dom";
import { parameters, crumbs } from "./props";
import { IBreadcrumbsProps } from "../interfaces/Breadcrumbs.interface";

const story = {
  title: "navigation/Breadcrumbs/Default",
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

export const Default = (args: IBreadcrumbsProps) => <Breadcrumbs {...args} />;
Default.args = {
  crumbs: [
    {
      path: "/home",
      label: "inicio",
      id: "/home",
      isActive: false,
    },
    {
      path: "/home/users",
      label: "usuarios",
      id: "/home/users",
      isActive: false,
    },
    {
      path: "/home/users/invitation",
      label: "invitación",
      id: "/home/users/invitation",
      isActive: false,
    },
  ],
};
Default.argTypes = {
  crumbs,
};

export default story;
