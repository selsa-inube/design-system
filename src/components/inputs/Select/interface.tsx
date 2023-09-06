import { useState, forwardRef } from "react";
import {
  MdOutlineError,
  MdCheckCircle,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";
import { DropdownMenu } from "@inputs/Select/DropdownMenu";

import { Size } from "./props";

import { ISelectProps } from ".";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";

export interface ISelectStateProps {
  isDisabled: boolean;
  status: string;
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
  const { isDisabled, status, errorMessage } = props;
  const transformedErrorMessage = errorMessage && `(${errorMessage})`;

  return (
    <StyledErrorMessageContainer isDisabled={isDisabled} status={status}>
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
  const { isDisabled, status, validMessage } = props;

  return (
    <StyledValidMessageContainer isDisabled={isDisabled} status={status}>
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
    status,
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

  const transformedInvalid = status === "invalid";

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
        status={status}
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
          status={status}
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

      {status === "invalid" && (
        <Invalid
          isDisabled={isDisabled!}
          status={status}
          errorMessage={errorMessage}
        />
      )}
      {status === "valid" && (
        <Success
          isDisabled={isDisabled!}
          status={status}
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
