import React from "react";
import { List, ListItem, Slide, Text } from "spectacle";

const notes = `
  - Less Mental Load: Due to immutability contraints and pure functions, the 
  state of an application has clear-cut, visible ways it changes. Mutability loses this.
  <br /><br />
  - Repeatability: If a bug occurs, we can trace down the exact state changes
  that took place--because of what was mentioned above
  <br /><br />
  - Easier to Test: No need for heavy mocking. Functions are pure, so they are easier
  to unit test. Integration testing is just then just composing functions.
  <br /><br />
  - Concurency: Through immutability, we no longer have to worry about
  conflicts--making async tasks a lot easier.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Benefits of Being Functional
      </Text>

      <List>
        <ListItem margin="15px 0 0 0">Easier to Reason About</ListItem>

        <ListItem margin="15px 0 0 0">Repeatability</ListItem>

        <ListItem margin="15px 0 0 0">Easier to Test</ListItem>

        <ListItem margin="15px 0 0 0">
          Greatly reduced Concurency Challenges
        </ListItem>
      </List>
    </Slide>
  );
}
