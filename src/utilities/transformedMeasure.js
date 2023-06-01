import { validateBoxModelMeasure } from "../utilities/validateBoxModelMeasure";

const transformedMeasure = (valueBoxModel, defaultValue) => {
  if (valueBoxModel === undefined || valueBoxModel.trim().length === 0) {
    return defaultValue;
  }
  try {
    validateBoxModelMeasure(valueBoxModel);
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
  return valueBoxModel;
};

export { transformedMeasure };
