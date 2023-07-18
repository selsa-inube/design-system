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

import { parameters, navigation, logoutPath } from "./props";
import { INavProps } from "../interfaces/Nav.interface";

const story = {
  title: "navigation/Nav/WithoutSections",
  components: [Nav],
  parameters,
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ height: "971px" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

const WithoutSections = (args: INavProps) => <Nav {...args} />;

WithoutSections.args = {
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

WithoutSections.argTypes = {
  navigation,
  logoutPath,
};

export default story;

export { WithoutSections };
