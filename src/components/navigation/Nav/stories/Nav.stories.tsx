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

import { Nav, INavProps } from "..";

import { props, parameters } from "../props";

const story = {
  title: "navigation/Nav",
  components: [Nav],
  parameters,
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: INavProps) => <Nav {...args} />;

Default.args = {
  navigation: {
    title: "MENU",
    sections: {
      administrate: {
        name: "Administrate",
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
        name: "Request",
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
  logoutTitle: "logout",
};

export default story;

export { Default };
