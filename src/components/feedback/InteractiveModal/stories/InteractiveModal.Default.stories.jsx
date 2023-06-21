import { action } from "@storybook/addon-actions";
import { InteractiveModal } from "../index";
import { BrowserRouter } from "react-router-dom";
import { portalId, title, closeModal, infoData } from "./props";
const story = {
  title: "feedback/InteractiveModal/Default",
  components: [InteractiveModal],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
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

export const Default = Template.bind({});
Default.args = {
  portalId: "portals",
  title: "User Information",
  closeModal: closeInteractiveModal,
  infoData: data,
};
Default.argTypes = {
  portalId,
  title,
  closeModal,
  infoData,
};

export default story;
