// Getting started
import Tutorial from "views/Documentation/Sections/Tutorial.jsx";
import RoutingSystem from "views/Documentation/Sections/RoutingSystem.jsx";
import Styles from "views/Documentation/Sections/Styles.jsx";
import LintCommands from "views/Documentation/Sections/LintCommands.jsx";

// Components
import Badges from "views/Documentation/Sections/Badges.jsx";
import Buttons from "views/Documentation/Sections/Buttons.jsx";
import Cards from "views/Documentation/Sections/Cards.jsx";
import CheckboxRadioSwitch from "views/Documentation/Sections/CheckboxRadioSwitch.jsx";
import Clearfix from "views/Documentation/Sections/Clearfix.jsx";
import Dropdown from "views/Documentation/Sections/Dropdown.jsx";
import Footer from "views/Documentation/Sections/Footer.jsx";
import Grid from "views/Documentation/Sections/Grid.jsx";
import Icons from "views/Documentation/Sections/Icons.jsx";
import InfoAreas from "views/Documentation/Sections/InfoArea.jsx";
import Inputs from "views/Documentation/Sections/Inputs.jsx";
import LinearProgress from "views/Documentation/Sections/LinearProgress.jsx";
import Modal from "views/Documentation/Sections/Modal.jsx";
import Navigation from "views/Documentation/Sections/Navigation.jsx";
import NavPill from "views/Documentation/Sections/NavPills.jsx";
import Notifications from "views/Documentation/Sections/Notifications.jsx";
import Pagination from "views/Documentation/Sections/Pagination.jsx";
import Parallax from "views/Documentation/Sections/Parallax.jsx";
import Popovers from "views/Documentation/Sections/Popovers.jsx";
import Tabs from "views/Documentation/Sections/Tabs.jsx";
import Tooltips from "views/Documentation/Sections/Tooltips.jsx";
import Typography from "views/Documentation/Sections/Typography.jsx";

// Plugins
import Carousel from "views/Documentation/Sections/Carousel.jsx";
import DateTimePicker from "views/Documentation/Sections/DateTimePicker.jsx";
import Sliders from "views/Documentation/Sections/Sliders.jsx";

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
      {
        path: "/documentation/routing-system",
        name: "Routing System",
        component: RoutingSystem
      },
      { path: "/documentation/styles", name: "Styles", component: Styles },
      { path: "/documentation/lint-commands", name: "Lint Commands", component: LintCommands }
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
