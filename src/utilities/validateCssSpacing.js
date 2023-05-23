/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px$/;

const globalValuesPropertiesCss = ["inherit", "initial", "unset", "auto"];

const validateCssSpacing = (size) => {
  const splitPixels = size.trim().split(" ");

  if (size === "" || splitPixels.length === 0 || splitPixels.length > 4) {
    return false;
  }

  const isGlobalCssValue = globalValuesPropertiesCss.includes(size);

  if (isGlobalCssValue && splitPixels.length === 1) {
    return true;
  }

  return splitPixels.every((valueSize) => regex.test(valueSize));
};

export { validateCssSpacing };
