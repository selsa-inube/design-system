import styled from "styled-components";
import { GridProps } from ".";
import { inube } from "@shared/tokens";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ templateColumns }: GridProps) => templateColumns};
  grid-template-rows: ${({ templateRows }: GridProps) => templateRows};
  grid-template-areas: ${({ templateAreas }: GridProps) => templateAreas};
  gap: ${({ gap }: GridProps) => {
    const gapValue = gap!.split(" ");
    return gapValue
      .map((value) => inube?.spacing?.[value as keyof typeof inube.spacing])
      .join(" ");
  }};
  justify-items: ${({ justifyItems }: GridProps) => justifyItems};
  align-items: ${({ alignItems }: GridProps) => alignItems};
  justify-content: ${({ justifyContent }: GridProps) => justifyContent};
  align-content: ${({ alignContent }: GridProps) => alignContent};
  grid-auto-columns: ${({ autoColumns }: GridProps) => autoColumns};
  grid-auto-rows: ${({ autoRows }: GridProps) => autoRows};
  grid-auto-flow: ${({ autoFlow }: GridProps) => autoFlow};
  margin: ${({ margin }: GridProps) => {
    const marginValue = margin!.split(" ");
    return marginValue
      .map((value) => inube?.spacing?.[value as keyof typeof inube.spacing])
      .join(" ");
  }};
  padding: ${({ padding }: GridProps) => {
    const paddingValue = padding!.split(" ");
    return paddingValue
      .map((value) => inube?.spacing?.[value as keyof typeof inube.spacing])
      .join(" ");
  }};
  height: ${({ height }: GridProps) => height};
  width: ${({ width }: GridProps) => width};
`;

export { StyledGrid };
