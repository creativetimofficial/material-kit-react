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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MaterialLink from "@mui/material/Link";

// Material Kit 2 React components
import { MKBox } from "../../components/MKBox";
import { MKTypography } from "../../components/MKTypography";

import { FooterRoutes, Link as FooterLink, FooterMenu, SocialLink } from "../../types";

function DefaultFooter({ content }: DefaultFooterProps): JSX.Element {
  const { brand, socials, menus, copyright } = content;

  const year = new Date().getFullYear();

  return (
    <MKBox component="footer" py={6}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          flexDirection={["column", "row"]}
          alignItems={["center", undefined]}
        >
          <Grid item xs={4} md={3} sx={{ mb: 3 }}>
            <MKBox>
              <GatsbyLink to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="3rem" mb={2} />
              </GatsbyLink>
              <MKTypography variant="h6">{brand.name}</MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, url }: Omit<SocialLink, "name">, key: number) => (
                <MKTypography
                  key={url}
                  component={MaterialLink}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="primary"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>

          <Grid
            container
            item
            xs={8}
            md={8}
            sx={{ mb: 3 }}
            flexDirection="row"
            justifyContent={["space-between", "space-evenly"]}
            alignItems={["space-between", undefined]}
          >
            {menus.map(({ name, items }: FooterMenu) => (
              <Grid key={name} item xs={false} md={2} sx={{ mb: [3, 0] }}>
                <MKTypography
                  display="block"
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  mb={1}
                >
                  {name}
                </MKTypography>

                <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                  {items.map(({ name, route }: FooterLink) => (
                    <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                      <MKTypography
                        component={GatsbyLink}
                        to={route}
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    </MKBox>
                  ))}
                </MKBox>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            <MKTypography variant="caption" fontWeight="regular">
              Copyright &copy; {year}{" "}
              <MKTypography
                component={GatsbyLink}
                to={brand.route}
                rel="noreferrer"
                variant="caption"
                fontWeight="regular"
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
                fontWeight="regular"
              >
                {copyright.name}
              </MKTypography>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
interface DefaultFooterProps {
  content: FooterRoutes;
}

export default DefaultFooter;
