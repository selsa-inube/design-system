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
import { ITextProps } from "../interfaces/TextProps.interface";

const story = {
  title: "data/Text/Title",
  components: [Text],
  parameters,
};

const TypoRoleProperties = ({
  typo,
  align,
  appearance,
  margin,
  padding,
}: ITextProps) => {
  const typographyStory = {
    "font-family": `${typography.ref.typeface.brand}`,
    color: `${(colors.sys.text as Record<string, string>)[appearance!]}`,
    margin: `${margin}`,
    padding: `${padding}`,
    "text-align": `${align}`,
    "font-size": `${
      (typography.sys.typescale as Record<string, any>)[typo!].size
    }`,
    "letter-spacing": `${
      (typography.sys.typescale as Record<string, any>)[typo!].tracking
    }`,
    "line-height": `${
      (typography.sys.typescale as Record<string, any>)[typo!].lineHeight
    }`,
    "font-weight": `${
      (typography.sys.typescale as Record<string, any>)[typo!].weight
    }`,
  };
  if (margin !== "0px") {
    typographyStory.margin = `${margin}`;
  }

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

const Title = (args: ITextProps) => {
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
  as: "h1",
  align: "start",
  margin: "20px 22px 23px 24px",
  padding: "5px",
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
