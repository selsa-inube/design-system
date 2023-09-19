import styled, { css } from "styled-components";
import { Themed } from "@shared/types/types";
import { inube } from "@src/shared/tokens";
import { IAssistedProps } from ".";

interface IStyledAssistedProps extends IAssistedProps {
  theme?: Themed;
  arrayLength: number;
  currentStep: number;
}

const AssistedContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ size }: IStyledAssistedProps) =>
    size === "large" ? "max-content max-content max-content" : "max-content"};
  gap: ${inube.spacing.s150};
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
  width: ${({ size }: IStyledAssistedProps) =>
    size === "medium" ? "288px" : "1033px"};
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
  transition: width 0.5s;
  height: 16px;
`;

const StyledProgressIndicator = styled.div`
  width: ${({ arrayLength, currentStep }: IStyledAssistedProps) =>
    currentStep === 1 ? "2%" : `${(currentStep / arrayLength) * 100}%`};
  border-radius: 8px;
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.primary?.regular ||
    inube.color.surface.primary?.regular};
  transition: width 0.5s;
  height: 16px;
`;

const StyledStepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-bottom: 8px;
  border: 2px solid
    ${({ theme }: IStyledAssistedProps) =>
      theme?.color?.stroke?.primary?.regular ||
      inube.color.stroke.primary?.regular};
`;

export {
  AssistedContainer,
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
};
