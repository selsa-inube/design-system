import { TextField } from "..";
import { StyledFlex } from "./stories.styles";

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
  max,
  min,
  size,
  isFullWidth,
} from "./props";
import { TextFieldController } from "./TexfieldController";

const story = {
  title: "inputs/textField/Required",
  components: [TextField],
  parameters,
};

const RequiredComponent = (args) => {
  return (
    <StyledFlex>
      <TextFieldController {...args} isRequired={true} />
      <TextFieldController
        {...args}
        state="invalid"
        errorMessage="This field can not be blank"
      />
    </StyledFlex>
  );
};

const Required = (args) => <RequiredComponent {...args} isRequired={true} />;
Required.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  isDisabled: false,
  type: "text",
  handleChange: () => {},
  maxLength: 20,
  minLength: 1,
  max: 10,
  min: 1,
  isInvalid: false,
  size: "wide",
  isFullWidth: false,
};

Required.argTypes = {
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
  size,
  isFullWidth,
};

export default story;

export { Required };
