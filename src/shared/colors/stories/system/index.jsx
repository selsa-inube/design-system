import React from "react";
import {
  StyledGridField,
  StyledTitleCard,
  StyledContainer,
  StyledColor,
  StyledSpan,
} from "./styles";
import { colors } from "../../colors";

function getKeyByValue(obj, value) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        const result = getKeyByValue(obj[key], value);
        if (result) {
          return `${key}.${result}`;
        }
      } else if (obj[key] === value) {
        return key;
      }
    }
  }
  return null;
}

const Field = (props) => {
  const { role, systemTokensGroup } = props;
  const systemTokens = colors.sys;
  const colorReference = colors.ref;
  const systemTokensList = Object.values(systemTokensGroup);

  return systemTokensList.map((systemToken) => (
    <StyledGridField key={systemToken}>
      <StyledSpan>
        sys.{role}.{systemToken}
      </StyledSpan>
      <StyledSpan>
        ref.{getKeyByValue(colorReference, systemTokens[role][systemToken])}
      </StyledSpan>
      <StyledSpan>
        <StyledColor role={role} systemToken={systemToken}>
          {systemTokens[role][systemToken]}
        </StyledColor>
      </StyledSpan>
    </StyledGridField>
  ));
};

const GridSystemToken = (props) => {
  const { role } = props;
  const systemTokensGroup = Object.keys(colors.sys[role]);

  return (
    <>
      <StyledTitleCard>
        <h1>{role}</h1>
      </StyledTitleCard>
      <StyledContainer>
        <Field role={role} systemTokensGroup={systemTokensGroup}></Field>
      </StyledContainer>
    </>
  );
};

const SystemReference = () => {
  const systemTokensList = Object.keys(colors.sys);

  return systemTokensList.map((role) => (
    <GridSystemToken key={role} role={role} />
  ));
};

export { SystemReference };
