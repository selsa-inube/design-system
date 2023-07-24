import { IStackProps } from "./interfaces/Stack.interface";

import { transformedMeasure } from "../../../utilities/transformedMeasure";
import { StyledFlex } from "./styles";

const defaultGap = "0px";
const defaultMargin = "0px";
const defaultPadding = "0px";

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
      height={height}
      width={width}
      wrap={wrap}
      gap={transformedMeasure(gap, defaultGap)}
      margin={transformedMeasure(margin, defaultMargin)}
      padding={transformedMeasure(padding, defaultPadding)}
    >
      {children}
    </StyledFlex>
  );
};

export { Stack };
