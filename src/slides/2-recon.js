import React from "react";
import { Slide, Text, List, ListItem } from "spectacle";

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left">
      <Text bold textColor="dark">
        React, when rendering, implements a heuristic O(n) algorithm based on
        two assumptions
      </Text>
      <List style={{ marginTop: 100 }}>
        <ListItem textColor="quaternary">
          Two elements of different types will produce different trees
        </ListItem>
        <ListItem style={{ marginTop: 20 }} textColor="quaternary">
          A child element containing a consistent key prop is likely stable
        </ListItem>
      </List>
    </Slide>
  );
}
