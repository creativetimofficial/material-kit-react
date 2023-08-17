// Couch to 5k base styles
import typography from "assets/theme/base/typography";

// Couch to 5k helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
