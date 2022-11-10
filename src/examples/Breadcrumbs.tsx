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
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import { SimplePaletteColorOptions } from "@mui/material/styles/createPalette";

import { Link } from "gatsby";

// Material Kit 2 React components
import { MKBox, MKTypography } from "../components";

export interface BreadcrumbRoute {
  label: string;
  route?: string;
}

// Typechecking props for the Breadcrumbs
interface BreadcrumbsProps {
  routes: BreadcrumbRoute[];
}

export const Breadcrumbs = ({ routes, ...rest }: BreadcrumbsProps): JSX.Element => {
  return (
    <MKBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <MKTypography
              key={label}
              component={Link}
              to={route}
              variant="button"
              color="text"
              fontWeight="regular"
              opacity={0.8}
              sx={{
                "&:hover, &:focus": {
                  color: ({ palette: { info } }) => (info as SimplePaletteColorOptions)?.main,
                },
              }}
            >
              {label}
            </MKTypography>
          ) : (
            <MKTypography key={label} variant="button" fontWeight="regular">
              {label}
            </MKTypography>
          )
        )}
      </MuiBreadcrumbs>
    </MKBox>
  );
};
