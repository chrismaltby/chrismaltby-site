import React from "react";
import ContentBlock from "../components/ContentBlocks";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet";
import data from "../data/content.js";

export default ({ match }) => {
  const { id } = match.params;
  const project = data.projects[id];
  return (
    <div className="transition-item">
      <Helmet>
        <title>
          {project.name} - Chris Maltby
        </title>
      </Helmet>
      <Hero
        name={project.name}
        url={project.url}
        image={project.heroImage}
        color={project.heroColor}
      />
      {project.content.map((block, index) =>
        <ContentBlock key={index} block={block} />
      )}
    </div>
  );
};
