import React from "react";
import Label from "../index";
import { StyledContentStates, StyledContentAll } from "./styles";

const stetes = ["default", "disabled", "focus", "invalid"];
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

export { States, All };
