/**
  The rgba() function helps you to create a rgba color code, it uses the hexToRgb() function
  to convert the hex code into rgb for using it inside the rgba color format.
 */

// Material Kit 2 React helper functions
import hexToRgb from "assets/theme/functions/hexToRgb";

function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
