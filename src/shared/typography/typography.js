/**
 * Thee are the reference tokens for the typography.
 */
const ref = {
  typeface: {
    brand: "Roboto",
    weight: {
      regular: 400,
      medium: 500,
    },
  },
};

/**
 * These are the system tokens for the typography.
 */
const sys = {
  typescale: {
    DisplayLarge: {
      font: ref.typeface.brand,
      lineHeight: "64px",
      size: "57px",
      tracking: "0px",
      weight: ref.typeface.weight.regular,
    },
    DisplayMedium: {
      font: ref.typeface.brand,
      lineHeight: "52px",
      size: "45px",
      tracking: "0px",
      weight: ref.typeface.weight.regular,
    },
    DisplaySmall: {
      font: ref.typeface.brand,
      lineHeight: "44px",
      size: "36px",
      tracking: "0px",
      weight: ref.typeface.weight.regular,
    },
    HeadlineLarge: {
      font: ref.typeface.brand,
      lineHeight: "40px",
      size: "32px",
      tracking: "0px",
      weight: ref.typeface.weight.regular,
    },
    HeadlineMedium: {
      font: ref.typeface.brand,
      lineHeight: "36px",
      size: "28px",
      tracking: "0px",
      weight: ref.typeface.weight.regular,
    },
    HeadlineSmall: {
      font: ref.typeface.brand,
      lineHeight: "32px",
      size: "24px",
      tracking: "0px",
      weight: ref.typeface.weight.regular,
    },
    TitleLarge: {
      font: ref.typeface.brand,
      lineHeight: "28px",
      size: "22px",
      tracking: "0px",
      weight: ref.typeface.weight.regular,
    },
    TitleMedium: {
      font: ref.typeface.brand,
      lineHeight: "24px",
      size: "16px",
      tracking: "0.15px",
      weight: ref.typeface.weight.medium,
    },
    TitleSmall: {
      font: ref.typeface.brand,
      lineHeight: "20px",
      size: "14px",
      tracking: "0.1px",
      weight: ref.typeface.weight.medium,
    },
    LabelLarge: {
      font: ref.typeface.brand,
      lineHeight: "20px",
      size: "14px",
      tracking: "0.1px",
      weight: ref.typeface.weight.medium,
    },
    LabelMedium: {
      font: ref.typeface.brand,
      lineHeight: "16px",
      size: "12px",
      tracking: "0.5px",
      weight: ref.typeface.weight.medium,
    },
    LabelSmall: {
      font: ref.typeface.brand,
      lineHeight: "16px",
      size: "11px",
      tracking: "0.5px",
      weight: ref.typeface.weight.medium,
    },
    BodyLarge: {
      font: ref.typeface.brand,
      lineHeight: "24px",
      size: "16px",
      tracking: "0.5px",
      weight: ref.typeface.weight.medium,
    },
    BodyMedium: {
      font: ref.typeface.brand,
      lineHeight: "20px",
      size: "14px",
      tracking: "0.25px",
      weight: ref.typeface.weight.regular,
    },
    BodySmall: {
      font: ref.typeface.brand,
      lineHeight: "16px",
      size: "12px",
      tracking: "0.4px",
      weight: ref.typeface.weight.regular,
    },
  },
};

/**
 * object exporting the typeface token group
 */
const typography = {
  ref,
  sys,
};

export { typography };
