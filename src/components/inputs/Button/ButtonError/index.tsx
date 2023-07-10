import { IButtonProps } from "../interfaces/Button.interface";

import { Spinner } from "@src/components/feedback/Spinner";
import {
  StyledErrorButton,
  StyledIcon,
  StyledSpan,
  StyledLink,
} from "./styles";
import { Variant } from "../types/Button.Variants.type";

const defaultSpinnerSize = "small";

const getSpinnerColor = (variant: Variant) => {
  if (variant === "filled") {
    return "white";
  } else return "red";
};

const ErrorButon = (props: IButtonProps) => {
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
        <StyledErrorButton
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
        </StyledErrorButton>
      </StyledLink>
    );
  }

  return (
    <StyledErrorButton
      appearance={appearance}
      isLoading={isLoading}
      isDisabled={isDisabled}
      variant={variant}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={type}
      spacing={spacing}
      isFullWidth={isFullWidth}
      onClick={handleClick}
    >
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
    </StyledErrorButton>
  );
};

export { ErrorButon };
