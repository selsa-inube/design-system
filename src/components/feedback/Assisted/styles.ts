import styled, { css } from "styled-components";
import { inube } from "@src/shared/tokens";
import { Themed } from "@shared/types/types";
import { IAssistedProps } from ".";

interface IStyledAssistedProps extends IAssistedProps {
  theme?: Themed;
  arrayLength: number;
  currentStep: number;
}

const StyledAssistedContainer = styled.div`
  display: flex;
  height: ${({ size }: IStyledAssistedProps) =>
    size === "medium" ? "40px" : "48px"};
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};

  ${({ size }: IStyledAssistedProps) =>
    size === "medium" &&
    css`
      & > div > div > figure:last-child {
        margin-left: auto;
      }
    `}
`;

const StyledProgressBar = styled.div`
  border-radius: 10px;
  transition: width 0.5s;
  height: 16px;
  width: 100%;
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
`;

const StyledProgressIndicator = styled.div`
  border-radius: 8px;
  transition: width 0.5s;
  height: 16px;
  width: ${({ size, arrayLength, currentStep }: IStyledAssistedProps) => {
    if (size === "medium" && currentStep === 1) {
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
  align-items: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-bottom: ${({ theme }: IStyledAssistedProps) =>
    theme?.spacing.s100 || inube.spacing.s100};
  border: 2px solid
    ${({ theme }: IStyledAssistedProps) =>
      theme?.color?.stroke?.primary?.regular ||
      inube.color.stroke.primary?.regular};
`;

export {
  StyledAssistedContainer,
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
};
