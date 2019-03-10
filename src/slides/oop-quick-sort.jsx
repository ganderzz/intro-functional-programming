import React from "react";
import { CodePane, Slide, Text } from "spectacle";

const notes = `
  Imperative/OOP example of Quicksort
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Quick Sort
      </Text>

      <CodePane
        source={require("raw-loader!./source/oop-quicksort.example")
          .replace(/\\r\\n/g, "\n")
          .replace(/\\n/g, "\n")
          .replace('module.exports = "', "")
          .replace(/\"/g, "")}
        lang="javascript"
        style={{ fontSize: "0.5rem" }}
      />
    </Slide>
  );
}
