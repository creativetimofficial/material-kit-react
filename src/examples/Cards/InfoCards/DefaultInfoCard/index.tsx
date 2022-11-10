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

import React from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components

import { MKBox } from "../../../../components/MKBox";

import { MKTypography } from "../../../../components/MKTypography";

function DefaultInfoCard({
  color,
  icon,
  title,
  description,
  direction,
  small,
}: DefaultInfoCardProps): JSX.Element {
  return (
    <MKBox lineHeight={1} p={direction === "center" ? 2 : 0} textAlign={direction}>
      {typeof icon === "string" ? (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          <Icon>{icon}</Icon>
        </MKTypography>
      ) : (
        icon
      )}
      <MKTypography
        display="block"
        variant="h5"
        fontWeight="bold"
        mt={direction === "center" ? 1 : 2}
        mb={1.5}
      >
        {title}
      </MKTypography>
      <MKTypography
        display="block"
        variant={small ? "button" : "body2"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
      >
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  direction: "left",
  small: false,
};

// Typechecking props for the DefaultInfoCard
interface DefaultInfoCardProps {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  icon: JSX.Element;
  title: string | JSX.Element;
  description: string;
  direction?: "left" | "right" | "center";
  small?: boolean;
}

export default DefaultInfoCard;
