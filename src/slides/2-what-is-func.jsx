import React from "react";
import { Appear, List, ListItem, Slide, Text } from "spectacle";

const notes = `
  Introduction<br />
  - Name<br />
  - Title & Company<br /><br />
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        What is Functional Programming?
      </Text>

      <List>
        <Appear>
          <ListItem>First-Class Functions</ListItem>
        </Appear>

        <Appear>
          <ListItem>Pure</ListItem>
        </Appear>

        <Appear>
          <ListItem>Immutable</ListItem>
        </Appear>
      </List>
    </Slide>
  );
}
