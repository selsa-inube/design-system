import { useState } from "react";
import { Text } from "@data/Text";
import { Icon } from "@data/Icon";
import { Spinner } from "@feedback/Spinner";

import {
  Appearance,
  Type,
  Spacing,
  Variant,
  Themed,
  ButtonAppearanceType,
} from "./props";

import { StyledButton, StyledSpan, StyledLink } from "./styles";

export interface IButtonProps extends Themed {
  children: React.ReactNode;
  appearance?: Appearance;
  loading?: boolean;
  disabled?: boolean;
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  type?: Type;
  spacing?: Spacing;
  variant?: Variant;
  fullwidth?: boolean;
  handleClick?: (e?: Event) => void;
  path?: string;
}

const darkWhenFilled: ButtonAppearanceType[] = ["warning", "gray", "light"];
const Button = (props: IButtonProps) => {
  const {
    children,
    appearance = "primary",
    loading = false,
    disabled = false,
    iconBefore,
    iconAfter,
    type = "button",
    spacing = "wide",
    variant = "filled",
    fullwidth = false,
    handleClick,
    path,
  } = props;

  const [hover, setHover] = useState(false);
  function toggleHover(newState: boolean): void {
    if (variant !== "filled") {
      setHover(newState);
    }
  }
  function getAppearance() {
    if (variant === "filled") {
      if (darkWhenFilled.includes(appearance)) {
        return "dark";
      }
      return "light";
    }
    return appearance;
  }

  if (type === "link" && !path) {
    console.warn("You must provide a path to use a link button");
  }

  if (type === "link") {
    return (
      <StyledLink
        to={path}
        disabled={+disabled}
        variant={variant}
        appearance={appearance}
        fullwidth={+fullwidth}
        onClick={handleClick}
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <StyledButton
          appearance={appearance}
          disabled={disabled}
          spacing={spacing}
          variant={variant}
          fullwidth={fullwidth}
        >
          <StyledSpan disabled={disabled} variant={variant}>
            {iconBefore && (
              <Icon
                icon={iconBefore}
                spacing="none"
                size="18px"
                appearance={getAppearance()}
                disabled={disabled}
                parentHover={hover}
              />
            )}
            <Text
              type="label"
              size="large"
              appearance={getAppearance()}
              disabled={disabled}
              parentHover={hover}
              ellipsis={true}
            >
              {children}
            </Text>
            {iconAfter && (
              <Icon
                icon={iconAfter}
                spacing="none"
                size="18px"
                appearance={getAppearance()}
                disabled={disabled}
                parentHover={hover}
              />
            )}
          </StyledSpan>
        </StyledButton>
      </StyledLink>
    );
  }

  return (
    <StyledButton
      appearance={appearance}
      loading={loading}
      disabled={disabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={type}
      spacing={spacing}
      variant={variant}
      fullwidth={fullwidth}
      onClick={disabled ? null : handleClick}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      {loading && !disabled ? (
        <Spinner
          appearance={getAppearance()}
          transparent={variant === "filled"}
          size="small"
        />
      ) : (
        <StyledSpan disabled={disabled} variant={variant}>
          {iconBefore && (
            <Icon
              icon={iconBefore}
              spacing="none"
              size="18px"
              appearance={getAppearance()}
              disabled={disabled}
              parentHover={hover}
            />
          )}
          <Text
            type="label"
            size="large"
            appearance={getAppearance()}
            disabled={disabled}
            parentHover={hover}
            ellipsis={true}
          >
            {children}
          </Text>
          {iconAfter && (
            <Icon
              icon={iconAfter}
              spacing="none"
              size="18px"
              appearance={getAppearance()}
              disabled={disabled}
              parentHover={hover}
            />
          )}
        </StyledSpan>
      )}
    </StyledButton>
  );
};

export { Button };
