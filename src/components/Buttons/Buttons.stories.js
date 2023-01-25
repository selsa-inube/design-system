import React from "react";
import { Button } from ".";

import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const story = {
  title: "Buttons",
  components: [Button],
};

const Primary = (args) => <Button {...args} />;
Primary.args = {
  label: "Button",
  href: "http://storybook.js.org",
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  expect(canvas.getByRole("button")).toHaveAttribute(
    "href",
    "http://storybook.js.org"
  );
};

export default story;
export { Primary };
