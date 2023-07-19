import { transformedMeasure } from "../../../utilities/transformedMeasure";
import { StyledText } from "./styles";

import { ITextProps } from "./interfaces/Text.interface";

const defaultAlign = "start";
const defaultHtmlElement = "p";
const defaultAppearance = "dark";
const defaultTypo = "bodyLarge";
const defaultMargin = "0px";
const defaultPadding = "0px";

const Text = (props: ITextProps) => {
  const {
    children,
    textAlign = defaultAlign,
    margin = defaultMargin,
    padding = defaultPadding,
    as = defaultHtmlElement,
    appearance = defaultAppearance,
    typo = defaultTypo,
  } = props;

  return (
    <StyledText
      as={as}
      textAlign={textAlign}
      appearance={appearance}
      typo={typo}
      margin={transformedMeasure(margin, defaultMargin)}
      padding={transformedMeasure(padding, defaultPadding)}
    >
      {children}
    </StyledText>
  );
};

export { Text };
