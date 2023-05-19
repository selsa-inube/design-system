/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px$/;

const validateCssSpacing = (element) => {
  const splitElement = element.split(" ");
  if (
    splitElement === "" ||
    splitElement.length === 0 ||
    splitElement.length > 4
  ) {
    return false;
  }
  return splitElement.every((item) => regex.test(item));
};

export { validateCssSpacing };
