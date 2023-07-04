import { IStackProps } from "./interfaces/Stack.interface";
import { directionAlignments } from "./types/Stack.DirectionAlignments";
import { flexAlignments } from "./types/Stack.FlexAlignments";
import { wrapControls } from "./types/Stack.WrapControl.type";

import { transformedMeasure } from "../../../utilities/transformedMeasure";
import { StyledFlex } from "./styles";

const defaultDirection = "row";
const defaultJustifyContent = "flex-start";
const defaultAlignItems = "stretch";
const defaultWrapControl = "nowrap";
const defaultGap = "0px";
const defaultMargin = "0px";
const defaultPadding = "0px";

const Stack = (props: IStackProps) => {
  const {
    children,
    wrap = defaultWrapControl,
    direction = defaultDirection,
    justifyContent = defaultJustifyContent,
    alignItems = defaultAlignItems,
    gap,
    margin,
    padding,
  } = props;

  const transformedDirection = directionAlignments.includes(direction)
    ? direction
    : defaultDirection;
  const transformedAlignItems = flexAlignments.includes(alignItems)
    ? alignItems
    : defaultAlignItems;
  const transformedJustifyContent = flexAlignments.includes(justifyContent)
    ? justifyContent
    : defaultJustifyContent;
  const transformedWrap = wrapControls.includes(wrap)
    ? wrap
    : defaultWrapControl;

  return (
    <StyledFlex
      direction={transformedDirection}
      justifyContent={transformedJustifyContent}
      alignItems={transformedAlignItems}
      wrap={transformedWrap}
      gap={transformedMeasure(gap, defaultGap)}
      margin={transformedMeasure(margin, defaultMargin)}
      padding={transformedMeasure(padding, defaultPadding)}
    >
      {children}
    </StyledFlex>
  );
};

export { Stack };
