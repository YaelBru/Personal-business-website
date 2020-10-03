import React from "react";
import NavItem from "../NavItem/NavItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as MenuIcon } from "../../../assets/icons/006-menu.svg";

const NavDropdown = () => {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const styledNavDropdown = makeStyles((theme) => ({
    popover: {
      position: "relative",
      zIndex: "2200"
    },
    paper: {
      marginRight: theme.spacing(0),
      borderRadius: "0",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.12)"
    }
  }));

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const classes = styledNavDropdown();

  return (
    <>
      <Button ref={anchorRef} onClick={handleToggle}>
        <MenuIcon width="20" height="20" />
      </Button>
      <Popper
        className={classes.popover}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{transformOrigin : placement === "bottom" ? "center top" : "center bottom"}}>
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={handleClose}>
                    <NavItem navItemName="אודות" scrollTo="/#about" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavItem navItemName="טיפולים" scrollTo="/#services" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavItem navItemName="יצירת קשר" scrollTo="/#contact" />
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default NavDropdown;
