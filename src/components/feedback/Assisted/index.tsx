import { MdArrowBack, MdArrowForward, MdOutlineCircle } from "react-icons/md";

import { Button } from "@inputs/Button";
import { Icon } from "@data/Icon";
import { inube } from "@shared/tokens";
import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";

import { AssistedContainer, ProgressBar } from "./styles";

type IStep = {
  id: string | number;
  label: string;
  description?: string;
};

export interface IAssistedProps {
  steps: IStep[];
  currentStepId: IStep["id"];
  onStepChange: (step: IStep["id"]) => void;
  isSequential?: boolean;
  completedStepIds: (string | number)[];
  smallScreen: boolean;
  titleButtonBefore: string;
  titleButtonAfter: string;
}

const Assisted = (props: IAssistedProps) => {
  const {
    steps,
    currentStepId,
    onStepChange,
    isSequential = true,
    completedStepIds,
    titleButtonBefore,
    titleButtonAfter,
  } = props;

  const handleStepChange = (stepId: IStep["id"]) => {
    onStepChange(stepId);
  };

  const title = steps.find((step) => step.id === currentStepId);

  const step = steps.findIndex((step) => step.id === currentStepId);
  return (
    <AssistedContainer>
      <Stack>
        <Button spacing="wide" variant="none" iconBefore={<MdArrowBack />}>
          {titleButtonBefore}
        </Button>
      </Stack>
      <Stack direction="column">
        <Stack alignItems="center" gap={inube.spacing.s100}>
          <Icon appearance="primary" icon={<MdOutlineCircle />} />
          <Text type="label">{title?.label}</Text>
        </Stack>
        <Stack alignItems="center" gap={inube.spacing.s100}>
          <ProgressBar />
          <Text type="label">
            {step + 1}/{steps.length}
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Button
          spacing="wide"
          variant="none"
          iconAfter={<MdArrowForward />}
          handleClick={() => handleStepChange(steps[step + 1].id)}
        >
          {titleButtonAfter}
        </Button>
      </Stack>
    </AssistedContainer>
  );
};

export { Assisted };
