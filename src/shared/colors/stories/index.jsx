import React from "react";
import {
  StyledGrid,
  StyledCard,
  StyledDivFlexInferior,
  StyledDivInfoCard,
  StyledGlobalGrid,
  StyledGlobalGridTokens,
  StyledColor,
  StyledTable,
  StyledTableHead,
  StyledTableTh,
  StyledTableTd,
  StyledTableSubTd,
  StyledHeader,
} from "./styles";

const Colors = (dataColors) => {
  return (
    <>
      <StyledHeader>
        <h1>Colors</h1>
        <p>
          Color palette with the respective scales and the different use cases
        </p>
      </StyledHeader>
      <StyledGlobalGridTokens>
        <StyledGlobalGrid>
          {Object.entries(dataColors.colors.ref.palette).map(
            ([name, colors]) => (
              <div key={name}>
                <StyledGrid>
                  {Object.entries(colors).map(([colorName, colorValue]) => (
                    <StyledCard key={colorName}>
                      <StyledColor color={colorValue}>Lorem Ipsum</StyledColor>
                      <StyledDivFlexInferior>
                        <StyledDivInfoCard>
                          <label htmlFor="name">Name</label>
                          <span id="name">{colorName}</span>
                        </StyledDivInfoCard>
                        <StyledDivInfoCard>
                          <label htmlFor="hex">Hex</label>
                          <span id="hex">{colorValue}</span>
                        </StyledDivInfoCard>
                      </StyledDivFlexInferior>
                    </StyledCard>
                  ))}
                </StyledGrid>
              </div>
            )
          )}
        </StyledGlobalGrid>
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
      </StyledGlobalGridTokens>
    </>
  );
};

export { Colors };
