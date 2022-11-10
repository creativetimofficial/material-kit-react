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

/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { Fragment, useState, useEffect } from "react";

// @mui material components
import { Box, Theme } from "@mui/material";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import { MKBox } from "../../../components/MKBox";
import { MKTypography } from "../../../components/MKTypography";
import { MKButton } from "../../../components/MKButton";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "./DefaultNavbarDropdown";
import DefaultNavbarMobile from "./DefaultNavbarMobile";

// Material Kit 2 React base styles
import breakpoints from "../../../assets/theme/base/breakpoints";

import { Link as GatsbyLink } from "gatsby";
import { HeaderMenu, HeaderRoute, Link } from "../../../types";

function getRouteOrLinkComponent(item: Link):
  | { component: typeof GatsbyLink; to: string }
  | {
      component: typeof MuiLink;
      rel: string;
      href: string | undefined;
      target: string;
    } {
  return item.route
    ? {
        component: GatsbyLink,
        to: item.route,
      }
    : {
        component: MuiLink,
        href: item.href,
        target: "_blank",
        rel: "noreferrer",
      };
}

function DefaultNavbar({
  brand,
  routes,
  isTransparent,
  light,
  action,
  sticky,
  relative,
  center,
}: DefaultNavbarProps): JSX.Element {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownEl, setDropdownEl] = useState();
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState(false);
  const [nestedDropdownEl, setNestedDropdownEl] = useState<EventTarget & HTMLSpanElement>();
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState();
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = (): void => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar(): void {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, menu }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(menu)}
      onMouseEnter={({ currentTarget }) => {
        if (menu) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => menu && setDropdown(false)}
      light={light}
    />
  ));

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, menu, columns, rowsPerColumn }) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (menu && columns && name === dropdownName) {
      const calculateColumns = menu.reduce((resultArray: HeaderMenu[][], item, index) => {
        const chunkIndex = Math.floor(index / (rowsPerColumn ?? 3));
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                      mt={index !== 0 ? 2 : 0}
                    >
                      {col.name}
                    </MKTypography>

                    {col.subItems?.map((item) => (
                      <MKTypography
                        key={item.name}
                        {...getRouteOrLinkComponent(item)}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey }, borders: { borderRadius } }: Theme) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: grey?.A700,
                          },
                        })}
                      >
                        {item.name}
                      </MKTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (name === dropdownName) {
      template = menu?.map((item) => {
        return (
          <MKTypography
            key={item.name}
            {...getRouteOrLinkComponent(item)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? "14rem" : "12rem"}
            color={item.description ? "dark" : "text"}
            fontWeight={item.description ? "bold" : "regular"}
            py={item.description ? 1 : 0.625}
            px={2}
            sx={({ palette: { grey }, borders: { borderRadius } }: Theme) => ({
              borderRadius: borderRadius.md,
              cursor: "pointer",
              transition: "all 300ms linear",

              "&:hover": {
                backgroundColor: grey[200],
                color: grey?.A700,

                "& *": {
                  color: grey?.A700,
                },
              },
            })}
            onMouseEnter={({ currentTarget }) => {
              if (item.dropdown) {
                setNestedDropdown(true);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(false);
              }
            }}
          >
            {item.description ? (
              <MKBox>
                {item.name}

                <MKTypography
                  display="block"
                  variant="button"
                  color="text"
                  fontWeight="regular"
                  sx={{ transition: "all 300ms linear" }}
                >
                  {item.description}
                </MKTypography>
              </MKBox>
            ) : (
              item.name
            )}
            {item.subItems && (
              <KeyboardArrowDownIcon
                fontSize="small"
                sx={{
                  fontWeight: "normal",
                  verticalAlign: "middle",
                  mr: -0.5,
                }}
              />
            )}
          </MKTypography>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dropdownMenu = (
    <Popper
      anchorEl={dropdownEl}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => {
        setDropdown(true);
        setDropdownEl(dropdownEl);
      }}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(false);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          /*      sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => 'white',
          }}*/
        >
          <MKBox borderRadius="lg">
            <MKTypography variant="h1" color="white">
              <Box ref={setArrowRef}>
                <ArrowDropUpIcon sx={{ mt: -3 }} />
              </Box>
            </MKTypography>

            <MKBox shadow="lg" borderRadius="lg" p={2} mt={2}>
              {renderRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ menu, columns }) =>
    !columns
      ? menu?.map(({ name: parentName, subItems: nestedCollapse }) => {
          if (parentName === nestedDropdownName) {
            return nestedCollapse?.map((item) => (
              <MKTypography
                key={item.name}
                {...getRouteOrLinkComponent(item)}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                variant="button"
                textTransform="capitalize"
                minWidth={item.description ? "14rem" : "12rem"}
                color={item.description ? "dark" : "text"}
                fontWeight={item.description ? "bold" : "regular"}
                py={item.description ? 1 : 0.625}
                px={2}
                sx={({ palette: { grey }, borders: { borderRadius } }: Theme) => ({
                  borderRadius: borderRadius.md,
                  cursor: "pointer",
                  transition: "all 300ms linear",

                  "&:hover": {
                    backgroundColor: grey[200],
                    color: grey?.A700,

                    "& *": {
                      color: grey?.A700,
                    },
                  },
                })}
              >
                {item.description ? (
                  <MKBox>
                    {item.name}
                    <MKTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                ) : (
                  item.name
                )}
                {item.collapse && (
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{
                      fontWeight: "normal",
                      verticalAlign: "middle",
                      mr: -0.5,
                    }}
                  />
                )}
              </MKTypography>
            ));
          }
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdownEl}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(true);
        setNestedDropdownEl(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(false);
        setNestedDropdownName("");
        setDropdown(false);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          /* sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => 'white',
          }}*/
        >
          <MKBox ml={2.5} mt={-2.5} borderRadius="lg">
            <MKBox shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        py={1}
        px={{ xs: 4, sm: isTransparent ? 2 : 3, lg: isTransparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="xl"
        shadow={isTransparent ? undefined : "md"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={{
          backgroundColor: "transparent",
          backdropFilter: isTransparent ? "none" : `saturate(200%) blur(30px)`,
        }}
      >
        <MKBox display="flex" justifyContent="space-between" alignItems="center">
          <MKBox
            component={GatsbyLink}
            to="/"
            lineHeight={1}
            py={isTransparent ? 1.5 : 0.75}
            pl={relative || isTransparent ? 0 : { xs: 0, lg: 1 }}
          >
            <MKTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
              {brand}
            </MKTypography>
          </MKBox>

          <MKBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </MKBox>

          <MKBox ml={{ xs: "auto", lg: 0 }}>
            {action &&
              (action.type === "internal" ? (
                <MKButton
                  component={GatsbyLink}
                  to={action.route}
                  variant={
                    action.color === "white" || action.color === "default"
                      ? "contained"
                      : "gradient"
                  }
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </MKButton>
              ) : (
                <MKButton
                  component={GatsbyLink}
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant={
                    action.color === "white" || action.color === "default"
                      ? "contained"
                      : "gradient"
                  }
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </MKButton>
              ))}
          </MKBox>

          <MKBox
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={isTransparent ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            {mobileNavbar ? <CloseIcon fontSize="medium" /> : <MenuIcon fontSize="medium" />}
          </MKBox>
        </MKBox>

        <MKBox
          bgColor={isTransparent ? "white" : "transparent"}
          shadow={isTransparent ? "lg" : undefined}
          borderRadius="xl"
          px={isTransparent ? 2 : 0}
        >
          {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
        </MKBox>
      </MKBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "Material Kit 2",
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  relative: false,
  center: false,
};

// Typechecking props for the DefaultNavbar
interface DefaultNavbarProps {
  brand?: string;
  routes: HeaderRoute[];
  isTransparent?: boolean;
  light?: boolean;
  action: {
    type: "external" | "internal";
    route: string;
    color?:
      | "white"
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "light"
      | "dark"
      | "default";
    label: string;
  };
  sticky?: boolean;
  relative?: boolean;
  center?: boolean;
}

export default DefaultNavbar;
