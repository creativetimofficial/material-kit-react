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
import { SimplePaletteColorOptions } from "@mui/material/styles/createPalette";
import { BoxShadowColor, Theme } from "@mui/material";

// Material Kit 2 React components
import { MKBox } from "../../../components/MKBox";
import { MKTypography } from "../../../components/MKTypography";

function RotatingCardFront({
  color,
  image,
  icon,
  title,
  description,
}: RotatingCardFrontProps): JSX.Element {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      shadowColor={color}
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({ palette, functions: { linearGradient, rgba } }: Theme) => {
          return `${linearGradient(
            rgba(
              color && palette[color]
                ? palette[color].main
                : (palette.info as SimplePaletteColorOptions)?.main,
              0.85
            ),
            rgba(
              color && palette[color]
                ? palette[color].main
                : (palette.info as SimplePaletteColorOptions)?.main,
              0.85
            )
          )}, url(${image})`;
        },
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
interface RotatingCardFrontProps {
  color?: keyof BoxShadowColor;
  image: string;
  icon?: JSX.Element;
  title: JSX.Element | string;
  description: string;
}

export default RotatingCardFront;
