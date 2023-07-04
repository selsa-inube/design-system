import styled from "styled-components";
import { IStackProps } from "./interfaces/Stack.interface";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }: IStackProps) => justifyContent};
  align-items: ${({ alignItems }: IStackProps) => alignItems};
  flex-direction: ${({ direction }: IStackProps) => direction};
  flex-wrap: ${({ wrap }: IStackProps) => wrap};
  gap: ${({ gap }: IStackProps) => gap};
  margin: ${({ margin }: IStackProps) => margin};
  padding: ${({ padding }: IStackProps) => padding};
`;

export { StyledFlex };
