import React from "react";
import { Heading, Slide, Text } from "spectacle";

const notes = `
  Introduction<br />
  - Name<br />
  - Title & Company<br /><br />
  We will be looking at easy wins to make React fast
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Heading size={1} textColor="secondary" fit caps lineHeight={1.2}>
        Making {"<React />"} Wicked Fast
      </Heading>
      <Text bold textColor="tertiary" textSize="2rem">
        Dylan Paulus
      </Text>
    </Slide>
  );
}
