import { User } from "../index";
import { IUserProps } from "../interfaces/User.interface";
import { props } from "../props";

const story = {
  title: "data/User",
  components: [User],
  argTypes: props,
};

export const Default = (args: IUserProps) => <User {...args} />;
Default.args = {
  userName: "Leonardo Garzón",
  client: "Sistemas Enlínea S.A",
  size: "large",
};

export default story;
