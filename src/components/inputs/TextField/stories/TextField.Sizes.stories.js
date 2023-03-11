import { TextField } from "..";
import { TextFieldController } from "./TexfieldController";
import { sizes } from "..";
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
  max,
  min,
  isRequired,
  isInvalid,
  errorMessage,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/textField/Size",
  components: [TextField],
  parameters,
};

const TextFieldComponent = (args) => {
  return (
    <StyledFlex>
      {sizes.map((size) => (
        <div key={size}>
          <TextFieldController {...args} size={size} />
        </div>
      ))}
    </StyledFlex>
  );
};

const Size = TextFieldComponent.bind({});
Size.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  isDisabled: false,
  placeholder: "Write your full name",
  value: "",
  handleChange: () => {},
  maxLength: 10,
  minLength: 1,
  errorMessage: "",
  isInvalid: false,
  isFullWidth: false,
};

Size.argTypes = {
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
  max,
  min,
  isRequired,
  isInvalid,
  errorMessage,
  isFullWidth,
};

export default story;

export { Size };
