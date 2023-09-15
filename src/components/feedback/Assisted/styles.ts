import styled from "styled-components";
import { Themed } from "@shared/types/types";
import { inube } from "@src/shared/tokens";
import { IAssistedProps } from ".";

interface IStyledAssistedProps extends IAssistedProps {
  theme?: Themed;
}

const AssistedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${inube.spacing.s150};
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
`;

const ProgressBar = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.primary?.regular ||
    inube.color.surface.primary.regular};
  width: 100%;
  height: 16px;
`;

export { AssistedContainer, ProgressBar };
