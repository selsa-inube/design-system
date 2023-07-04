import { User } from "../index";
import { IUserProps } from "../interfaces/User.interface";

import { userName, businessUnit, size } from "./props";

const story = {
  title: "data/User/Default",
  components: [User],
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args: IUserProps) => <User {...args} />;
Default.args = {
  userName: "Leonardo Garzón",
  businessUnit: "Sistemas Enlínea S.A",
  size: "large",
};
Default.argTypes = {
  userName,
  businessUnit,
  size,
};

export default story;
