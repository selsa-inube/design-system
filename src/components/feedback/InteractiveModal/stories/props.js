const portalId = {
  control: { type: "text" },
  description: "the ID of the portal",
};

const title = {
  control: { type: "text" },
  description: "the title of the interactive modal",
};

const closeModal = {
  control: { type: "function" },
  description: "callback function to close the interactive modal",
};

const infoData = {
  control: { type: "object" },
  description: "data containing user information",
};

const actions = {
  control: { type: "array" },
  description: "actions available for the interactive modal",
};

const labels = {
  control: { type: "object" },
  description: "custom labels for the interactive modal",
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
  portalId,
  title,
  closeModal,
  infoData,
  actions,
  labels,
  infoTitle,
  actionsTitle,
};
