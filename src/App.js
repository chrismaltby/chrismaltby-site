import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import "./App.css";

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <AppHeader />
        {children}
      </div>
    );
  }
}

export default App;
