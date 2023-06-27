import { colors } from "../../../shared/colors/colors";
import styled from "styled-components";

const StyledModal = styled.div`
  background-color: ${colors.ref.palette.neutral.n10};
  min-width: ${(props) => (props.smallScreen ? "100%" : "450px")};
  min-height: ${(props) => (props.smallScreen ? "100%" : "auto")};
  border-radius: ${(props) => (props.smallScreen ? "0" : "8px")};
  & > div {
    padding: ${(props) => (props.smallScreen ? "24px" : "32px")};
  }
`;

const StyledActionContainer = styled.div`
  background-color: ${colors.ref.palette.neutral.n10};
  margin-left: 20px;
`;

export { StyledActionContainer, StyledModal };
