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

import { IconName } from "@fortawesome/fontawesome-svg-core";
import { GreyColorName, PaletteColorKey } from "@mui/material";

export type ImagePosition = "left" | "right" | "top" | "bottom";
export type Image = {
  src: string;
  alt: string;
  positionFromMdx?: ImagePosition;
};

export type Library = {
  name: string;
  description: string;
  repository: string;
  documentation?: string;
  examples?: string;
  type: string;
};

export type About = AboutSubSection[];

export type AboutSubSection = {
  mdx: JSX.Element;
  image?: Image;
  withSeparator?: boolean;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: IconName | JSX.Element;
};

export type PostDescription = {
  title: string;
  text: string;
  cover: string;
  url: string;
  date: string;
  time: number;
  isInModelGenerationAppPage?: boolean;
};

export type Landing = {
  title: string;
  presentation: string;
  socialLinks: SocialLink[];
};

export type FooterRoutes = {
  brand: Link & { image: string };
  copyright: { name: string; url: string };
  socials: Omit<SocialLink, "name">[];
  menus: FooterMenu[];
};
export type FooterMenu = {
  name: string;
  items: Required<Omit<Link, "description" | "href">>[];
};

export type HeaderRoute = Omit<Link, "description"> & {
  icon: React.ReactElement<SvgIconProps>;
  columns?: number;
  rowsPerColumn?: number;
  menu?: HeaderMenu[];
};
export type HeaderMenu = Link & {
  dropdown?: boolean;
  subItems?: HeaderSubItem[];
};
export type HeaderSubItem = Link & {
  component: JSX.Element;
  collapse?: boolean;
};

export type Link = {
  name: string;
  description?: string;
  route?: string;
  href?: string;
};

export const isPaletteColorName = (color: string): color is PaletteColorKey =>
  [
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
    "tertiary",
    "spicy",
    "sweet",
    "manufacture",
    "education",
    "telecom",
    "financial",
    "energy",
    "health",
    "government",
    "distribution",
  ].includes(color);

export const isGreyColorName = (color: string): color is GreyColorName =>
  color === "grey-100" ||
  color === "grey-200" ||
  color === "grey-300" ||
  color === "grey-400" ||
  color === "grey-500" ||
  color === "grey-600" ||
  color === "grey-700" ||
  color === "grey-800" ||
  color === "grey-900";
