import { Avatar } from "../index";

import { props } from "./props";

const story = {
  title: "data/Avatar",
  components: [Avatar],
  parameters: props.parameters,
  argTypes: props,
};

export const Default = () => <Avatar />;

export default story;
