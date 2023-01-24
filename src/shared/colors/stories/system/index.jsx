import React from "react";
import {
  StyledColor,
  StyledTable,
  StyledTableHead,
  StyledTableTh,
  StyledTableTd,
  StyledTableSubTd,
} from "./styles";

const SystemReference = (dataColors) => {
  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          <StyledTableTh>Role</StyledTableTh>
          <StyledTableTh>System token</StyledTableTh>
          <StyledTableTh>Reference token</StyledTableTh>
          <StyledTableTh>Default value</StyledTableTh>
        </tr>
      </StyledTableHead>
      {Object.entries(dataColors.colors.sys).map(([name, colors]) => (
        <tbody>
          <tr>
            <StyledTableTd>
              <h1>{name}</h1>
            </StyledTableTd>
            <StyledTableTd>
              {Object.entries(colors).map(([colorName]) => (
                <StyledTableSubTd>
                  sys.{name}.{colorName}
                </StyledTableSubTd>
              ))}
            </StyledTableTd>
            <StyledTableTd>
              {Object.entries(colors).map(([colorName]) => (
                <StyledTableSubTd>
                  sys.{name}.{colorName}
                </StyledTableSubTd>
              ))}
            </StyledTableTd>
            <StyledTableTd>
              {Object.entries(colors).map(([colorName, colorValue]) => (
                <StyledTableSubTd>
                  <StyledColor color={colorValue}>{colorValue}</StyledColor>
                </StyledTableSubTd>
              ))}
            </StyledTableTd>
          </tr>
        </tbody>
      ))}
    </StyledTable>
  );
};

export { SystemReference };
