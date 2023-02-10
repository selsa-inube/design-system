import Label from "../index";

import { parameters, htmlFor, state, children } from "./args";

const story = {
  title: "components/inputs/Default",
  components: [Label],
  parameters,
};

const Default = (args) => <Label {...args} />;
Default.args = {
  children: "Label (Help text)",
  htmlFor: "input",
  state: "default",
};
Default.argTypes = {
  htmlFor,
  state,
  children,
};

export default story;

export { Default };
