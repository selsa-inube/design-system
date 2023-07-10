import { IButtonProps } from "../interfaces/Button.interface";
import { Variant } from "../types/Button.Variants.type";

import { Spinner } from "@src/components/feedback/Spinner";
import {
  StyledPrimaryButton,
  StyledIcon,
  StyledSpan,
  StyledLink,
} from "./styles";

const getSpinnerColor = (variant: Variant) => {
  if (variant === "filled") {
    return "white";
  } else return "blue";
};

const defaultSpinnerSize = "small";

const ButtonPrimary = (props: IButtonProps) => {
  const {
    children,
    appearance,
    isLoading,
    isDisabled,
    iconBefore,
    iconAfter,
    type,
    spacing,
    variant,
    isFullWidth,
    handleClick,
    path,
  } = props;

  const transformedTransparentSpinner = variant === "filled";

  if (type === "link") {
    return (
      <StyledLink
        to={path}
        isDisabled={isDisabled}
        variant={variant}
        appearance={appearance}
        isFullWidth={isFullWidth}
      >
        <StyledPrimaryButton
          appearance={appearance}
          isDisabled={isDisabled}
          spacing={spacing}
          variant={variant}
          isFullWidth={isFullWidth}
          onClick={handleClick}
        >
          <StyledSpan isDisabled={isDisabled} variant={variant}>
            {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
            {children}
            {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
          </StyledSpan>
        </StyledPrimaryButton>
      </StyledLink>
    );
  }

  return (
    <StyledPrimaryButton>
      {isLoading && !isDisabled ? (
        <Spinner
          appearance={getSpinnerColor(variant!)}
          isTransparent={transformedTransparentSpinner}
          size={defaultSpinnerSize}
        />
      ) : (
        <StyledSpan isDisabled={isDisabled} variant={variant}>
          {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
          {children}
          {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
        </StyledSpan>
      )}
    </StyledPrimaryButton>
  );
};

export { ButtonPrimary };
