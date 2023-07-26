import { transformedMeasure } from "@src/utilities/transformedMeasure";
import { IStackProps } from "./interfaces/Stack.interface";

import { StyledFlex } from "./styles";

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
