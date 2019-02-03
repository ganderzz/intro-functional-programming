import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
  Talk about keys
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={22} italic>
        A child element containing a consistent key prop is likely stable
      </Text>

      <Text bold textColor="dark">
        Keys
      </Text>

      <div style={{ display: "flex", flexDirection: "row", marginTop: 60 }}>
        <CodePane
          style={{
            display: "flex",
            width: "50%",
            minWidth: "50%",
            maxWidth: "50%",
            fontSize: 38
          }}
          lang="javascript"
          source={`<ul>
  <li>Cap'n Jazz</li>
  <li>Owen</li>
  <li>Their/They're/There</li>
</ul>`}
        />

        <CodePane
          style={{
            display: "flex",
            width: "50%",
            minWidth: "50%",
            maxWidth: "50%",
            fontSize: 38,
            margin: 0
          }}
          lang="javascript"
          source={`<ul>
  <li>Owen</li>
  <li>American Football</li>
</ul>`}
        />
      </div>
    </Slide>
  );
}
