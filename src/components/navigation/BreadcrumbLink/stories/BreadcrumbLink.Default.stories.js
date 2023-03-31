import React from "react";
import { BreadcrumbLink } from "../index";

// import { id, isDisabled, isSelected, handleClick, label } from "./props";

const story = {
  title: "navigation/BreadcrumbLink/Default",
  components: [BreadcrumbLink],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <BreadcrumbLink {...args} />;
Default.args = {
  label: "Privileges",
  destinationPath: "/privileges",
  id: "privileges",
};
Default.argTypes = {
  // id,
  // isDisabled,
  // isSelected,
  // handleClick,
  // label,
};

export default story;
