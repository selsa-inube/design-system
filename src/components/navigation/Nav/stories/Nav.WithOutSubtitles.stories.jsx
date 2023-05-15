import { BrowserRouter } from "react-router-dom";
import {
  MdVpnKey,
  MdMoney,
  MdContacts,
  MdBadge,
  MdStar,
  MdAccountBalance,
  MdAccountBalanceWallet,
} from "react-icons/md";

import { Nav } from "..";

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
  title: "navigation/Nav/WithOutSubtitles",
  components: [Nav],
  decorators: [
    (Story) => (
      <div style={{ width: "248px", height: "971px" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

const WithOutSubtitles = (args) => <Nav {...args} />;

WithOutSubtitles.args = {
  title: "MENU",
  navObject: [
    {
      routes: [
        {
          id: "privileges",
          label: "Privileges",
          icon: <MdVpnKey />,
          path: "/privileges",
        },
        {
          id: "accounting",
          label: "Accounting",
          icon: <MdMoney />,
          path: "/accounting",
        },
        {
          id: "contacts",
          label: "Contacts",
          icon: <MdContacts />,
          path: "/contacts",
        },
      ],
    },
    {
      routes: [
        {
          id: "documents",
          label: "Documents",
          icon: <MdBadge />,
          path: "/documents",
        },
        {
          id: "marketing",
          label: "Marketing",
          icon: <MdStar />,
          path: "/marketing",
        },
        {
          id: "savings",
          label: "Savings",
          icon: <MdAccountBalanceWallet />,
          path: "/savings",
        },
        {
          id: "credit",
          label: "Credit",
          icon: <MdAccountBalance />,
          path: "/credit",
        },
      ],
    },
  ],
  logoutPath: "/logout",
};

WithOutSubtitles.argTypes = {
  id,
  label,
  path,
  isDisabled,
  isSelected,
  icon,
  handleClick,
};

export default story;

export { WithOutSubtitles };
