import React from "react";
import { useState, useContext } from "react";
import { Input } from "./Input";
import { ActorContext } from "../context";
import { DisplayInputs } from "./DisplayInputs";

export const InputArea = () => {
  const [answerList, setAnswerList] = useState([]);
  const [isValidAnswer, setIsValidAnswer] = useState(null);
  const { startActor } = useContext(ActorContext);

  return (
    <section>
      <DisplayInputs answerList={answerList} />
      <section className="answers">
        {answerList.length === 0
          ? `Name one of ${startActor.name}'s appearances`
          : null}
      </section>
      <Input answerData={{ answerList, setAnswerList, setIsValidAnswer }} />
    </section>
  );
};
