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

// mterial-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import { createStyles, WithStyles } from "@material-ui/core";

const style = createStyles({
  clearfix: {
    display: "table",
    content: " ",

    "&:after": {
      clear: "both"
    }
  }
});

interface IClearfix extends WithStyles<typeof style> {}
function Clearfix({ ...props }: IClearfix) {
  const { classes } = props;
  return <div className={classes.clearfix} />;
}

export default withStyles(style)(Clearfix);
