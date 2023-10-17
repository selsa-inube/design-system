import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";

import { Icon } from "@data/Icon";
import { Text } from "@data/Text";
import { Button } from "@inputs/Button";
import { Stack } from "@layouts/Stack";
import { inube } from "@shared/tokens";

import {
  StyledAssistedContainer,
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
} from "./styles";

type IStep = {
  id: number;
  label: string;
  description?: string;
};

interface IProgressBarProps {
  currentStep: IStep["id"];
  arrayLength: number;
  size?: IAssistedProps["size"];
}

export interface IAssistedProps {
  steps: IStep[];
  currentStepId: IStep["id"];
  onStepChange: (id: IStep["id"]) => void;
  completedStepIds?: number[];
  titleButtonBefore?: string;
  titleButtonAfter?: string;
  size?: "medium" | "large";
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
        size={size}
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
    size = "large",
    titleButtonBefore,
    titleButtonAfter,
  } = props;

  const currentStep = steps.find((step) => step?.id === currentStepId);

  const currentStepIndex = steps.findIndex(
    (step) => step?.id === currentStepId
  );

  return (
    <StyledAssistedContainer size={size}>
      {size === "large" && (
        <Stack alignItems="center">
          <Button
            spacing="wide"
            variant="none"
            iconBefore={<MdArrowBack />}
            onClick={() =>
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
      <Stack
        direction="column"
        width={size === "medium" ? "288px" : "100%"}
        margin="s0 s0 s075 s0"
      >
        <Stack gap={inube.spacing.s100}>
          {size === "medium" && (
            <Icon
              appearance={!currentStepIndex ? "gray" : "primary"}
              icon={<MdArrowBack style={{ padding: "2px 0px" }} />}
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
              <Text type="label" size="medium" appearance="primary">
                {currentStepId}
              </Text>
            ) : (
              <Icon
                appearance="primary"
                icon={<MdCheckCircle />}
                size="20px"
                spacing="compact"
              />
            )}
          </StyledStepIndicator>
          <Text type="title" size={size === "large" ? "medium" : "small"}>
            {currentStep?.label}
          </Text>
          {size === "medium" && (
            <Icon
              appearance="primary"
              icon={<MdArrowForward style={{ padding: "0px 2px" }} />}
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
        <Text
          type="label"
          appearance="gray"
          size="medium"
          margin="12px 0px 0px 0px"
        >
          {currentStep?.description}
        </Text>
      </Stack>
      {size === "large" && (
        <Stack alignItems="center">
          <Button
            spacing="wide"
            variant="none"
            iconAfter={<MdArrowForward />}
            onClick={() =>
              handleStepChange(currentStepIndex, steps, onStepChange, "next")
            }
          >
            {titleButtonAfter}
          </Button>
        </Stack>
      )}
    </StyledAssistedContainer>
  );
};

export { Assisted };
