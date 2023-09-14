import styled from "styled-components";
import { Themed } from "@shared/types/types";
import { IAssistedProps } from ".";
import { inube } from "@src/shared/tokens";

interface IStyledAssistedProps extends IAssistedProps {
  theme?: Themed;
}

const AssistedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
