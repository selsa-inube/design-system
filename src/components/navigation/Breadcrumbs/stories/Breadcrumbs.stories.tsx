import { BrowserRouter } from "react-router-dom";
import { Breadcrumbs, IBreadcrumbsProps } from "..";
import { props } from "../props";

const story = {
  title: "navigation/Breadcrumbs",
  components: [Breadcrumbs],
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
      isActive: true,
    },
  ],
};

export default story;
