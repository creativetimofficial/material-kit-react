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
// nodejs library to set properties for components
// import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";

// core components
import Button from "../CustomButtons/Button";

import customDropdownStyle from "../../assets/jss/material-kit-react/components/customDropdownStyle";
import { WithStyles } from "@material-ui/styles";

interface ICustomDropdownProps {
  hoverColor?: string;
  buttonText?: any;
  buttonIcon?: any;
  dropdownList?: any;
  buttonProps?: object;
  dropup?: boolean;
  dropdownHeader?: any;
  rtlActive?: boolean;
  caret?: boolean;
  left?: boolean;
  noLiPadding?: boolean;
  // function that retuns the selected item
  onClick?: any;
}

interface ICustomDropdownState {
  open: boolean;
}

interface ICustomDropdown
  extends ICustomDropdownProps,
    WithStyles<typeof customDropdownStyle> {}

class CustomDropdown extends React.Component<
  ICustomDropdown,
  ICustomDropdownState
> {
  anchorEl: any;
  constructor(props: ICustomDropdown, state: ICustomDropdownState) {
    super(props, state);
    this.state = {
      open: false
    };
  }
  // static defaultProps = {
  //   this.props.caret = true;
  //   hoverColor = "primary";
  // };
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  handleClose = param => {
    this.setState({ open: false });
    if (this.props && this.props.onClick) {
      this.props.onClick(param);
    }
  };

  handleCloseAway = event => {
    // console.log("Target: ", event.target);
    // console.log("AnchorEl: ", this.anchorEl);
    // console.log("current target: ", event.currentTarget);
    // console.log("Contains: ", this.anchorEl.contains(event.target));
    // console.log("Type of anchor: ", typeof this.anchorEl);

    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    // const { open } = this.state;
    const {
      // sclasses,
      buttonText,
      buttonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret = true,
      hoverColor = "primary",
      left,
      rtlActive,
      noLiPadding,
      classes
    } = this.props;

    //  const this.props.caret= true;
    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretActive]: this.state.open,
      [classes.caretRTL]: rtlActive
    });

    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[hoverColor + "Hover"]]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive
    });
    let icon = null;
    // let buttonI = this.props.buttonIcon;

    switch (typeof buttonIcon) {
      case "object":
        icon = <this.props.buttonIcon className={classes.buttonIcon} />;
        break;
      case "string":
        icon = (
          <Icon className={classes.buttonIcon}>{this.props.buttonIcon}</Icon>
        );
        break;
      default:
        icon = null;
        break;
    }
    return (
      <div>
        <div>
          <Button
            aria-label="Notifications"
            aria-owns={this.state.open ? "menu-list" : null}
            aria-haspopup="true"
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            onClick={this.handleClick}
          >
            {/* {console.log("icon: ", icon)} */}
            {icon}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
          open={this.state.open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement={
            dropup
              ? left
                ? "top-start"
                : "top"
              : left
              ? "bottom-start"
              : "bottom"
          }
          className={classNames({
            [classes.popperClose]: !this.state.open,
            [classes.popperResponsive]: true
          })}
        >
          {() => (
            <Grow
              in={this.state.open}
              //  id="menu-list"
              style={
                dropup
                  ? { transformOrigin: "0 100% 0" }
                  : { transformOrigin: "0 0 0" }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={this.handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={() => this.handleClose(dropdownHeader)}
                        className={classes.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={() => this.handleClose("divider")}
                            className={classes.dropdownDividerItem}
                          />
                        );
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => this.handleClose(prop)}
                          className={dropdownItem}
                        >
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default withStyles<never, never, ICustomDropdownProps>(
  customDropdownStyle
)(CustomDropdown);
