import { Size, Themed } from "./props";
import { StyledLabel } from "./styles";

export interface ILabelProps extends Themed {
  disabled?: boolean;
  focused?: boolean;
  htmlFor: string;
  invalid?: boolean;
  margin?: string;
  padding?: string;
  size?: Size;
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
    size = "large",
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
      size={size}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
