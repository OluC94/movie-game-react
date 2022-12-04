import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";
import { getActorFilmography, getCastList } from "../utils/api";
import { checkAppearance } from "../utils/game-utils";
import { Appearance } from "./Appearance";

export const InputCopy = ({ answerData }) => {
  // state
  const [inputAnswer, setInputAnswer] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [appearanceTitleData, setAppearanceTitleData] = useState({});
  const [actorQueryID, setActorQueryID] = useState("");

  // context
  const { startActor, endActor } = useContext(ActorContext);
  const { isAppearanceRound, setIsAppearanceRound, score, setScore } =
    useContext(GameContext);
  // props
  const { answerList, setAnswerList, setIsValidAnswer } = answerData;

  // everything else
  const handleAnswerInput = (e) => {
    setInputAnswer(e.target.value);
  };

  const checkActorApp = (actorID) => {
    const apps = getActorFilmography(actorID);
    return Promise.all([apps]).then(([appsArr]) => {
      return checkAppearance(inputAnswer, appsArr);
    });
  };

  const handleAppearanceInput = () => {
    // on starting round -> get the actor ID from the state then call inputProcessor with appearanceRound and actorID
    // on following rounds: a name will be input -> that name will be checked against the filmography and the ID can be rerieved from there
    // run the processor input
  };

  const handleActorInput = () => {
    console.log(appearanceTitleData);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (inputAnswer.length === 0) {
      // set validation method later
    } else {
      setIsChecking(true);
      if (isAppearanceRound) {
        handleAppearanceInput();
      } else {
        handleActorInput();
      }
    }
  };

  return (
    <section>
      <form>
        <label htmlFor="new-answer"></label>
        <br />
        <section>{isChecking ? "..." : null}</section>
        <textarea
          id="new-answer"
          placeholder="Enter your answer"
          value={inputAnswer}
          onChange={handleAnswerInput}
        ></textarea>
        <br />
        <button onClick={handleAnswerSubmit}>Submit</button>
        <br />
        <section>Score: {score}</section>
      </form>
    </section>
  );
};
