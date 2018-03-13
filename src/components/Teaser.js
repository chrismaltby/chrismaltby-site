import React from "react";
import { Link } from "react-router-dom";
import "./Teaser.css";

export default ({ id, name, image }) =>
  <Link className="Teaser" to={`/projects/${id}`}>
    <div
      className="Teaser__Image"
      style={{
        backgroundImage: `url(${image})`
      }}
    />
    {name}
  </Link>;
