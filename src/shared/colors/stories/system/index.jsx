import React from "react";
import {
  StyledGridField,
  StyledTitleCard,
  StyledContainer,
  StyledColor,
  StyledSpan,
} from "./styles";
import { colors } from "../../colors";

function getRefTokenFromHex(value, obj = colors.ref) {
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === "object") {
      const result = getRefTokenFromHex(value, val);
      if (result) return `${key}.${result}`;
    } else if (val === value) {
      return key;
    }
  }
  return null;
}

const Field = (props) => {
  const { role, systemToken } = props;
  const systemTokens = colors.sys;

  return (
    <StyledGridField>
      <StyledSpan>
        sys.{role}.{systemToken}
      </StyledSpan>
      <StyledSpan>
        ref.
        {getRefTokenFromHex(systemTokens[role][systemToken])}
      </StyledSpan>
      <StyledSpan>
        <StyledColor role={role} systemToken={systemToken}>
          {systemTokens[role][systemToken]}
        </StyledColor>
      </StyledSpan>
    </StyledGridField>
  );
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
        {systemTokensGroup.map((systemToken) => (
          <Field
            key={systemToken}
            role={role}
            systemToken={systemToken}
          ></Field>
        ))}
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
