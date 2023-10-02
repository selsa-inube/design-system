import { forwardRef } from "react";
import {
  MdOutlineError,
  MdCheckCircle,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { Text } from "@data/Text";
import { Icon } from "@data/Icon";
import { Label } from "@inputs/Label";
import { Stack } from "@layouts/Stack";

import { Size } from "./props";
import { OptionList } from "./OptionList";
import { ISelectProps } from ".";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
} from "./styles";
import { OptionItem } from "./OptionItem";

export interface ISelectInterfaceProps extends ISelectProps {
  focused?: boolean;
  displayList: boolean;
  onOptionClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const getTypo = (size: Size) => {
  if (size === "compact") {
    return "medium";
  }
  return "large";
};

const Message = (
  props: Pick<ISelectProps, "disabled" | "status"> & { message?: string }
) => {
  const { disabled, status, message } = props;

  return status !== "pending" ? (
    <Stack alignItems="center" gap="4px" margin="s050 s0 s0 s200">
      <Icon
        appearance={status === "invalid" ? "error" : "success"}
        disabled={disabled}
        icon={status === "invalid" ? <MdOutlineError /> : <MdCheckCircle />}
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
    focused,
    onFocus,
    onBlur,
    options,
    displayList,
    value,
    onClick,
    onOptionClick,
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
            focused={focused}
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
        focused={focused}
        status={status}
        onClick={onClick}
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
          focused={focused}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
        />

        <Icon
          appearance="dark"
          icon={<MdOutlineArrowDropDown />}
          size="24px"
          spacing="none"
          disabled={disabled}
        />
      </StyledInputContainer>

      {status && (
        <Message disabled={disabled} status={status} message={message} />
      )}
      {displayList && !disabled && (
        <OptionList onClick={onOptionClick!}>
          {options.map((optionItem) => (
            <OptionItem
              key={optionItem.id}
              id={optionItem.id}
              label={optionItem.label}
            />
          ))}
        </OptionList>
      )}
    </StyledContainer>
  );
});

export { SelectUI };
