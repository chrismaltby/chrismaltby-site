import React from "react";
import Center from "./Center";
import cx from "classnames";
import "./Hero.css";

export default ({ name, url, image, color, short, shadow }) =>
  <div
    className={cx("Hero", { "Hero--Short": short })}
    style={{
      backgroundImage: image && `url(${image})`
    }}
  >
    <div className={cx("Hero__Content",{"Hero__Content--Shadow": shadow})}>
      <Center>
        <h2 style={{ color }}>
          {name}
        </h2>
        <a href={url} style={{ color }}>
          {url}
        </a>
      </Center>
    </div>
  </div>;
