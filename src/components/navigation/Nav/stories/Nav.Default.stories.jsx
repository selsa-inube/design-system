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
  title: "navigation/Nav/Default",
  components: [Nav],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", width: "248px", height: "971px" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

const Default = (args) => <Nav {...args} />;

Default.args = {
  title: "MENU",
  navObject: [
    {
      subTitle: "ADMINISTRATE",
      routes: [
        {
          id: "privileges",
          label: "Privilegios",
          icon: <MdVpnKey />,
          path: "/privileges",
        },
        {
          id: "accounting",
          label: "Contabilidad",
          icon: <MdMoney />,
          path: "/accounting",
        },
        {
          id: "contacts",
          label: "Contactos",
          icon: <MdContacts />,
          path: "/contacts",
        },
      ],
    },
    {
      subTitle: "REQUEST",
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
