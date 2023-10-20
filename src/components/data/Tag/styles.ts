import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITagProps } from ".";
import { Themed } from "@shared/types/types";

interface IStyledTag extends ITagProps {
  theme?: Themed;
}

const StyledTag = styled.div`
  display: inline-block;
  padding: 0 ${inube.spacing.s050};
  background-color: ${({ theme, appearance }: IStyledTag) =>
    theme?.color?.surface?.[appearance]?.regular ||
    inube.color.surface[appearance].regular};

  border-radius: 4px;
`;

export { StyledTag };
