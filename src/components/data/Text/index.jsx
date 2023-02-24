import React from "react";
import PropsType from "prop-types";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

import { StylesText } from "./styles";

/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px(\s+[0-9]+px){0,3}$/;

const globalValuesPropertiesCss = ["inherit", "initial", "unset", "auto"];

const alignsOptios = ["start", "center", "end", "justify"];

const htmlElements = [
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

const appearencesOptions = Object.entries(colors.sys.text).map(([key]) => {
  return key;
});

const typosOptions = Object.entries(typography.sys.typescale).map(([key]) => {
  return key;
});

const defaultAlign = "start";
const defaultHtmlElement = "p";
const defaultAppearance = "dark";
const defaultTypo = "bodyLarge";
const defaultMargin = "0px";
const defaultPadding = "0px";

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
    alignsOptios,
    defaultAlign
  );

  const transformedAs = transformPropValue(
    as,
    htmlElements,
    defaultHtmlElement
  );

  const transformedAppearance = transformPropValue(
    appearance,
    appearencesOptions,
    defaultAppearance
  );

  const transformedTypo = transformPropValue(typo, typosOptions, defaultTypo);

  const transformedMargin = transformCssValue(
    margin,
    regex,
    globalValuesPropertiesCss,
    defaultMargin
  );

  const transformedPadding = transformCssValue(
    padding,
    regex,
    globalValuesPropertiesCss,
    defaultPadding
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
  align: PropsType.oneOf(alignsOptios).isRequired,
  margin: PropsType.oneOfType([
    PropsType.string,
    PropsType.oneOf(globalValuesPropertiesCss),
  ]),
  padding: PropsType.oneOfType([
    PropsType.string,
    PropsType.oneOf(globalValuesPropertiesCss),
  ]),
  as: PropsType.oneOf(htmlElements).isRequired,
  id: PropsType.string,
  appearance: PropsType.oneOf(appearencesOptions).isRequired,
  typo: PropsType.oneOf(typosOptions).isRequired,
};

export { Text, htmlElements, alignsOptios, appearencesOptions, typosOptions };
