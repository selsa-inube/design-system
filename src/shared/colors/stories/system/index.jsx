import React from "react";
import {
  StyledFlexField,
  StyledTitleCard,
  StyledContainer,
  StyledColor,
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
  const systemTokensList = Object.entries(systemTokensGroup);

  return systemTokensList.map(([systemToken]) => (
    <StyledFlexField key={systemToken}>
      <span>
        sys.{role}.{systemToken}
      </span>
      <span>
        ref.{getKeyByValue(colorReference, systemTokens[role][systemToken])}
      </span>
      <StyledColor name={role} token={systemToken}>
        {systemTokens[role][systemToken]}
      </StyledColor>
    </StyledFlexField>
  ));
};

const SystemReference = (props) => {
  const { colors } = props;
  const systemTokensList = Object.entries(colors.sys);

  return systemTokensList.map(([role, systemTokensGroup]) => (
    <div key={role}>
      <StyledTitleCard>
        <h1>{role}</h1>
      </StyledTitleCard>
      <StyledContainer>
        <Field role={role} systemTokensGroup={systemTokensGroup}></Field>
      </StyledContainer>
    </div>
  ));
};

export { SystemReference };
