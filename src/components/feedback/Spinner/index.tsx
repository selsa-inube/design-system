import { Size, Appearance, sizes, appearances } from "./props";
import { StyledSpinner } from "./styles";

export interface ISpinnerProps {
  size: Size;
  appearance: Appearance;
  transparent: boolean;
}

const defaultAppearance = "blue";
const defaultSize = "medium";
const defaultTransparent = false;

const Spinner = (props: ISpinnerProps) => {
  const {
    size = defaultSize,
    appearance = defaultAppearance,
    transparent = defaultTransparent,
  } = props;

  const transformedSize = sizes.includes(size) ? size : defaultSize;
  const transformedAppearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;
  const transformedIsTransparent =
    typeof transparent === "boolean" ? transparent : defaultTransparent;

  return (
    <StyledSpinner
      appearance={transformedAppearance}
      size={transformedSize}
      transparent={transformedIsTransparent}
    />
  );
};

export { Spinner };
