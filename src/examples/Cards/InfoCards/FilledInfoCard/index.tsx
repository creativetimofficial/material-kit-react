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
import { ArrowForward } from "@mui/icons-material";
import MuiLink from "@mui/material/Link";
import { Link } from "gatsby";

// Material Kit 2 React components
import { MKBox } from "../../../../components/MKBox";
import { MKTypography } from "../../../../components/MKTypography";

function FilledInfoCard({
  variant,
  color,
  icon,
  title,
  description,
  action,
}: FilledInfoCardProps): JSX.Element {
  const buttonStyles = {
    width: "max-content",
    display: "flex",
    alignItems: "center",

    "& .material-icons-round": {
      fontSize: "1.125rem",
      transform: `translateX(3px)`,
      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(6px)`,
    },
  };

  let iconColor: string | undefined = color;

  if (variant === "gradient" && color !== "light") {
    iconColor = "white";
  } else if (variant === "gradient" && color === "light") {
    iconColor = "dark";
  }

  return (
    <MKBox
      display={{ xs: "block", md: "flex" }}
      variant={variant}
      bgColor={variant === "contained" ? "grey-100" : color}
      borderRadius="xl"
      pt={3.5}
      pb={3}
      px={3}
    >
      {iconColor && (
        <MKTypography
          display="block"
          variant="h3"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          color={iconColor}
          textGradient={variant === "contained"}
          mt={-0.625}
        >
          {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
        </MKTypography>
      )}
      <MKBox pt={{ xs: 3, md: 0 }} pl={{ xs: 0, md: 2 }} lineHeight={1}>
        <MKTypography
          display="block"
          variant="h5"
          color={variant === "contained" || color === "light" ? "dark" : "white"}
          fontWeight="bold"
          mb={1}
        >
          {title}
        </MKTypography>
        <MKTypography
          display="block"
          variant="body2"
          color={variant === "contained" || color === "light" ? "text" : "white"}
          mb={2}
        >
          {description}
        </MKTypography>

        {action && typeof action !== "boolean" && action.type === "external" ? (
          <MKTypography
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={variant === "contained" ? color : "white"}
            sx={buttonStyles}
          >
            {action.label} <ArrowForward sx={{ fontWeight: "bold" }} />
          </MKTypography>
        ) : null}

        {action && typeof action !== "boolean" && action.type === "internal" ? (
          <MKTypography
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={variant === "contained" ? color : "white"}
            sx={buttonStyles}
          >
            {action.label} <ArrowForward sx={{ fontWeight: "bold" }} />
          </MKTypography>
        ) : null}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the FilledInfoCard
FilledInfoCard.defaultProps = {
  variant: "contained",
  color: "info",
  action: false,
};

// Typechecking props for the FilledInfoCard
interface FilledInfoCardProps {
  variant?: "gradient" | "contained";
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  icon: JSX.Element | string;
  title: string;
  description: string;
  action?:
    | boolean
    | {
        type: "external" | "internal";
        route: string;
        label: string;
      };
}

export default FilledInfoCard;
