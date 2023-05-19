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
  navigation: {
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
