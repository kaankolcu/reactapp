import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";

import IconBtns from "../components/IconButtons/IconBtns";

import {
  MenuIconBtn,
  ChevronIconBtn,
  NightModeSwitch
} from "../components/IconButtons/IconBtns";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    textDecoration: "none"
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 10
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "space-between"
  },
  drawerHeaderMenu: {
    position: "absolute",
    left: 0
  },
  drawerChevron: {
    position: "absolute",
    right: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Toolbar disableGutters={!open} style={{ height: 100 }}>
          <MenuIconBtn
            onClick={this.handleDrawerOpen}
            theme={theme}
            className={classNames(classes.menuButton, open && classes.hide)}
          />
        </Toolbar>

        <ClickAwayListener onClickAway={this.handleDrawerClose}>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <div className={classes.drawerHeaderMenu}>
                <IconBtns onClick={this.handleDrawerClose} theme={theme} />
              </div>
              <div className={classes.drawerChevron}>
                <ChevronIconBtn
                  onClick={this.handleDrawerClose}
                  theme={theme}
                />
              </div>
            </div>
            <Divider />
            <List>
              {["Coding Challenges", "Coding Environment", "About"].map(
                (text, index) => (
                  <Link
                    to={text.replace(/\s/g, "")}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItem
                      button
                      key={text}
                      onClick={this.handleDrawerClose}
                    >
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <Typography style={theme.text.primary}>{text}</Typography>
                    </ListItem>
                  </Link>
                )
              )}
              <Divider />
            </List>

            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <Link go={text}>
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <Typography style={{ color: theme.text.secondary }}>
                      {text}
                    </Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <h3>Night Mode</h3>
            <NightModeSwitch theme={theme} />
          </Drawer>
        </ClickAwayListener>
        <div
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
        </div>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
