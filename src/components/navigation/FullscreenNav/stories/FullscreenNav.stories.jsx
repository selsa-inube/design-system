import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  MdVpnKey,
  MdMeetingRoom,
  MdContacts,
  MdStarBorder,
  MdBadge,
  MdAccountBalanceWallet,
  MdAccountBalance,
} from "react-icons/md";

import { FullscreenNav } from "..";
import { parameters, portalId, navigation, logoutPath } from "./props";

const story = {
  title: "navigation/FullscreenNav/Default",
  components: [FullscreenNav],
  parameters,
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

const Default = (args) => <FullscreenNav {...args} />;

Default.args = {
  portalId: "portals",
  navigation: {
    title: "MENU",
    sections: {
      administrative: {
        nameSection: "Administrative",
        links: {
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
      },
      request: {
        nameSection: "Request",
        links: {
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
    },
  },
  logoutPath: "/logout",
};

Default.argTypes = {
  portalId,
  navigation,
  logoutPath,
};

export default story;

export { Default };
