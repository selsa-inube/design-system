import React from "react";

import Label from "..";

import { StyledContentAll } from "./styles";

import { parameters, htmlFor, children } from "./args";

const story = {
  title: "components/inputs/All",
  components: [Label],
  parameters,
};

const stetes = ["default", "disabled", "focus", "invalid"];

const All = ({ htmlFor, children }) => {
  return (
    <StyledContentAll>
      {stetes.map((state, index) => (
        <Label state={state} key={index} htmlFor={htmlFor}>
          {children}
        </Label>
      ))}
    </StyledContentAll>
  );
};

All.args = {
  children: "Label (Help text)",
  htmlFor: "IdComponent",
};
All.decorators = [
  (Story) => (
    <div style={{ margin: "10em" }}>
      <Story />
    </div>
  ),
];

All.argTypes = {
  htmlFor,
  children,
};

export default story;

export { All };
