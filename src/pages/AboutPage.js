import React from "react";
import Center from "../components/Center";
import Hero from "../components/Hero";
import data from "../data/projects.js";

export default () => (
  <div className="transition-item">
    <Hero name="About" image="" color="#333333" />
    <Center>
      <p style={{ paddingTop: 40 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        ultricies arcu vel neque facilisis, eu fringilla odio blandit. Nam
        faucibus risus finibus ante lobortis dapibus id vel augue. Integer
        bibendum dapibus porta. Etiam et justo et purus gravida ornare. Praesent
        ut tincidunt libero. Morbi maximus rutrum pellentesque. Proin non ipsum
        egestas nisl mollis pellentesque. Curabitur vitae velit pellentesque,
        egestas ipsum quis, placerat nisi. Donec cursus, ligula nec pharetra
        lobortis, velit turpis mollis sem, vitae sollicitudin neque velit eget
        diam. Proin quis gravida lacus.
      </p>
    </Center>
  </div>
);
