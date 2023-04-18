import styled from "styled-components";

const StyledBreadcrumbs = styled.ul`
  padding: 0;
  margin: 0;
  & > *:not(:last-child)::after {
    content: "/";
    margin: 0 8px;
  }
`;

export { StyledBreadcrumbs };
