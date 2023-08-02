import { Size, Appearance, sizes, appearances } from "./props";
import { StyledSpinner } from "./styles";

export interface ISpinnerProps {
  size: Size;
  appearance: Appearance;
  isTransparent: boolean;
}

const defaultAppearance = "blue";
const defaultSize = "medium";
const defaultTransparent = false;

const Spinner = (props: ISpinnerProps) => {
  const {
    size = defaultSize,
    appearance = defaultAppearance,
    isTransparent = defaultTransparent,
  } = props;

  const transformedSize = sizes.includes(size) ? size : defaultSize;
  const transformedAppearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;
  const transformedIsTransparent =
    typeof isTransparent === "boolean" ? isTransparent : defaultTransparent;

  return (
    <StyledSpinner
      appearance={transformedAppearance}
      size={transformedSize}
      isTransparent={transformedIsTransparent}
    />
  );
};

export { Spinner };
