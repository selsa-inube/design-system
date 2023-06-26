import { action } from "@storybook/addon-actions";
import { InteractiveModal } from "../index";
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

const Template = (args) => <InteractiveModal {...args} />;

const closeInteractiveModal = () => {
  action("InteractiveModal closed");
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
  closeModal: closeInteractiveModal,
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
