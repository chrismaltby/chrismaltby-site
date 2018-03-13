import React from "react";
import { Link } from "react-router-dom";
import ContentBlock from "../components/ContentBlocks";
import Hero from "../components/Hero";
import data from "../data/projects.js";

export default ({ match }) => {
  const { id } = match.params;
  const project = data.projects[id];
  return (
    <div className="transition-item">
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
