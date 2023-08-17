import { StyledFlex } from "./styles";
import {
  WrapControl,
  DirectionAlignment,
  JustifyContent,
  AlignItem,
  AlignContent,
  Spacing,
} from "./props";

export interface IStackProps {
  children?: React.ReactNode;
  wrap?: WrapControl;
  direction?: DirectionAlignment;
  justifyContent?: JustifyContent;
  alignItems?: AlignItem;
  alignContent?: AlignContent;
  height?: string;
  width?: string;
  gap?: string;
  margin?: Spacing;
  padding?: Spacing;
}

const Stack = (props: IStackProps) => {
  const {
    children,
    wrap,
    direction,
    justifyContent,
    alignItems,
    alignContent,
    height,
    width,
    gap,
    margin = "s0",
    padding = "s0",
  } = props;

  return (
    <StyledFlex
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      height={height}
      width={width}
      wrap={wrap}
      gap={gap}
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledFlex>
  );
};

export { Stack };
