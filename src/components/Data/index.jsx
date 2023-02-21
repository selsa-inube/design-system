import React from "react";
import PropsType from "prop-types";

import { colors } from "../../shared/colors/colors";
import { typography } from "../../shared/typography/typography";

import { StylesText } from "./styles";

/**it is validated that the values entered are in pixels and valid according to the css property margin and padding. */
const regex = /^[0-9]+px(\s+[0-9]+px){0,3}$/;

/**global values for the css properties margin and padding*/
const globalvalues = ["inherit", "initial", "unset", "auto"];

const aligns = ["start", "center", "end", "justify"];

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

/**the object keys refer to the colour tokens of system of the text role*/
const appearances = Object.entries(colors.sys.text).map(([key]) => {
  return key;
});

/**the object keys refer to the roles of the type system tokens*/
const typos = Object.entries(typography.sys.typescale).map(([key]) => {
  return key;
});

const defaultAlign = "start";
const defaultHtmlElement = "p";
const defaultAppearance = "dark";
const defaultTypo = "bodyLarge";
const defaultMargin = "0px";
const defaultPadding = "0px";

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

  const transformedAlign = aligns.includes(align) ? align : defaultAlign;

  const transformedAs = htmlElements.includes(as) ? as : defaultHtmlElement;

  const transformedAppearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;

  const transformedTypo = typos.includes(typo) ? typo : defaultTypo;

  const transformedMargin =
    regex.test(margin) || globalvalues.includes(margin)
      ? margin
      : defaultMargin;

  const transformedPadding =
    regex.test(padding) || globalvalues.includes(padding)
      ? padding
      : defaultPadding;

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

Text.propsType = {
  children: PropsType.TextNode,
  align: PropsType.oneOf(aligns).isRequired,
  margin: PropsType.oneOfType([
    PropsType.string,
    PropsType.oneOf(globalvalues),
  ]),
  padding: PropsType.oneOfType([
    PropsType.string,
    PropsType.oneOf(globalvalues),
  ]),
  as: PropsType.oneOf(htmlElements).isRequired,
  id: PropsType.string,
  appearance: PropsType.oneOf(appearances).isRequired,
  typo: PropsType.oneOf(typos).isRequired,
};

export default Text;

export { htmlElements, aligns, appearances, typos };
