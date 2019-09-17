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
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardHeaderStyle from "../../assets/jss/material-kit-react/components/cardHeaderStyle";

interface ICardHeaderProps extends WithStyles<typeof cardHeaderStyle> {
  className?: string;
  color?: "warning" | "success" | "danger" | "info" | "primary" | "rose";
  plain?: boolean;
  children?: any;
}
function CardHeader({ ...props }: ICardHeaderProps) {
  const { classes, className, children, color, plain, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

export default withStyles(cardHeaderStyle)(CardHeader);
