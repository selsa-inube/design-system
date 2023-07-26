import { Breadcrumbs } from "../index";
import { BrowserRouter } from "react-router-dom";
import { parameters, crumbs } from "./props";
import { IBreadcrumbsProps } from "../interfaces/Breadcrumbs.interface";

const story = {
  title: "navigation/Breadcrumbs/Mobile",
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

export const Mobile = (args: IBreadcrumbsProps) => <Breadcrumbs {...args} />;
Mobile.args = {
  crumbs: [
    {
      path: "/home",
      label: "Inicio",
      id: "/home",
      isActive: false,
    },
    {
      path: "/home/users",
      label: "Usuarios",
      id: "/home/users",
      isActive: false,
    },
    {
      path: "/home/users/invitation",
      label: "Invitación",
      id: "/home/users/invitation",
      isActive: false,
    },
    {
      path: "/home/users/invitation/edition",
      label: "Edición",
      id: "/home/users/invitation/edition",
      isActive: true,
    },
  ],
};
Mobile.argTypes = {
  crumbs,
};

export default story;
