import {
  AlignOptions,
  HtmlElements,
  TypeOptions,
  SizeOptions,
  Appearance,
  Themed,
} from "./props";

import { StyledText } from "./styles";

export interface ITextProps extends Themed {
  children?: React.ReactNode;
  textAlign?: AlignOptions;
  margin?: string;
  padding?: string;
  as?: HtmlElements;
  appearance?: Appearance;
  disabled?: boolean;
  type?: TypeOptions;
  size?: SizeOptions;
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
    disabled = false,
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
