import React from "react";
import Center from "../components/Center";
import Hero from "../components/Hero";
import ContentBlock from "../components/ContentBlocks";
import data from "../data/content.js";

export default () =>
  <div className="transition-item">
    <Hero name="About Me" image="" color="#333333" short={true} />
    {data.about.content.map((block, index) =>
      <ContentBlock key={index} block={block} />
    )}
  </div>;
