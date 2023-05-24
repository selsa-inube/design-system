/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px$/;

const globalValuesPropertiesCss = ["inherit", "initial", "unset", "auto"];

const validateCssSpacing = (size) => {
  const splitPixels = size.trim().split(" ");

  if (size === "") {
    return console.warn(
      "if the input argument is not passed, the component will take the default value"
    );
  }

  if (splitPixels.length === 0 || splitPixels.length > 4) {
    return console.error("The provided CSS spacing size is invalid. ");
  }

  if (globalValuesPropertiesCss.includes(size) && splitPixels.length === 1) {
    return console.error(
      "Provide a single valid spacing measurement in the correct format, following CSS syntax"
    );
  }

  if (!splitPixels.every((valueSize) => regex.test(valueSize))) {
    console.error(
      "It must be a number followed by 'px', taking into account the CSS format"
    );
  }

  return true;
};

export { validateCssSpacing };
