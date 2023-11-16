/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Our Partners",
    description: "These restaurants are partnering with us to bring you great food",
    items: [
      {
        image: `https://tse2.mm.bing.net/th?id=OIP.DZi9gzPl3IFb1gFPJ7twTwHaE7&pid=Api`,
        name: "Aladdin's Eatery",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `https://images.squarespace-cdn.com/content/v1/64528ad4028d741ee50322ea/5d266a6a-5f37-4044-a24a-38245aeb8104/IMG_2651.JPG?format=1500w`,
        name: "India Garden",
        count: 18,
      },
      {
        image: `https://d2ugbn5gb88fyp.cloudfront.net/449043/0_0.webp`,
        name: "Franky's Tacos",
        count: 8,
      },
      {
        image: `https://s3-media0.fl.yelpcdn.com/bphoto/GJ5FWpR6Ea_C5KTLwgDyhA/348s.jpg`,
        name: "Cambodian Thai",
        count: 6,
      },
      {
        image: `https://s3-media0.fl.yelpcdn.com/bphoto/ee8BYMK90Fhb2zTer7FEmg/348s.jpg`,
        name: "Seoul Garden",
        count: 14,
        route: "/sections/page-sections/features",
      },
    ],
  },
  {
    title: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Navbars",
        count: 4,
        route: "/sections/navigation/navbars",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Nav Tabs",
        count: 2,
        route: "/sections/navigation/nav-tabs",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Pagination",
        count: 3,
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "Input Areas",
    description: "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Newsletters",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Contact Sections",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Forms",
        count: 3,
        route: "/sections/input-areas/forms",
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        name: "Inputs",
        count: 6,
        route: "/sections/input-areas/inputs",
      },
    ],
  },
  {
    title: "Attention Catchers",
    description: "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: `${imagesPrefix}/alerts.jpg`,
        name: "Alerts",
        count: 4,
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        name: "Notifications",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/popovers.jpg`,
        name: "Tooltips & Popovers",
        count: 2,
        route: "/sections/attention-catchers/tooltips-popovers",
      },
      {
        image: `${imagesPrefix}/modals.jpg`,
        name: "Modals",
        count: 5,
        route: "/sections/attention-catchers/modals",
      },
    ],
  },
  {
    title: "Elements",
    description: "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        name: "Buttons",
        count: 6,
        route: "/sections/elements/buttons",
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        name: "Avatars",
        count: 2,
        route: "/sections/elements/avatars",
      },
      {
        image: `${imagesPrefix}/dropdowns.jpg`,
        name: "Dropdowns",
        count: 2,
        route: "/sections/elements/dropdowns",
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        name: "Toggles",
        count: 2,
        route: "/sections/elements/toggles",
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        name: "Social Buttons",
        count: 2,
        pro: true,
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        name: "Breadcrumbs",
        count: 1,
        route: "/sections/elements/breadcrumbs",
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        name: "Badges",
        count: 3,
        route: "/sections/elements/badges",
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        name: "Progress Bars",
        count: 4,
        route: "/sections/elements/progress-bars",
      },
      {
        image: `${imagesPrefix}/tables.jpg`,
        name: "Tables",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        name: "Typography",
        count: 2,
        route: "/sections/elements/typography",
      },
    ],
  },
];
