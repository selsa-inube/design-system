import React from "react";

import { colors } from "../../colors";

import { ColorReference } from "../reference";

/* Setting up the storybook. */
const story = {
  title: "Shared/Colors/Reference",
  components: [ColorReference],
};

/**
 * `const Reference = (args) => <ColorReference {...args} />;`
 *
 * The `Reference` function is a React component that takes in an `args` object and returns a
 * `<ColorReference>` component with the `args` object spread as props
 * @param args - The arguments that are passed to the component.
 */
const Reference = (args) => <ColorReference {...args} />;
Reference.args = {
  colors,
};

export default story;
export { Reference };
