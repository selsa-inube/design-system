import { Themed, TypographyLabel } from "./props";
import { StyledLabel } from "./styles";

export interface ILabelProps extends Themed {
  disabled?: boolean;
  focused?: boolean;
  htmlFor: string;
  invalid?: boolean;
  typo?: TypographyLabel;
  children?: React.ReactNode;
}

const Label = (props: ILabelProps) => {
  const {
    disabled = false,
    focused = false,
    htmlFor,
    invalid = false,
    typo = "large",
    children,
  } = props;

  return (
    <StyledLabel
      disabled={disabled}
      focused={focused}
      htmlFor={htmlFor}
      invalid={invalid}
      typo={typo}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
