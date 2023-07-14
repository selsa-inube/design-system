import { useState } from "react";

import {
  MdOutlineAssignmentTurnedIn,
  MdOutlineDelete,
  MdOutlineShortcut,
} from "react-icons/md";

import { Button } from "@src/components/inputs/Button";
import { InteractiveModal } from "../index";

import {
  portalId,
  title,
  closeModal,
  infoData,
  actions,
  labels,
  infoTitle,
  actionsTitle,
} from "./props";

const story = {
  title: "feedback/InteractiveModal/WithActions",
  components: [InteractiveModal],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const data = {
  id: 10,
  userID: "45645",
  username: "David Leonardo Garzón",
  mail: "lgarzon@gmail.com",
  invitationDate: "11/JUN/2022",
  status: "Sent",
};

const Template = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button handleClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <InteractiveModal {...args} closeModal={() => setShowModal(false)} />
      )}
    </>
  );
};

const actionsArray = [
  {
    id: 1,
    actionName: "Complete",
    content: <MdOutlineAssignmentTurnedIn />,
    type: "secondary",
  },
  {
    id: 2,
    actionName: "Resend",
    content: <MdOutlineShortcut />,
    type: "primary",
  },
  {
    id: 3,
    actionName: "Delete",
    content: <MdOutlineDelete />,
    type: "remove",
  },
];

const labelsArray = [
  {
    id: "userID",
    titleName: "User Id",
    priority: 0,
  },
  {
    id: "username",
    titleName: "Username",
    priority: 1,
  },
  {
    id: "mail",
    titleName: "Mail",
    priority: 2,
  },
  {
    id: "invitationDate",
    titleName: "Invitation Date",
    priority: 3,
  },
  {
    id: "status",
    titleName: "Status",
    priority: 4,
  },
];

export const WithActions = Template.bind({});
WithActions.args = {
  portalId: "portals",
  title: "User Information",
  infoData: data,
  actions: actionsArray,
  labels: labelsArray,
  infoTitle: "Información",
  actionsTitle: "Acciones",
};
WithActions.argTypes = {
  portalId,
  title,
  closeModal,
  infoData,
  actions,
  labels,
  infoTitle,
  actionsTitle,
};

export default story;
