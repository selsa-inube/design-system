import { Icon } from "@data/Icon";
import { Spinner } from "@feedback/Spinner";
import { Text } from "@data/Text";

import { Appearance, Type, Spacing, Variant } from "./props";

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

export interface IButtonStructureProps extends IButtonProps {
  appearanceChildren: Appearance;
}

function appearanceChildrens(variant: Variant, appearance: Appearance) {
  if (variant === "filled") {
    if (
      appearance === "warning" ||
      appearance === "light" ||
      appearance === "gray"
    ) {
      return "dark";
    }
    return "light";
  }

  return appearance;
}

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
        <StyledSpan
          appearance={appearance}
          disabled={disabled}
          variant={variant}
        >
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
          appearanceChildren={appearanceChildrens(variant, appearance)}
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
      appearanceChildren={appearanceChildrens(variant, appearance)}
    >
      {children}
    </ButtonStructure>
  );
};

export { Button };
