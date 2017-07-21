import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'helpers/BootstrapStyles';

import {
  Home,
  Components,
  Signup,
  NotFound,
  ProfileContainer
} from 'containers';

import 'bootstrap/dist/css/bootstrap.css';
import 'css/App.css';
import 'css/demo.css';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="appWrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/components" component={Components} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={ProfileContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
