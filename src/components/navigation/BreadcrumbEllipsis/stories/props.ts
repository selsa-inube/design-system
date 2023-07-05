import { typos } from "../types/BreadcrumbEllipsis.Typos.type";

const handleClick = {
  options: ["logState"],
  control: { type: "func" },
  description: "shall be determine the behavior of the click event",
};
const typo = {
  options: typos,
  control: { type: "select" },
  description: "indicates the font size used in the component",
  table: {
    defaultValue: { summary: "labelLarge" },
  },
};
const routes = {
  description:
    "The breadcrumb-component will utilize this routes for display, and consequently, it can be employed to locate the source of breadcrumbLinks present within this component.",
  table: {
    defaultValue: {
      summary: `This structure must be present [{
         label: "",
        path: "",
        id: ""}]`,
    },
  },
};
export { handleClick, typo, routes };
