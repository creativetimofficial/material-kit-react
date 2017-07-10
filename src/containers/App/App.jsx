import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from 'containers/Home/Home';
import Components from 'containers/Components/Components';
import NotFound from 'containers/NotFound/NotFound';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
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
        <div className="wrapper">
          <Header />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/components" component={Components}/>
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
