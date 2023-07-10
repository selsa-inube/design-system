import { IButtonProps } from "./interfaces/Button.interface";
import { ButtonPrimary } from "./ButtonPrimary";
import { ErrorButon } from "./ButtonError";

const ButtonUI = (props: IButtonProps) => {
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

  if (appearance === "primary") {
    return (
      <ButtonPrimary
        appearance={appearance}
        isLoading={isLoading}
        isDisabled={isDisabled}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        type={type}
        spacing={spacing}
        variant={variant}
        isFullWidth={isFullWidth}
        handleClick={handleClick}
        path={path}
      >
        {children}
      </ButtonPrimary>
    );
  }

  if (appearance === "remove") {
    return (
      <ErrorButon
        appearance={appearance}
        isLoading={isLoading}
        isDisabled={isDisabled}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        type={type}
        spacing={spacing}
        variant={variant}
        isFullWidth={isFullWidth}
        handleClick={handleClick}
        path={path}
      >
        {children}
      </ErrorButon>
    );
  }
};

export { ButtonUI };
