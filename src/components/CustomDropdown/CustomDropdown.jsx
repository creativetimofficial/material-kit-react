import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";

// core components
import Button from "components/CustomButtons/Button.jsx";

import customDropdownStyle from "assets/jss/material-kit-react/components/customDropdownStyle.jsx";

class CustomDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const { open } = this.state;
    const {
      classes,
      buttonText,
      buttonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      left,
      rtlActive,
      noLiPadding
    } = this.props;
    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretActive]: open,
      [classes.caretRTL]: rtlActive
    });
    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[hoverColor + "Hover"]]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive
    });
    return (
      <Manager>
        <Target>
          <Button
            aria-label="Notifications"
            aria-owns={open ? "menu-list" : null}
            aria-haspopup="true"
            {...buttonProps}
            onClick={this.handleClick}
          >
            {buttonIcon !== undefined ? (
              <this.props.buttonIcon className={classes.buttonIcon} />
            ) : null}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </Target>
        <Popper
          placement={
            dropup
              ? left ? "top-end" : "top-start"
              : left ? "bottom-end" : "bottom-start"
          }
          eventsEnabled={open}
          className={classNames({
            [classes.popperClose]: !open,
            [classes.pooperResponsive]: true
          })}
        >
          <ClickAwayListener onClickAway={this.handleClose}>
            <Grow
              in={open}
              id="menu-list"
              style={
                dropup
                  ? { transformOrigin: "0 100% 0" }
                  : { transformOrigin: "0 0 0" }
              }
            >
              <Paper className={classes.dropdown}>
                <MenuList role="menu" className={classes.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={this.handleClose}
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
                          onClick={this.handleClose}
                          className={classes.dropdownDividerItem}
                        />
                      );
                    }
                    return (
                      <MenuItem
                        key={key}
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Paper>
            </Grow>
          </ClickAwayListener>
        </Popper>
      </Manager>
    );
  }
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

CustomDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  hoverColor: PropTypes.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.func,
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
};

export default withStyles(customDropdownStyle)(CustomDropdown);
