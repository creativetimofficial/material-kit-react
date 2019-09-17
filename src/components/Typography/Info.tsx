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
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
// core components
import typographyStyle from "../../assets/jss/material-kit-react/components/typographyStyle";

interface IInfo extends WithStyles<typeof typographyStyle> {
  children?: any;
}
function Info({ ...props }: IInfo) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}

export default withStyles(typographyStyle)(Info);
