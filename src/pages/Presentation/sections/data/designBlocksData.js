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
    title: "Campanhas",
    description: "Acompanhe nossas campanhas e participe conosco!",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Page Headers",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Features",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Pricing",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "FAQ",
        count: 1,
        pro: true,
      },
      {
        image: `${imagesPrefix}/blogs.jpg`,
        name: "Blog Posts",
        count: 11,
        pro: true,
      },
      {
        image: `${imagesPrefix}/testimonials.jpg`,
        name: "Testimonials",
        count: 11,
        pro: true,
      },
    ],
  },
];
