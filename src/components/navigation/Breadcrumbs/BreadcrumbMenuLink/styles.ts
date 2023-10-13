import styled from "styled-components";
import { Link } from "react-router-dom";

import { Themed } from "@shared/types/types";
import { inube } from "@shared/tokens";
import { IRoute } from "../props";

interface IStyledBreadcrumbMenuLink extends IRoute {
  theme?: Themed;
}

const StyledContainerLink = styled.li`
  display: inline-block;
  > * {
    height: 32px;
    > label {
      color: ${({ theme }: IStyledBreadcrumbMenuLink) =>
        theme?.color?.text?.gray?.regular || inube.color.text.gray.regular};
      cursor: pointer;
      padding: ${({ theme }: IStyledBreadcrumbMenuLink) =>
        `${theme?.spacing?.s100 || inube.spacing.s100} ${
          theme?.spacing?.s150 || inube.spacing.s150
        }`};
    }
  }
`;

const StyledBreadcrumbMenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }: IStyledBreadcrumbMenuLink) =>
    theme?.color?.text?.gray?.regular || inube.color.text.gray.regular};
`;

export { StyledContainerLink, StyledBreadcrumbMenuLink };
