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
  state,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
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
  state: "pending",
  handleChange: () => {},
  maxLength: 10,
  minLength: 1,
  errorMessage: "",
  validMessage: "",
  isFullWidth: false,
};

Size.argTypes = {
  label,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  state,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
  isFullWidth,
};

export default story;

export { Size };
