import React, { useState } from "react";

export const Input = () => {
  const [inputAnswer, setInputAnswer] = useState("");

  const handleAnswerInput = (e) => {
    setInputAnswer(e.target.value);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    // check that the input was correct
    console.log("submit pressed", inputAnswer);
  };

  return (
    <section>
      <form>
        <label htmlFor="new-answer"></label>
        <br />
        <textarea
          id="new-answer"
          placeholder="Enter your answer"
          value={inputAnswer}
          onChange={handleAnswerInput}
        ></textarea>
        <br />
        <button onClick={handleAnswerSubmit}>Submit</button>
      </form>
    </section>
  );
};
