import React from "react";
import { Spinner } from ".";
import { colors } from "../../shared/colors/colors";

const story = {
  title: "Spinners",
  components: [Spinner],
};

const Primary = (args) => <Spinner {...args} />;
Primary.args = {
  colorToken: "primary",
  thickness: "4",
  size: "20",
};

export default story;
export { Primary };
