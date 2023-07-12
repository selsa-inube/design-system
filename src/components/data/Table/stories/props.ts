const parameters = {
  doc: {
    description: {
      component:
        "A versatile side navigation component, which allows you to nest links, from a full screen perspective",
    },
  },
};

const id = {
  description: "uniquely identifies the **Table Component**.",
};

const titles = {
  description:
    "(Array[objects]): shall be designed to accept an array of objects with a predetermined structure and it’ll be the titles for the table, as specified below: Each object shall contain the following attributes (keys):",
  id: {
    description:
      "(string), shall serve as a unique identifier for each title, thereby enabling individual distinction and identification",
  },
  titleName: {
    description:
      "(string), shall serve as a text that will be displayed in the top of the table",
  },
  priority: {
    description: "(number)shall serve as an identifier of priority and order",
  },
};

const actions = {
  description:
    "(Array[objects]): shall be designed to accept an array of objects with a predetermined structure and it’ll be the actions for the table, as specified below: Each object shall contain the following attributes",
  id: {
    description:
      "(string), shall serve as a unique identifier for each action, thereby enabling individual distinction and identification",
  },
  actionName: {
    description: "shall serve as a text that will be displayed in the action",
  },
  content: {
    description:
      "(string), shall be the nest component that will be used as icon for the action",
  },
  type: {
    description:
      "(string),shall determine the type of token that it will be used",
  },
};

const entries = {
  description:
    "(Array[objects]): shall be designed to accept an array of objects with a predetermined structure and it'll be the entries for the table, as specified below: Each object shall contain the following attributes",
  titlesid: {
    description: "shall serve as identifier of the content of the table",
  },
};

const breakpoints = {
  description:
    "(Array[objects]): shall be designed to accept an array of objects with a predetermined structure and it'll be the breakPoints used for the table's responsive, as specified below: Each object shall contain the following attributes",

  breakpoint: {
    description:
      "The width specified shall determine the extent to which the hook modifies the columns that are to be displayed on the table.",
  },

  totalColumns: {
    description:
      "The total number of columns to be displayed on the table shall be specified.",
  },
};

const filter = {
  description: "(string), shall be the filter that can be applied to the table",
};

const pageLength = {
  description:
    "(number), shall be the number of the entries that will be displayed on the table",
};

const infoTitle = {
  control: { type: "text" },
  description: "custom title for information that displays in modal",
};

const actionsTitle = {
  control: { type: "text" },
  description: "custom title for actions that displays in modal",
};

export {
  parameters,
  id,
  titles,
  actions,
  entries,
  breakpoints,
  filter,
  pageLength,
  infoTitle,
  actionsTitle,
};
