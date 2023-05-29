import { BrowserRouter } from "react-router-dom";
import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdBadge,
  MdStarBorder,
  MdAccountBalance,
  MdAccountBalanceWallet,
} from "react-icons/md";

import { Nav } from "..";

import { navigation, logoutPath } from "./props";

const story = {
  title: "navigation/Nav/Default",
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

const Default = (args) => <Nav {...args} />;

Default.args = {
  navigation: {
    title: "MENU",
    sections: {
      administrate: {
        nameSections: "Administrate",
        links: {
          privileges: {
            id: "privileges",
            label: "Privileges",
            icon: <MdKey />,
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
            icon: <MdPhone />,
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
        nameSections: "Request",
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
  navigation,
  logoutPath,
};

export default story;

export { Default };
