import React from "react";
import { Heading, Slide, Text } from "spectacle";
import { Logo } from "./components/Logo";

const notes = `
  Introduction
  <br />
  <br />
  I'm a Software Engineer at SEL where we're
  Making Electric Power Safer, More Reliable, and More Economical®
  <br />
  Functional programming has a myriad of benefits that we'll cover later on,
  but for this talk I mainly want to introduce a different way to think about problems.
  <br />
  Most programmers code in an imperative or OOP paradigm; Functional programming is just another
  way of thinking about problems. As a programmer, if we know multiple paradigms we'll have more tools to
  solve problems.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Heading size={4} textColor="secondary" caps lineHeight={1.2}>
        Introduction to
        <br />
        Functional Programming
      </Heading>

      <Text bold textColor="tertiary" textSize="2rem" style={{ marginTop: 20 }}>
        Dylan Paulus
      </Text>

      <Logo />
    </Slide>
  );
}
