import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Easy to Test
      </Text>

      <section style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <CodePane
            source={`it("Should test") {
  const users = getUsers();
  updateUsers(users);
  updateDbSequence();

  expect(globalNumberSequence).toBe(500);
}`}
            lang="javascript"
            style={{ fontSize: "1.8rem" }}
          />
        </div>

        <div style={{ width: "50%" }}>
          <CodePane
            source={`it("Should test") {
  const users = getUsers().map(updateUser);
  const count = users.reduce(count, 0);

  expect(count).toBe(500);
}`}
            lang="javascript"
            style={{ fontSize: "1.8rem" }}
          />
        </div>
      </section>
    </Slide>
  );
}
