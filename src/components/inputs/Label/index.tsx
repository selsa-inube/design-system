import { Size, Themed } from "./props";
import { StyledLabel } from "./styles";

export interface ILabelProps extends Themed {
  disabled?: boolean;
  focused?: boolean;
  htmlFor: string;
  invalid?: boolean;
  size?: Size;
  children?: React.ReactNode;
}

const Label = (props: ILabelProps) => {
  const {
    disabled = false,
    focused = false,
    htmlFor,
    invalid = false,
    size = "large",
    children,
  } = props;

  return (
    <StyledLabel
      disabled={disabled}
      focused={focused}
      htmlFor={htmlFor}
      invalid={invalid}
      size={size}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
