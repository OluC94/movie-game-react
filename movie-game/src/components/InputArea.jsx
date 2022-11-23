import React from "react";
import { useState } from "react";
import { Input } from "./Input";

export const InputArea = () => {
  const [answerList, setAnswerList] = useState([]);
  const [isValidAnswer, setIsValidAnswer] = useState(null);

  // write the logic for the game prompts
  // Can't is % 2 because wrong answers need to be pushed into the array
  // can either brute force ()
  // use a counter the keeps track of total correct answers and therefore the correct next input

  return (
    <section>
      Input Area
      <section className="answers">
        {answerList.length % 2 === 0
          ? `Input one of {actor name}'s appearances`
          : `Input one of {show/movie name}'s cast members`}
      </section>
      <Input answerData={{ answerList, setAnswerList, setIsValidAnswer }} />
    </section>
  );
};
