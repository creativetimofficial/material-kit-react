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
  "/home/joaolevi/projects/templates/material-kit-react/src/assets/images/teste-noticias";

export default [
  {
    // title: "Campanhas",
    // description: "Acompanhe nossas campanhas e participe conosco!",
    items: [
      {
        image: `${imagesPrefix}/domingo_culto_horario.jpg`,
        name: "Page Headers",
        count: 14,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/ebd_professores.jpg`,
        name: "Features",
        count: 10,
        route: "/sections/page-sections/features",
      },
      // {
      //   image: `${imagesPrefix}/pricing.jpg`,
      //   name: "Pricing",
      //   count: 8,
      //   pro: true,
      // },
      {
        image: `${imagesPrefix}/ebd_solidaria.jpg`,
        name: "FAQ",
        count: 1,
        pro: true,
      },
      {
        image: `${imagesPrefix}/quarta_culto_oracao.jpg`,
        name: "Blog Posts",
        count: 11,
        pro: true,
      },
      // {
      //   image: `${imagesPrefix}/testimonials.jpg`,
      //   name: "Testimonials",
      //   count: 11,
      //   pro: true,
      // },
    ],
  },
];

console.log(`${imagesPrefix}/domingo_culto_horario.jpg`);
