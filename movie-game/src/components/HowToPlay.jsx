import React from "react";
import { useState } from "react";

export const HowToPlay = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleShowInstructions = () => {
    setShowInstructions((currValue) => !currValue);
  };

  return (
    <section className="how-to-play">
      <button className="custom-button" onClick={handleShowInstructions}>
        {showInstructions ? "Hide " : "Show "}Instructions
      </button>
      {showInstructions ? (
        <section>Instructions will be put here</section>
      ) : null}
    </section>
  );
};
