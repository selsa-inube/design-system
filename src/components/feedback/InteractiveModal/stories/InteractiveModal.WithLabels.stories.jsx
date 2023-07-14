import { useState } from "react";

import { Button } from "@src/components/inputs/Button";
import { InteractiveModal } from "..";

import {
  portalId,
  title,
  closeModal,
  infoData,
  labels,
  infoTitle,
  actionsTitle,
} from "./props";

const story = {
  title: "feedback/InteractiveModal/WithLabels",
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

export const WithLabels = Template.bind({});
WithLabels.args = {
  portalId: "portals",
  title: "User Information",
  infoData: data,
  labels: labelsArray,
  infoTitle: "Información",
  actionsTitle: "Acciones",
};

WithLabels.argTypes = {
  portalId,
  title,
  closeModal,
  infoData,
  labels,
  infoTitle,
  actionsTitle,
};

export default story;
