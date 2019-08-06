/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { createStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/styles";

const style = createStyles({
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
});

interface IGridContainerProps extends WithStyles<typeof style> {
  // classes?: any;
  children?: any;
  className?: string;
  justify?: any;
}
function GridContainer({ ...props }: IGridContainerProps) {
  const { classes, children, className = "", ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
