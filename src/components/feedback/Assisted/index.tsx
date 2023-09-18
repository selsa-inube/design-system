import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";

import { Button } from "@inputs/Button";
import { Icon } from "@data/Icon";
import { inube } from "@shared/tokens";
import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";

import {
  AssistedContainer,
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
} from "./styles";

type IStep = {
  id: number;
  label: string;
  description?: string;
};

type IOnStepChange = {
  previous: () => void;
  next: () => void;
};

export interface IAssistedProps {
  steps: IStep[];
  currentStepId: IStep["id"];
  onStepChange: IOnStepChange;
  isSequential?: boolean;
  completedStepIds?: number[];
  smallScreen?: boolean;
  titleButtonBefore?: string;
  titleButtonAfter?: string;
}

interface IProgressBarProps {
  currentStep: number;
  arrayLength: number;
}

const ProgressBar = (props: IProgressBarProps) => {
  const { currentStep, arrayLength } = props;
  return (
    <StyledProgressBar>
      <StyledProgressIndicator
        currentStep={currentStep}
        arrayLength={arrayLength}
      />
    </StyledProgressBar>
  );
};

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

  const title = steps.find((step) => step?.id === currentStepId);

  const currentStep = steps.findIndex((step) => step?.id === currentStepId);

  return (
    <AssistedContainer>
      <Stack>
        <Button
          spacing="wide"
          variant="none"
          iconBefore={<MdArrowBack />}
          onClick={!currentStep ? undefined : () => onStepChange.previous()}
          appearance={!currentStep ? "gray" : "primary"}
        >
          {titleButtonBefore}
        </Button>
      </Stack>
      <Stack direction="column">
        <Stack alignItems="center" gap={inube.spacing.s025}>
          <StyledStepIndicator>
            {currentStepId !== steps.length ? (
              currentStepId
            ) : (
              <Icon
                appearance="primary"
                icon={<MdCheckCircle />}
                size="20px"
                spacing="compact"
              />
            )}
          </StyledStepIndicator>
          <Text type="label">{title?.label}</Text>
        </Stack>
        <Stack alignItems="center" gap={inube.spacing.s100}>
          <ProgressBar
            currentStep={currentStep + 1}
            arrayLength={steps.length}
          />
          <Text type="label">
            {currentStep + 1}/{steps.length}
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Button
          spacing="wide"
          variant="none"
          iconAfter={<MdArrowForward />}
          onClick={() => onStepChange.next()}
        >
          {titleButtonAfter}
        </Button>
      </Stack>
    </AssistedContainer>
  );
};

export { Assisted };
