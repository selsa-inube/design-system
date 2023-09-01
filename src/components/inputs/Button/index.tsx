import { Spinner } from "@feedback/Spinner";
import { colors } from "@shared/colors/colors";
import {
  Appearance,
  Type,
  Spacing,
  Variant,
  SpinnerColorHomologation,
  SpinnerColor,
} from "./props";
import { StyledButton, StyledSpan, StyledIcon, StyledLink } from "./styles";

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
  handleClick?: (e?: Event) => void;
  path?: string;
}

const fixedColors: { [key: string]: any } = Object.assign(
  {},
  colors.sys.actions
);
delete fixedColors.disabled;

const spinnerColorHomologation: SpinnerColorHomologation = {
  filled: {
    primary: "white",
    secondary: "dark",
    confirm: "white",
    warning: "dark",
    remove: "white",
    help: "white",
  },
  outlined: {
    primary: "blue",
    secondary: "dark",
    confirm: "green",
    warning: "yellow",
    remove: "red",
    help: "purple",
  },
  none: {
    primary: "blue",
    secondary: "dark",
    confirm: "green",
    warning: "yellow",
    remove: "red",
    help: "purple",
  },
};

const getSpinnerColor = (
  variant: Variant,
  appearance: Appearance
): SpinnerColor => {
  return spinnerColorHomologation[variant][appearance] as SpinnerColor;
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
    handleClick,
    path,
  } = props;

  if (type === "link" && !path) {
    console.warn("You must provide a path to use a link button");
  }

  if (type === "link") {
    return (
      <StyledLink
        to={path}
        isdisabled={+disabled}
        variant={variant}
        appearance={appearance}
        fullwidth={+fullwidth}
      >
        <StyledButton
          appearance={appearance}
          disabled={disabled}
          spacing={spacing}
          variant={variant}
          fullwidth={fullwidth}
        >
          <StyledSpan disabled={disabled} variant={variant}>
            {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
            {children}
            {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
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
    >
      {loading && !disabled ? (
        <Spinner
          appearance={getSpinnerColor(variant, appearance)}
          transparent={variant === "filled"}
          size="small"
        />
      ) : (
        <StyledSpan disabled={disabled} variant={variant}>
          {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
          {children}
          {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
        </StyledSpan>
      )}
    </StyledButton>
  );
};

export { Button };
