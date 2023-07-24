import { ElementType } from "react";

import { Avatar } from "../index";

import { parameters, icon, appearance } from "./props";

import { MdPersonOutline } from "react-icons/md";
import { IAvatarProps } from "../interfaces/Avatar.interface";

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

export const Default = (args: IAvatarProps) => <Avatar {...args} />;

Default.args = {
  icon: <MdPersonOutline />,
};

Default.argTypes = {
  icon,
  appearance,
};

export default story;
