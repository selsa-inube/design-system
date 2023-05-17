import React from "react";
import { FullscreenNav } from "..";
import { BrowserRouter } from "react-router-dom";
import {
  MdVpnKey,
  MdMoney,
  MdContacts,
  MdBadge,
  MdStar,
  MdAccountBalanceWallet,
  MdAccountBalance,
} from "react-icons/md";

const story = {
  title: "navigation/FullscreenNav/Default",
  components: [FullscreenNav],
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

const navObject = [
  {
    subTitle: "ADMINISTRATE",
    routes: [
      {
        id: "1",
        label: "Privileges",
        description: "Modify the properties and permissions of your account",
        icon: <MdVpnKey />,
        path: "/privileges",
      },
      {
        id: "2",
        label: "Accounting",
        description: "Record the company's financial income and expenses",
        icon: <MdMoney />,
        path: "/accounting",
      },
      {
        id: "3",
        label: "Contacts",
        description: "Register your contacts and store them in an optimal way",
        icon: <MdContacts />,
        path: "/contacts",
      },
    ],
  },
  {
    subTitle: "REQUEST",
    routes: [
      {
        id: "1",
        label: "Documents",
        description: "documents",
        icon: <MdBadge />,
        path: "/documents",
      },
      {
        id: "2",
        label: "Marketing",
        description: "marketing",
        icon: <MdStar />,
        path: "/marketing",
      },
      {
        id: "3",
        label: "Savings",
        description: "savings",
        icon: <MdAccountBalanceWallet />,
        path: "/savings",
      },
      {
        id: "4",
        label: "Credit",
        description: "credit",
        icon: <MdAccountBalance />,
        path: "/credit",
      },
    ],
  },
];

const Default = (args) => <FullscreenNav {...args} />;

Default.args = {
  portalId: "portals",
  navObject,
  logoutPath: "/logout",
};

export default story;

export { Default };
