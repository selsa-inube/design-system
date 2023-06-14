import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledDropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
  background-color: ${colors.ref.palette.neutral.n0};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const StyledDropDownList = styled.ul``;

export { StyledDropDownMenu, StyledDropDownList };

/* 
 <StyledDropDownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select an option"}
      </StyledDropDownButton>
*/
