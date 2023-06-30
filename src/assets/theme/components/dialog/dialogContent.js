// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};
