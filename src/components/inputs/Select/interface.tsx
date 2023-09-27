import { forwardRef } from "react";
import {
  MdOutlineError,
  MdCheckCircle,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";
import { OptionList } from "@inputs/Select/OptionList";
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
import { OptionItem } from "./OptionItem";

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
  onOptionClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption?: string | number;
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

  return status !== "pending" ? (
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
  ) : (
    <></>
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
    onOptionClick,
    onCloseOptions,
  } = props;

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
          value={value}
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
          onClick={onClick}
        />
        <StyledIcon disabled={disabled}>
          <MdOutlineArrowDropDown onClick={onCloseOptions} />
        </StyledIcon>
      </StyledInputContainer>

      {status && (
        <Message disabled={disabled} status={status} message={message} />
      )}
      {openOptions && !disabled && (
        <OptionList onClick={(e) => onOptionClick(e)}>
          {options.map((optionItem) => (
            <OptionItem key={optionItem.id} id={optionItem.id}>
              {optionItem.label}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </StyledContainer>
  );
});

export { SelectUI };
