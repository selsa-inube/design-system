import { BrowserRouter } from "react-router-dom";
import { MdAssignmentLate } from "react-icons/md";

import { MenuLink } from "..";
import { MenuLinkController } from "./MenuLink.Controller";
import {
  id,
  label,
  path,
  isdisabled,
  isSelected,
  icons,
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
  icon: <MdAssignmentLate />,
};

Default.argTypes = {
  id,
  label,
  path,
  isdisabled,
  isSelected,
  icons,
  handleClick,
};

export default story;

export { Default };
