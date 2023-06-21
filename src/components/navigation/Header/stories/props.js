const navigation = {
  description:
    "The primary object that will organize and store the requisite paths for the correct operation of the <Nav/> component is forthcoming and is required",
};

const logo = {
  description:
    "prop accepts a component to be used as the logo in the header. This component can be an image, an icon, stylized text or any other visual element that represents the brand identity.",
};

const logoutPath = {
  description:
    "is the path where the user is going to navigate when he wants to logout and is required",
};

const userName = {
  description: "shall be the displayed username",
  table: {
    defaultValue: { summary: "MdPersonOutline" },
  },
};

const businessUnit = {
  description: "shall be the displayed business Unit",
  table: {
    defaultValue: { summary: "MdPersonOutline" },
  },
};

const portalId = {
  description: "id of the portal element",
};

export { portalId, navigation, logo, logoutPath, userName, businessUnit };
