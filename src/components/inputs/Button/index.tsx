import { StyledButton, StyledSpan, StyledIcon, StyledLink } from "./styles";
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

export interface IButtonProps {
  children: React.ReactNode;
  appearance?: Appearance;
  loading?: boolean;
  isDisabled?: boolean;
  isdisabled?: number;
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
    isDisabled = false,
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
    const transformedLinkHandleClick = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      if (isDisabled) {
        event.preventDefault();
      } else {
        handleClick && handleClick();
      }
    };

    return (
      <StyledLink
        to={path}
        isdisabled={+isDisabled}
        variant={variant}
        appearance={appearance}
        fullwidth={+fullwidth}
        onClick={transformedLinkHandleClick}
      >
        <StyledButton
          appearance={appearance}
          isDisabled={isDisabled}
          spacing={spacing}
          variant={variant}
          fullwidth={fullwidth}
        >
          <StyledSpan isDisabled={isDisabled} variant={variant}>
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
      isDisabled={isDisabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={type}
      spacing={spacing}
      variant={variant}
      fullwidth={fullwidth}
      onClick={isDisabled ? null : handleClick}
    >
      {loading && !isDisabled ? (
        <Spinner
          appearance={getSpinnerColor(variant, appearance)}
          transparent={variant === "filled"}
          size="small"
        />
      ) : (
        <StyledSpan isDisabled={isDisabled} variant={variant}>
          {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
          {children}
          {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
        </StyledSpan>
      )}
    </StyledButton>
  );
};

export { Button };
