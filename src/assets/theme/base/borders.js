/**
 * The base border styles for the Couch to 5k.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire Couch to 5k using thie file.
 */

// Couch to 5k Base Styles
import colors from "assets/theme/base/colors";

// Couch to 5k Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey } = colors;

export default {
  borderColor: grey[300],

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160),
  },
};
