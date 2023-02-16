import React from "react";
import PropsType from "prop-types";

import { StylesText } from "./styles";

const aligns = ["start", "center", "end", "justify"];

const elementsHtml = [
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

const appearances = [
  "primary",
  "secondary",
  "link",
  "warning",
  "error",
  "help",
  "dark",
  "light",
];

const typos = [
  "displayLarge",
  "displayMedium",
  "displaySmall",
  "headlineLarge",
  "headlineMedium",
  "headlineSmall",
  "titleLarge",
  "titleMedium",
  "titleSmall",
  "labelLarge",
  "labelMedium",
  "labelSmall",
  "bodyLarge",
  "bodyMedium",
  "bodySmall",
];

const Text = (props) => {
  const {
    children,
    align = "start",
    as = "p",
    id,
    appearance = "dark",
    typo = "bodyLarge",
  } = props;

  return (
    <StylesText
      as={as}
      align={align}
      id={id}
      appearance={appearance}
      typo={typo}
    >
      {children}
    </StylesText>
  );
};

Text.propsType = {
  children: PropsType.TextNode,
  align: PropsType.oneOf(aligns).isRequired,
  as: PropsType.oneOf(elementsHtml).isRequired,
  id: PropsType.string,
  appearance: PropsType.oneOf(appearances),
  typo: PropsType.oneOf(typos),
};

export default Text;

export { elementsHtml, appearances, typos };
