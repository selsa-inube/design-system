import { useState, forwardRef } from "react";
import {
  MdOutlineError,
  MdCheckCircle,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";
import { DropdownMenu } from "@inputs/Select/DropdownMenu";
import { Icon } from "@data/Icon";
import { Size } from "./props";

import { ISelectProps } from ".";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledMessageContainer,
} from "./styles";

export interface ISelectStateProps {
  disabled: boolean;
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

const Message = (
  props: Omit<ISelectProps, "id" | "options"> & { message?: string }
) => {
  const { disabled, status, message } = props;

  return (
    status !== "pending" && (
      <StyledMessageContainer disabled={disabled} status={status}>
        <Icon
          appearance={status === "invalid" ? "error" : "success"}
          disabled={disabled}
          icon={status === "invalid" ? <MdOutlineError /> : <MdCheckCircle />}
        />
        <Text
          type="body"
          size="small"
          margin="8px 0px 0px 4px"
          appearance={status === "invalid" ? "error" : "success"}
          disabled={disabled}
        >
          {message && `${message}`}
        </Text>
      </StyledMessageContainer>
    )
  );
};
const SelectUI = forwardRef((props: ISelectInterfaceProps, ref) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled,
    onChange,
    required,
    status,
    message,
    size,
    fullwidth,
    isFocused,
    onFocus,
    onBlur,
    options,
    openOptions,
    value,
    onClick,
    onCloseOptions,
  } = props;

  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionClick = (idOption: string) => {
    const option = options.find((option) => option.id === idOption);
    setSelectedOption(option?.label);
  };

  const handleClick = (e: MouseEvent) => {
    onClick && onClick(e);

    onCloseOptions();
  };

  return (
    <StyledContainer fullwidth={fullwidth} disabled={disabled} ref={ref}>
      <StyledContainerLabel
        alignItems="center"
        wrap="wrap"
        size={size}
        disabled={disabled}
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            focused={isFocused}
            invalid={status === "invalid" ? true : false}
            size={getTypo(size!)}
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text type="body" size="small" appearance="dark">
            (Requerido)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        disabled={disabled}
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
          disabled={disabled}
          required={required}
          size={size}
          status={status}
          fullwidth={fullwidth}
          isFocused={isFocused}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={(e: MouseEvent) => handleClick(e)}
        />
        <StyledIcon disabled={disabled}>
          <MdOutlineArrowDropDown onClick={onCloseOptions} />
        </StyledIcon>
      </StyledInputContainer>

      {status && (
        <Message disabled={disabled} status={status} message={message} />
      )}
      {openOptions && !disabled && (
        <DropdownMenu
          options={options}
          isOpenOptions={openOptions}
          onClick={handleOptionClick}
          onCloseOptions={onCloseOptions}
        />
      )}
    </StyledContainer>
  );
});

export { SelectUI };
