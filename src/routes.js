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
    ],
  },
];

export default routes;
