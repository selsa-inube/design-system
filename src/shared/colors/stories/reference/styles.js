import styled from "styled-components";

import { colors } from "../../colors";

/* This code creates a styled div element with the display set to flex, the flex-wrap set to wrap, a gap of 30px between elements, and the justify-content set to center. This allows for elements within the div to be displayed in a flexible and organized manner. */
const StyledGlobalFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

/* This code creates a constant called StyledCard that is a styled div element with a display of grid, two rows of equal size, a 1px solid black border, a 4px border radius, a width of 160px and no margin.*/
const StyledCard = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid #000000;
  border-radius: 4px;
  width: 160px;
  overflow: hidden;
`;

/* This is a styled component that takes in two props, color and token. It sets the background color of the div to the color specified in the colors.ref.palette object using the props passed in. The display, justify-content, and align-items are all set to flex, center respectively. The text color is set to white (#ffffff). */
const StyledColor = styled.div`
  background-color: ${(props) => colors.ref.palette[props.color][props.token]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

/* This is a styled div element that uses the CSS Grid layout. It will create two columns with an equal width of 1 fraction unit each, and will have a padding of 5px.*/
const StyledDivGridBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px;
`;

/* This code creates a constant called StyledDivInfoCard, which is a styled div element. The styling of the div includes display set to flex, align-items set to center, and flex-direction set to column. */
const StyledDivInfoCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

/* This code creates a styled div element with the css property of display set to grid. The grid-template-columns property is set to repeat 3 times, with auto sizing each column. The column-gap property is set to 10px and the align-items property is set to center. */
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 10px;
  align-items: center;
  row-gap: 10px;
`;
export {
  StyledGlobalFlex,
  StyledCard,
  StyledDivGridBottom,
  StyledDivInfoCard,
  StyledColor,
  StyledGrid,
};
