import React from "react";
import { Stack } from "../index";
import { StyledContainer } from "./stories.styles";
import { Button } from "../../../inputs/Button/index";
import { MdPersonAddAlt } from "react-icons/md";

const story = {
  title: "layout/Stack/Implementation",
  components: [Stack],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const StackTemplate = () => (
  <StyledContainer>
    <Stack gap="48px">
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <input placeholder="Search..." type="search" size="compact" />
          <Button iconBefore={<MdPersonAddAlt size={18} />} spacing="compact">
            Invite user
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </StyledContainer>
);
export const Implementation = StackTemplate.bind({});

export default story;
