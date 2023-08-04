import { transformedMeasure } from "../../../utilities/transformedMeasure";

import {
  AlignOptions,
  HtmlElements,
  TypeOptions,
  SizeOptions,
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
  type: TypeOptions;
  size: SizeOptions;
  cursorHover?: boolean;
  parentHover?: boolean;
  ellipsis?: boolean;
}

const Text = (props: ITextProps) => {
  const {
    children,
    textAlign,
    margin,
    padding,
    as,
    appearance,
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
