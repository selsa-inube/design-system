const parameters = {
  docs: {
    description: {
      component:
        "The <Text /> component that allows the use of typographic tokens decoupled from HTML text tags such as <h1>, <h2>, ..., <p>.",
    },
  },
};

const align = {
  options: ["start", "center", "end", "justify"],
  control: { type: "select" },
  description: "This prop controls the text-align style property.",
  table: {
    defaultValue: { summary: "start" },
  },
};

const as = {
  options: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "legend",
    "figcaption",
    "blockquote",
  ],
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
  options: [
    "primary",
    "secondary",
    "link",
    "warning",
    "error",
    "help",
    "dark",
    "light",
  ],
  control: { type: "select" },
  description:
    "This prop is used to select one of the color system tokens of the role Text as defined in the Foundations.",
  table: {
    defaultValue: { summary: "dark" },
  },
};

const typo = {
  options: [
    "displayLarge",
    "displayMedium",
    "displaySmall",
    "headlineLarge",
    "headlineMedium",
    "headlineSmall",
    "titleLarge",
    "titleMedium",
    "titleSmall",
    "labelLarge",
    "labelMedium",
    "labelSmall",
    "bodyLarge",
    "bodyMedium",
    "bodySmall",
  ],
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

export { parameters, align, as, id, appearance, typo, children };
