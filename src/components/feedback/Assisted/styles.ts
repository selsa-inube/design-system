import styled from "styled-components";
import { inube } from "@src/shared/tokens";
import { Themed } from "@shared/types/types";
import { IAssistedProps } from ".";

interface IStyledAssistedProps extends IAssistedProps {
  theme?: Themed;
  arrayLength: number;
  currentStep: number;
  measure: boolean;
}

const StyledProgressBar = styled.div`
  border-radius: 10px;
  transition: width 0.5s;
  height: 16px;
  width: 100%;
  background-color: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
`;

const StyledProgressIndicator = styled.div`
  border-radius: 8px;
  transition: width 0.5s;
  height: 16px;
  width: ${({ arrayLength, currentStep }: IStyledAssistedProps) => {
    if (currentStep === 1) {
      return "6%";
    }
    if (currentStep === 1) {
      return "2%";
    }
    return `${(currentStep / arrayLength) * 100}%`;
  }};
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.primary?.regular ||
    inube.color.surface.primary?.regular};
`;

const StyledStepIndicator = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  margin-bottom: ${inube.spacing.s100};
  border-color: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.stroke?.primary?.regular ||
    inube.color.stroke.primary?.regular};
`;

export { StyledProgressBar, StyledProgressIndicator, StyledStepIndicator };
