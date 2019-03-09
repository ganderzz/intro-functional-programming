import React from "react";
import { CodePane, Slide, Text } from "spectacle";

const notes = `
  Like using 'const' for everything.
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Immutable
      </Text>

      <Text style={{ marginTop: 10, marginBottom: 20 }}>
        Once a value is set, it never changes
      </Text>

      <CodePane
        source={require("raw-loader!./source/immutable")}
        lang="javascript"
        style={{ fontSize: "1.7rem" }}
      />
    </Slide>
  );
}
