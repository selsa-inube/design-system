import {
  AlignContent,
  AlignItems,
  AutoFlow,
  Height,
  JustifyContent,
  JustifyItems,
  Width,
} from "./props";
import { StyledGrid } from "./styles";

export interface IGridProps {
  templateColumns?: string;
  templateRows?: string;
  gap?: string;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: AutoFlow;
  margin?: string;
  padding?: string;
  height?: Height;
  width?: Width;
  children: React.ReactNode;
}

const Grid = (props: IGridProps) => {
  const {
    templateColumns = "auto",
    templateRows = "auto",
    gap = "s0",
    justifyItems = "stretch",
    alignItems = "stretch",
    justifyContent = "start",
    alignContent = "start",
    autoColumns = "0px",
    autoRows = "0px",
    autoFlow = "row",
    margin = "s0",
    padding = "s0",
    height = "auto",
    width = "auto",
    children,
  } = props;

  return (
    <StyledGrid
      templateColumns={templateColumns}
      templateRows={templateRows}
      gap={gap}
      justifyItems={justifyItems}
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
      autoColumns={autoColumns}
      autoRows={autoRows}
      autoFlow={autoFlow}
      margin={margin}
      padding={padding}
      height={height}
      width={width}
    >
      {children}
    </StyledGrid>
  );
};

export { Grid };
