import { sizes } from "../types/User.Size.type";

const parameters = {
  docs: {
    description: {
      component:
        "Component that allows the user to identify himself and locate himself next to the business unit",
    },
  },
};

const userName = {
  description: "shall be the displayed username",
  table: {
    defaultValue: { summary: "MdPersonOutline" },
  },
};
const businessUnit = {
  description: "shall be the displayed business Unit",
  table: {
    defaultValue: { summary: "MdPersonOutline" },
  },
};

const size = {
  options: sizes,
  control: { type: "select" },
  description: "determine if the User-component displays the Avatar-component",
  table: {
    defaultValue: { summary: "large" },
  },
};
export { parameters, userName, businessUnit, size };
