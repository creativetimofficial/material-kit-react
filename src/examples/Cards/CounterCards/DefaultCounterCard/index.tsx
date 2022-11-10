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

// react-countup component
import React from "react";

import CountUp from "react-countup";

// Material Kit 2 React components
import { MKBox } from "../../../../components/MKBox";
import { MKTypography } from "../../../../components/MKTypography";

function DefaultCounterCard({
  color,
  count,
  title,
  description,
  ...rest
}: DefaultCounterCardProps): JSX.Element {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
interface DefaultCounterCardProps {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  count: number;
  title?: string;
  description?: string;
  suffix?: string;
  separator?: string;
}

export default DefaultCounterCard;
