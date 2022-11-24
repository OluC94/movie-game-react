import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ActorContext } from "../context";
import { getActorFilmography } from "../utils/api";
import { checkAppearance } from "../utils/game-utils";

export const Input = ({ answerData }) => {
  const [inputAnswer, setInputAnswer] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { answerList, setAnswerList, setIsValidAnswer } = answerData;
  const { startActor, setStartActor } = useContext(ActorContext);
  const handleAnswerInput = (e) => {
    setInputAnswer(e.target.value);
  };

  const checkActorApp = (actorID) => {
    const apps = getActorFilmography(actorID);
    return Promise.all([apps]).then(([appsArr]) => {
      return checkAppearance(inputAnswer, appsArr);
    });
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    setIsChecking(true);
    let queryID;
    if (answerList.length === 0) {
      queryID = startActor.actor_id;
    } else {
      // this is where the new queryID will be set
    }

    checkActorApp(queryID).then((result) => {
      setIsChecking(false);
      setAnswerList([...answerList, { text: inputAnswer, isValid: result }]);
    });

    console.log(inputAnswer);
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
      <section>{isChecking ? "..." : null}</section>
    </section>
  );
};
