import React from "react";

import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Components from "./views/Components/Components";
import LoginPage from "./views/LoginPage/LoginPage";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";

import "./assets/css/material-kit-react.css";
var hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/profile-page" component={ProfilePage} />

      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
