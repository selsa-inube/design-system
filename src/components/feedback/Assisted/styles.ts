import styled from "styled-components";
import { Themed } from "@shared/types/types";
import { inube } from "@src/shared/tokens";
import { IAssistedProps } from ".";

interface IStyledAssistedProps extends IAssistedProps {
  theme?: Themed;
}

const AssistedContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: ${inube.spacing.s150};
  background: ${({ theme }: IStyledAssistedProps) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
`;

const ProgressBar = styled.div`
  border-radius: 8px;
  width: 100%;
  background: linear-gradient(
    to right,
    ${inube.color.surface.dark.clear} 0%,
    ${inube.color.surface.dark.clear} calc(100 - 10px),
    ${inube.color.surface.primary.regular} 10px,
    ${inube.color.surface.primary.regular} 100%
  );
  transition: width 0.5s;
  height: 16px;
`;

export { AssistedContainer, ProgressBar };
