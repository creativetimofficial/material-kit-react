// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

// Sections

const routes = [
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "page sections",
        description: "See all sections",
        dropdown: true,
      },
      {
        name: "navigation",
        description: "See all navigations",
        dropdown: true,
      },
      {
        name: "input areas",
        description: "See all input areas",
        dropdown: true,
      },
      {
        name: "attention catchers",
        description: "See all examples",
        dropdown: true,
      },
      {
        name: "elements",
        description: "See all 32 examples",
        dropdown: true,
      },
    ],
  },
];

export default routes;
