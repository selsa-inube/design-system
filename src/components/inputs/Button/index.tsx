import { Icon } from "@data/Icon";
import { Spinner } from "@feedback/Spinner";
import { Text } from "@data/Text";

import { Appearance, Type, Spacing, Variant } from "./props";

import { StyledButton, StyledSpan, StyledLink } from "./styles";

export interface IButtonProps {
  children?: React.ReactNode;
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

const ButtonStructure = (props: IButtonProps) => {
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
          appearance={appearanceChildrens(variant, appearance)}
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
              appearance={appearanceChildrens(variant, appearance)}
              disabled={disabled}
            />
          )}
          <Text
            type="label"
            size="large"
            appearance={appearanceChildrens(variant, appearance)}
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
              appearance={appearanceChildrens(variant, appearance)}
              disabled={disabled}
            />
          )}
        </StyledSpan>
      )}
    </StyledButton>
  );
};

const Button = (props: IButtonProps) => {
  const { type = "button", path } = props;

  if (type === "link" && !path) {
    console.warn("You must provide a path to use a link button");
  }

  if (type === "link") {
    return (
      <StyledLink to={path}>
        <ButtonStructure {...props} />
      </StyledLink>
    );
  }

  return <ButtonStructure {...props} />;
};

export { Button };
