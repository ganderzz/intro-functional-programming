import React from "react";
import { Slide, Text, List, ListItem, Appear } from "spectacle";

const notes = `
  I want to talk a minute about rerendering. This is important, because if React only has to render once,
  our applications would be blazing fast.<br /><br />
  React has an in-memory snapshot of your application's DOM called virtual DOM.<br />
  When React rerenders, it first compares the virtual DOM elements of what is rendered to the next state.<br /><br />

  There are generally 4 ways to cause React to rerender. Any guesses?
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text bold textColor="dark">
        What causes React to rerender?
      </Text>

      <Appear>
        <Text>Change in a component's:</Text>
      </Appear>

      <List style={{ marginTop: 100 }}>
        <Appear>
          <ListItem textColor="quaternary">Props</ListItem>
        </Appear>

        <Appear>
          <ListItem style={{ marginTop: 20 }} textColor="quaternary">
            State
          </ListItem>
        </Appear>

        <Appear>
          <ListItem style={{ marginTop: 20 }} textColor="quaternary">
            Element Type (ie. switching a component from a div -> span)
          </ListItem>
        </Appear>

        <Appear>
          <ListItem style={{ marginTop: 20 }} textColor="quaternary">
            Key
          </ListItem>
        </Appear>
      </List>
    </Slide>
  );
}
