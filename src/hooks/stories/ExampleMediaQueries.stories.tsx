import React from "react";
import { useMediaQueries } from "../useMediaQueries";
import { Text } from "../../components/data/Text";
import { IArgs } from "./ExampleMediaQueries.interface";

const story = {
  title: "hooks/useMediaQueries",
  components: [useMediaQueries],
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const ExampleMediaQueries = (args: IArgs) => {
  const { initialQueries } = args;
  const matches = useMediaQueries(initialQueries);
  return (
    <>
      <Text>Media queries matches:</Text>
      <ul>
        {Object.keys(matches).map((query) => (
          <Text key={query}>
            {query}: {matches[query] ? "true" : "false"}
          </Text>
        ))}
      </ul>
    </>
  );
};

ExampleMediaQueries.args = {
  initialQueries: [
    "(min-width: 1200px)",
    "(min-width: 992px)",
    "(min-width: 768px)",
  ],
};

export default story;
