const parameters = {
  layout: "fullscreen",
  docs: {
    description: {
      component:
        "A versatile side navigation component, which allows you to nest links",
    },
  },
};

const props = {
  navigation: {
    description:
      "The primary object that will organize and store the requisite paths for the correct operation of the Nav component is forthcoming and is required",
  },
  logoutPath: {
    description:
      "is the path where the user is going to navigate when he wants to logout and is required",
  },
};

export { props, parameters };
