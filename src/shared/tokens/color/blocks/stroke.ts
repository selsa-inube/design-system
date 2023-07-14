import { Palette } from "../palette/palette";

const Stroke = {
  primary: {
    regular: Palette.blue.B400,
    hover: Palette.blue.B300,
    focus: Palette.blue.B300,
    disabled: Palette.neutral.N70,
  },
  error: {
    regular: Palette.red.R400,
    hover: Palette.red.R300,
    disabled: Palette.neutral.N70,
  },
  warning: {
    regular: Palette.yellow.Y400,
    hover: Palette.yellow.Y300,
    disabled: Palette.neutral.N70,
  },
  success: {
    regular: Palette.green.G400,
    hover: Palette.green.G300,
    disabled: Palette.neutral.N70,
  },
  information: {
    regular: Palette.blue.B400,
    hover: Palette.blue.B300,
    disabled: Palette.neutral.N70,
  },
  help: {
    regular: Palette.purple.P400,
    hover: Palette.purple.P300,
    disabled: Palette.neutral.N70,
  },
  divider: {
    regular: Palette.neutral.N40,
  },
  spinner: {
    regular: Palette.neutral.N30,
    transparent: Palette.neutralAlpha.N0A,
  },
  dark: {
    regular: Palette.neutral.N900,
    hover: Palette.neutral.N500,
    disabled: Palette.neutral.N70,
  },
  gray: {
    regular: Palette.neutral.N200,
    hover: Palette.neutral.N90,
    disabled: Palette.neutral.N70,
  },
  light: {
    regular: Palette.neutral.N10,
    hover: Palette.neutral.N0,
    disabled: Palette.neutral.N60,
  },
  link: {
    regular: Palette.blue.B400,
    hover: Palette.blue.B300,
    disabled: Palette.neutral.N70,
  },
};

export { Stroke };
