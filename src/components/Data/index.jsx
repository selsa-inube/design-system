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

const defaultalign = "start";
const defaultElementsHtml = "p";
const defaultAppearance = "dark";
const defaultTypo = "bodyLarge";

const Text = (props) => {
  const {
    children,
    align = "start",
    as = "p",
    id,
    appearance = "dark",
    typo = "bodyLarge",
  } = props;

  const transformedalign = aligns.includes(align) ? align : defaultalign;

  const transformedAs = elementsHtml.includes(as) ? as : defaultElementsHtml;

  const transformedAppearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;

  const transformedTypo = typos.includes(typo) ? typo : defaultTypo;

  return (
    <StylesText
      as={transformedAs}
      align={transformedalign}
      id={id}
      appearance={transformedAppearance}
      typo={transformedTypo}
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
