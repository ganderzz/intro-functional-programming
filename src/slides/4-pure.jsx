import React from "react";
import { CodePane, Slide, Text } from "spectacle";

const notes = `
  No side effects.
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Pure
      </Text>

      <Text style={{ marginTop: 20, marginBottom: 30 }}>
        Functions only perform work on the arguments given
      </Text>

      <CodePane
        source={require("raw-loader!./source/pure")
          .replace(/\\r\\n/g, "\n")
          .replace(/\\n/g, "\n")
          .replace('module.exports = "', "")
          .replace(/\"/g, "")}
        lang="javascript"
        style={{ fontSize: "2.3rem" }}
      />
    </Slide>
  );
}
