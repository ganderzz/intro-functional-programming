import React from "react";
import { CodePane, Slide, Text } from "spectacle";

const notes = `
  Since functional languages don't have for or while loops,
  looping through data is performed using recursion.
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Recursion
      </Text>

      <Text style={{ marginTop: 20, marginBottom: 30 }}>
        Looping, without loops
      </Text>

      <CodePane
        source={require("raw-loader!./source/f-quicksort.example")
          .replace(/\\r\\n/g, "\n")
          .replace('module.exports = "', "")
          .replace(/\"/g, "")}
        lang="javascript"
        style={{ fontSize: "1.5rem" }}
      />
    </Slide>
  );
}
