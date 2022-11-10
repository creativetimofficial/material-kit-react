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

import { BoxProps, PaletteColorKey } from "@mui/material";
import React, { useState } from "react";

// @mui material components
import Fade from "@mui/material/Fade";

// Material Kit 2 React components
import { MKBox } from "../MKBox";

// Custom styles for the MKAlert
import { MKAlertRoot } from "./MKAlertRoot";
import { MKAlertCloseIcon } from "./MKAlertCloseIcon";

export const MKAlert = ({
  color,
  dismissible,
  children,
  ...rest
}: React.PropsWithChildren<MKAlertProps & BoxProps>): JSX.Element => {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = (): void => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true): JSX.Element => (
    <Fade in={mount} timeout={300}>
      <MKAlertRoot ownerState={{ color }} {...rest}>
        <MKBox
          display="flex"
          alignItems="center"
          fontSize="1rem"
          fontWeight="regular"
          color={color === "light" ? "dark" : "white"}
        >
          {children}
        </MKBox>
        {dismissible ? (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <MKAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</MKAlertCloseIcon>
        ) : null}
      </MKAlertRoot>
    </Fade>
  );

  switch (alertStatus) {
    case "mount":
      return alertTemplate();
    case "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      return alertTemplate();
  }
};

// Setting default values for the props of MKAlert
MKAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the MKAlert
interface MKAlertProps {
  color?: PaletteColorKey;
  dismissible?: boolean;
}
