import { textAlignOptions } from "../types/Text.AlignOptions.type";
import { htmlElements } from "../types/Text.HtmlElements.type";

import { appearancesOptions } from "../types/Text.AppearancesOptions.type";
import { inube } from "@src/shared/tokens";

const typesOptions = Object.keys(inube.typography);

const parameters = {
  docs: {
    description: {
      component:
        "The Text component that allows the use of typographic tokens decoupled from HTML text tags such as h1, h2, ..., p, span, legend, figcaption, blockquote",
    },
  },
};

const textAlign = {
  options: textAlignOptions,
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

const isDisabled = {
  description:
    "(boolean): Add the “disabled” prop, which will control if the text should display a disabled state. For this you can make use of the disabled modifiers you find in the color.text tokens.",
  table: {
    defaultValue: { summary: "false" },
  },
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

const cursorHover = {
  description:
    "(boolean): prop to allow the text to use the hover modifier you find in color.text tokens and activate the cursor: pointer CSS property.",
  table: {
    defaultValue: { summary: "false" },
  },
};

const parentHover = {
  description:
    "(boolean): prop to force the text to always appear in its hover state. This works when the parent is being hover (not the text), but the parent must display as if all the component is",
  table: {
    defaultValue: { summary: "false" },
  },
};

const ellipsis = {
  description:
    "(boolean): Add the ellipsis prop to control that the text cannot overflow or resize the parent.Instead, the text will be shown as much as possible in the available space and the rest of it will be replaced with an ellipsis.To make this work you must use the overflow, white - space and text - overflow CSS properties.",
  table: {
    defaultValue: { summary: "false" },
  },
};

const type = {
  options: typesOptions,
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
  textAlign,
  margin,
  padding,
  as,
  isDisabled,
  cursorHover,
  parentHover,
  ellipsis,
  appearance,
  type,
  children,
};
