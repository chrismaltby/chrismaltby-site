import React from "react";
import { Link } from "react-router-dom";
import Center from "./Center";
import "./AppHeader.css";

export default () =>
  <header className="AppHeader">
    <Center>
      <Link className="AppHeader_Title" to="/">
        <h1>Chris Maltby</h1>
      </Link>
      <Link className="AppHeader__Projects" to="/">
        Projects
      </Link>
      <Link to="/about">About</Link>
    </Center>
  </header>;
