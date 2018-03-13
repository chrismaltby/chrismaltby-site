import React from "react";
import Center from "../components/Center";
import Hero from "../components/Hero";
import ContentBlock from "../components/ContentBlocks";
import { Helmet } from "react-helmet";
import data from "../data/content.js";

export default () =>
  <div className="transition-item">
    <Helmet>
      <title>About - Chris Maltby</title>
    </Helmet>
    <Hero name="About Me" image="" color="#333333" short={true} />
    {data.about.content.map((block, index) =>
      <ContentBlock key={index} block={block} />
    )}
  </div>;
