import { useState } from "react";
import { MdCheckCircle, MdOutlineWarning } from "react-icons/md";

import { Text } from "@data/Text";
import { Label } from "@inputs/Label";

import { Icon } from "@data/Icon";
import { Stack } from "@src/components/layouts/Stack";

import { InputType, Size, Status } from "./props";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
} from "./styles";

export interface ITextfieldProps {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  type?: InputType;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  required?: boolean;
  status?: Status;
  message?: string;
  size?: Size;
  fullwidth?: boolean;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  focused?: boolean;
}

const Message = (props: Omit<ITextfieldProps, "id"> & { message?: string }) => {
  const { disabled, status, message } = props;

  return status !== "pending" ? (
    <StyledMessageContainer disabled={disabled} status={status}>
      <Stack
        //height="16px"
        alignItems="center"
        gap="4px"
        margin="s050 s0 s0 s200"
      >
        <Icon
          appearance={status === "invalid" ? "error" : "success"}
          disabled={disabled}
          icon={status === "invalid" ? <MdOutlineWarning /> : <MdCheckCircle />}
          size="14px"
        />
        <Text
          type="body"
          size="small"
          appearance={status === "invalid" ? "error" : "success"}
          disabled={disabled}
        >
          {message && `${message}`}
        </Text>
      </Stack>
    </StyledMessageContainer>
  ) : (
    <></>
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
    <StyledContainer fullwidth={fullwidth} disabled={disabled} size={size}>
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
            size={size === "compact" ? "18px" : "24px"}
            spacing="none"
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
            size={size === "compact" ? "18px" : "24px"}
            spacing="none"
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
