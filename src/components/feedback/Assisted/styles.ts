import styled from "styled-components";
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
  grid-template-columns: auto 1fr auto;
  gap: ${inube.spacing.s150};
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
`;

const StyledProgressBar = styled.div`
  border-radius: 8px;
  width: 100%;
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

export { AssistedContainer, StyledProgressBar, StyledProgressIndicator };
