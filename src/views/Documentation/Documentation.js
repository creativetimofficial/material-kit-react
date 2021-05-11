/*!

=========================================================
* Material Kit React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import DocHeader from "./DocHeader/DocHeader";
import DocSidebar from "./DocSidebar/DocSidebar";

import docRoutes from "routes/documentation.js";

class Documentation extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <DocHeader />
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={3}
            lg={2}
            xl={2}
            style={{ marginTop: "75px", marginBottom: "75px" }}
          >
            <DocSidebar routes={docRoutes} {...this.props} />
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={5}
            style={{
              marginTop: "75px",
              marginBottom: "75px",
              minHeight: "calc(100vh - 75px)",
            }}
          >
            <Switch>
              {docRoutes.map((prop, key) => {
                if (prop.redirect)
                  return <Redirect from={prop.path} to={prop.to} key={key} />;
                return prop.routes.map((prop2, key2) => {
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={key2}
                    />
                  );
                });
              })}
            </Switch>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={2}
            lg={3}
            xl={2}
            style={{ marginTop: "75px" }}
          />
        </GridContainer>
      </div>
    );
  }
}

export default Documentation;
