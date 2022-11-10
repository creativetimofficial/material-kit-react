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

import React, { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import { MKBox } from "../../../components/MKBox";

function RotatingCard({ children }: React.PropsWithChildren<RotatingCardProps>): JSX.Element {
  const [rotate, setRotate] = useState(false);

  const rotate0 = (): void => setRotate(false);
  const rotate180 = (): void => setRotate(true);

  return (
    <MKBox sx={{ perspective: "50rem" }} onMouseEnter={rotate180} onMouseLeave={rotate0}>
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          position: "relative",
          transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
          transformStyle: "preserve-3d",
          transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        }}
      >
        {children}
      </Card>
    </MKBox>
  );
}

// Typechecking props for the RotatingCard
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RotatingCardProps {}

export default RotatingCard;
