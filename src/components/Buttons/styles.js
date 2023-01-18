import styled from "styled-components";
import { typography } from "../../shared/typography";

const StyledButton = styled.button`
  box-sizing: border-box;
  border: 2px solid #57d9a3;
  background-color: white;
  color: #57d9a3;
  padding: 10px 16px;
  font-family: ${typography.ref.typeface.brand};
`;

export { StyledButton };
