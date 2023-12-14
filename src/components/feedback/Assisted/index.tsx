import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";

import { useMediaQuery } from "@hooks/useMediaQuery";
import { inube } from "@shared/tokens";

import { Icon } from "@data/Icon";
import { Text } from "@data/Text";
import { Button } from "@inputs/Button";
import { Grid } from "@layouts/Grid";
import { Stack } from "@layouts/Stack";

import {
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

type ITitleButton = {
  before?: string;
  after?: string;
  finish?: string;
};

export interface IAssistedProps {
  steps: IStep[];
  currentStepId: IStep["id"];
  handlePrev: (id: IStep["id"]) => void;
  handleNext: (id: IStep["id"]) => void;
  titleButtonText?: ITitleButton;
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
    handlePrev,
    handleNext,
    titleButtonText: { before, after, finish } = {
      before: "Prev",
      after: "Next",
      finish: "Send",
    },
  } = props;

  const measure = useMediaQuery("(min-width: 600px)");

  const currentStep = steps.find((step) => step?.id === currentStepId);

  const currentStepIndex = steps.findIndex(
    (step) => step?.id === currentStepId
  );

  return (
    <Grid templateColumns={!measure ? "1fr" : "auto 1fr auto"}>
      {measure && (
        <Stack alignItems="center">
          <Button
            spacing="wide"
            variant="none"
            iconBefore={<MdArrowBack />}
            onClick={() => handlePrev(currentStep?.id!)}
            appearance="primary"
            disabled={currentStepIndex === 0}
          >
            {before}
          </Button>
        </Stack>
      )}

      <Stack direction="column" width="100%" margin="s0 s0 s075 s0">
        <Grid templateColumns="auto auto 1fr auto" gap="s100">
          {!measure && (
            <Icon
              appearance="primary"
              icon={<MdArrowBack style={{ padding: "2px 0px" }} />}
              size="20px"
              onClick={() => handlePrev(currentStep?.id!)}
              disabled={currentStepIndex === 0}
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
              onClick={() => handleNext(currentStep?.id!)}
            />
          )}
        </Grid>
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
            onClick={() => handleNext(currentStep?.id!)}
          >
            {currentStep?.id === steps.length ? finish : after}
          </Button>
        </Stack>
      )}
    </Grid>
  );
};

export { Assisted };
