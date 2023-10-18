import { Grid, IGridProps } from "..";
import { props } from "../props";
import { StyledSquare } from "./stories.styles";

const story = {
  title: "layout/Grid",
  components: [Grid],
  argTypes: props,
};

export const Default = (args: IGridProps) => (
  <Grid {...args}>
    <StyledSquare>Item 1</StyledSquare>
    <StyledSquare>Item 2</StyledSquare>
    <StyledSquare>Item 3</StyledSquare>
  </Grid>
);

Default.args = {
  templateColumns: "repeat(3, 1fr)",
  gap: "s350",
  templateRows: "auto",
  justifyItems: "start",
  alignItems: "start",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  autoColumns: "auto",
  autoRows: "auto",
  autoFlow: "row",
  margin: "s0",
  padding: "s0",
  height: "auto",
  width: "auto",
};

export default story;
