const ref = {
  typeface: {
    brand: "Roboto",
    weight: {
      regular: 400,
      medium: 500,
    },
  },
};

const sys = {
  typescale: {
    displayLarge: {
      font: ref.typeface.brand,
      lineHeight: "64px",
      size: "57px",
      tracking: "0",
      weight: ref.typeface.weight.regular,
    },
  },
};

const typography = {
  ref,
  sys,
};

export { typography };
