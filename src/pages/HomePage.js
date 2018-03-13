import React from "react";
import Teaser from "../components/Teaser";
import TeaserGrid from "../components/TeaserGrid";
import Center from "../components/Center";
import data from "../data/projects.js";
import Intro from "../components/Intro";

export default () =>
  <div className="transition-item">
    <Center>
      <Intro />
      <TeaserGrid>
        {Object.keys(data.projects).map(id =>
          <Teaser
            key={id}
            id={id}
            name={data.projects[id].name}
            image={data.projects[id].thumbnail}
          />
        )}
      </TeaserGrid>
    </Center>
  </div>;
