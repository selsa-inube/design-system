import styled from "styled-components";

const StyledUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: ${(props) => (props.size === "large" ? "169px" : "121px")};
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export { StyledUser, StyledCard };
