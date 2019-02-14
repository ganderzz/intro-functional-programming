import React from "react";
import { Heading, Slide, Text } from "spectacle";

const notes = `
  Introduction<br />
  - Name<br />
  - Title & Company<br /><br />
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Heading size={2} textColor="secondary" fit caps lineHeight={1.2}>
        Introduction to Functional Programming
      </Heading>
      <Text bold textColor="tertiary" textSize="2rem">
        Dylan Paulus
      </Text>
    </Slide>
  );
}
