import Label from "../index";
import { StyledContentStates } from "./styles";

import { parameters, htmlFor, children } from "./args";

const story = {
  title: "components/inputs/States",
  components: [Label],
  parameters,
};

const stetes = ["default", "disabled", "focus", "invalid"];

const States = ({ children, htmlFor }) => {
  return (
    <StyledContentStates>
      {stetes.map((state, index) => (
        <Label state={state} key={index} htmlFor={htmlFor}>
          {children}
        </Label>
      ))}
    </StyledContentStates>
  );
};

States.args = {
  children: "Label (Help text)",
  htmlFor: "idComponent",
};

States.argTypes = {
  htmlFor,
  children,
};

export default story;

export { States };
