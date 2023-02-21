import Text from "../index";

import { TYPO_OPTIONS, APPEARANCE_OPTIONS } from "../index";

import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";
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

const numberRandom = [
  Math.floor(Math.random() * TYPO_OPTIONS.length),
  Math.floor(Math.random() * APPEARANCE_OPTIONS.length),
];
const propsRandom = [
  TYPO_OPTIONS[numberRandom[0]],
  APPEARANCE_OPTIONS[numberRandom[1]],
];

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

  const assignationTypo = Object.entries(typographyStory);

  return (
    <>
      {assignationTypo.map(([key, value]) => (
        <Text key={key}>
          {key}: {value}
        </Text>
      ))}
    </>
  );
};

const Title = ({ ...args }) => {
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
  align: "start",
  margin: "0px",
  padding: "0px",
  appearance: propsRandom[1],
  typo: propsRandom[0],
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
