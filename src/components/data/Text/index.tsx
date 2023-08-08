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
  disabled?: boolean;
  type: TyposOptions;
  size: SizesOptions;
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
    disabled,
  } = props;

  return (
    <StyledText
      as={as}
      textAlign={textAlign}
      appearance={appearance}
      type={type}
      size={size}
      margin={margin}
      padding={padding}
      cursorHover={cursorHover}
      parentHover={parentHover}
      ellipsis={ellipsis}
      disabled={disabled}
    >
      {children}
    </StyledText>
  );
};

export { Text };
