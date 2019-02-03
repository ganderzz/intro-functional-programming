import React from "react";
import { Slide, Text } from "spectacle";

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left">
      <Text bold textColor="dark">
        Two elements of different types will produce different trees
      </Text>

      <div style={{ marginTop: 40 }}>
        <img
          src={require("../media/tree-1.svg")}
          alt="Tree showing different element types being rendered"
        />
      </div>

      <div style={{ fontSize: 18, marginTop: 60, lineHeight: "2rem" }}>
        Changing Elements:{" "}
        <a href="https://codesandbox.io/s/2woyv5mrr0">
          https://codesandbox.io/s/2woyv5mrr0
        </a>
        <br />
        Changing Attributes:{" "}
        <a href="https://codesandbox.io/s/jz0o5zn6oy">
          https://codesandbox.io/s/jz0o5zn6oy
        </a>
      </div>
    </Slide>
  );
}
