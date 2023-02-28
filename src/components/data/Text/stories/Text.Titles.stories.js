import { Text } from "..";

import { typography } from "../../../../shared/typography/typography";
import { colors } from "../../../../shared/colors/colors";
import { StyledContainer } from "./styles";
import {
  parameters,
  children,
  id,
  as,
  align,
  margin,
  padding,
  appearance,
  typo,
} from "./props";

const story = {
  title: "components/data/Title",
  components: [Text],
  parameters,
};

const TypoRoleProperties = ({ typo, align, appearance, margin, padding }) => {
  const typographyStory = {
    "font-family": `${typography.ref.typeface.brand}`,
    color: `${colors.sys.text[appearance]}`,
    margin: `${margin}`,
    padding: `${padding}`,
    "text-align": `${align}`,
    "font-size": `${typography.sys.typescale[typo].size}`,
    "letter-spacing": `${typography.sys.typescale[typo].tracking}`,
    "line-height": `${typography.sys.typescale[typo].lineHeight}`,
    "font-weight": `${typography.sys.typescale[typo].weight}`,
  };
  if (margin !== "0px") {
    typographyStory.margin = `${margin}`;
  }

  const assignationTypo = Object.entries(typographyStory);

  return (
    <>
      {assignationTypo.map(([key, value]) => (
        <Text
          key={key}
          typo={typo}
          align={align}
          appearance={appearance}
          as="p"
        >
          {key}: {value}
        </Text>
      ))}
    </>
  );
};

const Title = (args) => {
  return (
    <StyledContainer>
      <Text {...args}>{args.children}</Text>
      <ul>
        <TypoRoleProperties
          typo={args.typo}
          appearance={args.appearance}
          align={args.align}
          margin={args.margin}
          padding={args.padding}
        />
      </ul>
    </StyledContainer>
  );
};

Title.args = {
  children: "Title with the Text component",
  as: "p",
  align: "start",
  margin: "20px 22px 23px 24px",
  padding: "0px",
  appearance: "dark",
  typo: "bodyMedium",
};

Title.argTypes = {
  children,
  id,
  margin,
  padding,
  as,
  align,
  appearance,
  typo,
};

export default story;

export { Title };
