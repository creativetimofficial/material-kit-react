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

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import { ArrowForward } from "@mui/icons-material";

// Material Kit 2 React components
import { MKBox } from "../../../../components/MKBox";
import { MKTypography } from "../../../../components/MKTypography";

import React from "react";
import { Link } from "gatsby";

function BackgroundBlogCard({
  image,
  title,
  description,
  action,
}: BackgroundBlogCardProps): JSX.Element {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  return (
    <Card
      sx={{
        backgroundImage: ({ palette: { black }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <MKBox p={3}>
        <MKBox minHeight="20.625rem" my="auto" py={3}>
          <MKTypography
            variant="h2"
            color="white"
            mb={1}
            sx={({ breakpoints, typography }) => ({
              [breakpoints.down("md")]: {
                fontSize: typography.size["3xl"],
              },
            })}
          >
            {title}
          </MKTypography>
          <MKTypography variant="body2" color="white" my={3}>
            {description}
          </MKTypography>
          {action.type === "internal" ? (
            <MKTypography
              component={Link}
              to={action.route}
              variant="body2"
              fontWeight="regular"
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            >
              {action.label}
              <ArrowForward sx={{ fontWeight: "bold" }} />
            </MKTypography>
          ) : (
            <MKTypography
              component={MuiLink}
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              fontWeight="regular"
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            >
              {action.label}
              <ArrowForward sx={{ fontWeight: "bold" }} />
            </MKTypography>
          )}
        </MKBox>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the BackgroundBlogCard
interface BackgroundBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: {
    type: "external" | "internal";
    route: string;
    label: string;
  };
}

export default BackgroundBlogCard;
