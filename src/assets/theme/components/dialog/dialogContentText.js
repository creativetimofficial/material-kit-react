// Couch to 5k base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Couch to 5k helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

export default {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};
