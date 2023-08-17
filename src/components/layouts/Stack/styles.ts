import styled from "styled-components";
import { IStackProps } from "./index";
import { inube } from "@shared/tokens";

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
  margin: ${({ margin }: IStackProps) => inube.spacing[margin!]};
  padding: ${({ padding }: IStackProps) => inube.spacing[padding!]};
`;

export { StyledFlex };
