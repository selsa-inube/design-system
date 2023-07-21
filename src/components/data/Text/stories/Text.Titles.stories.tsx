import { Text } from "..";

import { StyledContainer } from "./styles";
import {
  parameters,
  children,
  as,
  textAlign,
  margin,
  padding,
  appearance,
  type,
} from "./props";
import { ITextProps } from "../interfaces/Text.interface";

const story = {
  title: "data/Text/Title",
  components: [Text],
  parameters,
};

/* const TypoRoleProperties = ({
  type,
  textAlign,
  appearance,
  margin,
  padding,
}: ITextProps) => {
  const typographyStory = {
    "font-family": `${typography.ref.typeface.brand}`,
    color: `${(colors.sys.text as Record<string, string>)[appearance!]}`,
    margin: `${margin}`,
    padding: `${padding}`,
    "text-align": `${textAlign}`,
    "font-size": `${
      (typography.sys.typescale as Record<string, any>)[type!].size
    }`,
    "letter-spacing": `${
      (typography.sys.typescale as Record<string, any>)[type!].tracking
    }`,
    "line-height": `${
      (typography.sys.typescale as Record<string, any>)[type!].lineHeight
    }`,
    "font-weight": `${
      (typography.sys.typescale as Record<string, any>)[type!].weight
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
 */
const Title = (args: ITextProps) => {
  return (
    <StyledContainer>
      <Text {...args}>{args.children}</Text>
    </StyledContainer>
  );
};

Title.args = {
  children: "Title with the Text component",
  as: "h1",
  textAlign: "start",
  margin: "20px 22px 23px 24px",
  padding: "5px",
  appearance: "dark",
  type: "body",
  size: "large",
  isDisabled: false,
  cursorHover: true,
  ellipsis: false,
};

Title.argTypes = {
  children,
  margin,
  padding,
  as,
  textAlign,
  appearance,
  type,
};

export default story;

export { Title };
