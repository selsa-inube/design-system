import { ElementType } from "react";

import { Avatar } from "../index";

import { icon } from "./props";

const story = {
  title: "data/Avatar/Default",
  components: [Avatar],
  decorators: [
    (Story: ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Avatar />;

Default.argTypes = {
  icon,
};

export default story;
