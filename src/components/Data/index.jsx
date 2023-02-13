import React from "react";
import PropsType from "prop-types";

import { StylesText } from "./styles";

const Text = (props) => {
  const { children, align, as, id, appearance, typo } = props;

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
  align: PropsType.oneOf(["start", "center", "end", "justify"]).isRequired,
  as: PropsType.oneOf([
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
  ]).isRequired,
  id: PropsType.string,
  appearance: PropsType.oneOf([
    "primary",
    "secondary",
    "link",
    "warning",
    "error",
    "help",
    "dark",
    "light",
  ]),
  typo: PropsType.oneOf([
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
  ]),
};

Text.defaultProps = {
  align: "start",
  as: "p",
  appearance: "dark",
  typo: "bodyLarge",
};

export default Text;
