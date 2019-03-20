import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Predictable
      </Text>

      <CodePane
        source={`const result = doStuff("test");
const updatedResult = updateStuff(result);

deleteStuff(updatedResult);`}
        lang="javascript"
        style={{ fontSize: "2.3rem" }}
      />
    </Slide>
  );
}
