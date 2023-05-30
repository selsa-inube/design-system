import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";
import { validateBoxModelMeasure } from "../../../utilities/validateBoxModelMeasure";

import { StyledText } from "./styles";

const alignOptions = ["start", "center", "end", "justify"];

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

  const transformedAlign = alignOptions.includes(align) ? align : defaultAlign;

  const transformedAs = htmlElements.includes(as) ? as : defaultHtmlElement;

  const transformedAppearance = appearencesOptions.includes(appearance)
    ? appearance
    : defaultAppearance;

  const transformedTypo = typosOptions.includes(typo) ? typo : defaultTypo;

  const transformedMeasure = (valueBoxModel, defaultValue) => {
    try {
      validateBoxModelMeasure(valueBoxModel);
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
    return valueBoxModel;
  };

  return (
    <StyledText
      as={transformedAs}
      align={transformedAlign}
      id={id}
      appearance={transformedAppearance}
      typo={transformedTypo}
      margin={transformedMeasure(margin, defaultMargin)}
      padding={transformedMeasure(padding, defaultPadding)}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(alignOptions),
  margin: PropTypes.string,
  padding: PropTypes.string,
  as: PropTypes.oneOf(htmlElements),
  id: PropTypes.string,
  appearance: PropTypes.oneOf(appearencesOptions),
  typo: PropTypes.oneOf(typosOptions),
};

export { Text, htmlElements, alignOptions, appearencesOptions, typosOptions };
