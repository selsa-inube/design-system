import { inube } from "@src/shared/tokens";
import styled from "styled-components";

import { Themed } from "@shared/types/types";

interface IStiledTableProps {
  theme?: Themed;
}

const StyledTable = styled.table`
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
`;

const StyledThead = styled.thead`
  border-bottom: solid 1px
    ${({ theme }: IStiledTableProps) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  background-color: ${({ theme }: IStiledTableProps) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

const StyledTbody = styled.tbody`
  background-color: ${({ theme }: IStiledTableProps) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

const StyledTr = styled.tr`
  border-bottom: solid 1px
    ${({ theme }: IStiledTableProps) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  height: 40px;
`;

const StyledThTitle = styled.th`
  padding: ${({ theme }: IStiledTableProps) =>
    `${theme?.spacing?.s150} ${theme?.spacing?.s200}` ||
    `${inube.spacing?.s150} ${inube.spacing.s200}`}; ;
`;

const StyledThAction = styled.th`
  background-color: ${({ theme }: IStiledTableProps) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
  width: 80px;
  padding: ${({ theme }: IStiledTableProps) =>
    `${theme?.spacing?.s150} ${theme?.spacing?.s0}` ||
    `${inube.spacing.s150} ${inube.spacing.s0}`};
`;

const StyledTd = styled.td`
  padding: ${({ theme }: IStiledTableProps) =>
    `${theme?.spacing?.s0} ${theme?.spacing?.s200}` ||
    `${inube.spacing.s0} ${inube.spacing.s200}`};
  text-align: center;
`;

export {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledTd,
  StyledThAction,
  StyledThTitle,
};
