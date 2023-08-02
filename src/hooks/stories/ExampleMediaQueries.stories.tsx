import { useMediaQueries } from "../useMediaQueries";
import { Text } from "../../components/data/Text";
import { IArgs } from "./ExampleMediaQueries.interface";
import { props } from "../props";

const story = {
  title: "hooks/useMediaQueries",
  components: [useMediaQueries],
  argTypes: props,
};

export const ExampleMediaQueries = (args: IArgs) => {
  const { initialQueries } = args;
  const matches = useMediaQueries(initialQueries);
  return (
    <>
      <Text appearance="dark" type="body" size="large">
        Media queries matches:
      </Text>
      <ul>
        {Object.keys(matches).map((query) => (
          <Text key={query} appearance="dark" type="body" size="large">
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
