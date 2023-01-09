import React from "react";
import { useState } from "react";

export const HowToPlay = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleShowInstructions = () => {
    setShowInstructions((currValue) => !currValue);
  };

  const instructionsString = `Enter a movie or TV show that the starting actor has appeared in.\n
  Then, if your first answer was correct, enter another actor that has appeared in that movie/TV show.\n
  Continue chaining appearances and actors until you have created a link between the two actors.

  Aim for the lowest score possible.`;

  return (
    <section className="how-to-play">
      <button className="custom-button" onClick={handleShowInstructions}>
        {showInstructions ? "Hide " : "Show "}Instructions
      </button>
      {showInstructions ? (
        <ul className="instructions">
          <li>
            Enter a movie or TV show that the starting actor has appeared in.
          </li>
          <li>
            Then, if your first answer was correct, enter another actor that has
            appeared in that movie/TV show.
          </li>
          <li>
            Continue chaining appearances and actors until you have created a
            link between the two actors.
          </li>
          <li>Aim for the lowest score possible.</li>
        </ul>
      ) : null}
    </section>
  );
};
