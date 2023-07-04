import { alignOptions } from "../types/Text.AlignOptions.type";
import { htmlElements } from "../types/Text.HtmlElements.type";
import { typosOptions } from "../types/Text.TyposOptions.type";
import { appearancesOptions } from "../types/Text.AppearancesOptions.type";

const parameters = {
  docs: {
    description: {
      component:
        "The Text component that allows the use of typographic tokens decoupled from HTML text tags such as h1, h2, ..., p, span, legend, figcaption, blockquote",
    },
  },
};

const align = {
  options: alignOptions,
  control: { type: "select" },
  description: "This prop controls the text-align style property.",
  table: {
    defaultValue: { summary: "start" },
  },
};

const margin = {
  description:
    "Sets the margin in px or global values for all four sides of the component.",
  table: {
    defaultValue: { summary: "0px" },
  },
};

const padding = {
  description:
    "Sets the padding in px p global values for all four sides of the component",
  table: {
    defaultValue: { summary: "0px" },
  },
};

const as = {
  options: htmlElements,
  control: { type: "select" },
  description:
    "This prop allows us to control the tag that we will inject in the DOM.",
  table: {
    defaultValue: { summary: "<p>" },
  },
};

const id = {
  description:
    "This prop is useful when we want to create navigation inside a page an the url points to a specific title or subtitle",
};

const appearance = {
  options: appearancesOptions,
  control: { type: "select" },
  description:
    "This prop is used to select one of the color system tokens of the role Text as defined in the Foundations.",
  table: {
    defaultValue: { summary: "dark" },
  },
};

const typo = {
  options: typosOptions,
  control: { type: "select" },
  description:
    "This prop is used to select one of the typography roles defined in the Foundations.",
  table: {
    defaultValue: { summary: "bodyLarge" },
  },
};

const children = {
  description:
    "This prop allows the component to get and print text in the screen.",
};

export {
  parameters,
  align,
  margin,
  padding,
  as,
  id,
  appearance,
  typo,
  children,
};
