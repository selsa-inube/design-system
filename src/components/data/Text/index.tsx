import { transformedMeasure } from "../../../utilities/transformedMeasure";

import {
  AlignOptions,
  HtmlElements,
  TyposOptions,
  SizesOptions,
  Appearance,
} from "./props";
import { StyledText } from "./styles";

export interface ITextProps {
  children?: React.ReactNode;
  textAlign?: AlignOptions;
  margin?: string;
  padding?: string;
  as?: HtmlElements;
  appearance: Appearance;
  isDisabled?: boolean;
  type: TyposOptions;
  size: SizesOptions;
  cursorHover?: boolean;
  parentHover?: boolean;
  ellipsis?: boolean;
}

const Text = (props: ITextProps) => {
  const {
    children,
    textAlign = "start",
    margin = "0px",
    padding = "0px",
    as = "p",
    appearance = "dark",
    type = "body",
    size = "large",
    cursorHover = false,
    parentHover = false,
    ellipsis = false,
    isDisabled = false,
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
