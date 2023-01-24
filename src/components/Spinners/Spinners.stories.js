import React from "react";
import { Spinner } from ".";

const story = {
  title: "Spinners",
  components: [Spinner],
};

const Primary = (args) => <Spinner {...args} />;
Primary.args = {
  color: "#0052CC",
  thickness: "4",
  size: "20",
};

export default story;
export { Primary };
