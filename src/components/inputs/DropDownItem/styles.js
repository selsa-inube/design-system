import styled from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const StyledDropDownItem = styled.option`
  display: flex;
  width: auto;
  height: 40px;
  padding: 4px 16px;
  user-select: none;
  list-style-type: none;
  align-items: center;
  font-family: ${typography.sys.typescale.bodyMedium.font};
  font-size: ${typography.sys.typescale.bodyMedium.size};
  font-weight: ${typography.sys.typescale.bodyMedium.weight};
  line-height: ${typography.sys.typescale.bodyMedium.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyMedium.tracking};

  &:hover {
    background-color: silver;
  }
`;

export { StyledDropDownItem };
