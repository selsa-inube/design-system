import React from "react";
import { Stack, flexAlignments } from "../index";
import { StyledContainer } from "./stories.styles";
import { Text } from "../../../data/Text/index";
import { MdPersonAddAlt } from "react-icons/md";

const story = {
  title: "layout/Stack/Nesting",
  components: [Stack],
  decorators: [
    (Story) => (
      <div style={{ margin: "2em" }}>
        <Story />
      </div>
    ),
  ],
};

const Cards = (props) => {
  const { title, description } = props;
  return (
    <Stack>
      <StyledContainer>
        <Stack gap="10px" wrap="wrap" justifyContent="center">
          <Stack gap="10px" direction="column" alignItems="center">
            <MdPersonAddAlt />
            <Text as="h1">{title}</Text>
          </Stack>
          <Text> {description} </Text>
        </Stack>
      </StyledContainer>
    </Stack>
  );
};

const StackTemplate = (props) => (
  <Stack {...props} wrap="wrap">
    {flexAlignments.map((flexAlignment) => (
      <Cards key={flexAlignment} title="Title" description="Description" />
    ))}
  </Stack>
);

export const Nesting = StackTemplate.bind({});

export default story;
