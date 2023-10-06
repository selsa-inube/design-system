import {
  AlignContent,
  AlignItems,
  AutoFlow,
  Height,
  JustifyContent,
  JustifyItems,
  TemplateAreas,
  Width,
} from "./props";
import { StyledGrid } from "./styles";

export interface IGridProps {
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: TemplateAreas;
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
    templateAreas = "none",
    gap = "s0",
    justifyItems = "start",
    alignItems = "start",
    justifyContent = "start",
    alignContent = "start",
    autoColumns = "auto",
    autoRows = "row",
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
      templateAreas={templateAreas}
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
