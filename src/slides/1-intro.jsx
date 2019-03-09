import React from "react";
import { Heading, Slide, Text } from "spectacle";

const notes = `
  Introduction (personal)
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Heading size={4} textColor="secondary" caps lineHeight={1.2}>
        Introduction to
        <br />
        Functional Programming
      </Heading>
      <Text bold textColor="tertiary" textSize="2rem" style={{ marginTop: 20 }}>
        Dylan Paulus
      </Text>
    </Slide>
  );
}
