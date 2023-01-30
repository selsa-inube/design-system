import styled from "styled-components";

const StyledBlanket = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
`;

const StyledButton = styled.button`
  display: ${(props) => props.showBlanketComponent};
`;

export { StyledBlanket, StyledButton };
