import React from "react";
import { Link } from "react-router-dom";
import Center from "./Center";
import "./AppHeader.css";

export default () =>
  <header className="AppHeader">
    <Center>
      <Link to="/">
        <h1>Chris Maltby</h1>
      </Link>
    </Center>
  </header>;
