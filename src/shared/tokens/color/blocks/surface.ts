import { Palette } from "../palette/palette";

const Surface = {
  primary: {
    regular: Palette.blue.B400,
    hover: Palette.blue.B300,
    clear: Palette.blue.B50,
    disabled: Palette.neutral.N20,
  },
  error: {
    regular: Palette.red.R400,
    hover: Palette.red.R300,
    clear: Palette.red.R50,
    disabled: Palette.neutral.N20,
  },
  warning: {
    regular: Palette.yellow.Y400,
    hover: Palette.yellow.Y300,
    clear: Palette.yellow.Y50,
    disabled: Palette.neutral.N20,
  },
  success: {
    regular: Palette.green.G400,
    hover: Palette.green.G300,
    clear: Palette.green.G50,
    disabled: Palette.neutral.N20,
  },
  information: {
    regular: Palette.blue.B400,
    hover: Palette.blue.B300,
    clear: Palette.blue.B50,
    disabled: Palette.neutral.N20,
  },
  help: {
    regular: Palette.purple.P400,
    hover: Palette.purple.P300,
    clear: Palette.purple.P50,
    disabled: Palette.neutral.N20,
  },
  nav: {
    regular: Palette.neutral.N20,
  },
  navLink: {
    regular: Palette.neutralAlpha.N0A,
    selected: Palette.neutral.N30,
    hover: Palette.neutral.N30,
  },
  blanket: {
    regular: Palette.neutralAlpha.N100A,
  },
  dark: {
    regular: Palette.neutral.N900,
    hover: Palette.neutral.N500,
    clear: Palette.neutral.N30,
    disabled: Palette.neutral.N20,
  },
  gray: {
    regular: Palette.neutral.N200,
    hover: Palette.neutral.N90,
    clear: Palette.neutral.N10,
    disabled: Palette.neutral.N20,
  },
  light: {
    regular: Palette.neutral.N60,
    hover: Palette.neutral.N40,
    clear: Palette.neutral.N0,
    disabled: Palette.neutral.N20,
  },
};

export { Surface };
