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

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
// core components
import customLinearProgressStyle from "../../assets/jss/material-kit-react/components/customLinearProgressStyle";
import { WithStyles } from "@material-ui/styles";

interface ICustomLinearProgressProps
  extends WithStyles<typeof customLinearProgressStyle> {
  color?:
    | "gray"
    | "primary"
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "rose";
  variant?: any;
  value?: number;
  style?: object;
}
function CustomLinearProgress({ ...props }: ICustomLinearProgressProps) {
  const { classes, color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + classes[color + "Background"],
        bar: classes.bar + " " + classes[color]
      }}
    />
  );
}

export default withStyles(customLinearProgressStyle)(CustomLinearProgress);
