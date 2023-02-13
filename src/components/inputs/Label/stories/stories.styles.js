import styled from "styled-components";

const StyledContentStates = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
`;

const StyledContentAll = styled(StyledContentStates)`
  align-items: center;
  text-align: center;
  border: 2px dashed #9747ff;
  box-sizing: border-box;
  border-radius: 5px;
  height: 60px;
`;

export { StyledContentAll, StyledContentStates };
