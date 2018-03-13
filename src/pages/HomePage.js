import React from "react";
import Teaser from "../components/Teaser";
import TeaserGrid from "../components/TeaserGrid";
import Center from "../components/Center";
import data from "../data/projects.js";

export default () =>
  <div className="transition-item">
    <Center>
      <p style={{ fontSize: "2rem", paddingBottom: 40, maxWidth: 500 }}>
        I am a <strong>London</strong> based <strong>developer</strong> of{" "}
        <strong>applications</strong>, <strong>sites</strong> and{" "}
        <strong>games</strong>.
      </p>
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
