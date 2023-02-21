import Text from "../index";

import { typos, appearances } from "../index";

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
  title: "components/Data/Title",
  components: [Text],
  parameters,
};

const numberRandom = [
  Math.floor(Math.random() * typos.length),
  Math.floor(Math.random() * appearances.length),
];
const propsRandom = [typos[numberRandom[0]], appearances[numberRandom[1]]];

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
