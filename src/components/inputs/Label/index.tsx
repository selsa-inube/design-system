import { TypographyLabel, typos } from "./props";
import { StyledLabel } from "./styles";

export interface ILabelProps {
  isDisabled?: boolean;
  focused?: boolean;
  htmlFor: string;
  isInvalid?: boolean;
  typo?: TypographyLabel;
  children?: React.ReactNode;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultIsDisabled = false;
const defaultIsFocused = false;
const defaultIsInvalid = false;
const defaultTypo = "labelLarge";

const Label = (props: ILabelProps) => {
  const {
    isDisabled = defaultIsDisabled,
    focused = defaultIsFocused,
    htmlFor,
    isInvalid = defaultIsInvalid,
    typo = "labelLarge",
    children,
  } = props;

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedIsFocused =
    typeof focused === "boolean" ? focused : defaultIsFocused;

  const transformedIsInvalid =
    typeof isInvalid === "boolean" ? isInvalid : defaultIsInvalid;

  const transformedTypo = typos.includes(typo) ? typo : defaultTypo;

  return (
    <StyledLabel
      isDisabled={transformedIsDisabled}
      focused={transformedIsFocused}
      htmlFor={htmlFor}
      isInvalid={transformedIsInvalid}
      typo={transformedTypo}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
