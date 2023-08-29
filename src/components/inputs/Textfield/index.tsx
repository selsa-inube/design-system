import { useState } from "react";

import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";

import { InputType, Size, Status, Themed } from "./props";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
} from "./styles";
import { IconType } from "react-icons/lib";

import { Icon } from "@data/Icon";
import { Appearance } from "@data/Text/props";

export interface ITextfieldProps extends Themed {
  label?: string;
  name: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
  type?: InputType;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  required: boolean;
  status?: Status;
  message?: string;
  size?: Size;
  fullwidth?: boolean;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  focused?: boolean;
}
export interface IMessageProps {
  status?: Status;
  disabled?: boolean;
  message?: string;
}

const Message = (props: IMessageProps) => {
  const { disabled, status, message } = props;
  let IconComponent: IconType | null = null;
  let appearance: Appearance = "gray";

  if (status === "invalid") {
    IconComponent = MdOutlineError;
    appearance = "error";
  } else if (status === "valid") {
    IconComponent = MdCheckCircle;
    appearance = "success";
  }

  return (
    IconComponent && (
      <StyledMessageContainer disabled={disabled} status={status}>
        <IconComponent />
        <Text
          type="body"
          size="small"
          margin="8px 0px 0px 4px"
          appearance={appearance}
          disabled={disabled}
        >
          {message && `${message}`}
        </Text>
      </StyledMessageContainer>
    )
  );
};

const Textfield = (props: ITextfieldProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    type = "text",
    value,
    onChange,
    iconBefore,
    iconAfter,
    required = false,
    status = "pending",
    message,
    size = "wide",
    fullwidth = false,
    onFocus,
    onBlur,
    readOnly,
  } = props;

  const [focused, setFocused] = useState(false);

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setFocused(true);
    }
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  return (
    <StyledContainer fullwidth={fullwidth} disabled={disabled}>
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
            focused={focused}
            invalid={status === "invalid" ? true : false}
            size={size === "compact" ? "medium" : "large"}
            margin="0px 0px 0px 16px"
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text
            type="body"
            size="small"
            appearance="dark"
            margin="0px 0px 0px 4px"
          >
            (Requerido)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        disabled={disabled}
        focused={focused}
        status={status}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
      >
        {iconBefore && (
          <Icon
            appearance="gray"
            disabled={disabled}
            icon={iconBefore}
            size="24px"
            spacing="wide"
          />
        )}

        <StyledInput
          label={label}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          value={value}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          required={required}
          size={size}
          status={status}
          fullwidth={fullwidth}
          focused={focused}
          onChange={onChange}
          onFocus={interceptFocus}
          onBlur={interceptBlur}
          readOnly={readOnly}
        />

        {iconAfter && (
          <Icon
            appearance="gray"
            disabled={disabled}
            icon={iconAfter}
            size="24px"
            spacing="wide"
          />
        )}
      </StyledInputContainer>

      {status && (
        <Message disabled={disabled} status={status} message={message} />
      )}
    </StyledContainer>
  );
};

export { Textfield };
