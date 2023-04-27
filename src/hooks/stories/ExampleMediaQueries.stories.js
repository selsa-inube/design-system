import React from "react";
import { useMediaQueries } from "../useMediaQueries";
import { Text } from "../../components/data/Text";

const story = {
  title: "hooks/useMediaQueries",
  components: [useMediaQueries],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const queries = [
  "(min-width: 1200px)",
  "(min-width: 992px)",
  "(min-width: 768px)",
];
export const ExampleMediaQueries = () => {
  const matches = useMediaQueries(queries);
  return (
    <>
      <Text>Matches:</Text>
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

export default story;
