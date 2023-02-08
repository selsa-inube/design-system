import Label from "../Label";

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
  argTypes: {
    state: {
      options: ["default", "disabled", "focus", "invalid"],
      control: {
        type: "radio",
      },
      description: "indicates the possible states in whichj the label could be",
    },
  },
};

const label = (args) => <Label {...args}>Label (Help text)</Label>;
label.args = {
  ...label.args,
  state: "",
};

export default story;

export { label };
