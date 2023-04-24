import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const StyledMenuLink = styled.li`
  list-style-type: none;
  border-left: 5px solid ${colors.ref.palette.neutral.n900};
  padding-left: 0.5em;
  font-family: ${typography.ref.typeface};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledMenuLink, StyledLink, StyledIcon };
