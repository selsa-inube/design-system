import { TextField } from "..";
import { TextFieldController } from "./TexfieldController";

import { AiOutlineSearch } from "react-icons/ai";

import {
  parameters,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  value,
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

const Search = (args) => <TextFieldController {...args} type="search" />;
Search.args = {
  name: "searchField",
  id: "searchField",
  placeholder: "Search...",
  isDisabled: false,
  value: "",
  handleChange: () => {},
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
  value,
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
