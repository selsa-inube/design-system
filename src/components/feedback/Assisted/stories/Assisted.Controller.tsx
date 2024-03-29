import { useState } from "react";
import { Assisted, IAssistedProps } from "..";

const AssistedController = (props: IAssistedProps) => {
  const { steps, currentStepId } = props;

  const [currentStep, setCurrentStep] = useState(currentStepId);

  const handlePrev = (id: number) => {
    setCurrentStep(id - 1);
  };

  const handleNext = (id: number) => {
    if (steps.length > id) {
      setCurrentStep(id + 1);
    }
  };

  return (
    <Assisted
      {...props}
      steps={steps}
      currentStepId={currentStep}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  );
};

export { AssistedController };
