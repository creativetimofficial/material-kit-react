// /*!

// =========================================================
// * Material Kit React - v1.7.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-kit-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// // nodejs library to set properties for components
// // import PropTypes from "prop-types";
// // nodejs library that concatenates classes
// import classNames from "classnames";

// // @material-ui/core components
// // import makeStyles from "@material-ui/core/styles/makeStyles";
// import Button from "@material-ui/core/Button";

// // core components

// import buttonStyle from "../../assets/jss/material-kit-react/components/buttonStyle";
// import { WithStyles, withStyles } from "@material-ui/styles";
// import makeStyles from "@material-ui/core/styles/makeStyles";

// const makeComponentStyles = makeStyles(() => ({
//   ...buttonStyle
// }));

// interface IRegularButton {
//   color?: string;
//   round?: boolean;
//   children?: any;
//   fullWidth?: boolean;
//   disabled?: boolean;
//   simple?: boolean;
//   buttonRef?: any;
//   size?: string;
//   block?: boolean;
//   link?: boolean;
//   justIcon?: boolean;
//   className?: string;
//   onClick?: any;
//   href?: string;
//   rel?: string;
//   target?: string;
// }

// interface IButton extends IRegularButton {}
// const RegularButton = React.forwardRef((props: IRegularButton, ref: any) => {
//   const {
//     color,
//     round,
//     children,
//     fullWidth,
//     disabled,
//     simple,
//     size,
//     block,
//     buttonRef,
//     link,
//     justIcon,
//     className,
//     href,
//     target,
//     ...rest
//   } = props;

//   const classes = makeComponentStyles();

//   const btnClasses = classNames({
//     [classes.button]: true,
//     [classes[size]]: size,
//     [classes[color]]: color,
//     [classes.round]: round,
//     [classes.fullWidth]: fullWidth,
//     [classes.disabled]: disabled,
//     [classes.simple]: simple,
//     [classes.block]: block,
//     [classes.link]: link,
//     [classes.justIcon]: justIcon,
//     [className]: className
//   });

//   return (
//     <Button {...rest} ref={ref} className={btnClasses}>
//       {children}
//     </Button>
//   );
// });

// // export default withStyles(buttonStyle)(RegularButton);

// export default RegularButton;

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
import * as React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import Button from "@material-ui/core/Button";

// core components

import buttonStyle from "../../assets/jss/material-kit-react/components/buttonStyle";
import { WithStyles, withStyles } from "@material-ui/styles";

interface IRegularButtonProps extends WithStyles<typeof buttonStyle> {
  color?: string;
  round?: boolean;
  children?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  simple?: boolean;
  buttonRef?: any;
  size?: string;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
  onClick?: any;
  href?: string;
  rel?: string;
  target?: string;
}

const RegularButton = React.forwardRef(
  (props: IRegularButtonProps, ref: any) => {
    const {
      color,
      round,
      children,
      fullWidth,
      disabled,
      simple,
      size,
      block,
      link,
      justIcon,
      className,
      classes,
      target,
      ...rest
    } = props;

    // @ts-ignore
    // const classes = makeComponentStyles();

    const btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [className]: className
    });
    return (
      <Button {...rest} ref={ref} className={btnClasses}>
        {children}
      </Button>
    );
  }
);

export default withStyles(buttonStyle)(RegularButton);
