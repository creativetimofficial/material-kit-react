/**
 All the routes for the Material Kit 2 React are added here,
 You can add a new route, customize the routes and delete the routes here.

 Once you add a new route on this file it will be visible automatically on
 the Navbar.

 For adding a new route you can follow the existing routes in the routes array.
 1. The `name` key is used for the name of the route on the Navbar.
 2. The `icon` key is used for the icon of the route on the Navbar.
 3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
 inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
 4. The `route` key is used to store the route location which is used for the react router.
 5. The `href` key is used to store the external links location.
 6. The `component` key is used to store the component of its route.
 7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
 8. The `description` key is used to define the description of
 a route under its name.
 9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
 you can set the columns amount based on this key.
 10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
 */

// @mui material components
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MapIcon from "@mui/icons-material/Map";
// @mui icons

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";

const routes = [
  {
    name: "vendors",
    icon: <AddBusinessIcon />,
    columns: 2,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "Photographers",
        collapse: [
          {
            name: "Pre-Wedding Shoot",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Cinema/Video",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Maternity Shoot",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "Planning & Decor",
        collapse: [
          {
            name: "Wedding Planner",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
          {
            name: "Catering Service",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "Venues",
    icon: <MapIcon />,
    columns: 2,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "By Type",
        description: "See all types",
        dropdown: true,
        collapse: [
          {
            name: "Banquet Halls",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Lawns / Farmhouses",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Resorts",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Small Function / Party Halls",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Destination Wedding",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Kalyana Mandapam",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "4 Star & Above Hotels",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Venue Concierge Services",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
        ],
      },
      {
        name: "By Location",
        description: "See all locations",
        dropdown: true,
        collapse: [
          {
            name: "Pallavaram",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Velachery",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Tambaram",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Ambattur",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Sholinganallur",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Egmore",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Indira Nagar",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
        ],
      },
    ],
  },
];

export default routes;
