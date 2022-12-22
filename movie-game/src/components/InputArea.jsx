import React from "react";
import { useState, useContext } from "react";
import { Input } from "./Input";
import { ActorContext, GameContext } from "../context";
import { DisplayInputs } from "./DisplayInputs";
import { Winner } from "./Winner";
import { Retry } from "./Retry";

export const InputArea = () => {
  const [answerList, setAnswerList] = useState([]);
  const { startActor, endActor } = useContext(ActorContext);
  const { gameWon } = useContext(GameContext);

  return (
    <section>
      <DisplayInputs answerList={answerList} />
      <section className="answers">
        {answerList.length === 0
          ? `${startActor.name} to ${endActor.name}`
          : null}
      </section>
      {gameWon ? (
        <Winner />
      ) : (
        <Input answerData={{ answerList, setAnswerList }} />
      )}
      <Retry setAnswerList={setAnswerList} />
    </section>
  );
};
