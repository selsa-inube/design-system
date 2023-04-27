import { BrowserRouter } from "react-router-dom";
import { MdHouse } from "react-icons/md";

import { MenuLink } from "..";
import { MenuLinkController } from "./MenuLink.Controller";
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
  title: "navigation/MenuLink/Default",
  components: [MenuLink],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

const Default = (args) => <MenuLinkController {...args} />;

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
