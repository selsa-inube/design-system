import React from "react";
import { Breadcrumbs } from "../index";

import { route } from "./props";

const story = {
  title: "navigation/Breadcrumbs/Default",
  components: [Breadcrumbs],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <Breadcrumbs {...args} />;
Default.args = {
  route: "Privileges/Users",
};
Default.argTypes = {
  route,
};

export default story;
