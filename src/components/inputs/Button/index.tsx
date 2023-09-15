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

export interface IButtonProps {
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
  onClick?: (e?: Event) => void;
  path?: string;
}

export interface IButtonStructureProps extends IButtonProps, Themed {
  hover?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  appearanceChildren: Appearance;
}

const darkWhenFilled: ButtonAppearanceType[] = ["warning", "gray", "light"];
const ButtonStructure = (props: IButtonStructureProps) => {
  const {
    children,
    appearance,
    loading,
    disabled,
    iconBefore,
    iconAfter,
    type,
    spacing,
    variant,
    fullwidth,
    onClick,
    hover,
    onMouseEnter,
    onMouseLeave,
    appearanceChildren,
  } = props;

  return (
    <StyledButton
      appearance={appearance}
      loading={loading!.toString()}
      disabled={disabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={type}
      spacing={spacing}
      variant={variant}
      fullwidth={fullwidth}
      onClick={disabled ? null : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {loading && !disabled ? (
        <Spinner
          appearance={appearanceChildren}
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
              appearance={appearanceChildren}
              disabled={disabled}
              parentHover={hover}
            />
          )}
          <Text
            type="label"
            size="large"
            appearance={appearanceChildren}
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
              appearance={appearanceChildren}
              disabled={disabled}
              parentHover={hover}
            />
          )}
        </StyledSpan>
      )}
    </StyledButton>
  );
};

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
    onClick,
    path,
  } = props;

  const [hover, setHover] = useState(false);
  function toggleHover(newState: boolean): void {
    if (variant !== "filled") {
      setHover(newState);
    }
  }
  function appearanceChildrens() {
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
      <StyledLink to={path}>
        <ButtonStructure
          loading={loading}
          appearance={appearance}
          disabled={disabled}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          spacing={spacing}
          variant={variant}
          fullwidth={fullwidth}
          onClick={onClick}
          hover={hover}
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
          appearanceChildren={appearanceChildrens()}
        >
          {children}
        </ButtonStructure>
      </StyledLink>
    );
  }
  return (
    <ButtonStructure
      appearance={appearance}
      loading={loading}
      disabled={disabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      spacing={spacing}
      variant={variant}
      fullwidth={fullwidth}
      onClick={onClick}
      hover={hover}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      appearanceChildren={appearanceChildrens()}
    >
      {children}
    </ButtonStructure>
  );
};

export { Button };
