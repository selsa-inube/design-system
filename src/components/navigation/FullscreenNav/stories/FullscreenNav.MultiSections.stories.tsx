import { BrowserRouter } from "react-router-dom";
import {
  MdVpnKey,
  MdMeetingRoom,
  MdContacts,
  MdStarBorder,
  MdBadge,
  MdAccountBalanceWallet,
  MdAccountBalance,
  MdAccountCircle,
  MdAutorenew,
  MdPriceChange,
  MdSecurityUpdateGood,
} from "react-icons/md";

import { FullscreenNav, IFullscreenNavProps } from "..";

import { props } from "../props";

const story = {
  title: "navigation/FullscreenNav",
  components: FullscreenNav,
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Multisections = (args: IFullscreenNavProps) => (
  <FullscreenNav {...args} />
);

Multisections.args = {
  portalId: "portals",
  navigation: {
    title: "MENU",
    sections: {
      administrative: {
        name: "Administrative",
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
      Settings: {
        name: "Settings",
        links: {
          Profile: {
            id: "Profile",
            label: "Profile",
            icon: <MdAccountCircle />,
            path: "/Profile",
          },
          Updates: {
            id: "Updates",
            label: "Updates",
            icon: <MdAutorenew />,
            path: "/Updates",
          },
          Credit: {
            id: "Credit",
            label: "Credit",
            icon: <MdPriceChange />,
            path: "/Credit",
          },
          Security: {
            id: "Security",
            label: "Security",
            icon: <MdSecurityUpdateGood />,
            path: "/Security",
          },
        },
      },
    },
  },
  logoutPath: "/logout",
  logoutTitle: "logout",
};

export default story;

export { Multisections };
