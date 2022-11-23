import React, { useState } from "react";
import { useContext } from "react";
import { ActorContext } from "../context";
import { getActorFilmography } from "../utils/api";
import { checkAppearance } from "../utils/game-utils";

export const Input = ({ answerData }) => {
  const [inputAnswer, setInputAnswer] = useState("");
  const { answerList, setAnswerList, setIsValidAnswer } = answerData;
  const { startActor, setStartActor } = useContext(ActorContext);
  const handleAnswerInput = (e) => {
    setInputAnswer(e.target.value);
  };

  const checkActorApp = (actorID) => {
    const apps = getActorFilmography(actorID);
    return Promise.all([apps]).then(([appsArr]) => {
      if (checkAppearance(inputAnswer, appsArr)) {
        // return something
      } else {
        //return something else
      }
      // maybe just return the result of the function call?
    });
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    let queryID;
    if (answerList.length === 0) {
      queryID = startActor.actor_id;
    }
    checkActorApp(queryID);
    // if the answer passes the validation check, push it into the answer list, setValidAnswer true
    // if incorrect, valid Answer False

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
    </section>
  );
};
