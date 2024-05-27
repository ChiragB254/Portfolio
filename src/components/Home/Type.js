import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DATA SCIENTIST",
          "DATA ANALYST",
          "NLP EXPERT",
          "AI/ML ENGINEER",
          "FULL STACK ML EXPERT",
          "MENTOR",
          "SPEAKER"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
