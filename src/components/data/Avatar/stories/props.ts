import { appearances } from "../../../inputs/Icon/types/Icon.Appearance.type";

const parameters = {
  docs: {
    description: {
      component: "An avatar is a visual representation of a user or entity.",
    },
  },
};

const icon = {
  description: "icon that will be displayed inside of avatar-component",
  table: {
    defaultValue: { summary: "MdPersonOutline" },
  },
};

const appearance = {
  options: appearances,
  control: { type: "select" },
  description: "the base styling to apply to the icon",
  table: {
    defaultValue: { summary: "black" },
  },
};

export { parameters, icon, appearance };
