import React from "react";
import PropsType from "prop-types";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

import { StyledText } from "./styles";

/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px(\s+[0-9]+px){0,3}$/;

const globalValuesPropertiesCss = ["inherit", "initial", "unset", "auto"];

const alignsOptions = ["start", "center", "end", "justify"];

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

const appearencesOptions = Object.keys(colors.sys.text).map((key) => {
  return key;
});

const typosOptions = Object.keys(typography.sys.typescale).map((key) => {
  return key;
});

const defaultAlign = "start";
const defaultHtmlElement = "p";
const defaultAppearance = "dark";
const defaultTypo = "bodyLarge";
const defaultMargin = "0px";
const defaultPadding = "0px";

const transformCssValue = (value, regex, globalValuesCss, defaultValue) => {
  if (regex.test(value) || globalValuesCss.includes(value)) {
    return value;
  }
  return defaultValue;
};

const Text = (props) => {
  const {
    children,
    align = defaultAlign,
    margin = defaultMargin,
    padding = defaultPadding,
    as = defaultHtmlElement,
    id,
    appearance = defaultAppearance,
    typo = defaultTypo,
  } = props;

  const transformedAlign = alignsOptions.includes(align) ? align : defaultAlign;

  const transformedAs = htmlElements.includes(as) ? as : defaultHtmlElement;

  const transformedAppearance = appearencesOptions.includes(appearance)
    ? appearance
    : defaultAppearance;

  const transformedTypo = typosOptions.includes(typo) ? typo : defaultTypo;

  const transformedMargin = transformCssValue(
    margin,
    regex,
    globalValuesPropertiesCss,
    defaultMargin
  );
  /*  const transformedMargin =
    margin
      .split(" ")
      .filter((spacing) => spacing !== "")
      .slice(0, 4)
      .every((i) => /^[0-9]+px$/.test(i)) === true
      ? margin.slice(0, margin.indexOf(" ", margin.indexOf(" ") + 1))
      : defaultAlign; */

  console.log(transformedMargin);
  const transformedPadding = transformCssValue(
    padding,
    regex,
    globalValuesPropertiesCss,
    defaultPadding
  );

  return (
    <StyledText
      as={transformedAs}
      align={transformedAlign}
      id={id}
      appearance={transformedAppearance}
      typo={transformedTypo}
      margin={transformedMargin}
      padding={transformedPadding}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropsType.node,
  align: PropsType.oneOf(alignsOptions).isRequired,
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

export { Text, htmlElements, alignsOptions, appearencesOptions, typosOptions };
