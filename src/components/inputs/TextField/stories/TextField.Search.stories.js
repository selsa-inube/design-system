import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";

import { AiOutlineSearch } from "react-icons/ai";

import {
  parameters,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  size,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/TextField/Search",
  components: [TextField],
  parameters,
};

const Search = (args) => (
  <TextFieldController {...args} type="search" state="pending" />
);
Search.args = {
  name: "searchField",
  id: "searchField",
  placeholder: "Search...",
  isDisabled: false,
  iconAfter: <AiOutlineSearch />,
  isRequired: false,
  errorMessage: "",
  maxLength: 10,
  minLength: 1,
  max: 10,
  min: 1,
  size: "wide",
  isFullWidth: false,
};

Search.argTypes = {
  name,
  id,
  placeholder,
  isDisabled,
  type,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  size,
  isFullWidth,
};

export default story;

export { Search };
