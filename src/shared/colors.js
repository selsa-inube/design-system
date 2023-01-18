/**
 * This is the reference tokens for the colors.
 */
const ref = {
  palette: {
    darkNeutral: {
      dn50: "#5E6C84",
      dn75: "#505F79",
      dn100: "#42526E",
      dn200: "#344563",
      dn300: "#253858",
      dn400: "#172B4D",
      dn500: "#091E42",
      dn600: "#071835",
      dn700: "#06132A",
    },
    midNeutral: {
      mn50: "#B3BAC5",
      mn75: "#A5ADBA",
      mn100: "#97A0AF",
      mn200: "#8993A4",
      mn300: "#7A869A",
      mn400: "#6B778C",
      mn500: "#5E6C84",
      mn600: "#505F79",
      mn700: "#404C61",
    },
    ligthNeutral: {
      ln50: "#FFFFF",
      ln75: "#FAFBFC",
      ln100: "#F4F5F7",
      ln200: "#EBECF0",
      ln300: "#DFE1E6",
      ln400: "#C1C7D0",
      ln500: "#B3BAC5",
      ln600: "#72777E",
      ln700: "#494C51",
    },
    red: {
      r50: "#FFEBE6",
      r75: "#FFBDAD",
      r100: "#FF8F73",
      r200: "#FF7452",
      r300: "#FF5630",
      r400: "#DE350B",
      r500: "#BF2600",
      r600: "#7A1800",
      r700: "#621300",
    },
    yellow: {
      y50: "#FFFAE6",
      y75: "#FFF0B3",
      y100: "#FFE380",
      y200: "#FFC400",
      y300: "#FFAB00",
      y400: "#FF991F",
      y500: "#FF8B00",
      y600: "#CC6F00",
      y700: "#A35900",
    },
    green: {
      g50: "#E3FCEF",
      g75: "#ABF5D1",
      g100: "#79F2C0",
      g200: "#57D9A3",
      g300: "#36B37E",
      g400: "#00875A",
      g500: "#006644",
      g600: "#00422B",
      g700: "#002A1B",
    },
    blue: {
      b50: "#DEEBFF",
      b75: "#B3D4FF",
      b100: "#4C9AFF",
      b200: "#2684FF",
      b300: "#0065FF",
      b400: "#0052CC",
      b500: "#0747A6",
      b600: "#052E6A",
      b700: "#082145",
    },
    ligthBlue: {
      lb50: "#B3E5FC",
      lb75: "#81D4FA",
      lb100: "#4FC3F7",
      lb200: "#29B6F6",
      lb300: "#03A9F4",
      lb400: "#039BE5",
      lb500: "#0277BD",
      lb600: "#025F97",
      lb700: "#024C79",
    },
    teal: {
      t50: "#E6FCFF",
      t75: "#B3F5FF",
      t100: "#79E2F2",
      t200: "#00C7E6",
      t300: "#00B8D9",
      t400: "#00A3BF",
      t500: "#008DA6",
      t600: "#007185",
      t700: "#005A6A",
    },
    purple: {
      p50: "#EAE6FF",
      p75: "#C0B6F2",
      p100: "#998DD9",
      p200: "#8777D9",
      p300: "#6554C0",
      p400: "#5243AA",
      p500: "#403294",
      p600: "#29205E",
      p700: "#1A153C",
    },
    black: {
      black: "#000000",
    },
  },
};

/**
 * This is the system tokens (by defect that uses the references tokens previous created).
 */
const sys = {
  actions: {
    primary: ref.palette.blue.b400,
    secondary: ref.palette.ligthNeutral.ln200,
    confirm: ref.palette.green.g400,
    warning: ref.palette.yellow.y400,
    remove: ref.palette.red.r400,
    help: ref.palette.purple.p400,
  },
  messages: {
    information: ref.palette.blue.b400,
    success: ref.palette.green.g400,
    warning: ref.palette.yellow.y400,
    error: ref.palette.red.r400,
  },
  connectivity: {
    unavailable: ref.palette.ligthNeutral.ln200,
    available: ref.palette.green.g400,
    busy: ref.palette.red.r400,
    focus: ref.palette.purple.p400,
  },
  status: {
    inProgress: ref.palette.blue.b400,
    pending: ref.palette.ligthNeutral.ln200,
    complete: ref.palette.green.g400,
    moved: ref.palette.yellow.y400,
    failed: ref.palette.red.r400,
    new: ref.palette.purple.p400,
  },
  priority: {
    normal: ref.palette.blue.b400,
    low: ref.palette.ligthNeutral.ln200,
    high: ref.palette.yellow.y400,
    urgent: ref.palette.red.r400,
  },
  team: {
    me: ref.palette.blue.b400,
    others: ref.palette.ligthNeutral.ln200,
  },
  text: {
    primary: ref.palette.darkNeutral.dn500,
    secondary: ref.palette.darkNeutral.dn50,
    link: ref.palette.blue.b400,
    hover: ref.palette.darkNeutral.dn500,
  },
};

/**
 * Groups the tokens that are exported
 */
const colors = {
  ref,
  sys,
};

export { colors };
