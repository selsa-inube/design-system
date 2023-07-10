import { Link } from "react-router-dom";
import { colors } from "@src/shared/colors/colors";
import styled from "styled-components";

const StyledPrimaryButton = styled.button`
  padding: 0px 16px;
  background-color: ${colors.sys.actions.primary.filled};
  color: ${colors.ref.palette.neutral.n10};
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  overflow: hidden;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)``;

export { StyledPrimaryButton, StyledIcon, StyledSpan, StyledLink };
