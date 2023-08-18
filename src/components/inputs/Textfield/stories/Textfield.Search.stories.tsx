import { MdSearch } from "react-icons/md";

import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

import { props } from "../props";

const story = {
  title: "inputs/Textfield",
  components: [Textfield],
  argTypes: props,
};

const Search = (args: ITextfieldProps) => (
  <TextfieldController {...args} type="search" state="pending" />
);
Search.args = {
  name: "searchField",
  id: "searchField",
  placeholder: "Search...",
  disabled: false,
  iconAfter: <MdSearch />,
  required: false,
  message: "",
  maxLength: 10,
  minLength: 1,
  max: 10,
  min: 1,
  size: "wide",
  type: "text",
  fullwidth: false,
};

export default story;

export { Search };
