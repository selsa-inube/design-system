import { useState, forwardRef } from "react";
import {
  MdOutlineError,
  MdCheckCircle,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";
import { DropdownMenu } from "@inputs/Select/DropdownMenu";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";
import { ISelectProps } from ".";
import { Size } from "./props";

export interface ISelectStateProps {
  isDisabled: boolean;
  state: string;
  validMessage?: string;
  errorMessage?: string;
}

export interface ISelectInterfaceProps extends ISelectProps {
  isFocused?: boolean;
  openOptions: boolean;
  onCloseOptions: () => void;
}

const getTypo = (size: Size) => {
  if (size === "compact") {
    return "medium";
  }
  return "large";
};

const Invalid = (props: ISelectStateProps) => {
  const { isDisabled, state, errorMessage } = props;
  const transformedErrorMessage = errorMessage && `(${errorMessage})`;

  return (
    <StyledErrorMessageContainer isDisabled={isDisabled} state={state}>
      <MdOutlineError />
      <Text
        type="body"
        size="small"
        margin="8px 0px 0px 4px"
        appearance="error"
        disabled={isDisabled}
      >
        {transformedErrorMessage}
      </Text>
    </StyledErrorMessageContainer>
  );
};

const Success = (props: ISelectStateProps) => {
  const { isDisabled, state, validMessage } = props;

  return (
    <StyledValidMessageContainer isDisabled={isDisabled} state={state}>
      <MdCheckCircle />
      <Text
        type="body"
        size="small"
        margin="8px 0px 0px 4px"
        appearance="success"
        disabled={isDisabled}
      >
        {validMessage}
      </Text>
    </StyledValidMessageContainer>
  );
};

const SelectUI = forwardRef((props: ISelectInterfaceProps, ref) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled,
    onChange,
    required,
    state,
    errorMessage,
    validMessage,
    size,
    fullwidth,
    isFocused,
    onFocus,
    onBlur,
    options,
    openOptions,
    value,
    handleClick,
    onCloseOptions,
  } = props;

  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionClick = (idOption: string) => {
    const option = options.find((option) => option.id === idOption);
    setSelectedOption(option?.label);
  };

  const interceptorOnClick = (e: MouseEvent) => {
    if (typeof handleClick === "function") {
      handleClick(e);
    }
    if (typeof onCloseOptions === "function") {
      onCloseOptions();
    }
  };

  const transformedInvalid = state === "invalid" ? true : false;

  return (
    <StyledContainer fullwidth={fullwidth} isDisabled={isDisabled} ref={ref}>
      <StyledContainerLabel
        alignItems="center"
        wrap="wrap"
        size={size}
        isDisabled={isDisabled}
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={isDisabled}
            focused={isFocused}
            invalid={transformedInvalid}
            size={getTypo(size!)}
          >
            {label}
          </Label>
        )}

        {required && !isDisabled && (
          <Text type="body" size="small" appearance="dark">
            (Requerido)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        isDisabled={isDisabled}
        isFocused={isFocused}
        state={state}
      >
        <StyledInput
          autoComplete="off"
          readOnly={true}
          value={selectedOption || value}
          name={name}
          id={id}
          placeholder={placeholder}
          isDisabled={isDisabled}
          required={required}
          size={size}
          state={state}
          fullwidth={fullwidth}
          isFocused={isFocused}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={(e: MouseEvent) => interceptorOnClick(e)}
        />
        <StyledIcon isDisabled={isDisabled}>
          <MdOutlineArrowDropDown onClick={onCloseOptions} />
        </StyledIcon>
      </StyledInputContainer>

      {state === "invalid" && (
        <Invalid
          isDisabled={isDisabled!}
          state={state}
          errorMessage={errorMessage}
        />
      )}
      {state === "valid" && (
        <Success
          isDisabled={isDisabled!}
          state={state}
          validMessage={validMessage}
        />
      )}
      {openOptions && !isDisabled && (
        <DropdownMenu
          options={options}
          isOpenOptions={openOptions}
          handleClick={handleOptionClick}
          onCloseOptions={onCloseOptions}
          handleSelect={handleOptionClick}
        />
      )}
    </StyledContainer>
  );
});

export { SelectUI };
