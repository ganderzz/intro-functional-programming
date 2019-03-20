import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Async
      </Text>

      <section style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <CodePane
            source={`let data = { a: 1, b: 2};

runAsyncAddFiveToA(data);
runAsyncMultiplyTenToA(data);`}
            lang="javascript"
            style={{ fontSize: "1.8rem" }}
          />
        </div>

        <div style={{ width: "50%" }}>
          <CodePane
            source={`let data = { a: 1, b: 2};
            
const resultFive = runAsyncAddFiveToA(data);
const resultTen = runAsyncMultiplyTenToA(data);

resultFive.a * resultTen.a`}
            lang="javascript"
            style={{ fontSize: "1.8rem" }}
          />
        </div>
      </section>
    </Slide>
  );
}
