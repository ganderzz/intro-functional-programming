import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
  Talk about keys
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={22} italic>
        The developer can hint at which child elements may be stable across
        different renders with a key prop
      </Text>

      <Text bold textColor="dark">
        Static lists are easy to see what got added, removed, or moved
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
