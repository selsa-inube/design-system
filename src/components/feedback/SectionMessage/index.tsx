import { useState } from "react";
import { CountdownBar, Stack, Text, useMediaQuery } from "@inube/design-system";
import { MdClear } from "react-icons/md";
import { StyledIcon, StyledSectionMessage } from "./styles";
import { EAppearance } from "@src/types/colors.types";

interface SectionMessageProps {
  icon: JSX.Element;
  title: string;
  description: string;
  appearance: EAppearance;
  duration: number;
  closeSectionMessage: () => void;
}

function SectionMessage(props: SectionMessageProps) {
  const {
    icon,
    title,
    description,
    appearance,
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
          <StyledIcon appearance={appearance}>{icon}</StyledIcon>
          <Stack direction="column" gap="6px">
            <Text typo="labelLarge">{title}</Text>
            {!isMessageResponsive ? (
              <Text typo="bodySmall" appearance="secondary">
                {newDescription}
              </Text>
            ) : null}
          </Stack>
        </Stack>
        <Stack alignItems={isMessageResponsive ? "center" : undefined}>
          <MdClear size={16} cursor="pointer" onClick={closeSectionMessage} />
        </Stack>
      </Stack>
      {duration && (
        <CountdownBar
          isPaused={isPaused}
          appearance={appearance}
          duration={duration}
          handleCountdown={closeSectionMessage}
        />
      )}
    </StyledSectionMessage>
  );
}

export { SectionMessage };
export type { SectionMessageProps };
