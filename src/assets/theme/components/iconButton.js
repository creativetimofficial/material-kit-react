// Couch to 5k Base Styles
import colors from "assets/theme/base/colors";

const { transparent } = colors;

export default {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};
