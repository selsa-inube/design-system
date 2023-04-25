const isdisabled = {
  description:
    "shall be determine if the tab is disabled (by Default is false) and is not required.",
  table: {
    defaultValue: { summary: false },
  },
};

const isSelected = {
  description:
    "It is designed to ascertain whether the tab has been clicked or not (by Default is false) and is not required.",
  table: {
    defaultValue: { summary: false },
  },
};

const path = {
  description:
    "is the path where the MenuLink is going to navigate and is required.",
};

const id = {
  description: "shall be the id for the MenuLink and is required.",
};

const handleClick = {
  description:
    "(function): shall be determine the behavior of the click event and is not required.",
};

const icons = {
  description:
    "shall constitute the icon to be displayed within the MenuLink-component and is required",
};

const label = {
  description:
    "shall constitute the content to be displayed within the MenuLink-component and is required",
};

export { isdisabled, isSelected, path, id, handleClick, icons, label };
