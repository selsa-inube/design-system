import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";

import { useMediaQuery } from "@hooks/useMediaQuery";
import { inube } from "@shared/tokens";

import { Icon } from "@data/Icon";
import { Text } from "@data/Text";
import { Button } from "@inputs/Button";
import { Stack } from "@layouts/Stack";

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
}

export interface IAssistedProps {
  steps: IStep[];
  currentStepId: IStep["id"];
  handlePrev: (id: IStep["id"]) => void;
  handleNext: (id: IStep["id"]) => void;
  titleButtonBefore?: string;
  titleButtonAfter?: string;
}

const onPrev = (
  currentStep: IStep["id"],
  steps: IAssistedProps["steps"],
  handlePrev: IAssistedProps["handlePrev"]
) => {
  if (currentStep > 0) {
    handlePrev(steps?.[currentStep - 1]?.id);
  }
};

const onNext = (
  currentStep: IStep["id"],
  steps: IAssistedProps["steps"],
  handleNext: IAssistedProps["handleNext"]
) => {
  if (currentStep < steps.length - 1) {
    handleNext(steps?.[currentStep + 1]?.id);
  }
};

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
    handlePrev,
    handleNext,
    titleButtonBefore = "Prev",
    titleButtonAfter = "Next",
  } = props;

  const measure = useMediaQuery("(min-width: 600px)");

  const currentStep = steps.find((step) => step?.id === currentStepId);

  const currentStepIndex = steps.findIndex(
    (step) => step?.id === currentStepId
  );

  return (
    <StyledAssistedContainer measure={measure}>
      {measure && (
        <Stack alignItems="center">
          <Button
            spacing="wide"
            variant="none"
            iconBefore={<MdArrowBack />}
            onClick={
              !currentStepIndex
                ? undefined
                : () => onPrev(currentStepIndex, steps, handlePrev)
            }
            appearance={"primary"}
            disabled={!currentStepIndex}
          >
            {titleButtonBefore}
          </Button>
        </Stack>
      )}
      <Stack
        direction="column"
        width={!measure ? "288px" : "100%"}
        margin="s0 s0 s075 s0"
      >
        <Stack gap={inube.spacing.s100}>
          {!measure && (
            <Icon
              appearance={!currentStepIndex ? "gray" : "primary"}
              icon={<MdArrowBack style={{ padding: "2px 0px" }} />}
              size="20px"
              onClick={() => onPrev(currentStepIndex, steps, handlePrev)}
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
          <Text type="title" size={measure ? "medium" : "small"}>
            {currentStep?.label}
          </Text>
          {!measure && (
            <Icon
              appearance="primary"
              icon={<MdArrowForward style={{ padding: "0px 2px" }} />}
              size="20px"
              onClick={() => onNext(currentStepIndex, steps, handleNext)}
            />
          )}
        </Stack>
        <Stack alignItems="center" gap={inube.spacing.s100}>
          <ProgressBar
            currentStep={currentStepIndex + 1}
            arrayLength={steps.length}
          />
          {measure && (
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
      {measure && (
        <Stack alignItems="center">
          <Button
            spacing="wide"
            variant="none"
            iconAfter={<MdArrowForward />}
            onClick={() => onNext(currentStepIndex, steps, handleNext)}
          >
            {titleButtonAfter}
          </Button>
        </Stack>
      )}
    </StyledAssistedContainer>
  );
};

export { Assisted };
