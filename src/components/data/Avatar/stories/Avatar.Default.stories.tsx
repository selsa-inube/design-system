import { Avatar } from "../index";

import { parameters, props } from "./props";

const story = {
  title: "data/Avatar",
  components: [Avatar],
  parameters,
  argTypes: props,
};

export const Default = () => <Avatar />;

export default story;
