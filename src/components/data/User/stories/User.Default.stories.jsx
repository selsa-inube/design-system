import React from "react";
import { User } from "../index";

import { userName, businessUnit, size } from "./props";

const story = {
  title: "data/User/Default",
  components: [User],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <User {...args} />;
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
