import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="">
        <h1 style={theme.text.headerText}>Header</h1>
      </div>
    );
  }
}
