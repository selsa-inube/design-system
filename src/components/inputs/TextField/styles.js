import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledContainaer = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px 8px 16px;
  gap: 8px;

 width: 100%
  height: 100%;

  border: 1px solid ${colors.ref.palette.neutral.n300};
  border-radius: 8px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  ::placeholder {
    padding-left: ${({ iconBefore }) => (iconBefore ? "16px" : "0px")}
  }
`;

const StyledIcon = styled.div`
  position: absolute;

  top: 55%;

  left: ${({ iconAfter }) => (iconAfter ? "85%" : "5%")};
`;

export { StyledInput, StyledIcon, StyledContainaer };
