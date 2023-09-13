import styled from "styled-components";
import { inube } from "@shared/tokens";
import { Themed } from "@shared/types/types";
import { IBlanketProps } from ".";

interface IStyledBlanketProps extends IBlanketProps {
  theme?: Themed;
}

const StyledBlanket = styled.div`
  position: fixed;
  display: grid;
  place-items: ${(props: { isSmallScreen: string }) =>
    props.isSmallScreen ? "center" : "initial"};
  inset: 0;
  background-color: ${({ theme }: IStyledBlanketProps) =>
    theme?.color?.surface?.blanket?.regular ||
    inube.color.surface.blanket.regular};
  border: none;
  z-index: 1;
  overflow-y: auto;
`;

export { StyledBlanket };
