import React from "react";
import PropsType from "prop-types";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

import { StyledText } from "./styles";

/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px$/;

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

const appearencesOptions = Object.keys(colors.sys.text);

const typosOptions = Object.keys(typography.sys.typescale);

const defaultAlign = "start";
const defaultHtmlElement = "p";
const defaultAppearance = "dark";
const defaultTypo = "bodyLarge";
const defaultMargin = "0px";
const defaultPadding = "0px";

const isValidCssSpacing = (element) => {
  let result = false;
  const splitElement = element.split(" ");

  if (element !== "" && splitElement.length > 0) {
    const validatedElement = splitElement
      .filter((spacing) => spacing !== "")
      .every((i) => regex.test(i));
    result = validatedElement === true && splitElement.length <= 4;
  }
  return result;
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

  const transformedMargin =
    isValidCssSpacing(margin) || globalValuesPropertiesCss.includes(margin)
      ? margin
      : defaultMargin;

  const transformedPadding =
    isValidCssSpacing(padding) || globalValuesPropertiesCss.includes(padding)
      ? padding
      : defaultPadding;

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
  align: PropsType.oneOf(alignsOptions),
  margin: PropsType.oneOfType([
    PropsType.string,
    PropsType.oneOf(globalValuesPropertiesCss),
  ]),
  padding: PropsType.oneOfType([
    PropsType.string,
    PropsType.oneOf(globalValuesPropertiesCss),
  ]),
  as: PropsType.oneOf(htmlElements),
  id: PropsType.string,
  appearance: PropsType.oneOf(appearencesOptions),
  typo: PropsType.oneOf(typosOptions),
};

export { Text, htmlElements, alignsOptions, appearencesOptions, typosOptions };
