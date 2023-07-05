import { BrowserRouter } from "react-router-dom";
import { MdHouse } from "react-icons/md";

import { INavLinkProps } from "../interfaces/NavLink.interface";
import { NavLinkController } from "./NavLink.Controller";
import { NavLink } from "..";

import {
  id,
  label,
  path,
  isDisabled,
  isSelected,
  icon,
  handleClick,
} from "./props";

const story = {
  title: "navigation/NavLink/Default",
  components: [NavLink],
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

const Default = (args: INavLinkProps) => <NavLinkController {...args} />;

Default.args = {
  id: "privileges",
  label: "Privileges",
  path: "/privileges",
  isDisabled: false,
  icon: <MdHouse />,
};

Default.argTypes = {
  id,
  label,
  path,
  isDisabled,
  isSelected,
  icon,
  handleClick,
};

export default story;

export { Default };
