import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center">
      <Heading size={1} textColor="secondary" fit caps lineHeight={0.8}>
        Making {"<React />"} Wicked Fast
      </Heading>
      <Text bold textColor="tertiary" textSize="2rem" textAlign="right">
        Dylan Paulus
      </Text>
    </Slide>
  );
}
