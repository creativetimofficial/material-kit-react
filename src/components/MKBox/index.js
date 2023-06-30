import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKBox
import MKBoxRoot from "components/MKBox/MKBoxRoot";

const MKBox = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
    <MKBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

// Setting default values for the props of MKBox
MKBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
};

// Typechecking props for the MKBox
MKBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  coloredShadow: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
};

export default MKBox;
