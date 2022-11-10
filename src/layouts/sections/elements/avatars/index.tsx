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

import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "../../../assets/theme";

// Sections components
import BaseLayout from "../../../sections/components/BaseLayout";
import View from "../../../sections/components/View";

// Avatars page components
import AvatarGroup from "./components/AvatarGroup";
import AvatarSize from "./components/AvatarSize";

// Avatars page components code
import avatarGroupCode from "./components/AvatarGroup/code";
import avatarSizeCode from "./components/AvatarSize/code";

function Avatars(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Avatars"
        breadcrumb={[
          { label: "Page Sections", route: "/sections/elements/avatars" },
          { label: "Avatars" },
        ]}
      >
        <View title="Avatar Group" code={avatarGroupCode}>
          <AvatarGroup />
        </View>

        <View title="Avatar Size" code={avatarSizeCode}>
          <AvatarSize />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Avatars;
