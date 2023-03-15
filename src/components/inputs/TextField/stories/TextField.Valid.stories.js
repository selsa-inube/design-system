import { TextField } from "..";
import { TextFieldController } from "./TexfieldController";
import { sizes } from "..";
import { parameters } from "./props";
import { StyledFlex } from "./stories.styles";

const story = {
  title: "inputs/textField/Valid",
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
  handleChange: () => {},
  state: "valid",
  validMessage: "Field validation is successful",
};

export default story;

export { Valid };
