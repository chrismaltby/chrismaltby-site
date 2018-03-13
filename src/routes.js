import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PageTransition from "react-router-page-transition";

import App from "./App";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

export default () =>
  <Router>
    <App>
      <Route
        render={({ location }) =>
          <PageTransition timeout={1000}>
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/projects/:id" component={ProjectPage} />
            </Switch>
          </PageTransition>}
      />
    </App>
  </Router>;
