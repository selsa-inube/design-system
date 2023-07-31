import { User, IUserProps } from "..";

import { parameters, userName, client, size } from "./props";

const story = {
  title: "data/User",
  components: [User],
  parameters,
};

export const Default = (args: IUserProps) => <User {...args} />;
Default.args = {
  userName: "Leonardo Garzón",
  client: "Sistemas Enlínea S.A",
  size: "large",
};
Default.argTypes = {
  userName,
  client,
  size,
};

export default story;
