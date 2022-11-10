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

import React, { forwardRef, createContext, useContext } from "react";
import { MKButtonProps } from "../MKButton";

// Material Kit 2 React components
import { MKBox } from "../MKBox";

// Custom styles for MKPagination
import { MKPaginationItemRoot } from "./MKPaginationItemRoot";

// The Pagination main context
const Context: React.Context<any> = createContext(null);

export const MKPagination = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<MKPaginationProps & MKButtonProps>
>(({ item, variant, color, size, active, children, placement, ...rest }, ref) => {
  const context = item ? useContext(Context) : null;
  const paginationSize = context ? context.size : null;
  let placementValue = "flex-end";

  if (placement === "left") {
    placementValue = "flex-start";
  } else if (placement === "center") {
    placementValue = "center";
  }

  return (
    <Context.Provider value={{ variant, color, size }}>
      {item ? (
        <MKPaginationItemRoot
          {...rest}
          ref={ref}
          variant={active ? context?.variant : "outlined"}
          color={active ? context?.color : "secondary"}
          iconOnly
          circular
          ownerState={{ variant, active, paginationSize }}
        >
          {children}
        </MKPaginationItemRoot>
      ) : (
        <MKBox
          display="flex"
          justifyContent={placementValue}
          alignItems="center"
          sx={{ listStyle: "none" }}
        >
          {children}
        </MKBox>
      )}
    </Context.Provider>
  );
});

// Setting default values for the props of MKPagination
MKPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
  placement: "right",
};

// Typechecking props for the MKPagination
interface MKPaginationProps {
  item?: boolean;
  variant?: "gradient" | "contained" | string;
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark";
  size?: "small" | "medium" | "large";
  active?: boolean;
  placement?: "left" | "right" | "center";
}
