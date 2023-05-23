/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px$/;

const globalValuesPropertiesCss = ["inherit", "initial", "unset", "auto"];

const validateCssSpacing = (size) => {
  const splitPixels = size.trim().split(" ");

  const isGlobalCssValue =
    globalValuesPropertiesCss.includes(size.trim()) && splitPixels.length === 1;

  if (size === "" || splitPixels.length === 0 || splitPixels.length > 4) {
    return false;
  }

  return (
    splitPixels.every((valueSize) => regex.test(valueSize)) || isGlobalCssValue
  );
};

export { validateCssSpacing };
