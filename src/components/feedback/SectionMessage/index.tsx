import { useState } from "react";

import { MdClear } from "react-icons/md";
import { StyledSectionMessage } from "./styles";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";
import { CountdownBar } from "@feedback/CountdownBar";

import { Icon } from "@data/Icon";
import { Appearance } from "./props";

export interface ISectionMessageProps {
  icon: JSX.Element;
  title: string;
  description: string;
  appearance: Appearance;
  duration: number;
  closeSectionMessage: () => void;
  isMessageResponsive: boolean;
}

const SectionMessage = (props: ISectionMessageProps) => {
  const {
    icon,
    title,
    description,
    appearance = "primary",
    duration,
    closeSectionMessage,
  } = props;

  const [isPaused, setIsPaused] = useState(false);
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const isMessageResponsive = useMediaQuery("(max-width: 565px)");

  const MAX_DESCRIPTION_LENGTH = 240;
  const newDescription = description.substring(0, MAX_DESCRIPTION_LENGTH);

  return (
    <StyledSectionMessage
      appearance={appearance}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isMessageResponsive={isMessageResponsive}
    >
      <Stack justifyContent="space-between">
        <Stack
          gap="16px"
          alignItems={isMessageResponsive ? "center" : undefined}
        >
          <Icon size="24px" appearance={appearance} icon={icon} />
          <Stack direction="column" gap="6px">
            <Text size="large">{title}</Text>
            {!isMessageResponsive ? (
              <Text size="small" appearance="gray">
                {newDescription}
              </Text>
            ) : null}
          </Stack>
        </Stack>
        <Stack alignItems={isMessageResponsive ? "center" : undefined}>
          <Icon
            size="16px"
            onClick={closeSectionMessage}
            appearance={appearance}
            icon={<MdClear />}
          />
        </Stack>
      </Stack>
      {duration && (
        <CountdownBar
          paused={isPaused}
          appearance={appearance}
          duration={duration}
          onCountdown={closeSectionMessage}
        />
      )}
    </StyledSectionMessage>
  );
};

export { SectionMessage };
