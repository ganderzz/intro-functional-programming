import React from "react";
import { CodePane, Slide, Text } from "spectacle";

const notes = `
  Functional example of quick sort
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Quick Sort
      </Text>

      <CodePane
        source={require("raw-loader!./source/f-quicksort.example")
          .replace(/\\r\\n/g, "\n")
          .replace(/\\n/g, "\n")
          .replace('module.exports = "', "")
          .replace(/\"/g, "")}
        lang="javascript"
        style={{ fontSize: "1.7rem" }}
      />

      <Text textSize="1rem">
        <a href="https://codesandbox.io/s/yvw14q33q1?fontsize=14">
          https://codesandbox.io/s/yvw14q33q1?fontsize=14
        </a>
      </Text>
    </Slide>
  );
}
