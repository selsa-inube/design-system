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

export interface IAssistedProps {
  steps: IStep[];
  currentStepId: IStep["id"];
  onStepChange: (id: IStep["id"]) => void;
  sequential?: boolean;
  completedStepIds?: number[];
  smallScreen?: boolean;
  titleButtonBefore?: string;
  titleButtonAfter?: string;
  size?: "medium" | "large";
}

interface IProgressBarProps {
  currentStep: IStep["id"];
  arrayLength: number;
  size?: IAssistedProps["size"];
}

const handleStepChange = (
  currentStep: IStep["id"],
  steps: IAssistedProps["steps"],
  onStepChange: IAssistedProps["onStepChange"],
  direction: "previous" | "next"
) => {
  if (direction === "previous" && currentStep > 0) {
    onStepChange(steps?.[currentStep - 1]?.id);
  } else if (direction === "next" && currentStep < steps.length - 1) {
    onStepChange(steps?.[currentStep + 1]?.id);
  }
};

const ProgressBar = (props: IProgressBarProps) => {
  const { currentStep, arrayLength, size } = props;
  return (
    <StyledProgressBar size={size}>
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
    sequential = false,
    //completedStepIds,
    titleButtonBefore,
    titleButtonAfter,
    size = "large",
  } = props;

  const currentStep = steps.find((step) => step?.id === currentStepId);

  const currentStepIndex = steps.findIndex(
    (step) => step?.id === currentStepId
  );

  return (
    <AssistedContainer size={size}>
      {size === "large" && (
        <Stack>
          <Button
            spacing="wide"
            variant="none"
            iconBefore={<MdArrowBack />}
            onClick={
              sequential || !currentStepIndex
                ? undefined
                : () =>
                    handleStepChange(
                      currentStepIndex,
                      steps,
                      onStepChange,
                      "previous"
                    )
            }
            appearance={!currentStepIndex ? "gray" : "primary"}
          >
            {titleButtonBefore}
          </Button>
        </Stack>
      )}
      <Stack direction="column">
        <Stack gap={inube.spacing.s050}>
          {size === "medium" && (
            <Icon
              appearance={!currentStepIndex ? "gray" : "primary"}
              icon={<MdArrowBack />}
              size="20px"
              onClick={() =>
                handleStepChange(
                  currentStepIndex,
                  steps,
                  onStepChange,
                  "previous"
                )
              }
            />
          )}
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
          <Text type="label">{currentStep?.label}</Text>
          {size === "medium" && (
            <Icon
              appearance="primary"
              icon={<MdArrowForward />}
              size="20px"
              onClick={() =>
                handleStepChange(currentStepIndex, steps, onStepChange, "next")
              }
            />
          )}
        </Stack>
        <Stack alignItems="center" gap={inube.spacing.s100}>
          <ProgressBar
            size={size}
            currentStep={currentStepIndex + 1}
            arrayLength={steps.length}
          />
          {size === "large" && (
            <Text type="label">
              {currentStepIndex + 1}/{steps.length}
            </Text>
          )}
        </Stack>
      </Stack>
      {size === "large" && (
        <Stack>
          <Button
            spacing="wide"
            variant="none"
            iconAfter={<MdArrowForward />}
            onClick={
              sequential
                ? undefined
                : () =>
                    handleStepChange(
                      currentStepIndex,
                      steps,
                      onStepChange,
                      "next"
                    )
            }
          >
            {titleButtonAfter}
          </Button>
        </Stack>
      )}
    </AssistedContainer>
  );
};

export { Assisted };
