import Label from "../index";

import { StyledContentAll, StyledContentStates } from "./styles";

const story = {
  title: "components/inputs/Label",
  components: Label,
  parameters: {
    docs: {
      description: {
        component:
          "Represent a label for an elemenent in a user interface. This can be associated with a control either by using the for attribute, or by placing the control inside the label element",
      },
    },
  },
};

const stetes = ["default", "disabled", "focus", "invalid"];

const Default = (args) => <Label {...args} />;
Default.args = {
  children: "Label (Help text)",
  htmlFor: "input",
  state: "default",
};

const States = () => {
  return (
    <StyledContentStates>
      {stetes.map((state, index) => (
        <Label state={state} key={index} htmlFor="input">
          Label (Help text)
        </Label>
      ))}
    </StyledContentStates>
  );
};

const All = () => {
  return (
    <StyledContentAll>
      {stetes.map((state, index) => (
        <Label state={state} key={index} htmlFor="input">
          Label (Help text)
        </Label>
      ))}
    </StyledContentAll>
  );
};
All.decorators = [
  (Story) => (
    <div style={{ margin: "10em" }}>
      <Story />
    </div>
  ),
];

export default story;

export { Default, States, All };
