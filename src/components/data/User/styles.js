import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";

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
  & > #userName {
    font-family: ${typography.sys.typescale.labelMedium.font};
    font-size: ${typography.sys.typescale.labelMedium.size};
    font-weight: ${typography.sys.typescale.labelMedium.weight};
    letter-spacing: ${typography.sys.typescale.labelMedium.tracking};
    color: ${colors.sys.text.dark};
  }
  & > #businessUnit {
    font-family: ${typography.sys.typescale.bodySmall.font};
    font-size: ${typography.sys.typescale.bodySmall.size};
    font-weight: ${typography.sys.typescale.bodySmall.weight};
    letter-spacing: ${typography.sys.typescale.bodySmall.tracking};
    color: ${colors.sys.text.secondary};
  }
`;

export { StyledUser, StyledCard };
