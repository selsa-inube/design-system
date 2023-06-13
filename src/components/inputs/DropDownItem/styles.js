import styled from "styled-components";

import { colors } from "../../../shared/colors/colors";

const StyledDropDownItem = styled.option`
  display: flex;
  width: auto;
  height: 40px;
  padding: 4px 16px;
  user-select: none;
  list-style-type: none;
  align-items: center;

  &:hover {
    background-color: silver;
  }
`;

export { StyledDropDownItem };
