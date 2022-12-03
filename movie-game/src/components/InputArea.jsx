import React from "react";
import { useState, useContext } from "react";
import { Input } from "./Input";
import { ActorContext } from "../context";

export const InputArea = () => {
  const [answerList, setAnswerList] = useState([]);
  const [isValidAnswer, setIsValidAnswer] = useState(null);
  const { startActor } = useContext(ActorContext);

  // write the logic for the game prompts
  // Can't is % 2 because wrong answers need to be pushed into the array
  // can either brute force ()
  // use a counter the keeps track of total correct answers and therefore the correct next input

  return (
    <section>
      <section className="answers">
        {answerList.length === 0 ? (
          `Name one of ${startActor.name}'s appearances`
        ) : (
          <ul className="answer-list">
            {answerList.map((answer) => {
              return (
                <li
                  key={answer.text}
                  className={
                    answer.isValid ? "correct-answer" : "incorrect-answer"
                  }
                >
                  {answer.text}
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <Input answerData={{ answerList, setAnswerList, setIsValidAnswer }} />
    </section>
  );
};
