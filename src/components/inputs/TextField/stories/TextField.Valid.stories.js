import { TextField } from "..";
import { TextFieldController } from "./TexfieldController";
import { sizes } from "../interface";
import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  state,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
} from "./props";
import { StyledFlex } from "./stories.styles";

const story = {
  title: "inputs/TextField/Valid",
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

const Valid = TextFieldComponent.bind({});
Valid.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  value: "L-GARZON",
  isDisabled: false,
  handleChange: () => {},
  state: "valid",
  validMessage: "Field validation is successful",
};

Valid.argTypes = {
  label,
  name,
  id,
  placeholder,
  isDisabled,
  state,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
};

export default story;

export { Valid };
