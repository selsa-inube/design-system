import React from "react";
import PropsType from "prop-types";

import { colors } from "../../shared/colors/colors";
import { typography } from "../../shared/typography/typography";

import { StylesText } from "./styles";

/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px(\s+[0-9]+px){0,3}$/;

/**global values for the css properties margin and padding*/
const GLOBAL_VALUES_PROPERTIES_CSS = ["inherit", "initial", "unset", "auto"];

const ALIGN_OPTIONS = ["start", "center", "end", "justify"];

const HTML_ELEMENTS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "legend",
  "figcaption",
  "blockquote",
];

/**the object keys refer to the colour tokens of system of the text role*/
const APPEARANCE_OPTIONS = Object.entries(colors.sys.text).map(([key]) => {
  return key;
});

/**the object keys refer to the roles of the type system tokens*/
const TYPO_OPTIONS = Object.entries(typography.sys.typescale).map(([key]) => {
  return key;
});

const DEFAULTS_VALUES_PROPS = {
  align: "start",
  as: "p",
  appearance: "dark",
  typo: "bodyLarge",
  margin: "0px",
  padding: "0px",
};

//Function trasnformed

const transformPropValue = (value, allowedValues, defaultValue) => {
  if (allowedValues.includes(value)) {
    return value;
  }
  return defaultValue;
};

const transformCssValue = (value, regex, globalValuesCss, defaultValue) => {
  if (regex.test(value) || globalValuesCss.includes(value)) {
    return value;
  }
  return defaultValue;
};

const Text = (props) => {
  const {
    children,
    align = "start",
    margin = "0px",
    padding = "0px",
    as = "p",
    id,
    appearance = "dark",
    typo = "bodyLarge",
  } = props;

  const transformedAlign = transformPropValue(
    align,
    ALIGN_OPTIONS,
    DEFAULTS_VALUES_PROPS.align
  );

  const transformedAs = transformPropValue(
    as,
    HTML_ELEMENTS,
    DEFAULTS_VALUES_PROPS.as
  );

  const transformedAppearance = transformPropValue(
    appearance,
    APPEARANCE_OPTIONS,
    DEFAULTS_VALUES_PROPS.appearance
  );

  const transformedTypo = transformPropValue(
    typo,
    TYPO_OPTIONS,
    DEFAULTS_VALUES_PROPS.typo
  );

  const transformedMargin = transformCssValue(
    margin,
    regex,
    GLOBAL_VALUES_PROPERTIES_CSS,
    DEFAULTS_VALUES_PROPS.margin
  );

  const transformedPadding = transformCssValue(
    padding,
    regex,
    GLOBAL_VALUES_PROPERTIES_CSS,
    DEFAULTS_VALUES_PROPS.padding
  );

  return (
    <StylesText
      as={transformedAs}
      align={transformedAlign}
      id={id}
      appearance={transformedAppearance}
      typo={transformedTypo}
      margin={transformedMargin}
      padding={transformedPadding}
    >
      {children}
    </StylesText>
  );
};

Text.propTypes = {
  children: PropsType.node,
  align: PropsType.oneOf(ALIGN_OPTIONS).isRequired,
  margin: PropsType.oneOfType([
    PropsType.string,
    PropsType.oneOf(GLOBAL_VALUES_PROPERTIES_CSS),
  ]),
  padding: PropsType.oneOfType([
    PropsType.string,
    PropsType.oneOf(GLOBAL_VALUES_PROPERTIES_CSS),
  ]),
  as: PropsType.oneOf(HTML_ELEMENTS).isRequired,
  id: PropsType.string,
  appearance: PropsType.oneOf(APPEARANCE_OPTIONS).isRequired,
  typo: PropsType.oneOf(TYPO_OPTIONS).isRequired,
};

export default Text;

export { HTML_ELEMENTS, ALIGN_OPTIONS, APPEARANCE_OPTIONS, TYPO_OPTIONS };
