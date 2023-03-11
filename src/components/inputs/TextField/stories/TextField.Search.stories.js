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
  isInvalid,
  errorMessage,
  size,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/textField/Search",
  components: [TextField],
  parameters,
};

const Search = (args) => <TextFieldController {...args} type="search" />;
Search.args = {
  name: "searchField",
  id: "searchField",
  placeholder: "Search...",
  isDisabled: false,
  value: "Algoa a buscar",
  handleChange: () => {},
  iconAfter: <AiOutlineSearch />,
  isRequired: false,
  isInvalid: false,
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
  isInvalid,
  errorMessage,
  size,
  isFullWidth,
};

export default story;

export { Search };
