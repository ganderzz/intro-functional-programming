import React from "react";
import { Appear, List, ListItem, Slide, Text } from "spectacle";

const notes = `
  Functional programming is another paradigm or midset for writing code.
  It is an alternative mindset compared to imperative and OOP, for example.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        What is Functional Programming?
      </Text>

      <List>
        <Appear>
          <ListItem style={{ marginTop: 15 }}>Immutable</ListItem>
        </Appear>

        <Appear>
          <ListItem style={{ marginTop: 15 }}>Pure/Side Effect Free</ListItem>
        </Appear>

        <Appear>
          <ListItem style={{ marginTop: 15 }}>Functions as Values</ListItem>
        </Appear>
      </List>
    </Slide>
  );
}
