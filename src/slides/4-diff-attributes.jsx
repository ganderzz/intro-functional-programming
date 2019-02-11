import React from "react";
import { Slide, Text, Link } from "spectacle";

const notes = `
  Updating attributes won't remove the DOM node. Instead, React will only update that attribute.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text textSize={22} italic>
        Two elements of different types will produce different trees
      </Text>

      <Text bold textColor="dark">
        Updating attributes will reuse the underlying DOM
      </Text>

      <div style={{ marginTop: 40 }}>
        <img
          src={require("../media/tree-2.svg")}
          alt="Tree showing different attributes"
        />
      </div>

      <div style={{ fontSize: 18, marginTop: 60, lineHeight: "2rem" }}>
        Changing Attributes:{" "}
        <Link target="_blank" href="https://codesandbox.io/s/jz0o5zn6oy">
          https://codesandbox.io/s/jz0o5zn6oy
        </Link>
      </div>
    </Slide>
  );
}
