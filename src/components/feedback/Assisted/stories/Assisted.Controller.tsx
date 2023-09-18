import { useState } from "react";
import { Assisted, IAssistedProps } from "..";

const AssistedController = (props: IAssistedProps) => {
  const { steps, currentStepId, titleButtonBefore, titleButtonAfter } = props;
  const [currentStep, setCurrentStep] = useState(currentStepId);

  const handleNextStep = (currentStep: number) => {
    if (currentStep <= steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = (currentStep: number) => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onStepChangeFunctions = {
    previous: () => handlePreviousStep(currentStep),
    next: () => handleNextStep(currentStep),
  };

  return (
    <Assisted
      steps={steps}
      currentStepId={currentStep}
      onStepChange={onStepChangeFunctions}
      titleButtonAfter={titleButtonAfter}
      titleButtonBefore={titleButtonBefore}
    />
  );
};

export { AssistedController };
