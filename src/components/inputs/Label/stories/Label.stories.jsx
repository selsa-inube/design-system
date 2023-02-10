import { All, States } from ".";
import Label from "../index";

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

const Default = (args) => <Label {...args} />;
Default.args = {
  children: "Label (Help text)",
  htmlFor: "input",
  state: "default",
};

const states = (args) => <States {...args} />;

const all = (args) => <All {...args} />;
all.decorators = [
  (Story) => (
    <div style={{ margin: "10em" }}>
      <Story />
    </div>
  ),
];

export default story;

export { Default, states, all };
