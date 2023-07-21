import { transformedMeasure } from "../../../utilities/transformedMeasure";
import { StyledText } from "./styles";

import { ITextProps } from "./interfaces/Text.interface";

const defaultHtmlElement = "p";
const defaultAppearance = "dark";

const Text = (props: ITextProps) => {
  const {
    children,
    textAlign,
    margin,
    padding,
    as = defaultHtmlElement,
    appearance = defaultAppearance,
    type,
    size,
    cursorHover,
    parentHover,
    ellipsis,
    isDisabled,
  } = props;

  return (
    <StyledText
      as={as}
      textAlign={textAlign}
      appearance={appearance}
      type={type}
      size={size}
      margin={transformedMeasure(margin)}
      padding={transformedMeasure(padding)}
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
