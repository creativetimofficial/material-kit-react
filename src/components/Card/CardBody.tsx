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
import cardBodyStyle from "../../assets/jss/material-kit-react/components/cardBodyStyle";

interface ICardBodyProps extends WithStyles<typeof cardBodyStyle> {
  className?: string;
  children?: any;
}
function CardBody({ ...props }: ICardBodyProps) {
  const { classes, className, children, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

export default withStyles(cardBodyStyle)(CardBody);
