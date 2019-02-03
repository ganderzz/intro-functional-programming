import React from "react";
import { Slide, Text, List, ListItem, Appear } from "spectacle";

const notes = `
  Most tree comparing algorithms take O(n^3) time complexity.
  React makes some assumptions to use O(n).
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text bold textColor="dark">
        React, when rendering, implements a heuristic O(n) algorithm based on
        two assumptions
      </Text>

      <List style={{ marginTop: 100 }}>
        <Appear>
          <ListItem textColor="quaternary">
            Two elements of different types will produce different trees
          </ListItem>
        </Appear>

        <Appear>
          <ListItem style={{ marginTop: 20 }} textColor="quaternary">
            A child element containing a consistent key prop is likely stable
          </ListItem>
        </Appear>
      </List>
    </Slide>
  );
}
