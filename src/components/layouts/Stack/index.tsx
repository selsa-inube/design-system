import { transformedMeasure } from "@src/utilities/transformedMeasure";

import { StyledFlex } from "./styles";
import {
  WrapControl,
  DirectionAlignment,
  JustifyContent,
  AlignItem,
  AlignContent,
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
  margin?: string;
  padding?: string;
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
    margin,
    padding,
  } = props;

  return (
    <StyledFlex
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      height={transformedMeasure(height)}
      width={transformedMeasure(width)}
      wrap={wrap}
      gap={gap}
      margin={transformedMeasure(margin)}
      padding={transformedMeasure(padding)}
    >
      {children}
    </StyledFlex>
  );
};

export { Stack };
