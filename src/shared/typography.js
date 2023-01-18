/**
 * This is the reference tokens for the typography.
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
 * This is the system tokens for the typography.
 */
const sys = {
  typescale: {
    displauLarge: {
      font: ref.typeface.brand,
      lineHeight: 64,
      size: 57,
      tracking: 0,
      weight: ref.typeface.weight.regular,
    },
    displayMedium: {
      font: ref.typeface.brand,
      lineHeight: 52,
      size: 45,
      tracking: 0,
      weight: ref.typeface.weight.regular,
    },
    displaySmall: {
      font: ref.typeface.brand,
      lineHeight: 44,
      size: 36,
      tracking: 0,
      weight: ref.typeface.weight.regular,
    },
    headlineLarge: {
      font: ref.typeface.brand,
      lineHeight: 40,
      size: 32,
      tracking: 0,
      weight: ref.typeface.weight.regular,
    },
    headlineMedium: {
      font: ref.typeface.brand,
      lineHeight: 36,
      size: 28,
      tracking: 0,
      weight: ref.typeface.weight.regular,
    },
    headlineSmall: {
      font: ref.typeface.brand,
      lineHeight: 32,
      size: 24,
      tracking: 0,
      weight: ref.typeface.weight.regular,
    },
    titleLarge: {
      font: ref.typeface.brand,
      lineHeight: 28,
      size: 22,
      tracking: 0,
      weight: ref.typeface.weight.regular,
    },
    titleMedium: {
      font: ref.typeface.brand,
      lineHeight: 24,
      size: 16,
      tracking: 0.15,
      weight: ref.typeface.weight.medium,
    },
    titleSmall: {
      font: ref.typeface.brand,
      lineHeight: 20,
      size: 14,
      tracking: 0.1,
      weight: ref.typeface.weight.medium,
    },
    labelLarge: {
      font: ref.typeface.brand,
      lineHeight: 20,
      size: 14,
      tracking: 0.1,
      weight: ref.typeface.weight.medium,
    },
    labelMedium: {
      font: ref.typeface.brand,
      lineHeight: 16,
      size: 12,
      tracking: 0.5,
      weight: ref.typeface.weight.medium,
    },
    labelSmall: {
      font: ref.typeface.brand,
      lineHeight: 16,
      size: 11,
      tracking: 0.5,
      weight: ref.typeface.weight.medium,
    },
    bodyLarge: {
      font: ref.typeface.brand,
      lineHeight: 24,
      size: 16,
      tracking: 0.5,
      weight: ref.typeface.weight.medium,
    },
    bodyMedium: {
      font: ref.typeface.brand,
      lineHeight: 20,
      size: 14,
      tracking: 0.25,
      weight: ref.typeface.weight.regular,
    },
    bodySmall: {
      font: ref.typeface.brand,
      lineHeight: 16,
      size: 12,
      tracking: 0.4,
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
