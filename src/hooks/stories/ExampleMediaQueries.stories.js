import React from "react";
import { Label } from "../../components/inputs/Label";
import { useMediaQueries } from "../useMediaQueries";

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
      <p>Matches:</p>
      <ul>
        {Object.keys(matches).map((query) => (
          <li key={query}>
            <Label htmlFor={query}>
              {query}: {matches[query] ? "true" : "false"}{" "}
            </Label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default story;
