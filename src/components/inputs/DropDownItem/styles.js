import styled from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const StyledDropDownItem = styled.li`
  display: flex;
  width: auto;
  height: 40px;
  padding: 4px 16px;
  user-select: none;
  list-style-type: none;
  align-items: center;
  text-decoration: none;
  font-family: ${typography.sys.typescale.bodyMedium.font};
  font-size: ${typography.sys.typescale.bodyMedium.size};
  font-weight: ${typography.sys.typescale.bodyMedium.weight};
  line-height: ${typography.sys.typescale.bodyMedium.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyMedium.tracking};
  color: ${({ isDisabled }) => isDisabled && colors.ref.palette.neutral.n70};
  cursor: ${({ isDisabled }) => (!isDisabled ? "pointer" : "not-allowed")};
  pointer-events: ${({ isDisabled }) => isDisabled && "none"};

  &:hover {
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

export { StyledDropDownItem };
