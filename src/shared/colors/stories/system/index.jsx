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
  const transformedSystemTokens = Object.keys(systemTokens[role][systemToken]);
  const refTokens = Object.values(systemTokens[role][systemToken]);
  console.log(
    "systemTokens[role][systemToken] :",
    Object.values(systemTokens[role][systemToken])
  );
  console.log("systemTokens :", role, transformedSystemTokens);

  return (
    <StyledGridField>
      <StyledSpan>
        {transformedSystemTokens.map((transformedSystemToken) => (
          <>
            <br />
            sys.{role}.{systemToken}.{transformedSystemToken}
          </>
        ))}
      </StyledSpan>
      <StyledSpan>
        {refTokens.map((refToken) => (
          <>
            <br />
            ref.
            {getRefTokenFromHex(refToken)}
          </>
        ))}
      </StyledSpan>
      <StyledSpan>
        {transformedSystemTokens.map((transformedSystemToken) =>
          refTokens.map((refToken) => (
            <>
              <br />
              <StyledColor
                role={role}
                systemToken={systemToken}
                refToken={transformedSystemToken}
              >
                {refToken}
              </StyledColor>
            </>
          ))
        )}
      </StyledSpan>
    </StyledGridField>
  );
};

const GridSystemToken = (props) => {
  const { role } = props;
  const systemTokensGroup = Object.keys(colors.sys[role]);
  //console.log("systemTokensGroup :", systemTokensGroup, role);
  return (
    <>
      <StyledTitleCard>
        <h1>{role}</h1>
      </StyledTitleCard>
      <StyledContainer>
        {systemTokensGroup.map((systemToken) => (
          <Field key={systemToken} role={role} systemToken={systemToken} />
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
