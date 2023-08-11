import { TypographyLabel } from "./props";
import { StyledLabel } from "./styles";

export interface ILabelProps {
  disabled?: boolean;
  isFocused?: boolean;
  htmlFor: string;
  isInvalid?: boolean;
  typo?: TypographyLabel;
  children?: React.ReactNode;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Label = (props: ILabelProps) => {
  const {
    disabled = false,
    isFocused = false,
    htmlFor,
    isInvalid = false,
    typo = "labelLarge",
    children,
  } = props;

  return (
    <StyledLabel
      disabled={disabled}
      isFocused={isFocused}
      htmlFor={htmlFor}
      isInvalid={isInvalid}
      typo={typo}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
