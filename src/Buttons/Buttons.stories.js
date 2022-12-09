import React from "react";
import { Button } from ".";

const story = {
  title: "Buttons",
  components: [Button],
};

const Primary = (args) => <Button {...args} />;
Primary.args = {
  label: "Button",
};

export default story;
export { Primary };
