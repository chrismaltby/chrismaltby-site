import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PageTransition from "react-router-page-transition";
import ScrollToTop from "./components/ScrollToTop";
import PageViewTracker from "./components/PageViewTracker";

import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

export default () => (
  <Router>
    <PageViewTracker>
      <ScrollToTop>
        <App>
          <Route
            render={({ location }) => (
              <PageTransition timeout={1000}>
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/projects/:id" component={ProjectPage} />
                </Switch>
              </PageTransition>
            )}
          />
        </App>
      </ScrollToTop>
    </PageViewTracker>
  </Router>
);
