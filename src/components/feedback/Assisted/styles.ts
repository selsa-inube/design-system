import styled, { css } from "styled-components";
import { inube } from "@src/shared/tokens";
import { Themed } from "@shared/types/types";
import { IAssistedProps } from ".";

interface IStyledAssistedProps extends IAssistedProps {
  theme?: Themed;
  arrayLength: number;
  currentStep: number;
}

const AssistedContainer = styled.div`
  display: grid;
  gap: ${inube.spacing.s150};
  grid-template-columns: ${({ size }: IStyledAssistedProps) =>
    size === "large" ? "max-content max-content max-content" : "max-content"};
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
  width: ${({ size }: IStyledAssistedProps) =>
    size === "medium" ? "288px" : "1033px"};
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
`;

const StyledProgressIndicator = styled.div`
  border-radius: 8px;
  transition: width 0.5s;
  height: 16px;
  width: ${({ arrayLength, currentStep }: IStyledAssistedProps) =>
    currentStep === 1 ? "2%" : `${(currentStep / arrayLength) * 100}%`};
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
  margin-bottom: ${inube.spacing.s100};
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
