import { TypographyLabel, typos } from "./props";
import { StyledLabel } from "./styles";

export interface ILabelProps {
  isDisabled?: boolean;
  focused?: boolean;
  htmlFor: string;
  invalid?: boolean;
  typo?: TypographyLabel;
  children?: React.ReactNode;
}

const defaultIsDisabled = false;
const defaultIsFocused = false;
const defaultInvalid = false;
const defaultTypo = "labelLarge";

const Label = (props: ILabelProps) => {
  const {
    isDisabled = defaultIsDisabled,
    focused = defaultIsFocused,
    htmlFor,
    invalid = defaultInvalid,
    typo = "labelLarge",
    children,
  } = props;

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedIsFocused =
    typeof focused === "boolean" ? focused : defaultIsFocused;

  const transformedInvalid =
    typeof invalid === "boolean" ? invalid : defaultInvalid;

  const transformedTypo = typos.includes(typo) ? typo : defaultTypo;

  return (
    <StyledLabel
      isDisabled={transformedIsDisabled}
      focused={transformedIsFocused}
      htmlFor={htmlFor}
      invalid={transformedInvalid}
      typo={transformedTypo}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
