import { ISpinnerProps } from "./interfaces/Spinner.interface";
import { sizes, appearances } from "./types/Spinner.type";

import { StyledSpinner } from "./styles";

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
