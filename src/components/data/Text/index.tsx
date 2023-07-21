import { transformedMeasure } from "../../../utilities/transformedMeasure";
import { StyledText } from "./styles";

import { ITextProps } from "./interfaces/Text.interface";

const defaultAlign = "start";
const defaultHtmlElement = "p";
const defaultAppearance = "dark";

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
    type,
    size,
    cursorHover,
    parentHover,
    ellipsis,
    isDisabled,
  } = props;

  console.log(cursorHover, "cursorHoverindex");
  return (
    <StyledText
      as={as}
      textAlign={textAlign}
      appearance={appearance}
      type={type}
      size={size}
      margin={transformedMeasure(margin, defaultMargin)}
      padding={transformedMeasure(padding, defaultPadding)}
      cursorHover={cursorHover}
      parentHover={parentHover}
      ellipsis={ellipsis}
      isDisabled={isDisabled}
    >
      {children}
    </StyledText>
  );
};

export { Text };
