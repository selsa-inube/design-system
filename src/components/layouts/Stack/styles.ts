import styled from "styled-components";
import { IStackProps } from "./index";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }: IStackProps) => justifyContent};
  align-items: ${({ alignItems }: IStackProps) => alignItems};
  align-content: ${({ alignContent }: IStackProps) => alignContent};
  flex-direction: ${({ direction }: IStackProps) => direction};
  flex-wrap: ${({ wrap }: IStackProps) => wrap};
  height: ${({ height }: IStackProps) => height};
  width: ${({ width }: IStackProps) => width};
  gap: ${({ gap }: IStackProps) => gap};
  margin: ${({ margin }: IStackProps) => margin};
  padding: ${({ padding }: IStackProps) => padding};
`;

export { StyledFlex };
