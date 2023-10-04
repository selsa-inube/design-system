import { BrowserRouter } from "react-router-dom";
import { MdHouse } from "react-icons/md";

import { NavLink, INavLinkProps } from "..";
import { NavLinkController } from "./NavLink.Controller";

import { props, parameters } from "../props";

const story = {
  title: "navigation/NavLink",
  components: [NavLink],
  parameters,
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: INavLinkProps) => <NavLinkController {...args} />;

Default.args = {
  id: "privileges",
  label: "Privileges",
  path: "/privileges",
  disabled: false,
  icon: <MdHouse />,
};

export default story;

export { Default };
