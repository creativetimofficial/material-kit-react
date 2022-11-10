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

import { Link as GatsbyLink } from "gatsby";

// @mui material components
import MaterialLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import { MKBox } from "../../components/MKBox";
import { MKTypography } from "../../components/MKTypography";

import { FooterRoutes, Link, FooterMenu, SocialLink } from "../../types";

function CenteredFooter({ content, light }: CenteredFooterProps): JSX.Element {
  const { brand, socials, menus, copyright } = content;

  const year = new Date().getFullYear();
  const color = light ? "tertiary" : "secondary";

  const renderLinks =
    menus &&
    menus.map((menu: FooterMenu) =>
      menu.items.map((item: Link) => (
        <MKTypography
          key={item.name}
          component={GatsbyLink}
          to={item.route}
          variant="body2"
          fontWeight="regular"
          textTransform="capitalize"
        >
          {item.name}
        </MKTypography>
      ))
    );

  const renderSocials =
    socials &&
    socials.map((social: Omit<SocialLink, "name">) => (
      <MKTypography
        key={social.url}
        component={MaterialLink}
        href={social.url}
        variant="body2"
        fontWeight="regular"
      >
        {social.icon}
      </MKTypography>
    ));

  const renderCopyright = (
    <MKTypography variant="caption">
      Copyright &copy; {year}{" "}
      <MKTypography
        component={GatsbyLink}
        to={brand.route}
        rel="noreferrer"
        variant="caption"
        fontWeight="regular"
        style={{ textDecoration: `underline dotted ${color}` }}
      >
        {brand.name}
      </MKTypography>{" "}
      by{" "}
      <MKTypography
        component={MaterialLink}
        href={copyright.url}
        target="_blank"
        rel="noreferrer"
        variant="caption"
      >
        {copyright.name}
      </MKTypography>
    </MKTypography>
  );

  return (
    <MKBox component="footer" py={6} color={color}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>

        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          {renderCopyright}
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  light: false,
};

// Typechecking props for the CenteredFooter
interface CenteredFooterProps {
  content: FooterRoutes;
  light?: boolean;
}

export default CenteredFooter;
