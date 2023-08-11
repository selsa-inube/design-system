import { Themed, TypographyLabel, typos } from "./props";
import { StyledLabel } from "./styles";

export interface ILabelProps extends Themed {
  isDisabled?: boolean;
  isFocused?: boolean;
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
    isFocused = defaultIsFocused,
    htmlFor,
    isInvalid = defaultIsInvalid,
    typo = "large",
    children,
  } = props;

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedIsFocused =
    typeof isFocused === "boolean" ? isFocused : defaultIsFocused;

  const transformedIsInvalid =
    typeof isInvalid === "boolean" ? isInvalid : defaultIsInvalid;

  const transformedTypo = typos.includes(typo) ? typo : defaultTypo;

  return (
    <StyledLabel
      isDisabled={transformedIsDisabled}
      isFocused={transformedIsFocused}
      htmlFor={htmlFor}
      isInvalid={transformedIsInvalid}
      typo={transformedTypo}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
