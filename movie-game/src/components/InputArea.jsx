import React from "react";
import { useState, useContext } from "react";
import { Input } from "./Input";
import { ActorContext, GameContext } from "../context";
import { DisplayInputs } from "./DisplayInputs";
import { Winner } from "./Winner";

export const InputArea = () => {
  const [answerList, setAnswerList] = useState([]);
  const [isValidAnswer, setIsValidAnswer] = useState(null);
  const { startActor } = useContext(ActorContext);
  const { gameWon } = useContext(GameContext);

  return (
    <section>
      <DisplayInputs answerList={answerList} />
      <section className="answers">
        {answerList.length === 0
          ? `Name one of ${startActor.name}'s appearances`
          : null}
      </section>
      {gameWon ? (
        <Winner />
      ) : (
        <Input answerData={{ answerList, setAnswerList, setIsValidAnswer }} />
      )}
    </section>
  );
};
