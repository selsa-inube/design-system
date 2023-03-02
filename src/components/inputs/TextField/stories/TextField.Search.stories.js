import { TextField } from "..";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  isFocused,
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

const Search = (args) => <TextField {...args} type="search" />;
Search.args = {
  label: "searchField",
  name: "searchField",
  id: "searchField",
  placeholder: "Search...",
  isDisabled: false,
  isFocused: false,

  handleChange: () => {},
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
  label,
  name,
  id,
  placeholder,
  isDisabled,
  isFocused,
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
