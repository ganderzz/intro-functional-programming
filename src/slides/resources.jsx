import React from "react";
import { Slide, Text, Link } from "spectacle";

const notes = `
  RESOURCES!
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Resources
      </Text>
      
      <Link
        target="_blank"
        style={{ display: "block", marginTop: 20 }}
        href="https://github.com/ganderzz/intro-functional-programming"
      >
        Slides & Code Examples
      </Link>

      <Link
        target="_blank"
        style={{ display: "block", marginTop: 10 }}
        href="https://mostly-adequate.gitbooks.io/mostly-adequate-guide/"
      >
        Professor Frisby's Most Adequate Guide to Functional Programming
      </Link>
    </Slide>
  );
}
