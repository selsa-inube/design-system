import { Themed, TypographyLabel } from "./props";
import { StyledLabel } from "./styles";

export interface ILabelProps extends Themed {
  disabled?: boolean;
  focused?: boolean;
  htmlFor: string;
  invalid?: boolean;
  margin?: string;
  padding?: string;
  typo?: TypographyLabel;
  children?: React.ReactNode;
}

const Label = (props: ILabelProps) => {
  const {
    disabled = false,
    focused = false,
    htmlFor,
    invalid = false,
    margin = "0px",
    padding = "0px",
    typo = "large",
    children,
  } = props;

  return (
    <StyledLabel
      disabled={disabled}
      focused={focused}
      htmlFor={htmlFor}
      invalid={invalid}
      margin={margin}
      padding={padding}
      typo={typo}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
