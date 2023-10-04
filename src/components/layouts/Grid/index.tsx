import {
  AlignContent,
  AlignItems,
  AutoFlow,
  Gap,
  Height,
  JustifyContent,
  JustifyItems,
  Spacing,
  TemplateAreas,
  Width,
} from "./props";
import { StyledGrid } from "./styles";

export interface GridProps {
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: TemplateAreas;
  gap?: Gap;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: AutoFlow;
  margin?: Spacing;
  padding?: Spacing;
  height?: Height;
  width?: Width;
  children: React.ReactNode;
}

function Grid(props: GridProps) {
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
    autoFlow,
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
}

export { Grid };
