import { validateBoxModelMeasure } from "../utilities/validateBoxModelMeasure";

const transformedMeasure = (valueBoxModel, defaultValue) => {
  if (!valueBoxModel) {
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
