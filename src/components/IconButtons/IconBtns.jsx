import React, { Component } from "react";

import ProfileIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";

import MenuIcon from "@material-ui/icons/Menu";

import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default class IconBtns extends Component {
  render() {
    const { theme, onClick } = this.props;
    return (
      <div>
        <Link to="Home" style={{ textDecoration: "none" }}>
          <IconButton onClick={onClick}>
            {theme.direction === "ltr" ? <HomeIcon /> : <HomeIcon />}
          </IconButton>
        </Link>

        <IconButton onClick={onClick}>
          {theme.direction === "ltr" ? <ProfileIcon /> : <ProfileIcon />}
        </IconButton>

        <IconButton onClick={onClick}>
          {theme.direction === "ltr" ? <SettingsIcon /> : <SettingsIcon />}
        </IconButton>
      </div>
    );
  }
}

export class MenuIconBtn extends Component {
  render() {
    const { onClick, className } = this.props;
    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onClick}
          className={className}
        >
          <MenuIcon />
        </IconButton>
      </div>
    );
  }
}

export class ChevronIconBtn extends Component {
  render() {
    const { theme, onClick } = this.props;
    return (
      <div>
        <IconButton onClick={onClick}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
    );
  }
}
