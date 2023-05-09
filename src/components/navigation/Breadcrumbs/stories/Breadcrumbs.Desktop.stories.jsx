import React from "react";
import { Breadcrumbs } from "../index";
import { BrowserRouter } from "react-router-dom";
import { route } from "./props";

const story = {
  title: "navigation/Breadcrumbs/Desktop",
  components: [Breadcrumbs],
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

export const Desktop = (args) => <Breadcrumbs {...args} />;
Desktop.args = {
  route: "Privileges/Users/Edition/Branches/City",
};
Desktop.argTypes = {
  route,
};

export default story;
