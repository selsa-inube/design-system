import { transformedMeasure } from "../../../utilities/transformedMeasure";
import { StyledText } from "./styles";
import { alignOptions } from "./types/Text.AlignOptions.type";
import { htmlElements } from "./types/Text.HtmlElements.type";
import { appearancesOptions } from "./types/Text.AppearancesOptions.type";
import { typosOptions } from "./types/Text.TyposOptions.type";
import { ITextProps } from "./interfaces/Text.interface";

const defaultAlign = "start";
const defaultHtmlElement = "p";
const defaultAppearance = "dark";
const defaultTypo = "bodyLarge";
const defaultMargin = "0px";
const defaultPadding = "0px";

const Text = (props: ITextProps) => {
  const {
    children,
    align = defaultAlign,
    margin = defaultMargin,
    padding = defaultPadding,
    as = defaultHtmlElement,
    id,
    appearance = defaultAppearance,
    typo = defaultTypo,
  } = props;
  const transformedAlign = alignOptions.includes(align) ? align : defaultAlign;

  const transformedAs = htmlElements.includes(as) ? as : defaultHtmlElement;

  const transformedAppearance = appearancesOptions.includes(appearance)
    ? appearance
    : defaultAppearance;

  const transformedTypo = typosOptions.includes(typo) ? typo : defaultTypo;

  return (
    <StyledText
      as={transformedAs}
      align={transformedAlign}
      id={id}
      appearance={transformedAppearance}
      typo={transformedTypo}
      margin={transformedMeasure(margin, defaultMargin)}
      padding={transformedMeasure(padding, defaultPadding)}
    >
      {children}
    </StyledText>
  );
};

export { Text };
