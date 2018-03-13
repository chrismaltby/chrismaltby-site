import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import "./App.css";

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <AppHeader />
        <AppContent>{children}</AppContent>
        <AppFooter />
      </div>
    );
  }
}

export default App;
