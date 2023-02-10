import React from "react";
import { Switch } from "../index";

import {
  StyledFlex,
  StyledFlexColumn,
  StyledGrid,
  StyledFlexBetween,
  StyledBoxSize,
} from "./styles";

import { withPseudoState } from "storybook-addon-pseudo-states/dist/esm/withPseudoState";

const story = {
  title: "inputs/Switch/All",
  components: [Switch],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};
const logStateAll = (state) => {
  console.log("ToggledValue:", state);
  return state;
};

const AllTemplate = ({ ...args }) => (
  <StyledFlex>
    <StyledGrid>
      <StyledFlexColumn>
        {["one", "two", "three", "four"].map((box) => (
          <StyledBoxSize key={box} id={box + "Small"}>
            <StyledFlexBetween>
              {[false, true].map((value) => (
                <Switch
                  key={value + box}
                  {...args}
                  isDisabled={box === "three" ? true : false}
                  value={value}
                  size={"small"}
                />
              ))}
            </StyledFlexBetween>
          </StyledBoxSize>
        ))}
      </StyledFlexColumn>
      <StyledFlexColumn>
        {["one", "two", "three", "four"].map((box) => (
          <StyledBoxSize key={box} id={box + "Large"}>
            <StyledFlexBetween>
              {[false, true].map((value) => (
                <Switch
                  key={value + box}
                  {...args}
                  isDisabled={box === "three" ? true : false}
                  value={value}
                  size={"large"}
                />
              ))}
            </StyledFlexBetween>
          </StyledBoxSize>
        ))}
      </StyledFlexColumn>
    </StyledGrid>
  </StyledFlex>
);
export const All = AllTemplate.bind({});
All.decorators = [withPseudoState];
All.parameters = {
  pseudo: {
    hover: ["#twoSmall", "#twoLarge"],
    focus: ["#fourSmall", "#fourLarge"],
  },
};
All.args = {
  id: "idStates",
  name: "nameState",
  handleChange: logStateAll,
};

export default story;
