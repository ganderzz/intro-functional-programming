import React from "react";
import { Slide, Text, Link } from "spectacle";

const notes = `
  If a root note changes the tree, and any subtree, gets removed from the DOM and rerendered
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={22} italic>
        Two elements of different types will produce different trees
      </Text>

      <Text bold textColor="dark">
        Updating element types will destory and re-add the element
      </Text>

      <div style={{ marginTop: 40 }}>
        <img
          src={require("../media/tree-1.svg")}
          alt="Tree showing different element types being rendered"
        />
      </div>

      <sub style={{ fontSize: 18, marginTop: 60, lineHeight: "2rem" }}>
        Changing Elements:{" "}
        <Link target="_blank" href="https://codesandbox.io/s/2woyv5mrr0">
          https://codesandbox.io/s/2woyv5mrr0
        </Link>
      </sub>
    </Slide>
  );
}
