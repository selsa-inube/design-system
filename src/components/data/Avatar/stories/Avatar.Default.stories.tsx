import { ElementType } from "react";

import { Avatar } from "../index";

import { parameters, icon, appearance } from "./props";

const story = {
  title: "data/Avatar/Default",
  components: [Avatar],
  parameters,
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
  appearance,
};

export default story;
