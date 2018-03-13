import React from "react";
import Center from "./Center";
import "./Hero.css";

export default ({ name, url, image, color }) =>
  <div
    className="Hero"
    style={{
      backgroundImage: `url(${image})`
    }}
  >
    <Center>
      <h2 style={{ color }}>
        {name}
      </h2>
      <a href={url} style={{ color }}>
        {url}
      </a>
    </Center>
  </div>;
