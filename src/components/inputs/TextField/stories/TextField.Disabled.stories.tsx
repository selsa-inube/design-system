import { ITextFieldProps } from "../interfaces/TextField.interface";
import { sizes } from "../types/TextField.Size.type";

import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";

import { Stack } from "../../../layouts/Stack";

import {
  parameters,
  label,
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
} from "./props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  parameters,
  argTypes: {
    label,
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
  },
};

const TextFieldComponent = (args: ITextFieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <div key={size}>
          <TextFieldController {...args} size={size} isDisabled={true} />
        </div>
      ))}
    </Stack>
  );
};

const Disabled = {
  args: {
    label: "Username",
    name: "Username",
    id: "Username",
    value: "",
    placeholder: "Write your full name",
    maxLength: 10,
    minLength: 1,
  },
  render: (args: ITextFieldProps) => <TextFieldComponent {...args} />,
};

export default story;

export { Disabled };
