/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function RotatingCardFront({ color, image, icon, title, description }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow={color}
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85),
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85)
          )}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      }}
    >
      <MKBox py={12} px={3} textAlign="center" lineHeight={1}>
        {icon && (
          <MKTypography variant="h2" color="white" my={2}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </MKTypography>
        )}
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
  color: "info",
  icon: "",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default RotatingCardFront;
