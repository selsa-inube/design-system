import styled from "styled-components";
import { IGridProps } from ".";
import { inube } from "@shared/tokens";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ templateColumns }: IGridProps) =>
    templateColumns};
  grid-template-rows: ${({ templateRows }: IGridProps) => templateRows};
  gap: ${({ gap }: IGridProps) => {
    const gapValue = gap!.split(" ");
    return gapValue
      .map((value) => inube?.spacing?.[value as keyof typeof inube.spacing])
      .join(" ");
  }};
  justify-items: ${({ justifyItems }: IGridProps) => justifyItems};
  align-items: ${({ alignItems }: IGridProps) => alignItems};
  justify-content: ${({ justifyContent }: IGridProps) => justifyContent};
  align-content: ${({ alignContent }: IGridProps) => alignContent};
  grid-auto-columns: ${({ autoColumns }: IGridProps) => autoColumns};
  grid-auto-rows: ${({ autoRows }: IGridProps) => autoRows};
  grid-auto-flow: ${({ autoFlow }: IGridProps) => autoFlow};
  margin: ${({ margin }: IGridProps) => {
    const marginValue = margin!.split(" ");
    return marginValue
      .map((value) => inube?.spacing?.[value as keyof typeof inube.spacing])
      .join(" ");
  }};
  padding: ${({ padding }: IGridProps) => {
    const paddingValue = padding!.split(" ");
    return paddingValue
      .map((value) => inube?.spacing?.[value as keyof typeof inube.spacing])
      .join(" ");
  }};
  height: ${({ height }: IGridProps) => height};
  width: ${({ width }: IGridProps) => width};
`;

export { StyledGrid };
