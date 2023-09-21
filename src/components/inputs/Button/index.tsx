import { Text } from "@data/Text";
import { Icon } from "@data/Icon";
import { Spinner } from "@feedback/Spinner";
import { Stack } from "@layouts/Stack";

import {
  Appearance,
  Type,
  Spacing,
  Variant,
  ButtonAppearanceType,
} from "./props";

import { StyledButton, StyledLink } from "./styles";

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

export interface IButtonStructureProps extends IButtonProps {
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
    >
      {loading && !disabled ? (
        <Spinner
          appearance={appearanceChildren}
          transparent={variant === "filled"}
          size="small"
        />
      ) : (
        <Stack alignItems="center" justifyContent="center">
          {iconBefore && (
            <Icon
              icon={iconBefore}
              spacing="none"
              size="18px"
              appearance={appearanceChildren}
              disabled={disabled}
            />
          )}
          <Text
            type="label"
            size="large"
            appearance={appearanceChildren}
            disabled={disabled}
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
            />
          )}
        </Stack>
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
      appearanceChildren={appearanceChildrens()}
    >
      {children}
    </ButtonStructure>
  );
};

export { Button };
