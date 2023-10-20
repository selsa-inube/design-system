import { Icon } from "@data/Icon";
import { Text } from "@data/Text";
import { Spinner } from "@feedback/Spinner";
import { Stack } from "@layouts/Stack";

import { Appearance, Type, Spacing, Variant } from "./props";

import { StyledButton, StyledLink } from "./styles";

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
  cursorHover?: boolean;
  parentHover?: boolean;
}

function childrenAppearence(variant: Variant, appearance: Appearance) {
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
    cursorHover = false,
    parentHover = false,
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
      cursorHover={cursorHover}
      parentHover={parentHover}
    >
      {loading && !disabled ? (
        <Spinner
          appearance={childrenAppearence(variant, appearance)}
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
              appearance={childrenAppearence(variant, appearance)}
              disabled={disabled}
              cursorHover={cursorHover}
              parentHover={parentHover}
            />
          )}
          <Text
            type="label"
            size="large"
            appearance={childrenAppearence(variant, appearance)}
            disabled={disabled}
            ellipsis={true}
            cursorHover={cursorHover}
            parentHover={parentHover}
          >
            {children}
          </Text>
          {iconAfter && (
            <Icon
              icon={iconAfter}
              spacing="none"
              size="18px"
              appearance={childrenAppearence(variant, appearance)}
              disabled={disabled}
              cursorHover={cursorHover}
              parentHover={parentHover}
            />
          )}
        </Stack>
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
