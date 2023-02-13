import React from "react";

import Label from "..";

import { StyledContentAll } from "./stories.styles";

import { parameters, htmlFor, children, state } from "./stories.args";

const story = {
  title: "components/inputs/All",
  components: [Label],
  parameters,
};

const All = ({ htmlFor, children }) => {
  return (
    <StyledContentAll>
      {state.options.map((state, index) => (
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
