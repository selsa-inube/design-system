import { Size, Appearance } from "./props";
import { StyledSpinner } from "./styles";

export interface ISpinnerProps {
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
