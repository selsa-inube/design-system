import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px 8px 16px;
  gap: 8px;

  width: 280px;
  height: 48px;

  border: 1px solid ${colors.ref.palette.neutral.n300};
  border-radius: 8px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
  }
`;

const StyledIcon = styled.div``;

export { StyledInput, StyledIcon };
