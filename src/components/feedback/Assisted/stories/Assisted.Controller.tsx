import { useState } from "react";
import { Assisted, IAssistedProps } from "..";

const AssistedController = (props: IAssistedProps) => {
  const { steps, currentStepId } = props;

  const [currentStep, setCurrentStep] = useState(currentStepId);

  const onStepChange = (id: number) => {
    setCurrentStep(id);
  };

  return (
    <Assisted
      {...props}
      steps={steps}
      currentStepId={currentStep}
      onStepChange={onStepChange}
    />
  );
};

export { AssistedController };
