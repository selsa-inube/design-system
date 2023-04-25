import { BrowserRouter } from "react-router-dom";
import { MenuLink } from "../MenuLink";
import { MenuLinkController } from "./MenuLink.Controller";

import { MdAssignmentLate } from "react-icons/md";

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
  label: "Privileges",
  isDisabled: false,

  icon: <MdAssignmentLate />,
};

export default story;

export { Default };
