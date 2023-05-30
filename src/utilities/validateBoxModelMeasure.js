/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px$/;

const nonPixelValues = ["inherit", "initial", "unset", "auto"];

const validateBoxModelMeasure = (value) => {
  if (typeof value !== "string") {
    throw new Error("The value must be a string");
  }

  const measures = value.trim().split(" ");

  if (value === "") {
    return console.warn(
      "If no input argument is provided, the component will take the default value of the box model property."
    );
  }

  if (measures.length > 4) {
    throw new Error("The provided CSS spacing value is invalid. ");
  }

  if (nonPixelValues.includes(value) && measures.length === 1) {
    return;
  }

  const isValid = measures.every((valueSize) => regex.test(valueSize));

  if (!isValid) {
    throw new Error(
      "Provide a single valid spacing measurement in the correct format, following CSS syntax."
    );
  }
  return;
};
export { validateBoxModelMeasure };
