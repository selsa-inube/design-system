import React from "react";
import { BrowserRouter } from "react-router-dom";

import { FullscreenNav } from "..";
import { parameters, portalId } from "./props";

import {
  MdVpnKey,
  MdMeetingRoom,
  MdContacts,
  MdStarBorder,
  MdBadge,
  MdAccountBalanceWallet,
  MdAccountBalance,
  MdLogout,
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

const navigation = {
  title: "MENU",
  navigation: {
    administrate: {
      privileges: {
        id: "privileges",
        label: "Privileges",
        icon: <MdVpnKey />,
        path: "/privileges",
      },
      accounting: {
        id: "accounting",
        label: "Accounting",
        icon: <MdMeetingRoom />,
        path: "/accounting",
      },
      contacts: {
        id: "contacts",
        label: "Contacts",
        icon: <MdContacts />,
        path: "/contacts",
      },
      crm: {
        id: "crm",
        label: "CRM",
        icon: <MdStarBorder />,
        path: "/crm",
      },
    },
    request: {
      documents: {
        id: "documents",
        label: "Documents",
        icon: <MdBadge />,
        path: "/documents",
      },
      marketing: {
        id: "marketing",
        label: "Marketing",
        icon: <MdStarBorder />,
        path: "/marketing",
      },
      savings: {
        id: "savings",
        label: "Savings",
        icon: <MdAccountBalanceWallet />,
        path: "/savings",
      },
      credit: {
        id: "credit",
        label: "Credit",
        icon: <MdAccountBalance />,
        path: "/credit",
      },
    },
  },
  logoutPath: {
    id: "logout",
    label: "Logout",
    icon: <MdLogout />,
    path: "/logout",
  },
};

const Default = (args) => <FullscreenNav {...args} />;

Default.args = {
  portalId: "portals",
  navigation,
  logoutPath: "/logout",
};

Default.argTypes = {
  portalId,
  navigation,
};

export default story;

export { Default };
