import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import { Helmet } from "react-helmet";
import "./App.css";

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Helmet>
          <title>Chris Maltby</title>
          <meta
            name="description"
            content="I am a London based developer of applications, sites and games."
          />
        </Helmet>
        <AppHeader />
        <AppContent>
          {children}
        </AppContent>
        <AppFooter />
      </div>
    );
  }
}

export default App;
