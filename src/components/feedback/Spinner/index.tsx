import { Size, Appearance } from "./props";
import { StyledSpinner } from "./styles";

export interface ISpinnerProps {
  size: Size;
  appearance: Appearance;
  transparent: boolean;
}

const Spinner = (props: ISpinnerProps) => {
  const {
    size = "medium",
    appearance = "primary",
    transparent = false,
  } = props;

  return (
    <StyledSpinner
      appearance={appearance}
      size={size}
      transparent={transparent}
    />
  );
};

export { Spinner };
