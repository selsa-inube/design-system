import { Size, Appearance, Themed } from "./props";
import { StyledSpinner } from "./styles";

export interface ISpinnerProps extends Themed {
  size: Size;
  appearance: Appearance;
  isTransparent: boolean;
}

const Spinner = (props: ISpinnerProps) => {
  const {
    size = "medium",
    appearance = "primary",
    isTransparent = false,
  } = props;

  return (
    <StyledSpinner
      appearance={appearance}
      size={size}
      isTransparent={isTransparent}
    />
  );
};

export { Spinner };
