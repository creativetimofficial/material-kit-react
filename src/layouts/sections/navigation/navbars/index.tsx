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

import Dashboard from "@mui/icons-material/Dashboard";
import List from "@mui/icons-material/List";
import Schedule from "@mui/icons-material/Schedule";
import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "../../../assets/theme";

// Material Kit 2 React components
import { MKBox } from "../../../components/MKBox";

// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Stats page components
import NavbarDark from "./components/NavbarDark";
import NavPills from "../../../components/NavPills/NavPills";

// Stats page components code
import navbarDarkCode from "./components/NavbarDark/code";

function Navbars(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Navbars"
        breadcrumb={[
          { label: "Page Sections", route: "/sections/navigation/navbars" },
          { label: "Navbars" },
        ]}
      >
        <View title="Navbar dark" code={navbarDarkCode}>
          <MKBox py={6}>
            <NavbarDark />
          </MKBox>
        </View>
        <View title="Navigation Pills from Material UI Kit V1" code={""}>
          <MKBox py={6}>
            <NavPills
              color="primary"
              tabs={[
                {
                  tabButton: "Dashboard",
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: Dashboard,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Schedule",
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: Schedule,
                  tabContent: (
                    <span>
                      <p>
                        Efficiently unleash cross-media information without cross-media value.
                        Quickly maximize timely deliverables for real-time schemas.
                      </p>
                      <br />
                      <p>
                        Dramatically maintain clicks-and-mortar solutions without functional
                        solutions. Dramatically visualize customer directed convergence without
                        revolutionary ROI. Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C users after installed
                        base benefits.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Tasks",
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: List,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                    </span>
                  ),
                },
              ]}
            />
          </MKBox>
        </View>
        <View title="Navigation Pills from Material UI Kit V1" code={""}>
          <MKBox py={6}>
            <NavPills
              color="rose"
              horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 4 },
                contentGrid: { xs: 12, sm: 8, md: 8 },
              }}
              tabs={[
                {
                  tabButton: "Dashboard",
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: Dashboard,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after installed base benefits.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Schedule",
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: Schedule,
                  tabContent: (
                    <span>
                      <p>
                        Efficiently unleash cross-media information without cross-media value.
                        Quickly maximize timely deliverables for real-time schemas.
                      </p>
                      <br />
                      <p>
                        Dramatically maintain clicks-and-mortar solutions without functional
                        solutions. Dramatically visualize customer directed convergence without
                        revolutionary ROI. Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C users after installed
                        base benefits.
                      </p>
                    </span>
                  ),
                },
              ]}
            />
          </MKBox>
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Navbars;
