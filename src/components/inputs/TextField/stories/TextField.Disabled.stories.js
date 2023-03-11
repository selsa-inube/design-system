import { TextField } from "..";
import { sizes } from "..";
import { TextFieldController } from "./TexfieldController";
import { StyledFlex } from "./stories.styles";

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
  title: "inputs/textField/Disabled",
  components: [TextField],
  parameters,
};

const TextFieldComponent = (args) => {
  return (
    <StyledFlex>
      {sizes.map((size) => (
        <div key={size}>
          <TextFieldController {...args} size={size} isDisabled={true} />
        </div>
      ))}
    </StyledFlex>
  );
};

const Disabled = TextFieldComponent.bind({});
Disabled.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  value: "",
  placeholder: "Write your full name",
  handleChange: () => {},
  maxLength: 10,
  minLength: 1,
  errorMessage: "",
  isInvalid: false,
};

Disabled.argTypes = {
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
};

export default story;

export { Disabled };
