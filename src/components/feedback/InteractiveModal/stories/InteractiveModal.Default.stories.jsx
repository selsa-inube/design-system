import { useState } from "react";

import { Button } from "@src/components/inputs/Button";
import { InteractiveModal } from "../index";

import {
  portalId,
  title,
  closeModal,
  infoData,
  infoTitle,
  actionsTitle,
} from "./props";
const story = {
  title: "feedback/InteractiveModal/Default",
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

export const Default = Template.bind({});
Default.args = {
  portalId: "portals",
  title: "User Information",
  infoData: data,
  infoTitle: "Información",
  actionsTitle: "Acciones",
};
Default.argTypes = {
  portalId,
  title,
  closeModal,
  infoData,
  infoTitle,
  actionsTitle,
};

export default story;
