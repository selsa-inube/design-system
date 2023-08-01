import { User } from "../index";
import { IUserProps } from "../interfaces/User.interface";

import { parameters, userName, businessUnit, size } from "./props";

const story = {
  title: "data/User",
  components: [User],
  parameters,
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
