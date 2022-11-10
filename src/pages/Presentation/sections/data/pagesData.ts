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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation";
const imagesPagesPrefix = `${imagesPrefix}/pages`;

export default [
  {
    image: `${imagesPagesPrefix}/about-us.jpg`,
    name: "About Us Page",
    route: "/LandingPages/AboutUs",
  },
  {
    image: `${imagesPagesPrefix}/contact.jpg`,
    name: "Contact Us Page",
    route: "/LandingPages/ContactUs",
  },
  {
    image: `${imagesPrefix}/account/signin-basic.jpg`,
    name: "Sign In Page",
    route: "/LandingPages/SignIn",
  },
  {
    image: `${imagesPagesPrefix}/author.jpg`,
    name: "Author Page",
    route: "/LandingPages/Author",
  },
];
