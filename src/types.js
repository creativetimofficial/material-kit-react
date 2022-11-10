/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { GreyColorName, PaletteColorKey } from '@mui/material';

export type ImagePosition = 'left' | 'right' | 'top' | 'bottom';
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
  socials: Omit<SocialLink, 'name'>[];
  menus: FooterMenu[];
};
export type FooterMenu = {
  name: string;
  items: Required<Omit<Link, 'description' | 'href'>>[];
};

export type HeaderRoute = Omit<Link, 'description'> & {
  icon: JSX.Element;
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
    'primary',
    'secondary',
    'error',
    'warning',
    'info',
    'success',
    'tertiary',
    'spicy',
    'sweet',
    'manufacture',
    'education',
    'telecom',
    'financial',
    'energy',
    'health',
    'government',
    'distribution',
  ].includes(color);

export const isGreyColorName = (color: string): color is GreyColorName =>
  color === 'grey-100' ||
  color === 'grey-200' ||
  color === 'grey-300' ||
  color === 'grey-400' ||
  color === 'grey-500' ||
  color === 'grey-600' ||
  color === 'grey-700' ||
  color === 'grey-800' ||
  color === 'grey-900';
