import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => gap};
`;

export { StyledFlex };
