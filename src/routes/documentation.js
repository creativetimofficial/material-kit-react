/*!

=========================================================
* Material Kit React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Getting started
import Tutorial from "views/Documentation/Sections/Tutorial.js";
import Styles from "views/Documentation/Sections/Styles.js";
import LintCommands from "views/Documentation/Sections/LintCommands.js";
import BuildTools from "views/Documentation/Sections/BuildTools.js";

// Components
import Badges from "views/Documentation/Sections/Badges.js";
import Buttons from "views/Documentation/Sections/Buttons.js";
import Cards from "views/Documentation/Sections/Cards.js";
import CheckboxRadioSwitch from "views/Documentation/Sections/CheckboxRadioSwitch.js";
import Clearfix from "views/Documentation/Sections/Clearfix.js";
import Dropdown from "views/Documentation/Sections/Dropdown.js";
import Footer from "views/Documentation/Sections/Footer.js";
import Grid from "views/Documentation/Sections/Grid.js";
import Icons from "views/Documentation/Sections/Icons.js";
import InfoAreas from "views/Documentation/Sections/InfoArea.js";
import Inputs from "views/Documentation/Sections/Inputs.js";
import LinearProgress from "views/Documentation/Sections/LinearProgress.js";
import Modal from "views/Documentation/Sections/Modal.js";
import Navigation from "views/Documentation/Sections/Navigation.js";
import NavPill from "views/Documentation/Sections/NavPills.js";
import Notifications from "views/Documentation/Sections/Notifications.js";
import Pagination from "views/Documentation/Sections/Pagination.js";
import Parallax from "views/Documentation/Sections/Parallax.js";
import Popovers from "views/Documentation/Sections/Popovers.js";
import Tabs from "views/Documentation/Sections/Tabs.js";
import Tooltips from "views/Documentation/Sections/Tooltips.js";
import Typography from "views/Documentation/Sections/Typography.js";

// Plugins
import Carousel from "views/Documentation/Sections/Carousel.js";
import DateTimePicker from "views/Documentation/Sections/DateTimePicker.js";
import Sliders from "views/Documentation/Sections/Sliders.js";

const docRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        name: "Tutorial",
        component: Tutorial
      },
      { path: "/documentation/styles", name: "Styles", component: Styles },
      {
        path: "/documentation/lint-commands",
        name: "Lint Commands",
        component: LintCommands
      },
      {
        path: "/documentation/build-tools",
        name: "Build Tools",
        component: BuildTools
      }
    ]
  },
  {
    name: "Components",
    path: "/documentation/badges",
    routes: [
      { path: "/documentation/badges", name: "Badges", component: Badges },
      { path: "/documentation/buttons", name: "Buttons", component: Buttons },
      { path: "/documentation/cards", name: "Cards", component: Cards },
      {
        path: "/documentation/checkbox-radio",
        name: "CheckboxRadioSwitch",
        component: CheckboxRadioSwitch
      },
      {
        path: "/documentation/clear-fix",
        name: "Clearfix",
        component: Clearfix
      },
      {
        path: "/documentation/dropdown",
        name: "Dropdown",
        component: Dropdown
      },
      { path: "/documentation/footer", name: "Footer", component: Footer },
      { path: "/documentation/grid", name: "Grid", component: Grid },
      { path: "/documentation/icons", name: "Icons", component: Icons },
      {
        path: "/documentation/info-areas",
        name: "InfoAreas",
        component: InfoAreas
      },
      { path: "/documentation/inputs", name: "Inputs", component: Inputs },
      {
        path: "/documentation/linear-progress",
        name: "Linear Progress",
        component: LinearProgress
      },
      { path: "/documentation/modals", name: "Modals", component: Modal },
      {
        path: "/documentation/navigation",
        name: "Navigation",
        component: Navigation
      },
      {
        path: "/documentation/nav-pills",
        name: "NavPills",
        component: NavPill
      },
      {
        path: "/documentation/notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "/documentation/pagination",
        name: "Pagination",
        component: Pagination
      },
      {
        path: "/documentation/parallax",
        name: "Parallax",
        component: Parallax
      },
      {
        path: "/documentation/popovers",
        name: "Popovers",
        component: Popovers
      },
      { path: "/documentation/tabs", name: "Tabs", component: Tabs },
      {
        path: "/documentation/tooltips",
        name: "Tooltips",
        component: Tooltips
      },
      {
        path: "/documentation/typography",
        name: "Typography",
        component: Typography
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/carousel",
    routes: [
      {
        path: "/documentation/carousel",
        name: "Carousel",
        component: Carousel
      },
      {
        path: "/documentation/date-time-picker",
        name: "DateTimePicker",
        component: DateTimePicker
      },
      { path: "/documentation/sliders", name: "Sliders", component: Sliders }
    ]
  },
  { redirect: true, path: "/documentation", to: "/documentation/tutorial" }
];

export default docRoutes;
