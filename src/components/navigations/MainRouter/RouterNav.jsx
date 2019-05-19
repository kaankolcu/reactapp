import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import CodingChallenges from "../pages/CodingChallenges";
import CodingEnvironment from "../pages/CodingEnvironment";

export default class RouterNav extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/CodingChallenges" component={CodingChallenges} />
          <Route path="/CodingEnvironment" component={CodingEnvironment} />
        </Switch>
      </div>
    );
  }
}
