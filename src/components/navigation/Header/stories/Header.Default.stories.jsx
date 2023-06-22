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

import { Header } from "..";

import {
  portalId,
  navigation,
  logo,
  logoutPath,
  userName,
  businessUnit,
  isBusinessUnit,
} from "./props";
import { Logo } from "./logo";

const story = {
  title: "navigation/Header/Default",
  components: [Header],
  decorators: [
    (Story) => (
      <div>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

const Default = (args) => <Header {...args} />;

Default.args = {
  portalId: "portals",
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
  logo: <Logo />,
  userName: "Leonardo Garzón",
  businessUnit: "Sistemas Enlínea S.A",
  isBusinessUnit: true,
};

Default.argTypes = {
  portalId,
  navigation,
  logo,
  logoutPath,
  userName,
  businessUnit,
  isBusinessUnit,
};

export default story;

export { Default };
