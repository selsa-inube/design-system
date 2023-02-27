import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const StyledContainaer = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px 8px 16px;
  gap: 8px;

 width: 100%
  height: 100%;

  border: 1px solid ${colors.ref.palette.neutral.n300};
  border-radius: 8px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  ::placeholder {
    padding-left: ${({ iconBefore }) => (iconBefore ? "16px" : "0px")}
  }
`;

const StyledIcon = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: ${({ iconBefore }) => iconBefore && "85%"};
  left: ${({ iconAfter, type }) => iconAfter || (type === "search" && "85%")};
  height: 24px;
  width: 24px;
`;

const StyledErrorMensaje = styled.p`
  font-family: ${typography.ref.typeface.brand}, sans-serif;
  line-height: ${(props) => typography.sys.typescale[props.role].lineHeight};
  font-size: ${(props) => typography.sys.typescale[props.role].size};
  letter-spacing: ${(props) => typography.sys.typescale[props.role].tracking};
  font-weight: ${(props) => typography.sys.typescale[props.role].weight};
  overflow: hidden;
  display: flex;
  align-items: center;
  color: ${colors.sys.messages.error};

  & svg {
    width: 14px;
    height: 14px;
  }
`;

export {
  StyledContainaer,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMensaje,
};
